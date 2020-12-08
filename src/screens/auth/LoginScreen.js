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
                        alert('user');
                        // Call signIn function
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
                        alert('organization');
                        // Call signIn function
                        signIn();
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
            <TouchableOpacity
                onPress={() => onLoginPress()}>
                <Text>Log in</Text>
            </TouchableOpacity>

            <Text
                onPress={() => navigation.navigate('SignIn')}
            > Don't have an account? Sign up.

            </Text>

        </View>
    )
}

export default LoginScreen;