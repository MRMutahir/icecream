import React from "react";

function Footer() {
  return (
    <div className="main_footer">
      <div className="main_footer_cards">
        <div className="main_footer_card">
          <div className="foo_btn">CAFE</div>
          <div>
            <p className="foo_card_heading">Chicago</p>
            <p>Fusce ut velit laoreet, tempus arcu molestie vulputate</p>
          </div>
          <hr />
          <div>
            <p className="foo_card_heading">Monday - Friday</p>
            <p className="time_foo">06:00 AM - 10:00 PM</p>
          </div>
          <div>
            <p className="foo_card_heading">Saturday - Sunday</p>
            <p className="time_foo">08:00 AM - 16:00 PM</p>
          </div>
          <div className="noreply">
            +61(0) 383 766 284 <br />
            noreply@envato.com
          </div>
        </div>{" "}
        <div className="main_footer_card">
          <div className="foo_btn" style={{ background: "#C5E898" }}>
            FOOD TRUCK
          </div>
          <div>
            <p className="foo_card_heading">Chicago</p>
            <p>Fusce ut velit laoreet, tempus arcu molestie vulputate</p>
          </div>
          <hr />
          <div>
            <p className="foo_card_heading">Monday - Friday</p>
            <p className="time_foo">06:00 AM - 10:00 PM</p>
          </div>
          <div>
            <p className="foo_card_heading">Saturday - Sunday</p>
            <p className="time_foo">08:00 AM - 16:00 PM</p>
          </div>
          <div className="noreply">
            +61(0) 383 766 284 <br />
            noreply@envato.com
          </div>
        </div>{" "}
        <div className="main_footer_card">
          <div className="foo_btn">CAFE</div>
          <div>
            <p className="foo_card_heading">Chicago</p>
            <p>Fusce ut velit laoreet, tempus arcu molestie vulputate</p>
          </div>
          <hr />
          <div>
            <p className="foo_card_heading">Monday - Friday</p>
            <p className="time_foo">06:00 AM - 10:00 PM</p>
          </div>
          <div>
            <p className="foo_card_heading">Saturday - Sunday</p>
            <p className="time_foo">08:00 AM - 16:00 PM</p>
          </div>
          <div className="noreply">
            +61(0) 383 766 284 <br />
            noreply@envato.com
          </div>
        </div>
      </div>
      <div className="Main_sec_child_buttons">
        <button className="Products">Products</button>
        <button className="made">How it’s made?</button>
      </div>
      <div className="footer_sab_heading">
        <div className="foo_heading">
          <h2>homemade ice cream made </h2>
          <h1>with passion</h1>
        </div>
        <div className="foo_heading_icon">
          <ul>
            <li><img src="\assets\github.png" alt="github" /></li>
            <li><img src="\assets\telegram.png" alt="telegram" /></li>
            <li><img src="\assets\facebook.png" alt="facebook" /></li>
          </ul>
          <p>
            Feel free to contact{" "}
            <span style={{ color: "#D41443" }}>+61 (0) 383 766 284</span>
          </p>
        </div>
      </div>
      <div className="footerLastLine">
        <p> © 2019 - IceCream. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
