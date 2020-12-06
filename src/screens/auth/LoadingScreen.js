import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

class LoadingScreen extends Component {
    render() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.props.navigation.navigate('Home');
            }
            else {
                this.props.navigation.navigate('SignupScreen'); // how to switch between login and signup?
            }
        })

        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

export default LoadingScreen;