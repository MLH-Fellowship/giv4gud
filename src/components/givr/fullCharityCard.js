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

    const [CardData, setCardData] = React.useState(charity);

    async function gettingOrg() {
        const organization = await db.collection('organizations').doc(charityID.id).get() // getOneOrg(charityID.id);
        console.log("Test", organization.data())
        setCardData(organization.data())
    }

    React.useEffect(() => { gettingOrg() }, [])

    console.log("apple", CardData)
    let items = Object.keys(CardData.items).join(', ');
    console.log("test", items)

    return (
        <Card>
            <Card.Title>{CardData.name}</Card.Title>
            <Card.Divider />
            <View>
                <Text style={{ marginBottom: 10 }}>
                    Address: {CardData.mailingAddress}
                </Text>
                <Text> Location: {CardData.mainAddress} </Text>
                <Text> Important Needs: {CardData.highNeeds} </Text>
                <Text> Full Needs: {CardData.fullNeeds} </Text>
            </View>
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