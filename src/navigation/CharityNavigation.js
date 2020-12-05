import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import CharityMain from '../screens/goodr/goodrMain';
import StatusScreen from '../screens/goodr/goodrStatus'
import SettingsScreen from '../screens/goodr/goodrSettings'

const Tab = createBottomTabNavigator();

export default function CharityNavigation(props) {
    const { route, navigation } = props;
    console.log("HI", route.params);
    // console.log("Hellow", navigation);
  return (
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={CharityMain} />
        <Tab.Screen name="Donation Status" component={StatusScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  );
}