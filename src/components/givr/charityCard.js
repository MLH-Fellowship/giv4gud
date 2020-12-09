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
    console.log("Cards", CardData);
    // Get User ID (only used for navigation)
    const id = props.id;
    console.log("User ID in Charity Card", props.id);
    console.log("test", props);

    async function gettingOrgs() {
        const organizations = await getOrgs();
        console.log("hi");        
        setCardData(organizations)
    }

    React.useEffect(() => {gettingOrgs() }, [])
    console.log("Card Data", CardData)
    
    return(
    CardData.map((u, i) => { // Replace charity w/ data from firebase Note: make sure i is replaced w/ charity document name
        let items = Object.keys(u.items).join(' ,');
        console.log(items, "Hi")
        return (
        <>
            <TouchableOpacity 
                key = {i} 
                onPress = {() => navigation.navigate("Open Charity", {id: id, charityID: u.id})}
                style={styles.charityCard}
            >
                <View style = {styles.cardContainer}>
                    <Text style={styles.cardName}> {u.name} </Text> 
                    <Text style={styles.cardLocation}> {u.mainAddress} </Text>
                    <Text style={styles.cardNeed}> In need of {items} </Text>
                </View>
            </TouchableOpacity>
        </>
            )
    }
))}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        backgroundColor: 'lightblue'
    },
    cardContainer: {
        marginVertical: 10,
        backgroundColor: "#C9D4C5",
        borderRadius: 10,
        padding: 10
    },
    charityCard: {
    },
    cardName: {
        fontSize: 21,
        // paddingBottom: 7,
        paddingLeft: 5,
        fontFamily: 'serif',
    },
    cardLocation: {
        paddingBottom: 5,
        paddingLeft: 6,
        fontSize: 12,
    },
    cardNeed: {
        padding: 5,
        fontSize: 15,
    }
});