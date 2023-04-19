import React from 'react';
import './Tours.css';


function Tours(props) {
  let {data} = props;
  return (
    <div class="Tours">
    {/* <h2>Tours</h2> */}
    {data.map((item) => (
        <><h2>{item.name}</h2><img width={"450px"} src={item.image} alt={item.name} /></>
    ))}
    </div>
  );
}

export default Tours;