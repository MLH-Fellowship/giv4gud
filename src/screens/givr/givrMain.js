import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';

// Import CharityChard
import CharityCard from '../../components/givr/charityCard'

export default function GivrMain({ route, navigation }) {
    const id = route.params.id;
    console.log("ID", id);
    return(
        <ScrollView> 
            <View style={styles.container}> 
                <Text style = {styles.title}> Find Charities </Text>
                <CharityCard id = {id} />
            </View>
        </ScrollView>
    ) 
}

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontFamily: "serif",
        marginLeft: 8,
        paddingTop: 10,
        paddingBottom: 5,
    },
    container: {
        marginHorizontal: 10
    }
})


