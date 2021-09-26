import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Info from "../Info/Info";
import Singer from "../Singer/Singer";
import './Displaysinger.css'

const Displaysinger = () => {
  const [singers, setSinger] = useState([]);
  const [info,setInfo] = useState([]);
  useEffect(() => {
    fetch("./singer.json")
      .then((res) => res.json())
      .then((data) => setSinger(data));
  }, []);
  function handleInfo(singer){
   const newInfo = [...info, singer];
   setInfo(newInfo);
   console.log('click');

  }
  return (
    <>
      <div className="container">
        <div className="left">
          {singers.map((singer) => (
            <Singer
              singer={singer}
              key={singer.name}
              handleInfo={handleInfo}
            ></Singer>
          ))}
        </div>
        <div className="right">
          <Info info={info}></Info>
        </div>
      </div>
    </>
  );
};

export default Displaysinger;
