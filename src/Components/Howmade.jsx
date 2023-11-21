import React from "react";

function Howmade() {
  return (
    <section className="Main_made">
      <div className="made_heading">
        <div className="made_heading_wrapper">
          {" "}
          <h2>tradition and love </h2>
          <h1>how it’s made?</h1>
        </div>
      </div>
      <div className="made_work">
        <div className="made_work_wrapper">
          <div className="made_work_cow_img">
            <img src="\assets\cow.png" alt="cow" />
          </div>
          <div className="made_work_cow_details">
            <h5>
              Fusce ut velit laoreet, tempus arcu eu, molestie tortor. Nam vel
              justo cursus, faucibus lorem eget, egestas eros. Maecenas eleifend
              erat at justo fringilla.
            </h5>
            <p>
              Curabitur lacinia enim at ex blandit, vel pellentesque odio
              elementum. Mauris rhoncus orci in imperdiet placerat. Vestibulum
              euismod nisl suscipit ligula volutpat, a feugiat urna maximus.
              Cras massa nibh, tincidunt.
              <br />
            </p>
            <div className="AliquamSperateLine">
              Aliquam erat volutpat. Aenean accumsan.
            </div>
            <div className="readMore">REad More</div>
          </div>
        </div>
      </div>
      <div className="made_content">
        <div className="made_content_wrapper">
          <div className="logo">
            <img src="public\assets\icon1.png" alt="" />
          </div>
          <div className="number">
            <h1>721</h1>
          </div>
          <div className="details">
            <p>Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
          </div>
        </div>
        <div className="made_content_wrapper">
          <div className="logo">
            <img src="\assets\icon2.png" alt="" />
          </div>
          <div className="number">
            <h1>16kg</h1>
          </div>
          <div className="details">
            <p>Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
          </div>
        </div>{" "}
        <div className="made_content_wrapper">
          <div className="logo">
            <img src="\assets\icon3.png" alt="" />
          </div>
          <div className="number">
            <h1>84</h1>
          </div>
          <div className="details">
            <p>Aliquam ac dui vel dui vulputate consectetur. Mauris massa.</p>
          </div>
        </div>
      </div>
      <div className="grandimg">
        <img src="\assets\home-pic5 1 (1).png" alt="grandimg" />
      </div>
    </section>
  );
}

export default Howmade;
