import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Footer from "../Components/Footer";

const Services = () => {
  const [backenddata, setBackEnddata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const backdata = await axios.get(`http://localhost:6000/api/Time`);
        setBackEnddata(backdata.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchdata();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div className="line5" />
        <div className="line6" />
        <button className="button8">1</button>
        <button className="button8">2</button>
        <button className="button8">3</button>
        <button className="button8">4</button>
        <button className="button8">5</button>
        <button className="button9">6</button>
      </div>
      {backenddata.length > 0 && (
        <div>
          <h2>
            {backenddata[1].from} to {backenddata[1].to}
          </h2>
        </div>
      )}
      <div className="table">
        {backenddata.length > 0 && <div>{backenddata[1].time}</div>}
        <div className="flexbox5">
          {backenddata.length > 0 && (
            <div>
              <h1>{backenddata[1].time}</h1>
              <h1> {backenddata[1].from}</h1>
            </div>
          )}
          <div className="line85" />
          <div>
            <img src="9-removebg-preview.png" alt="" />
            <p> {backenddata[1].total}</p>
          </div>
          <div className="line85" />
          {backenddata.length > 0 && (
            <div>
              <h2>{backenddata[1].time2}</h2>
              <h2> {backenddata[1].to}</h2>
            </div>
          )}
        </div>
      </div>
      <div className="flexbox6">
        <div className="borderbocx">
          <div className="allbox">
            <h1>Economy</h1>
            <h4>Cabin:Echo</h4>
          </div>
          <div className="allbox">
            <h3>Seat</h3>
            <h4>1 Cabin Baggage</h4>
            <h4>1 Checked Baggage</h4>
          </div>
          <div className="allbox">
            <h3>Flexinility</h3>
            <h4>Non-refundable</h4>
          </div>
        </div>
        <div className="boundary">
          <h5>No Added Services</h5>
          <img src="Untitled.png" alt="image" className="image25" />
        </div>
      </div>
      <div className="backbround">
        <button>Pay and Continue</button>
      </div>
      <div className="footerdata">
        <Footer/>
      </div>
    </div>
  );
};

export default Services;
