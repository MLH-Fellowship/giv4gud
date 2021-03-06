import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity } from 'react-native';
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
        paddingBottom: 20
    },
    input: {
        margin: 15,
        height: 40,
        width: 200,
        borderBottomColor: '#C0C0C0',
        borderBottomWidth: 1,
        paddingLeft: 10,
        borderRadius: 4
        
     },
     submitButton: {
        backgroundColor: '#B67FDD',
        padding: 10,
        paddingHorizontal: 50,
        alignItems: 'center',
        borderRadius: 10
     },
     submitButtonText:{
        color: 'white'
     },
     other: {
        marginTop: 20
     },
     loginText: {
         fontSize: 25,
         textAlign: 'left'
     },
     FormText: {
        fontSize: 25
    }
});

export default function CharityForm(props) {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const id = props.id
    let donationList = [];
    console.log("ID", props);
    const onDonationAdded = async () => {
        let data =
        {
            "name": name,
            "quantity": quantity,
        }

        // Push data to firebase
        /* Insert code here */
        await addDonation(data, id);
        // Validation
        console.log(data);
        alert("Donation Added");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}> Donation List </Text>
            <Text> {donationList} </Text>
            <Text style={styles.loginText}> Add Donation Need </Text>
            <TextInput
                style={styles.input}
                placeholder='Item Name'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setName(text)}
                value={name}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder='Quantity Needed'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setQuantity(text)}
                value={quantity}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TouchableOpacity
                onPress={() => onDonationAdded()}
                style={styles.submitButton}
            >
                <Text >Add to List </Text>
            </TouchableOpacity>

        </View>
    )
}