// import React, {useState, useCallback} from "react";
// import {useNavigate} from "react-router-dom";

// const HomePage = ()=>{
//     const [value, setValue] = useState();

//     const navigate = useNavigate();

//     const handleJoinRoom = useCallback(()=>{
//         navigate(`/room/${value}`);

//     },[navigate, value]);
//     return (
//         <div>
//             <input value={value} onChange={(e)=>setValue(e.target.value)} type ="text" placeholder="Enter Room Code"></input>
//             <button onClick={handleJoinRoom}>Join</button>
//         </div>
//     )
// }


// export default HomePage;


import Navbar from '../../Navbar'; // adjust this path based on actual location
import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./homestyle.css";

const HomePage = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(() => {
    if (value.trim()) {
      navigate(`/room/${value}`);
    }
  }, [navigate, value]);

  return (
    <>
    <Navbar/>
    <div className="home-wrapper">
      <div className="home-card">
        <h1 className="home-title">Join a Video Room</h1>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
          className="home-input"
        />
        <button onClick={handleJoinRoom} className="home-button">
          Join
        </button>
      </div>
    </div>
    </>
  );
};

export default HomePage;
