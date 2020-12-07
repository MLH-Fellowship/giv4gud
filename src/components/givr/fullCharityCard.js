import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function FullCharityCard(charityInfo){
    const data = charityInfo.data;
    const navigation = useNavigation();
    // implemented with Text and Button as children
    // console.log("Data", data.name, data.address);
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