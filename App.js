import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import 'firebase/firestore'

// Import Navigations
import MainNavigation from "./src/navigation/MainNavigation";
import GivrNavigation from "./src/navigation/GivrNavigation";
import TestStuff from "./test/testStuff"



export default function App() {
  return (
    <MainNavigation />
  )
}

