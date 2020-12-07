import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon } from 'react-native';

import FullCharityCard from '../../components/givr/fullCharityCard'
import DonationForm from "./donationForm"

export default function CharityScreen(props) {
    const { route, navigation } = props;
    const id = route.params.id; // User ID (probably won't need to use in this file)
    const charityID = route.params.charityID;
    // console.log("Intermediate", route, id, charityID)
    return(
        <View>
            <FullCharityCard id = {id} charityID = {charityID}/>
            <DonationForm id = {id} charityID = {charityID}/>
        </View>
    )
}

