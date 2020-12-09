import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon, Image } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import charityPic from '../../../charityPic.png';

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
    console.log("ID", id);
    console.log("Props", props)

    const [CardData, setCardData] = React.useState(charity[0]);

    // async function gettingOrgs() {
    //     const organizations = await getOrgs();
    //     setCardData(organizations)
    // }

    // React.useEffect(() => {gettingOrgs() }, [])

    // const oneOrgRef = db.collection('organizations').doc(charityID.id);
    // const getOneOrg = async () => {
    //     let org = []
    //     await oneOrgRef.get().then(function (doc) {
    //         if (doc.exists) {
    //             org.push(doc.data())
    //             console.log(doc.data())
    //         } else {
    //             console.log("No org found");
    //         }
    //     })
    //     return org
    // }

    async function gettingOrg() {
        console.log("Hi there", charityID);
        const organization = await db.collection('organizations').doc(charityID).get() // getOneOrg(charityID.id);
        console.log("Test", organization.data())
        console.log("Does this run?", organization);
        setCardData(organization.data())
    }

    React.useEffect(() => { gettingOrg() }, [])

    let items;
    if (CardData.items != null) {
        items = Object.keys(CardData.items).join(', ');
    } else {
        items = 'no items yet'
    }

    console.log("Check again: ", items)

    // console.log("apple", CardData.items);
    // let items = Object.keys(CardData.items).join(', ');
    return (
        <Card>
            <View style={styles.containImage}>
                <Image style={styles.imageContainer}
                    source={charityPic}
                />
            </View>
            <Card.Title>{CardData.name}</Card.Title>
            <Card.Divider />
            <Text> {CardData.mainAddress} </Text>
            <Text> In need of {items} </Text>
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
    },
    imageContainer: {
        width: 300,
        height: 100,
        alignItems: 'center'
    },
    containImage: {
        alignItems: 'center'
    }
});