import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon } from 'react-native';

import FullCharityCard from '../../components/charity/fullCharityCard'

export default function CharityScreen(props) {
    const { route, navigation } = props;
    const data = route.params.data;
    return(
        <View>
            <FullCharityCard data = {data}/>    
        </View>
    )
}

