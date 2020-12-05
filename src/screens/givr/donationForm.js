import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Input } from 'react-native-elements';

export default function DonationForm(props) {
    const { route, navigation } = props;
    const data = route.params.data;
    console.log("Data", data.location);
    return(
        <View>
            <Text> Donation Page </Text>
            <Input
            placeholder='Item Name'
            />

            <Input
            placeholder='Quantity'
            keyboardType='number-pad'
            />

            <Input
            placeholder='Description'
            />

        </View>
    )
}