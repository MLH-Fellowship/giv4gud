import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

// Get data (replace w/ call to Firebase later)
import { db, getOrgs } from '../../services/firebase' // allows call database
import 'firebase/firestore'
import charity from "../../../data/charity"

// Get Firebase Data
// Need to get collections from firebase to render cards
// const orgRef = db.collection('organizations');
// const getOrgs = async () => {
//     let orgs = []
//     await orgRef.get().then(function (querySnapshot) {
//         querySnapshot.forEach(function (doc) {
//             orgs.push(doc.data())
//             console.log(doc.data())
//         })
//     })
//     return orgs
// }

// Function to create Charity Cards
export default function CharityCard(props) {

    const [CardData, setCardData] = React.useState(charity);
    // Get Navigator Object
    const navigation = useNavigation();

    // Get User ID (only used for navigation)
    const id = props.id;
    console.log("User ID in Charity Card", props.id);

    // React.useEffect(async () => {
    //     const organizations = await getOrgs();
    //     console.log("Orgs", organizations)
    //     console.log("Dummy", charity)
    //     setCardData(organizations);
    // }, []);

    async function gettingOrgs() {
        const organizations = await getOrgs();
        setCardData(organizations)
    }

    React.useEffect(() => {gettingOrgs() }, [])

    console.log('CardData is: ', CardData)
    
    return (
        <>
            <Card>
                <Card.Title> Charity Card </Card.Title>
                <Card.Divider />
                {
                    CardData.map((u, i) => { // Replace charity w/ data from firebase Note: make sure i is replaced w/ charity document name
                        // console.log(i)
                        // console.log(u)
                        // console.log(u.id)
                        return (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate("Open Charity", { id: id, charityID: u })}>
                                <View style={styles.cardContainer}>
                                    <Text> {u.name} </Text>
                                    <Text> Location: {u.mainAddress}</Text>
                                    {/* <Text> Needs: {u.items}</Text> */}
                                </View>
                            </TouchableOpacity>
                        );
                    })
                }
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        backgroundColor: 'lightblue'
    },
    cardContainer: {
        margin: 10,
        backgroundColor: "#C9D4C5",
        borderRadius: 10,
        padding: 10
    },
    charityCard: {
    },
    cardName: {
        fontSize: 18,
        paddingBottom: 7,
        paddingLeft: 5
    },
    cardLocation: {
        padding: 5
    },
    cardNeed: {
        padding: 5
    }
});