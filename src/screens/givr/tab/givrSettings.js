import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import firebase from "firebase";
import AuthContext from "../../../../Context";

export default function SettingsScreen() {
  const { signOut } = React.useContext(AuthContext)
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        signOut();
      }).catch(function (error) {
        // An error happened.
        alert(error)
      });
  };
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FORM </Text>
        <Text>Name, Address, phone #, email, password change </Text>
        <Text> Button to update changes </Text>
        <TouchableOpacity
          onPress={() => handleLogout()}>
          <Text >Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }