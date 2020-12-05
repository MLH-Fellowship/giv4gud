import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

// Function to create Charity Cards
export default function CharityCard(charityData){
    
    // Get Navigator Object
    const navigation = useNavigation();
    console.log("Final", charityData.navigation);

    return(
    <Card>
        <Card.Title> Charity Card </Card.Title>
        <Card.Divider />
        {
        charityData.data.map((u, i) => {
            return (
                <TouchableOpacity key = {i} onPress = {() => navigation.navigate("Open Charity", {data: u})}>
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