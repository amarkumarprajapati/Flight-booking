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

const Newflig = () => {
  return (
    <>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adddet" element={<Adddetails />} />
          <Route path="/conf" element={<Conformation />} />
          <Route path="/detail" element={<Details />} />
          <Route path="/select" element={<Select />} />
          <Route path="/seleclass" element={<Selectclass />} />
          <Route path="/services" element={<Services />} />
          <Route path="/thank" element={<Thankyou />} />
          <Route path="/Navbar" element={<Navbar />} />
        </Routes>
      </Main>
    </>
  );
};

export default Newflig;
