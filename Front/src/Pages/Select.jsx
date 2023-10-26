import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Footer from "../Components/Footer"

const Select = () => {
  const [backdata, setBackData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getalldata = await axios.get("http://localhost:1000/api/Time");
        setBackData(getalldata.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div className="line5" />
        <div className="line6" />
        <button className="button8">1</button>
        <button className="button8">2</button>
        <button className="button8">3</button>
        <button className="button8">4</button>
        <button className="button9">5</button>
        <button className="button8">6</button>
      </div>
      {backdata.length > 0 && (
        <div className="leftside">
          <h2>
            {backdata[1].from} to {backdata[1].to}
          </h2>
        </div>
      )}
      <div className="flebox24">
        <div className="image2">
          <h2>Priority Boarding</h2>
          <img src="2495818.png" alt="" />
          <button>Add for $30</button>
        </div>
        <div className="image2">
          <h2>Priority Boarding</h2>
          <img src="6232748.png" alt="" />
          <button>Add for $30</button>
        </div>
        <div className="image3">
          <h2>Priority Boarding</h2>
          <img src="Untitled (1).png" alt="" />
          <button>Add for $30</button>
        </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
};

export default Select;
