import React, {useState} from 'react';
import './Tours.css';
import { Link } from 'react-router-dom';
import TourDetails from '../TourDetails/TourDetails';


function Tours(props) {
  let {data} = props;
  let [id, setID] = useState(0);
  let itemID = (event) => {
    setID(props.id);
    props.changeItemID(props.id);
  };
  return (
    <>
    <div class="Tours">
    {data.map((item) => (
        <><Link onClick={itemID} to={"/TourDetails"}><h2>{item.name}</h2></Link><img width={"450px"} src={item.image} alt={item.name} /></>
    ))}
    </div>
    </>
  );
}

export default Tours;