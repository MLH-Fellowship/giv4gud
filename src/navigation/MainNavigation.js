import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/start/Home';
import User from '../screens/start/User';
import Login from '../screens/auth/login';
import Signup from '../screens/auth/signup';
import authFiller from '../screens/auth/authFiller';
import GivrMain from '../screens/givr/givrMain';
import GoodrMain from '../screens/goodr/goodrMain';
import TabNavigation from "./TabNavigation";

import CharityScreen from "../screens/givr/charityInfo"

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
            options={({ route }) => ({
                title: route.params.type
            })}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={({ route }) => ({
                title: route.params.type
            })}
          />

          <Stack.Screen
            name="Login"
            component={Login}
            options={({ route }) => ({
                title: route.params.type
            })}
          />

          <Stack.Screen
            name="authFiller"
            component={authFiller}
            options={({ route }) => ({
                title: route.params.type
            })}
          />

          <Stack.Screen
            name="Givr Main"
            component={TabNavigation}
            options={({ route }) => ({
                title: route.params.type
            })}
          />

          <Stack.Screen
            name="Goodr Main"
            component={GoodrMain}
            options={({ route }) => ({
                title: route.params.type
            })}
          />

          <Stack.Screen
            name="Open Charity"
            component={CharityScreen}
            options={({ route }) => ({
                title: route.params.type
            })}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default MainNavigation;