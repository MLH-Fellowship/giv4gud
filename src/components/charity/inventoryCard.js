import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon } from 'react-native';
import { Card } from 'react-native-elements';

// Dummy data (replace later)
import data from '../../../data/inventory'

/* Add hook to update cards whenever server sends an update */

export default function InventoryCard(props) {
    const id = props.id;
    console.log("Inventory Card IDs", id); 
    
    // Replace data in mapping function w/ firebase data  (maybe need to convert to array??)
    return(
        <Card>
            <Card.Title> Donation Needs </Card.Title>
            <Card.Divider />
            {
            data.map((u, i) => {
                return (
                        <View style = {styles.cardContainer} key = {i}>
                            <Text style = {styles.itemName}> Item: {u.name} </Text> 
                            <Text style = {styles.quantityName}> Quantity: {u.quantity} </Text> 
                        </View>
                );
            })
            }
        </Card>
        )
    }
    
const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        margin: 10,
        backgroundColor: "#C9D4C5",
        borderRadius: 3
    },
    itemName: {
        fontSize: 17
    },
    quantityName: {
        fontSize: 17
    }
});