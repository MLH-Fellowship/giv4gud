import React, { Component, useState } from "react";
import { StyleSheet, View, Button, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/native'
import { Input } from 'react-native-elements';
import AuthContext from "../../../Context";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
         fontSize: 30
     }
});

function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signIn } = React.useContext(AuthContext)

    const navigation = useNavigation()

    const onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const data = {
                    id: uid,
                    email,
                    password,
                    userType: "User"
                };
                const usersRef = firebase.firestore().collection('users')
                usersRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            onLoginOrgPress()
                            return;
                        }
                        // alert('user');
                        // Call signIn function
                        console.log("Data in LoginScreen", data)
                        signIn({ data });
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    const onLoginOrgPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                const uid = response.user.uid
                const orgsRef = firebase.firestore().collection('organizations')
                orgsRef
                    .doc(uid)
                    .get()
                    .then(firestoreDocument => {
                        if (!firestoreDocument.exists) {
                            alert("Email does not exist anymore.")
                            return;
                        }
                        // alert('organization');
                        const data = {
                            id: uid,
                            email,
                            password,
                            userType: "Organization"
                        }
                        console.log("Organization Data", data);
                        // Call signIn function
                        signIn({data});
                    })
                    .catch(error => {
                        alert(error)
                    });
            })
            .catch(error => {
                alert(error)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.loginText}> Login </Text>
            <TextInput
                placeholder='E-mail'
                style={styles.input}
                placeholderTextColor="#aaaaaa"
                onChangeText={(text) => setEmail(text)}
                value={email}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TextInput
                placeholderTextColor="#aaaaaa"
                style={styles.input}
                secureTextEntry
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                value={password}
                underlineColorAndroid="transparent"
                autoCapitalize="none"
            />
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => onLoginPress()}>
                <Text>Log in</Text>
            </TouchableOpacity>
            
            <View style = {styles.other}>
                <Text
                    onPress={() => navigation.navigate('SignIn')}
                > Don't have an account? Sign up.
                </Text>
            </View>

        </View>
    )
}

export default LoginScreen;