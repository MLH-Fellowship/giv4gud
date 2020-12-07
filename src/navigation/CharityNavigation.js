import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import CharityMain from '../screens/charity/charityMain';
import InventoryScreen from '../screens/charity/charityStatus'
import SettingsScreen from '../screens/charity/charitySettings'

// Data
import inventoryData from '../../data/inventory'
import charity from "../../data/givr"

const Tab = createBottomTabNavigator();

export default function CharityNavigation(props) {
    const { route, navigation } = props;
    // console.log("Charity Route", route.params);

    // Update initial params to navigator later
  return (
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={CharityMain} initialParams = {inventoryData}/> 
        <Tab.Screen name="Donation Status" component={InventoryScreen} initialParams = {{name: "Insert Organization Name Here"}}/>
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
  );
}