import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

// Import CharityChard
import CharityCard from '../../components/givr/charityCard'

export default function GivrMain({ route, navigation }) {
    const id = route.params.id;
    console.log("ID", id);
    return(
        <View> 
            <CharityCard id = {id} />
        </View>
    ) 
}


