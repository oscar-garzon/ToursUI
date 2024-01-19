import React, { useState, useEffect } from "react";
import {loadStripe} from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import SearchBar from "./components/searchBar/searchBar";
import ToursFilterAndList from "./components/toursFilterAndList/toursFilterAndList";

import './App.css'

function App() {

  let tours = [ {"imgUrl": "../images/chichen-itza-tour.jpg",
                "name": "Chichen Itza Tour Classic",
                "alt": "descripción alternativa",
                "description": "This is the classic Chichen Itza Tour and it’s " +
                                "perfect for a journey to visit the Mayan Ruins" +
                                "of Chichen Itza.",
                "id" : 1},
                {"imgUrl": "../images/isla-mujeres.jpg",
                "name": "Isla Mujeres Tour",
                "alt": "descripción alternativa",
                "description": "Spend the day soaking up the sparkling Caribbean " +
                "on this catamaran cruise to Isla Mujeres from Cancun.",
                "id" : 2},
                {"imgUrl": "../images/chichen-itza-tour.jpg",
                "name": "Chichen Itza Tour Classic",
                "alt": "descripción alternativa",
                "description": "This is the classic Chichen Itza Tour and it’s " +
                                "perfect for a journey to visit the Mayan Ruins" +
                                "of Chichen Itza.",
                "id" : 3},
                {"imgUrl": "../images/isla-mujeres.jpg",
                "name": "Isla Mujeres Tour",
                "alt": "descripción alternativa",
                "description": "Spend the day soaking up the sparkling Caribbean " +
                "on this catamaran cruise to Isla Mujeres from Cancun.",
                "id" : 4},
                {"imgUrl": "../images/chichen-itza-tour.jpg",
                "name": "Chichen Itza Tour Classic",
                "alt": "descripción alternativa",
                "description": "This is the classic Chichen Itza Tour and it’s " +
                                "perfect for a journey to visit the Mayan Ruins" +
                                "of Chichen Itza.",
                "id" : 5},
                {"imgUrl": "../images/isla-mujeres.jpg",
                "name": "Isla Mujeres Tour",
                "alt": "descripción alternativa",
                "description": "Spend the day soaking up the sparkling Caribbean " +
                "on this catamaran cruise to Isla Mujeres from Cancun.",
                "id" : 6},
];
  return (
    <>
      <NavBar/> 
      <SearchBar/>
      <ToursFilterAndList/>
    </>
  )
}

export default App;
