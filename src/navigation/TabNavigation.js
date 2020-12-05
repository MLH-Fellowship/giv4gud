import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GivrMain from '../screens/givr/givrMain';

function StatusScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation(props) {
    const { route, navigation } = props;
    console.log("HI", route.params);
    // console.log("Hellow", navigation);
  return (
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={GivrMain} />
        <Tab.Screen name="Donation Status" component={StatusScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>

  );
}