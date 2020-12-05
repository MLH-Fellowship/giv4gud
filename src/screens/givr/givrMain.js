import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

// Import CharityChard
import CharityCard from '../../components/givr/charityCard'

// Get data (replace w/ call to Firebase later)
import charity from "../../../data/charity"

export default function GivrMain({ navigation }) {
    return(
        <View> 
            <CharityCard data = {charity} />
        </View>
    ) 
}


