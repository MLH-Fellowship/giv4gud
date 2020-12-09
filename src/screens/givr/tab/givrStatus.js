import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import StatusCard from '../../../components/givr/statusCard'

export default function StatusScreen(props) {
    const { route, navigation } = props;
    const data = route.params
    // navigation.setParams({title: "Test"})
    return (
      <View>
          <Text style = {styles.title}> Donation Status </Text>
          <StatusCard data = {data} />
      </View>
    );
  }

  const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontFamily: "serif",
        marginLeft: 10,
        paddingTop: 10,
        paddingBottom: 5,
    },
    container: {
        marginHorizontal: 10
    }
})