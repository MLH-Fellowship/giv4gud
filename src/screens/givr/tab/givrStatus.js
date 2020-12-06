import * as React from 'react';
import { Text, View } from 'react-native';

import StatusCard from '../../../components/givr/statusCard'

export default function StatusScreen(props) {
    const { route, navigation } = props;
    const data = route.params
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <StatusCard data = {data} />
      </View>
    );
  }