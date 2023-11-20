import React from "react";

function Cards() {
  return (
    <section className="cards_main">
      <div className="cards_heading">
        <h2>100% natural</h2>
        <h1>products</h1>
      </div>
      <div className="cards">
        <div className="cardOne">
          <img
            src="\assets\home-pic1.png"
            className="card_img"
            alt="starberry"
          />

          <div className="carddetails">
            {" "}
            <div className="card_heading">
              <h1>ice cream</h1>
            </div>
            <div className="card_dots">...</div>
            <div className="card_para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et
              </p>
            </div>
            <div className="card_icon">
              <img src="\assets\arrow-right 3.png" alt="" />
            </div>
          </div>
        </div>
        <div>Cards</div>
        <div>Cards</div>
      </div>
    </section>
  );
}

export default Cards;
