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
      <div className="made_content"></div>
    </section>
  );
}

export default Howmade;
