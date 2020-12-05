import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon } from 'react-native';

import InventoryStatusCard from '../../components/charity/inventoryStatusCard'

export default function InventoryStatusScreen(props) {
    const { route, navigation } = props;
    const data = route.params;
    return(
        <View>
            <InventoryStatusCard data = {data}/>    
        </View>
    )
}

