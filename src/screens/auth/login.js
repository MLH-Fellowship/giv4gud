import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Login(props) {
    const { route, navigation } = props;
    const accountType = route.params.type;
    return(
        <View>
            <Text> Login </Text>
            <TouchableOpacity
                style = {styles.buttonContainer}
                onPress={() => navigation.navigate('authFiller', {type: accountType})}
            >
                <Text style = {styles.buttonText}> Auth Stuff </Text>
            </TouchableOpacity>
        </View>
    )
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