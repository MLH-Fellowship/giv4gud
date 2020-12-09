import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper'

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { StackNavigator } from 'react-navigation';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import AuthContext from "../../../Context"
import { db } from '../../services/firebase'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        margin: 15,
        width: 200,
        borderBottomColor: '#C0C0C0',
        borderBottomWidth: 1,
        paddingLeft: 10,
        borderRadius: 4
        
     },
     submitButton: {
        backgroundColor: '#B67FDD',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        paddingHorizontal: 40,
        height: 40,
        width: 200

     },
     submitButtonText:{
        color: 'white'
     },
     radioButton: {
         flexDirection: "row",
         width: 200,
         marginLeft: 30
     },
     signupText: {
        fontSize: 30,
        paddingBottom: 80
    },
     other: {
        marginTop: 20
     }
});

export default function SignupScreen() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [mailingAddress, setMailingAddress] = useState('')
    const [userType, setuserType] = React.useState('User')
    const [mainAddress, setMainAddress] = useState('')
    const navigation = useNavigation()
    const { signUp } = React.useContext(AuthContext);

    const onRegisterUserPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    username,
                    password,
                    userType,
                };
                const usersRef = firebase.firestore().collection('users') // Change collection name based on user
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        // alert('yeet')
                        signUp({ username, password, email, userType, uid })
                        // navigation.navigate('Givr Main', { type: 'User' })
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
            });
    }

    const onRegisterOrgPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.")
            return
        }
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    username,
                    password,
                    userType,
                    mainAddress,
                    mailingAddress,
                };
                const usersRef = firebase.firestore().collection('organizations')
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        // alert('yeet')
                        signUp({ username, password, email, userType, mainAddress, mailingAddress, uid })
                        // navigation.navigate('Givr Main', { type: 'User' })
                    })
                    .catch((error) => {
                        alert(error)
                    });
            })
            .catch((error) => {
                alert(error)
            });
    }

    const userForm =
        <>
            <TextInput
                style={styles.input}
                placeholder='Username'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setUsername(text)}
                value={username}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder='E-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Confirm Password'
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => onRegisterUserPress()}>
                <Text >Create account</Text>
            </TouchableOpacity>
        </>

    const orgForm =
        <>
            <TextInput
                style={styles.input}
                placeholder='Orgnanization Name'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setUsername(text)}
                value={username}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder='Organization E-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Confirm Password'
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                placeholder='Main Address'
                onChangeText={(text) => setMainAddress(text)}
                value={mainAddress}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                placeholder='Mailing Address'
                onChangeText={(text) => setMailingAddress(text)}
                value={mailingAddress}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />

            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => onRegisterOrgPress()}>
                <Text >Create account</Text>
            </TouchableOpacity>
        </>
    return (
        <View style={styles.container}>
            <Text style={styles.signupText}> Sign Up </Text>
            <RadioButton.Group 
                onValueChange={newValue => setuserType(newValue)} 
                value={userType}
            >
                <View style={styles.radioButton}>
                    <RadioButton value="User" />    
                    <Text >Individual</Text>
                </View>
                <View style={styles.radioButton}>
                    <RadioButton value="Organization" />
                    <Text>Organization</Text>
                </View>
            </RadioButton.Group>
            {userType == "User" ? userForm : orgForm}
            <View style = {styles.other}>
                <Text
                    onPress={() => navigation.navigate('Login')}
                > Returning user? Login.
                </Text>
            </View>
        </View>
    )
}