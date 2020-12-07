import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

// Get data (replace w/ call to Firebase later)
import charity from "../../../data/charity" // Dummy data of charities

export default function FullCharityCard(props){
    const navigation = useNavigation();
    const id = props.id; // User ID (probably won't need to use in this file)
    const charityID = props.charityID;
    const data = charity[charityID];
    console.log("Check", charity, data, charityID);
    return(
        <Card>
            <Card.Title>{data.name}</Card.Title>
            <Card.Divider/>
            <Text style={{marginBottom: 10}}>
                Address: {data.address}
            </Text>
            <Text> Location: {data.location} </Text>
            <Text> Important Needs: {data.highNeeds} </Text>
            <Text> Full Needs: {data.fullNeeds} </Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ebebeb'
    },
    text: {
      color: '#101010',
      fontSize: 24,
      fontWeight: 'bold'
    },
    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
  });