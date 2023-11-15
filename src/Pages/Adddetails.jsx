import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Adddetails = () => {
  // for search data
  const [search, setSearch] = useState([]);
  const [searchQuery, setSearchQuery] = useState({
    from: "",
    to: "",
    departure: "",
    return: "",
    code: "",
  });

  const onchangedata = (e) => {
    const { name, value } = e.target;
    setSearchQuery({
      ...searchQuery,
      [name]: value,
    });
  };
  // send Data
  const getSearch = async () => {
    e.preventDefult();
    try {
      const response = await fetch("http://localhost:1000/api/searchdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchQuery),
      });

      if (response.ok) {
        const data = await response.json();
        setSearch(data);
      } else {
        console.error("Data retrieval not successful");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // getdata
  const [getalldata, setGetalldata] = useState([]);
  const showalldata = async () => {
    try {
      const responcedata = await axios.get(`http://localhost:1000/api/Time`);
      setGetalldata(responcedata.data);
    } catch (error) {
      console.error("show data error", error);
    }
  };
  useEffect(() => {
    showalldata();
  }, []);

  // Popup

  const [popups, setPopups] = useState(getalldata.map(() => false));
  const togglePopup = (index) => {
    const newPopups = [...popups];
    newPopups[index] = !newPopups[index];
    setPopups(newPopups);
  };
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="background1">
        <div className="alldatas">
          <h1>Your Search</h1>
          <h5 htmlFor="">From</h5>
          <input
            type="text"
            name="from"
            id="from"
            value={searchQuery.from}
            onChange={onchangedata}
          />
          <h5 htmlFor="">To</h5>
          <input
            type="text"
            name="to"
            id="to"
            value={searchQuery.to}
            onChange={onchangedata}
          />
          <h5 htmlFor="">Departure</h5>
          <input
            type="date"
            name="departure"
            id="departure"
            value={searchQuery.departure}
            onChange={onchangedata}
          />
          <h5 htmlFor="">Return</h5>
          <input
            type="date"
            name="return"
            id="return"
            value={searchQuery.return}
            onChange={onchangedata}
          />

          <button className="button1" onClick={getSearch}>
            Show Ticket
          </button>
          <br />
        </div>
        <div>
          {getalldata.map((item, index) => (
            <div className="Details" key={index}>
              <p style={{ fontFamily: "sans-serif", width: "20%" }}>
                {" "}
                Total Time -{item.time}
              </p>
              <div className="dipalflex">
                <div className="h1tages">
                  <h1>{item.time}</h1>
                  <p>{item.from}</p>
                  <p>{item.direct}</p>
                </div>
                <div className="line2" />
                <div className="image1">
                  <img style={{ width: "30px" }} src="9.png" alt="img" />
                  <p>Time</p>
                  <p>Direct</p>
                </div>
                <div className="line2" />
                <div />
                <div className="h1tages">
                  <h1>{item.time2}</h1>
                  <p>{item.to}</p>
                  <p>{item.direct}</p>
                </div>
                <div>
                  <div className="line3" />
                </div>
                <span className="button">
                  <button onClick={() => togglePopup(index)}>Book Now</button>
                  {popups[index] && (
                    <div className="popup-container">
                      <div className="popup">
                        <button
                          className="closebutton"
                          onClick={() => togglePopup(index)}>
                          X
                        </button>
                        <h2 style={{ fontFamily: "sans-serif" }}>
                          Flight Details
                        </h2>
                        <div className="backgrounddata">
                          <h5>
                            From - {item.from} {item.time}PM
                          </h5>
                          <img src="10.png" alt="img" />
                          <h5>
                            To - {item.to} {item.time2}
                          </h5>
                          <h5>Rout - {item.direct}</h5>
                          <h5>Total Time-{item.time}</h5>
                        </div>
                        <Link to={"/conf"}>
                          <button
                            onClick={() => {
                              4;
                            }}>
                            Book for - {item.totalfair}
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Adddetails;
