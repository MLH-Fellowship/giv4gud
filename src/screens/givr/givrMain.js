import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { Card } from 'react-native-elements';

// Get data (replace w/ call to Firebase later)
import charity from "../../../data/charity"

console.log(charity[0]);
// Function to create Charity Cards

// function CharityCard(charityData){
//     console.log(charityData.data);
//     return(
//     <Card>
//         <Card.Title> Charity Card </Card.Title>
//         <Card.Divider />
//         {
//         charityData.data.map((u, i) => {
//             return (
//                     <View key = {i}>
//                         <Text> {u.name} </Text> 
//                         <Text> Location: {u.location}</Text>
//                         <Text> Needs: {u.highNeeds}</Text>
//                     </View>
//             );
//         })
//         }
//     </Card>
//     )
// }

export default function GivrMain(props) {
    return(
        <View>
            <Text> Givr Main Page </Text>
        </View>
        
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        padding: '20px'
      }    
});