import React, { useState } from 'react';
import './TourDetails.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import { useParams } from 'react-router-dom';
import db from '../../data/db.json';



function TourDetails(props) {
  let {data} = props;
//   let {idURL} = useParams();
//   let tour = data.find((tour) => tour.idURL === idURL);

    let [id,setID] = useState(0);
    let changeItemID = (itemID) => {
    setID(itemID);
  
    let index = data.find((place) => place.id === itemID); 

  }


  return (
    <>
    
    <div class="TourDetails">
    {data.map((item) => (
        <><h2>{item.name}</h2><img width={"100%"} src={item.image} alt={item.name} /><p>{item.info}</p><p>price: {item.price}</p></>
    ))}
    </div>
    

    <Header />
    <Footer />
    </>
  );
}

export default TourDetails;