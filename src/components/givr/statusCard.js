import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import statusData from '../../../data/givr';

/* Add hook to update cards whenever server sends an update */

// Function to create Charity Cards
export default function StatusCard(props){
    // Gets firebase user ID
    console.log("User ID", props.id);
    
    // Replace w/ firebase call to load data
    const data = statusData[1];

    return(
    data.map((u, i) => {
        const status = u.status
        return (
                <View style = {styles[status]} key = {u.key}>
                    <Text style = {styles.name}> {u.charityName} </Text> 
                    <Text style = {styles.item}> Donations: {u.items}</Text>
                    <Text style = {styles.item}> {u.status}</Text>
                </View>
        );
    })
    // <Card>
    //     <Card.Title> Donation Status </Card.Title>
    //     <Card.Divider />
    //     {
    //     data.map((u, i) => {
    //         return (
    //                 <View style = {styles.cardContainer} key = {u.key}>
    //                     <Text> Name: {u.charityName} </Text> 
    //                     <Text> Items: {u.items}</Text>
    //                     <Text> Status: {u.status}</Text>
    //                 </View>
    //         );
    //     })
    //     }
    // </Card>
    )
}

const styles = StyleSheet.create({
    accepted: {
        margin: 10,
        borderColor: "black",  
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: "lightgreen"
    },
    pending: {
        margin: 10,
        borderColor: "black",  
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: "grey"        
    },
    rejected: {
        margin: 10,
        borderColor: "black",  
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: "red"        
    },
    name: {
        fontSize: 20,
        padding: 5
    },
    item: {
        padding: 5
    }
});