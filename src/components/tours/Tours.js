import React, {useState} from 'react';
import './Tours.css';
import { Link } from 'react-router-dom';
import TourDetails from '../TourDetails/TourDetails';
import Tour from './tour/Tour';


function Tours(props) {
  let {data} = props;
  // let [id, setID] = useState(0);
  // let itemID = (event) => {
  //   setID(props.id);
  //   props.changeItemID(props.id);
  // };
  return (
    <>
    <div class="Tours">
    {data.map((item) => (
        <div key={item.id}>
        <><Link to={`/city/${item.id}`}><Tour name = {item.name}image ={item.image}/></Link></>
        </div>
    ))}
    </div>
    </>
  );
}

export default Tours;