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
                            <Text> Name: {u.name} </Text> 
                            <Text> Quantity: {u.quantity} </Text> 
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