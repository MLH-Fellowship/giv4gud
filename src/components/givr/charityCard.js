import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

// Get data (replace w/ call to Firebase later)
import charity from "../../../data/charity"

// Function to create Charity Cards
export default function CharityCard(props){
    
    // Get Navigator Object
    const navigation = useNavigation();

    // Get User ID (only used for navigation)
    const id = props.id;
    console.log("ID in Charity Card", props.id);
    
    // Need to get collections from firebase to render cards
    
    return(
        charity.map((u, i) => { // Replace charity w/ data from firebase Note: make sure i is replaced w/ charity document name
            return (
                <TouchableOpacity 
                    key = {i} 
                    onPress = {() => navigation.navigate("Open Charity", {id: id, charityID: i})}
                    style={styles.charityCard}
                >
                    <View style = {styles.cardContainer}>
                        <Text style={styles.cardName}> {u.name} </Text> 
                        <Text style={styles.cardLocation}> Location: {u.location}</Text>
                        <Text style={styles.cardNeed}> Needs: {u.highNeeds}</Text>
                    </View>
                </TouchableOpacity>
            );
        })
    // <Card>
    //     <Card.Title style={{textAlign: 'left', fontSize: 25, marginLeft: 10}}> Charities in Need </Card.Title>
    //     <Card.Divider /> 
    //     {
    //     charity.map((u, i) => { // Replace charity w/ data from firebase Note: make sure i is replaced w/ charity document name
    //         return (
    //             <TouchableOpacity 
    //                 key = {i} 
    //                 onPress = {() => navigation.navigate("Open Charity", {id: id, charityID: i})}
    //                 style={styles.charityCard}
    //             >
    //                 <View style = {styles.cardContainer}>
    //                     <Text style={styles.cardName}> {u.name} </Text> 
    //                     <Text style={styles.cardLocation}> Location: {u.location}</Text>
    //                     <Text style={styles.cardNeed}> Needs: {u.highNeeds}</Text>
    //                 </View>
    //             </TouchableOpacity>
    //         );
    //     })
    //     }
    // </Card>
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