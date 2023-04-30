import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import './Tour.css';
import db from '../../../data/db.json';

function Tour(props) {
  let {data} = db;
  let {id} = useParams();
  return (
    <>
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.name} />

      {/* {data.map(item => {
      if(item.id === id){
      return(
        <><h2>{item.name}</h2><img width={"450px"} src={item.image} alt={item.name} /></>
      )
    }
    })
    } */}
    </>
  );
}

export default Tour;