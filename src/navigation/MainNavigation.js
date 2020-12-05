import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens

// Auth
import Home from '../screens/auth/Home';
import User from '../screens/auth/User';
import Signup from '../screens/auth/signup';
import authFiller from '../screens/auth/authFiller';

// Givr
import GivrNavigation from "./GivrNavigation";
import CharityScreen from "../screens/givr/charityInfo"
import DonationForm from "../screens/givr/donationForm"

// Goodr
import CharityNavigation from "./CharityNavigation";

const Stack = createStackNavigator();

function MainNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Home'
          screenOptions={{
              gestureEnabled: true,
              headerStyle: {
                  backgroundColor: '#101010'
              },
              headerTitleStyle: {
                  fontWeight: 'bold'
              },
              headerTintColor: '#ffd700',
              headerBackTitleVisible: false,
          }}
          headerMode = "float"
        >

          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Giv4Gud' }}
          />

          <Stack.Screen
            name="User"
            component={User}
            options={{
                title: "Users"
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
                title: "Sign Up"
            }}
          />

          <Stack.Screen
            name="authFiller"
            component={authFiller}
            options={({ route }) => ({
                title: route.params.type // Put user data in Route
            })}
          />

          <Stack.Screen
            name="Givr Main"
            component={GivrNavigation}
            options={({ route }) => ({
                title: route.params.type // Put user id in Route
            })}
          />

          <Stack.Screen
            name="Goodr Main"
            component={CharityNavigation}
            options={({ route }) => ({
                title: route.params.type // Put user id in Route
            })}
          />

          <Stack.Screen
            name="Open Charity"
            component={CharityScreen}
            options={({ route }) => ({
                title: route.params.type // Pass User ID & Charity ID in Route
            })}
          />

          <Stack.Screen
            name="Donation Form"
            component={DonationForm}
            options={({ route }) => ({
                title: route.params.type // Pass User ID & Charity ID in Route
            })}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default MainNavigation;