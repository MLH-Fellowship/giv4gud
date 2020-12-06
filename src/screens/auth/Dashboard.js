import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

function Dashboard() {

    const handleLogout = () => {
        firebase.auth().signOut();
    };

    return (
        <View style={styles.container}>
            <Text>Dashboard</Text>
            <TouchableOpacity

                onPress={() => handleLogout()}>
                <Text >Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Dashboard;