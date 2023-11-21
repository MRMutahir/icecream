import React from "react";
import Navbar from "./Navbar";
import Main_sec from "./Main_sec";
import Container from "@mui/material/Container";
import Cards from "./Cards";
import Howmade from "./Howmade";
import Sliders from "./Sliders";
import Footer from "./Footer";
function Main() {
  return (
    <>
      {" "}
      <section className="main_container">
        <Container maxWidth="xl">
          <div className="main_container_child">
            <Navbar />
            <Main_sec />
          </div>
        </Container>
      </section>
      <Container>
        <Cards />

        {/* <Sliders/> */}
      </Container>
      <section>
        <Container>
          {" "}
          <Howmade />
          <Footer />
        </Container>
      </section>
    </>
  );
}

export default Main;
