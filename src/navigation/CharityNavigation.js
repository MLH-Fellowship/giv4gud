import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import CharityMain from '../screens/charity/charityMain';
import InventoryScreen from '../screens/charity/charityStatus'
import SettingsScreen from '../screens/charity/charitySettings'

const Tab = createBottomTabNavigator();

export default function CharityNavigation(props) {
  const { route, navigation } = props;

  // Organization ID Stuff
  const id = route.params.id;
  console.log("Charity Nav ID", id);

  return (
    <Tab.Navigator initialRouteName='Home'>
      <Tab.Screen name="Home" component={CharityMain} initialParams={{ id: id }} />
      <Tab.Screen name="Add Donation" component={InventoryScreen} initialParams={{ id: id }} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}