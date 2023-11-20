import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Main_sec() {
  return (
    <div className="Main_sec_Parent">
      <div className="Main_sec_child_one">
        <div className="Main_sec_child_heading">
          <h2>ice cream</h2>
          <h2>made with</h2>
          <h1>passion</h1>
        </div>
        <div className="Main_sec_child_buttons">
          <button className="Products">Products</button>
          <button className="made">How it’s made?</button>
        </div>
        <div className="Main_sec_child_items">
          <div className="milk_img">
            <img src="\assets\milk.png" alt="milk" />
          </div>
          <div className="milk_para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>
            <img src="\assets\arrow-right 3.png" alt="" />
          </div>
        </div>
      </div>
      <span className="Main_sec_circle">
        <img
          className="mainIcecreamImg"
          height={"100%"}
          width={"100%"}
          src="\assets\mainIcecream.png"
          alt="Icecream"
        />
      </span>
      <div className="main_sec_child_two">
        <div className="sixteen">
          <span></span>
          <h1>16</h1>
          <h5>cafes</h5>
        </div>
        <div className="twentyThree">
          <span></span>
          <h1>23</h1>
          <h5>food trucks</h5>
        </div>{" "}
        <div className="sootasty">
          <img src="\assets\sotasty.png" alt="sotasty"  className="sotasty"/>
        </div>
      </div>
    </div>
  );
}

export default Main_sec;
