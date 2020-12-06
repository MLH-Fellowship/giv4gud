import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon } from 'react-native';

import InventoryCard from '../../components/charity/inventoryCard'

export default function CharityMain(props) {
    const { route, navigation } = props;
    const data = route.params;
    console.log("Charity Main Data", data);
    return(
        <View>
            <InventoryCard data = {data}/>    
        </View>
    )
}

