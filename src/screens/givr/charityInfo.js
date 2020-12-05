import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function CharityScreen(props) {
    const { route, navigation } = props;

    const name = route.params.name;
    return(
        <View>
            <Text> Render Charity {name} </Text>       
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