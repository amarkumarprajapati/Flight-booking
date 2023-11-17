import React from "react";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Adddetails from "./Pages/Adddetails";
import Conformation from "./Pages/Conformation";
import Details from "./Pages/Details";
import Select from "./Pages/Select";
import Selectclass from "./Pages/Selectclass";
import Services from "./Pages/Services";
import Thankyou from "./Pages/Thankyou";
import Navbar from "./Components/Navbar";
import "./index.css";

const Flynew = () => {
  return (
    <>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adddet" element={<Adddetails />} />
          <Route exact path="/conf" element={<Conformation />} />
          <Route exact path="/detail" element={<Details />} />
          <Route exact path="/select" element={<Select />} />
          <Route exact path="/seleclass" element={<Selectclass />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/thank" element={<Thankyou />} />
          <Route exact path="/Navbar" element={<Navbar />} />
        </Routes>
      </Main>
    </>
  );
};

export default Flynew;
