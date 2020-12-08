import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import inventoryStatus from '../../../data/inventoryStatus';

/* Add hook to update cards whenever server sends an update */

// Function to create Charity Cards
export default function StatusCard(props){
    console.log("Charity Status Org ID", props.id);

    // Replace inventoryStatus w/ data from firebase
    return(
    <Card>
        <Card.Title> Donation Status </Card.Title>
        <Card.Divider />
        {
        inventoryStatus.map((u, i) => {
            return (
                    <View style = {styles.cardContainer} key = {i}>
                        <Text> Item: {u.item} </Text> 
                        <Text> Quantity: {u.quantity}</Text>
                        <Text> Description: {u.description}</Text>
                        <TouchableOpacity onPress={() => console.log("Repalce w/ database API Call")}> 
                            <Text> Accept </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => console.log("Repalce w/ database API Call")}> 
                            <Text> Reject </Text>
                        </TouchableOpacity>
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