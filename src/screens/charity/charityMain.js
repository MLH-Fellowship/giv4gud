import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon } from 'react-native';

import InventoryCard from '../../components/charity/inventoryCard'
import InventoryStatusCard from '../../components/charity/inventoryStatusCard'

export default function CharityMain(props) {
    const { route, navigation } = props;
    const id = route.params.id;
    console.log("Charity Main IDs", id);
    return(
        <View>
            <InventoryCard id = {id}/>    
            <InventoryStatusCard id = {id}/>
        </View>
    )
}

