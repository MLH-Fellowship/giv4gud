import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function authFiller(props) {
    const { route, navigation } = props;
    console.log("Route", route);
    console.log("Navigation", navigation);
    let accountType = route.params.type;    
    if (accountType == "User"){
        accountType = "Givr Main"
    } else {
        accountType = "Goodr Main"
    }

    return(
        <View>
            <Text> FORM </Text>
            <Text> Add fields to add personal info and what not </Text>
            <TouchableOpacity
                style = {styles.buttonContainer}
                onPress={() => navigation.navigate(accountType, {type: accountType})} // Replace type w/ user ID from database
            >
                <Text style = {styles.buttonText}> Finish Auth </Text>
            </TouchableOpacity>

      <Text> {accountType} </Text>            
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