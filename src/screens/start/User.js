// src/screens/Detail.js

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function User(props) {
  const { route, navigation } = props;
  const accountType = route.params.type;
  console.log("Benchmark",navigation)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style = {styles.buttonContainer}
        onPress={() => navigation.navigate('Signup', {type: accountType})}
      >
        <Text style = {styles.buttonText}> Signup </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.buttonContainer}
        onPress={() => navigation.navigate('Login', {type: accountType})}
      >
        <Text style = {styles.buttonText}> Login </Text>
      </TouchableOpacity>
      <Text> {accountType} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb'
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold'
  },
  buttonContainer: {
      backgroundColor: '#222',
      borderRadius: 5,
      padding: 10,
      margin: 20
  },
  buttonText: {
      fontSize: 20,
      color: '#fff'
  }
});

export default User;