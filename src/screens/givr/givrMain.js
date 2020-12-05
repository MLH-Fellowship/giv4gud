import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { Card } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

// Get data (replace w/ call to Firebase later)
import charity from "../../../data/charity"

// console.log(charity[0]);
// Function to create Charity Cards

function CharityCard(charityData){
    // console.log(charityData.data);
    // Get Navigator Object
    // const navigation = charityData.navigation;
    const navigation = useNavigation();
    console.log("Final", charityData.navigation);

    return(
    <Card>
        <Card.Title> Charity Card </Card.Title>
        <Card.Divider />
        {
        charityData.data.map((u, i) => {
            return (
                <TouchableOpacity key = {i} onPress = {() => navigation.navigate("Open Charity", {name: u.name})}>
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

export default function GivrMain({ navigation }) {
    console.log("Navigate", navigation);
    return(
        <View> 
            <CharityCard data = {charity} />

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