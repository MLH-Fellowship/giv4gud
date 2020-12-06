import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore'
// import Login from "./LoginScreen.js"
import MainNavigation from "./src/navigation/MainNavigation"; // Caleb's
import { createAppContainer, createSwitchNavigator } from 'react-navigation'; // Cirill's

import LoginScreen from "./src/screens/auth/LoginScreen"
import SignupScreen from "./src/screens/auth/SignupScreen"
import LoadingScreen from "./src/screens/auth/LoadingScreen"
import Dashboard from "./src/screens/start/Dashboard"
import Home from "./src/screens/start/Home"


const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  SignupScreen: SignupScreen,
  LoginScreen: LoginScreen,
  Dashboard: Dashboard,
  Home: Home
})

export default function App() {
  return (
    <AppNavigator />,
    <MainNavigation />
  );
}

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default function App() {
