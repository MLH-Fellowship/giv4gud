import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { StackNavigator } from 'react-navigation';
import { Input } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import AuthContext from "../../../Context"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

var firebaseConfig = {
    apiKey: "AIzaSyAfeiT7Qp96l-iBUg_4I5ymj4yEc4Cx-k4",
    authDomain: "giv4gud-dcd30.firebaseapp.com",
    databaseURL: "https://giv4gud-dcd30.firebaseio.com",
    projectId: "giv4gud-dcd30",
    storageBucket: "giv4gud-dcd30.appspot.com",
    messagingSenderId: "884472859704",
    appId: "1:884472859704:web:e4189e20a69609b6216acd"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default function SignupScreen() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const navigation = useNavigation()
    const { signUp } = React.useContext(AuthContext);
    const onRegisterPress = () => {
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
                };
                const usersRef = firebase.firestore().collection('users') // Change collection name based on user
                usersRef
                    .doc(uid)
                    .set(data)
                    .then(() => {
                        // alert('yeet')
                        signUp({ username, password, email })
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

    return (
        <View style={styles.container}>

            <TextInput

                placeholder='Username'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setUsername(text)}
                value={username}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput

                placeholder='E-mail'
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput

                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput

                placeholderTextColor="#aaaaaa"
                secureTextEntry
                placeholder='Confirm Password'
                onChangeText={(text) => setConfirmPassword(text)}
                value={confirmPassword}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity

                onPress={() => onRegisterPress()}>
                <Text >Create account</Text>
            </TouchableOpacity>

        </View>
    )
}