import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

function Modal() {
  return (
    <section className="Modal_main">
      <div className="croos_btn">
        <CloseIcon className="croosSvg" />
      </div>
      <div className="buyNowBtn">
        <span> Buy now</span>
        <ArrowForwardIosIcon />
      </div>
      <div className="modalList">
        <ul>
          <li style={{ color: "#D41443" }}>Home</li>
          <li>About us</li>
          <li>How it’s made?</li>
          <li>Our products</li>
          <li>Contact</li>
        </ul>
      </div>
    </section>
  );
}

export default Modal;
