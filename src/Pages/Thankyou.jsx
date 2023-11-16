import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";

const Thankyou = () => {
  const [showback, setShowBack] = useState([]);

  useEffect(() => {
    const showdata = async () => {
      try {
        const backdata = await axios.get(`http://localhost:6000/api/Time`);
        setShowBack(backdata.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    showdata();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      {showback.length > 0 && (
        <div className="lastpage">
          <h1>Your trip from {showback[1].from} to {showback[1].to} is now confirmed</h1>
          <img
            src="21308-removebg-preview.png"
            alt="image"
            className="image6"
          />
        </div>
      )}

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Thankyou;
