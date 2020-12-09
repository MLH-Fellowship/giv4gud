import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// Get data (replace w/ call to Firebase later)
import charity from "../../../data/charity" // Dummy data of charities
import { db, getOrgs, getOneOrg } from '../../services/firebase'

export default function FullCharityCard(props) {
    const navigation = useNavigation();
    const id = props.id; // User ID (probably won't need to use in this file)
    const charityID = props.charityID;
    const data = charity[charityID];
    // console.log("Check", charity, data, charityID);
    console.log("CHECK: ", charityID.id)

    const [CardData, setCardData] = React.useState('');

    // async function gettingOrgs() {
    //     const organizations = await getOrgs();
    //     setCardData(organizations)
    // }

    // React.useEffect(() => {gettingOrgs() }, [])

    const oneOrgRef = db.collection('organizations').doc(charityID.id);
    const getOneOrg = async () => {
        let org = []
        await oneOrgRef.get().then(function (doc) {
            if (doc.exists) {
                org.push(doc.data())
                console.log(doc.data())
            } else {
                console.log("No org found");
            }
        })
        return org
    }

    async function gettingOrg() {
        const organization = await getOneOrg(charityID.id);
        setCardData(organization)
    }

    React.useEffect(() => { gettingOrg() }, [])

    console.log("apple", typeof CardData)
    const items = []
    items.push(CardData.items)

    return (
        <Card>
            <Card.Title>{CardData.name}</Card.Title>
            <Card.Divider />
            {/* {CardData.map()} */}
                <Text style={{ marginBottom: 10 }}>
                    Address: {CardData.mailingAddress}
                </Text>
                <Text> Location: {CardData.mainAddress} </Text>
                <Text> Important Needs: {CardData.highNeeds} </Text>
                <Text> Full Needs: {CardData.fullNeeds} </Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
    },
    text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
    },
    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
});