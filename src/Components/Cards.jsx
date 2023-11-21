import React from "react";

function Cards() {
  return (
    <section className="cards_main">
      <div className="cards_heading">
        <h2>100% natural</h2>
        <h1>products</h1>
      </div>
      <div className="cards">
        <div className="cardOne pink">
          <img
            src="\assets\home-pic1.png"
            className="card_img"
            alt="starberry"
          />
          <div className="carddetails">
            {" "}
            <h1>ice cream</h1> <h1>...</h1>{" "}
            <p className="card_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>{" "}
            <img src="\assets\arrow-right 3.png" alt="" />
          </div>
        </div>
        <div className="cardOne brown">
          <img
            src="\assets\home-pic2.png"
            className="card_img"
            alt="starberry"
          />
          <div className="carddetails">
            {" "}
            <h1>ice cream</h1> <h1>...</h1>{" "}
            <p className="card_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>{" "}
            <img src="\assets\arrow-right 3.png" alt="" />
          </div>
        </div>
        <div className="cardOne green">
          <img
            src="\assets\home-pic3.png"
            className="card_img"
            alt="starberry"
          />
          <div className="carddetails">
            {" "}
            <h1>ice cream</h1> <h1>...</h1>{" "}
            <p className="card_para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
            </p>{" "}
            <img src="\assets\arrow-right 3.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
