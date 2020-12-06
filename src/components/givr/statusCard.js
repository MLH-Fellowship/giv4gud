import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import charity from '../../../data/charity';

/* Add hook to update cards whenever server sends an update */

// Function to create Charity Cards
export default function StatusCard(charityData){
    console.log("Givr Status Card Props", charityData);
    const data = charityData.data.charity[1];
    // console.log(charityData.data.charity[1]);
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