import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Tours from './components/tours/Tours';
import Tour from './components/tours/tour/Tour';
import {Routes,Route} from 'react-router-dom';
import TourDetails from './components/TourDetails/TourDetails';
import db from './data/db.json';


function App() {
  // let [id,setID] = useState(0);
  // let changeItemID = (itemID) => {
  //   setID(itemID);
  // }
  return (
    <div>
      
      {/* <Home /> */}
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path="/contactus" element={<Tour />}></Route>
      <Route path="/TourDetails" element={<TourDetails data={db} />}></Route>
      </Routes>
    </div>
  );
}

export default App;