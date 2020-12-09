import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

// Get data (replace w/ call to Firebase later)
import { db } from '../../services/firebase' // allows call database
import 'firebase/firestore'
import charity from "../../../data/charity"

// Get Firebase Data
// Need to get collections from firebase to render cards
var orgRef = db.collection('organizations');
const getOrgs = async () => {
    let orgs = []
    await orgRef.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            orgs.push(doc.data())
            console.log(doc.data())
        })
    })
    return orgs
}

// Function to create Charity Cards
export default function CharityCard(props) {

    const [CardData, setCardData] = React.useState(charity);
    // Get Navigator Object
    const navigation = useNavigation();

    // Get User ID (only used for navigation)
    const id = props.id;
    console.log("ID in Charity Card", props.id);

    React.useEffect(async () => {
        const organizations = await getOrgs();
        console.log("Orgs", organizations)
        console.log("Dummy", charity)
        setCardData(organizations);
    }, []);

    return (
        <>
            <Card>
                <Card.Title> Charity Card </Card.Title>
                <Card.Divider />
                {
                    CardData.map((u, i) => { // Replace charity w/ data from firebase Note: make sure i is replaced w/ charity document name
                        return (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate("Open Charity", { id: id, charityID: i })}>
                                <View style={styles.cardContainer}>
                                    <Text> {u.name} </Text>
                                    <Text> Location: {u.location}</Text>
                                    <Text> Needs: {u.highNeeds}</Text>
                                    <Text> Key: {i} </Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })
                }
            </Card>

            <Card>
                <Card.Title> Charity Card </Card.Title>
                <Card.Divider />
                {
                    charity.map((u, i) => { // Replace charity w/ data from firebase Note: make sure i is replaced w/ charity document name
                        return (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate("Open Charity", { id: id, charityID: i })}>
                                <View style={styles.cardContainer}>
                                    <Text> {u.name} </Text>
                                    <Text> Location: {u.location}</Text>
                                    <Text> Needs: {u.highNeeds}</Text>
                                    <Text> Key: {i} </Text>
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
        borderColor: "red",
        borderWidth: 3
    }
});