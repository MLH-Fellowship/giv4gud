import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import GivrMain from '../screens/givr/givrMain';
import StatusScreen from '../screens/givr/tab/givrStatus'
import SettingsScreen from '../screens/givr/tab/givrSettings'

// Dummy Data (remove later once integrated w/ database)
import charity from "../../data/givr"

const Tab = createBottomTabNavigator();

export default function GivrNavigation(props) {
    const { route, navigation } = props;
    const id = route.params.id;
    console.log("ID in Nav", id);
    // console.log("HI", route.params);
    // console.log("Hellow", navigation);
  return (
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={GivrMain} initialParams={{id: id}} />
        <Tab.Screen name="Donation Status" component={StatusScreen} initialParams={{id: id}}/>
        {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      </Tab.Navigator>
  );
}