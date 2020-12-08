import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import AuthContext from "../../../Context"
import { addDonation } from "../../services/firebase"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function CharityForm() {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [priority, setPriority] = useState('')
    let donationList = [];

    const onDonationAdded = () => {
        let data =
        {
            "name": name,
            "quantity": quantity,
            "priority": priority
        }

        // Push data to firebase
        /* Insert code here */
        addDonation(data)
        // Validation
        console.log(data);
        alert("Donation Added");
    }

    return (
        <View style={styles.container}>
            <Text> Donation List </Text>
            <Text> {donationList} </Text>
            <Text> Add Donation Need </Text>
            <TextInput

                placeholder='Item Name'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setName(text)}
                value={name}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput

                placeholder='Quantity Needed'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setQuantity(text)}
                value={quantity}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput

                placeholderTextColor="#aaaaaa"
                placeholder='Priority'
                onChangeText={(text) => setPriority(text)}
                value={priority}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TouchableOpacity
                onPress={() => onDonationAdded()}>
                <Text >Add to List </Text>
            </TouchableOpacity>

        </View>
    )
}