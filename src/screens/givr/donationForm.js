import React, { useRef, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

// Data *delete once integrated w/ database*
const sampleData = 
[
  {
    "itemName": "Shirt",
    "category": "Clothing",
    "priority": "High"
  },
  {
    "itemName": "Pants",
    "category": "Clothing",
    "priority": "Medium"
  },
  {
    "itemName": "Food",
    "category": "Canned Tomatos",
    "priority": "Low"
  }
]

// Weird error about text can't be child of view

function DonationCard(props) {
    const data = props.data;
    const name = data.itemName;
    const key = props.cardID;

    // User & Charity IDs (most likely won't need)
    const id = props.id;
    const charityID = props.charityID;
    
    const [count, setCount] = useState(0);

    return(
        <TouchableOpacity key = {key} onPress={() => {
            setCount(count + 1);
            props.store[name] += 1;
          }
        }> 
          <Text> Item: {data.itemName} </Text>
          <Text> Priority: {data.priority} </Text>
          <Text> Quantity: {count}</Text>
        </TouchableOpacity>
        )
}

// Donation Cards
function DonationCardGallery(props){
  const id = props.id;
  const charityID = props.charityID;
  return(
    <View>
      {props.data.map((x, i) => {
        return(
          <DonationCard data = {x} cardID = {i} store = {props.store} key = {i} id = {id} charityID = {charityID}/>
        )
      })}
    </View>
  );
}

// Reach: add a way to filter items
// Reach: add description feature

export default function DonationForm(props) {
    
    const id = props.id;
    const charityID = props.charityID;

    // User ID
    console.log("User & Charity ID", props.id, props.charityID);

    // Replace data w/ firebase call | this is data that should be 
    // sent back to firebase
    const data = 
      {
      "Shirt": 0,
      "Pants": 0,
      "Food": 0
      }

  // Stored to prepare data that will be sent back to firebase
  return (
    <View>
      <DonationCardGallery data={sampleData} store = {data} id = {id} charityID = {charityID}/> {/* Repalce sampleData w/ firebase data */}
      <TouchableOpacity onPress={() => console.log(data)} > {/* Replace w/ call to add data to database*/}
          <Text> Push this to return </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  cardGallery: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 1000,
  },
  card: {
    height: 200
  }
});