import React, { useState } from 'react';
import './TourDetails.css';

import { useParams } from 'react-router-dom';
import db from '../../data/db.json';



function TourDetails(props) {
  let {data} = props;
  let {id} = useParams();
  let city = db.find((item) => item.id === id);
  
  console.log(id);

  let [showMore, setShowMore] = useState(false);
  let showMoreButton = () => {
    setShowMore(!showMore);
  }
  return (
    <>
    <div class='TourDetails'>
    {data.map(item => {
      if(item.id === id){
        let finalText = showMore ? item.info : item.info.slice(0, 80);
      return(
        <>
        <h2>{item.name}</h2>
        <img width={"450px"} src={item.image} alt={item.name} />
        <p>Price: {item.price}</p>
        <p class="city-info">Info: {finalText}</p>
        <button class="show-more" onClick={showMoreButton}>
        {showMore ? "Show less" : "Show more"}
      </button>
        </>
      )
    }
    else{
      return null;
    }
    })
    }
    
    </div>
    </>
  );
}

export default TourDetails;









/////////////////////////

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import './TourDetails.css';

// function TourDetails(props) {
//   const { data } = props;
//   const { id } = useParams();

//   const item = data.find((item) => item.id === parseInt(id));

//   if (!item) {
//     return <div>Error: Item not found</div>;
//   }

//   return (
//     <div>
//       <h1>{item.name}</h1>
//       <img src={item.image} alt={item.name} />
//     </div>
//   );
// }


// export default TourDetails;
