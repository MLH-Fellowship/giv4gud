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

// Donation Cards
function DonationCardGallery(props){
  return(
    <View>
      <Text> HELLLLO </Text>
      {props.data.map((x, i) => {
        return(
          <DonationCard data = {x} id = {i} store = {props.store} key = {i}/>
        )
      })}
    </View>
  );
}

function DonationCard(props) {
    const data = props.data;
    const name = data.itemName;
    const key = props.id
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

// Reach: add a way to filter items
// Reach: add description feature

export default function DonationForm(props) {
    
    console.log(props.data);
    // Repalce w/ database call
    const data = 
      {
      "Shirt": 0,
      "Pants": 0,
      "Food": 0
      }

  return (
    <View>
      <DonationCardGallery data={sampleData} store = {data} />
      <TouchableOpacity onPress={() => console.log(data)} >
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