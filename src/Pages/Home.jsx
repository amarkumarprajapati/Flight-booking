import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const Home = () => {
  // typing
  const [searchdata, setSearchData] = useState([]);
  const [data1, setData] = useState({
    fromdata: "",
    todata: "",
    departuredata: "",
    returndatedata: "",
  });

  const changedata = (e) => {
    const { name, value } = e.target;
    setData({ ...data1, [name]: value });
  };

  const submitdatanew = async (e) => {
    e.preventDefault();
    try {
      const getalldata = await fetch("http://localhost:3000/api/front", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data1),
      });
      if (getalldata.ok) {
        console.log("saved");
      } else {
        console.log("not possible");
      }
    } catch (error) {
      console.error("error", error);
    }
  };

// onclik

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
          <input
            type="text"
            name="fromdata"
            id="fromdata"
            onChange={changedata}
          />
        </div>
        <div className="allinput">
          <label htmlFor="">To</label>
          <br />
          <input type="text" name="todata" id="todata" onChange={changedata} />
        </div>
        <div className="allinput">
          <label htmlFor="">Departure</label>
          <br />
          <input
            type="date"
            name="departuredata"
            id="departuredata"
            onChange={changedata}
          />
        </div>
        <div className="allinput">
          <label htmlFor="">Return</label>
          <br />
          <input
            type="date"
            name="returndatedata"
            id="returndatedata"
            onChange={changedata}
          />
        </div>
        <div className="allinput">
          <div>
            <button className="buttoninput" onClick={submitdatanew}>
              Search
            </button>
          </div>
          <div className="avalable">
            <button href="/adddet" onClick={()=>{window.open('/adddet','_self')}} className="buttoninput">
              Avalable flight
            </button>
          </div>
        </div>
      </div>
      <div className="poplar">
        <h2>Popular Route</h2>
      </div>
      <div className="image">
        <motion.img whileHover={{ scale: 1.1 }} src="2.png" alt="" />
        <motion.img whileHover={{ scale: 1.1 }} src="3.png" alt="" />
        <motion.img whileHover={{ scale: 1.1 }} src="4.png" alt="" />
        <motion.img whileHover={{ scale: 1.1 }} src="6.png" alt="" />
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
      <div style={{ marginTop: "5%" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
