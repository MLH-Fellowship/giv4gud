import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { Card } from 'react-native-elements';

// Get data (replace w/ call to Firebase later)
import charity from "../../../data/charity"

// console.log(charity[0]);
// Function to create Charity Cards

function CharityCard(charityData){
    // console.log(charityData.data);
    return(
    <Card containerStyle={styles.container}>
        <Card.Title> Charity Card </Card.Title>
        <Card.Divider />
        {
        charityData.data.map((u, i) => {
            return (
                <TouchableOpacity key = {i}>
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

export default function GivrMain(props) {
    return(
        <View> 
            <CharityCard data = {charity}/>
        </View>
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