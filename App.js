import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore'
import Login from "./screens/LoginScreen.js"

var firebaseConfig = {
  apiKey: "AIzaSyAfeiT7Qp96l-iBUg_4I5ymj4yEc4Cx-k4",
  authDomain: "giv4gud-dcd30.firebaseapp.com",
  databaseURL: "https://giv4gud-dcd30.firebaseio.com",
  projectId: "giv4gud-dcd30",
  storageBucket: "giv4gud-dcd30.appspot.com",
  messagingSenderId: "884472859704",
  appId: "1:884472859704:web:e4189e20a69609b6216acd"
};

firebase.initializeApp(firebaseConfig);


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Helllooo</Text>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
