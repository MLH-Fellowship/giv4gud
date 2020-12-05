import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button, Icon } from 'react-native';
import { Card } from 'react-native-elements';

export default function CharityScreen(props) {
    const { route, navigation } = props;
    const data = route.params.data;
    const name = data.name;
    console.log(data);
    return(
        <View>
            <Text> Render Charity {name} </Text>   
            <CharityCard data = {data}/>    
        </View>
    )
}

function CharityCard(charityInfo){
    const data = charityInfo.data;
    // implemented with Text and Button as children
    console.log("Data", data.name, data.address);
    return(
        <Card>
        <Card.Title>{data.name}</Card.Title>
        <Card.Divider/>
        <Card.Image source={require('../../../pic.jpg')} />
        <Text style={{marginBottom: 10}}>
            Address: {data.address}
        </Text>
        <Text> Location: {data.location} </Text>
        <Text> Important Needs: {data.highNeeds} </Text>
        <Text> Full Needs: {data.fullNeeds} </Text>

        <Button
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='VIEW NOW' />
        </Card>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ebebeb'
    },
    text: {
      color: '#101010',
      fontSize: 24,
      fontWeight: 'bold'
    },
    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
  });