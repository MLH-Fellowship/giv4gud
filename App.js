import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from "./screens/LoginScreen"
import SignupScreen from "./screens/SignupScreen"
import LoadingScreen from "./screens/LoadingScreen"
import Dashboard from "./screens/Dashboard"


const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  SignupScreen: SignupScreen,
  LoginScreen: LoginScreen,
  Dashboard: Dashboard
})

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {

  return (
    <AppNavigator />
  );
}
