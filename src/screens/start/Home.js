// src/screens/Home.js

import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function Home(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Givr Main', { type: account.person })}
      >
        <Text style={styles.buttonText}> Individual </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('User', { type: account.org })}
      >
        <Text style={styles.buttonText}> Organization </Text>
      </TouchableOpacity>
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

const account = {
  person: 'User',
  org: 'Organization'
}

export default Home;
