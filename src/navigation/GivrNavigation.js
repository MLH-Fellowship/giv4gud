import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 

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
    <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return (
                <AntDesign name="home" size={24} color="black" />
              );
            } else if (route.name === 'Settings') {
              return (
                <Ionicons
                  name={focused ? 'ios-list-box' : 'ios-list'}
                  size={size}
                  color={color}
                />
              );
            } else {
              return (<FontAwesome5 name="hands-helping" size={24} color="black" />)
            }
          },
        })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
      <Tab.Screen name="Home" 
          component={GivrMain} 
          initialParams={{ id: id }}
      />

      <Tab.Screen name="Donations" 
          component={StatusScreen} 
          initialParams={{ id: id }}
      />
      <Tab.Screen name="Settings" 
          component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}