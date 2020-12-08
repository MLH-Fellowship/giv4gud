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
    <Card>
        <Card.Title> Donation Status </Card.Title>
        <Card.Divider />
        {
        data.map((u, i) => {
            return (
                    <View style = {styles.cardContainer} key = {u.key}>
                        <Text> Name: {u.charityName} </Text> 
                        <Text> Items: {u.items}</Text>
                        <Text> Status: {u.status}</Text>
                    </View>
            );
        })
        }
    </Card>
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