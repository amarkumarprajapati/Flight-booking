import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
        margin: "20px",
      }}>
      <div>
        <h1 style={{ fontSize: "50px",color:"rgb(0,150,136)" }}>SkyPlane</h1>
      </div>
      <div style={{ display: "flex", fontSize: "20px" }}>
        <p style={{ marginRight: "10px", marginTop: "30px" }}>Help</p>
        <p style={{ marginLeft: "10px", marginTop: "30px" }}>My trips</p>
        <div className="div1">
          <button className="par">Sign up</button>
          <button className="par1">Log in</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
