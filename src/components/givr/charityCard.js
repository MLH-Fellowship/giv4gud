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
    <Card>
        <Card.Title> Charity Card </Card.Title>
        <Card.Divider /> 
        {
        charity.map((u, i) => { // Replace charity w/ data from firebase Note: make sure i is replaced w/ charity document name
            return (
                <TouchableOpacity key = {i} onPress = {() => navigation.navigate("Open Charity", {id: id, charityID: i})}> 
                    <View style = {styles.cardContainer}>
                        <Text> {u.name} </Text> 
                        <Text> Location: {u.location}</Text>
                        <Text> Needs: {u.highNeeds}</Text>
                        <Text> Key: {i} </Text>
                    </View>
                </TouchableOpacity>
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