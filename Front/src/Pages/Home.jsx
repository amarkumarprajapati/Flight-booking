import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Home = () => {
  // typing


  return (
    <div>
      <Navbar />
      <div className="allpicture">
        <h1>Best deals are waiting for you</h1>
      </div>
      <div className="nextdiv">
        <div className="allinput">
          <label htmlFor="">From</label>
          <br />
          <input type="text" />
        </div>
        <div className="allinput">
          <label htmlFor="">To</label>
          <br />
          <input type="text" />
        </div>
        <div className="allinput">
          <label htmlFor="">Departure</label>
          <br />
          <input type="text" />
        </div>
        <div className="allinput">
          <label htmlFor="">Return</label>
          <br />
          <input type="text" />
        </div>
        <div className="allinput">
          <div>
            <button>Arroow</button>
          </div>
        </div>
      </div>
      <div className="poplar">
        <h2>Popular Route</h2>
      </div>
      <div className="image">
        <img src="2.png" alt="" />
        <img src="3.png" alt="" />
        <img src="4.png" alt="" />
        <img src="6.png" alt="" />
      </div>
      <div className="flexdiv">
        <div className="flexdivp">
          <img src="7 (1).png" alt="img" />
          <h2>Guarantee of the best price</h2>
          <p>
            We offer only the best deals, if you find the same flight cheaper
            elsewhere, contact us!
          </p>
        </div>
        <div className="flexdivp">
          <img src="Screenshot 2023-10-18 021551.png" alt="img" />
          <h2>Refunds & cancellations</h2>
          <p>
            Your flight got cancelled? We have you covered with our instant
            refund services.
          </p>
        </div>
        <div className="flexdivp">
          <img src="Screenshot 2023-10-18 021644.png" alt="img" />
          <h2>Covid-19 information</h2>
          <p>
            Read about all the travel restrictions due to covid-19 that may
            affect your flight.
          </p>
        </div>
      </div>
      <div className="flightimg">
        <h1>Get our new mobile app and book flights with 10% discount!</h1>
        <h2>
          Download our new SkyPlane app and have control of your trips in your
          pocket. With our app you'll get secret deals and extra booking
          discounts.
        </h2>
        <button>Download in mobile store</button>
      </div>
     <div style={{marginTop:"30px"}}>
     <Footer/>
     </div>
    </div>
  );
};

export default Home;
