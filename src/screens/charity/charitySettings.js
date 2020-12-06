import * as React from 'react';
import { Text, View } from 'react-native';

export default function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FORM </Text>
        <Text>Name, Address, phone #, email, password change </Text>
        <Text> Button to update changes </Text>
      </View>
    );
  }