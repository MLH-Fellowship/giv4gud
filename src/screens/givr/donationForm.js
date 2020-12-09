import React, { useRef, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { addDonation } from "../../services/firebase"
import AuthContext from "../../../Context"

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
    },
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

  return (
    <View>
      <Text> {data.itemName} </Text>
      <Text> Quantity: {count} </Text>
      <TouchableOpacity
        key={key}
        onPress={() => {
          setCount(count + 1);
          props.store[name] += 1;
        }}
        style={styles.card}
      >
      </TouchableOpacity>
      <TouchableOpacity
        key={key}
        onPress={() => {
          if (count > 0) {
            setCount(count - 1);
            props.store[name] -= 1;
          }
        }}
        style={styles.card}
      >
      </TouchableOpacity>
    </View>
  )
}

// Donation Cards
function DonationCardGallery(props) {
  const id = props.id;
  const charityID = props.charityID;
  return (
    <View style={styles.cardGallery}>
      {props.data.map((x, i) => {
        return (
          <DonationCard
            data={x} cardID={i}
            store={props.store}
            key={i} id={id}
            charityID={charityID}
          />
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

  // Gerald's add donation stuff
  let donationList = [];

  const onDonationAdded = () => {
    let data =
    {
      "name": name,
      "quantity": quantity,
      "priority": priority
    }

    // Push data to firebase
    /* Insert code here */
    addDonation(data)
    // Validation
    console.log(data);
    alert("Donation Added");
  }

  // Stored to prepare data that will be sent back to firebase
  return (
    <View style={styles.container}>
      <DonationCardGallery data={sampleData} store={data} id={id} charityID={charityID} />
      <TouchableOpacity
        onPress={() => console.log(data)}
        style={styles.submitButton}
      >
        <Text style={styles.buttonText}> Submit Donations </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  cardGallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  card: {
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 2,
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#B67FDD',
  },
  submitButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 10,
    paddingHorizontal: 30,
    height: 60,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 20,

  }
});