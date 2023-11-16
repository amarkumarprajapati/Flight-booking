import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Footer from "../Components/Footer";

const Conformation = () => {
  const [showdata, setShowdata] = useState([]);
  // getvalue
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:6000/api/Time");
        setShowdata(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  // Post data

  const [getalldata, setGetAllData] = useState({
    echonomy: "echonomy",
    automaic: "automaic",
    cabin: "cabin",
    non: "non",
  });

  const submitdata = async () => {
    try {
      const getreq = await fetch("http://localhost:1000/api/searchdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(getalldata),
      });

      if (getreq.ok) {
        console.log("Request successful");
        const alldata = await getreq.json();
        setGetAllData(alldata);
      } else {
        console.error("Error in the request");
      }
    } catch (error) {
      console.error("Error in the try-catch block", error);
    }
  };

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
        <button className="button9">3</button>
        <button className="button8">4</button>
        <button className="button8">5</button>
        <button className="button8">6</button>
      </div>
      {showdata.length > 0 && (
        <div className="divdata">
          <h2>
            {showdata[1].from} to {showdata[1].to}
          </h2>
        </div>
      )}
      <div className="flexbox1">
        <div className="divdata1">
          <div className="h1p">
            <h1>Lowfare</h1>
            <p name="echonomy" value="echonomy" id="echonomy">
              Cabin:Echonomy
            </p>
          </div>
          <div className="h1p">
            <h4>Seact</h4>
            <p name="automaic" value="automaic" id="automaic">
              Automaic Allocated
            </p>
          </div>
          <div className="h1p">
            <h4>Bag</h4>
            <p name="cabin" value="cabin" id="cabin">
              1 Cabin Baggage
            </p>
          </div>
          <div className="h1p">
            <h4>Flexibility</h4>
            <p name="non" value="non" id="non">
              Non-refundable
            </p>
          </div>
          <br />
          <div className="line10" />
          <div className="h1p1">
            <h2>$30</h2>
            <button onClick={submitdata}>Select</button>
          </div>
        </div>
        <div className="divdata1">
          <div className="h1p">
            <h1>Economy</h1>
            <p>Cabin:Echonomy + </p>
          </div>
          <div className="h1p">
            <h4>Seact</h4>
            <p>Seat Choice included</p>
          </div>
          <div className="h1p">
            <h4>bag</h4>
            <p>1 Cabin Baggage</p>
          </div>
          <div className="h1p">
            <h4>Flexibility</h4>
            <p>Non-refundable</p>
          </div>
          <br />
          <div className="line10" />
          <div className="h1p1">
            <h2>$90</h2>
            <button>Select</button>
          </div>
        </div>
        <div className="divdata1">
          <div className="h1p">
            <h1>Premium</h1>
            <p>Cabin:Echonomy</p>
          </div>
          <div className="h1p">
            <h4>Seact</h4>
            <p>Automaic Allocated</p>
          </div>
          <div className="h1p">
            <h4>Bag</h4>
            <p>1 Checked Baggage</p>
          </div>
          <div className="h1p">
            <h4>Flexibility</h4>
            <p>Non-refundable</p>
          </div>
          <br />
          <div className="line10" />
          <div className="h1p1">
            <h2>$120</h2>
            <button>Select</button>
          </div>
        </div>
      </div>
      <div className="footer1">
        <Footer />
      </div>
    </div>
  );
};

export default Conformation;
