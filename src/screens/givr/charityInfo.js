import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon } from 'react-native';

import FullCharityCard from '../../components/givr/fullCharityCard'
import DonationForm from "./donationForm"

export default function CharityScreen(props) {
    const { route, navigation } = props;
    const data = route.params.data;
    return(
        <View>
            <FullCharityCard data = {data}/>
            <DonationForm data = {data}/>
        </View>
    )
}

