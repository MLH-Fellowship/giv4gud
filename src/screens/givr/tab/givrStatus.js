import * as React from 'react';
import { Text, View } from 'react-native';

import StatusCard from '../../../components/givr/statusCard'

export default function StatusScreen(props) {
    const { route, navigation } = props;
    const data = route.params
    // navigation.setParams({title: "Test"})
    return (
      <View>
          <Text> Donation Status </Text>
          <StatusCard data = {data} />
      </View>
    );
  }