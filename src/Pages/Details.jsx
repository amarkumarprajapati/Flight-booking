import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Footer from "../Components/Footer";

const Details = () => {
  const [selected, setSelected] = useState([]);

  // getdata
  useEffect(() => {
    const getalldatanew = async () => {
      try {
        const getdatafrom = await axios.get(`http://localhost:6000/api/Time`);
        setSelected(getdatafrom.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    getalldatanew();
  }, []);

  // POST
  const [postdata, setPostdata] = useState({
    email: "",
    phone: "",
    passenger: "",
    date: "",
    nation: "",
  });

  const onchange = (e) => {
    const { name, value } = e.target;
    setPostdata({ ...postdata, [name]: value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const getdata = await fetch("http://localhost:1000/api/userdata1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postdata),
      });

      if (getdata.ok) {
        console.log("ok");
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div>
          <div className="line7" />
          <div className="line8" />
          <button className="button8">1</button>
          <button className="button8">2</button>
          <button className="button8">3</button>
          <button className="button9">4</button>
          <button className="button8">5</button>
          <button className="button8">6</button>
        </div>
      </div>
      {selected.length > 0 && (
        <div className="datashow">
          <h2>
            {selected[0].from} to {selected[0].to}
          </h2>
        </div>
      )}
      <div className="datashow">
        <h2>Passenger Details</h2>
        <p>Fill out your personal details</p>
      </div>
      <div className="datashow">
        <div className="flexbox5">
          <div className="flexbox6">
            <label htmlFor="">Email Address</label>
            <br />
            <input placeholder="your@mail" type="text" name="email" id="email" onchange={onchange} />
          </div>
          <div className="flexbox6">
            <label htmlFor="">Phone Number</label>
            <br />
            <input type="text" name="phone" id="phone"  onchange={onchange}/>
          </div>
        </div>
        <div className="flexbox5">
          <div className="flexbox6">
            <label htmlFor="">Passenger Name</label>
            <br />
            <input type="text" name="passenger" id="passenger" onchange={onchange} />
          </div>
          <div className="flexbox6">
            <label htmlFor="">Date of Birth</label>
            <br />
            <input type="text" name="date" id="date" onchange={onchange} />
          </div>
        </div>
        <div className="flexbox5">
          <div className="flexbox6">
            <label htmlFor="">Nationalty</label>
            <br />
            <input type="text" name="nation" id="nation" onchange={onchange} />
          </div>
          <div className="flexbox6">
            <label htmlFor="">Gender</label>
            <br />
            {/* <input
              type="radio"
              name="gender"
              id="male"
              className="checkboxall"
            />
            <label htmlFor="male" className="checkbox-label checkboxall">
              Male
            </label>
            <input
              type="radio"
              name="gender"
              id="female"
              className="checkboxall"
            />
            <label htmlFor="female" className="checkbox-label checkboxall">
              Female
            </label>
            <input
              type="radio"
              name="gender"
              id="prefer-not-to-say"
              className="checkboxall"
            />
            <label
              htmlFor="prefer-not-to-say"
              className="checkbox-label checkboxall">
              Prefer not to say
            </label> */}
          </div>
        </div>
      </div>
      <div>
        <div className="flexbo9">
          <h4>Are You Covered for your travels?</h4>
          <p>Add your Smart Insurance for just extra $30.</p>
          <div className="flexbo8">
            <input type="radio" name="" id="" />
            <label htmlFor="">Yes!</label>
            <input type="radio" name="" id="" className="left" />
            <label htmlFor="">No,thanks</label>
          </div>
        </div>
      </div>
      <div className="button2">
        <button onClick={onsubmit}>Continue</button>
      </div>
      <div className="showdown">
        <Footer />
      </div>
    </div>
  );
};

export default Details;
