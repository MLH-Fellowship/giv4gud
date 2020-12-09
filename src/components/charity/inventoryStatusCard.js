import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import inventoryStatus from '../../../data/inventoryStatus';
import { addDonation } from "../../services/firebase"

/* Add hook to update cards whenever server sends an update */

// Function to create Charity Cards
export default function StatusCard(props){
    console.log("Charity Status Org ID", props.id);
    // Replace inventoryStatus w/ data from firebase
        return(
    <Card>
        <Card.Title> Donation Status </Card.Title>
        <Card.Divider />
        {
        inventoryStatus.map((u, i) => {
            const [isRejected, setIsRejected] = useState(false);
            if (!isRejected) {
            return (
                    <View style = {styles.cardContainer} key = {i}>
                        <Text style={styles.itemName}> {u.item} </Text> 
                        <Text style={styles.quantityName}> Quantity: {u.quantity}</Text>
                        <View style = {styles.buttonContainer}> 
                            <TouchableOpacity onPress={() => 
                                            {addDonation(u, props.id); setIsRejected(true);}}
                                              style={styles.buttonStyle}> 
                                <Text style={styles.buttonName}> Accept </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => {setIsRejected(true)}}
                                              style={styles.buttonStyle}> 
                                <Text style={styles.buttonName}> Reject </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            );}
            return (<div></div>);
        })
        }
    </Card>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: 10,
        backgroundColor: "#C9D4C5",
        borderRadius: 3,
        paddingTop: 6
    },
    itemName: {
        fontSize: 18
    },
    quantityName: {
        fontSize: 14
    },
    buttonStyle: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        width: 100,
        height: 30,
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    buttonName: {
        fontSize: 16
    }
});