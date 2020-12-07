import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon } from 'react-native';

import CharityForm from '../../components/charity/charityForm'

export default function InventoryStatusScreen(props) {
    const { route, navigation } = props;
    const data = route.params;
    return(
        <View>
            <CharityForm />    
        </View>
    )
}

