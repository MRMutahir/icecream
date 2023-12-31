import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import Modal from "./Modal";
function Navbar() {
  const [navModal, setModal] = useState(false);
  function ModalFoo() {
    console.log("toogel button");
    setModal((prevModal) => !prevModal);
  }
  return (
    <nav className="main_navbar">
      <div className="main_logo">
        {" "}
        <img
          height={"100%"}
          width={"100%"}
          src="\assets\logo 1.png"
          alt="web_logo"
        />
      </div>
      <div className="nav_value">
        <ul>
          <li style={{ color: "#D41443" }}>Home</li>
          <li>About us</li>
          <li>How it’s made?</li>
          <li>Our products</li>
          <li>Contact</li>
        </ul>
      </div>
      <ViewHeadlineIcon
        onClick={() => ModalFoo()}
        className="ViewHeadlineIcon"
      />
      {navModal && <Modal />}

      <div className="nav_btn">
        <span> Buy now</span>
        <ArrowForwardIosIcon />
      </div>
    </nav>
  );
}

export default Navbar;
