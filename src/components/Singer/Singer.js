import React from "react";
import "./Singer.css";

const Singer = (props) => {
  const { name, geners, age, networth, img, country } = props.singer;
  return (
    <div>
      <div className="card">
        <img src={img} alt="Not found" />
        <div className ="info">
          <h1>{name}</h1>
          <h4>Country : {country}</h4>
          <h4>Geners : {geners}</h4>
          <h4>Age : {age}</h4>
          <p>
            Net Worth : <strong>${networth}</strong> Milion
          </p>
        </div>

        <p>
          <button onClick={() => props.handleInfo(props.singer)}>
            <i class="fas fa-arrow-alt-circle-right"></i> Booking
          </button>
        </p>
      </div>
    </div>
  );
};

export default Singer;
