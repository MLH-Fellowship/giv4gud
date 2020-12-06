import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function Home(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style = {styles.buttonContainer}
        onPress={() => navigation.navigate('Signup')}
      >
        <Text style = {styles.buttonText}> Signup </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {styles.buttonContainer}
        onPress={() => navigation.navigate('User')}
      >
        <Text style = {styles.buttonText}> Login </Text>
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

export default Home;