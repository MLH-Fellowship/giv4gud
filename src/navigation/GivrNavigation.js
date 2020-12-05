// Transfer to MainNavigation.js once development is finished

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Text } from 'react-native';

import GivrMain from '../screens/givr/givrMain';

const Stack = createStackNavigator();

function GivrNavigation() {

    return (
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Givr'
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
            name="Givr"
            component={GivrMain}
            options={() => ({
                title: "Givr Main"
            })}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default GivrNavigation;

