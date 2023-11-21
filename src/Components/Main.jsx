import React from "react";
import Navbar from "./Navbar";
import Main_sec from "./Main_sec";
import Container from "@mui/material/Container";
import Cards from "./Cards";
import Howmade from "./Howmade";
import Sliders from "./Sliders";
import Footer from "./Footer";
import ResponsiveAppBar from "./Navbar";
function Main() {
  return (
    <>
      {" "}
      <section className="main_container">
        <Container maxWidth="xl">
          <div className="main_container_child">
            <ResponsiveAppBar />
            <Main_sec />
          </div>
        </Container>
      </section>
      <Container>
        <Cards />
      </Container>
      <section className="">
        <Container>
          <Howmade />
        </Container>
      </section>
      <section className="footer_section">
        <Container>
          <Footer />
        </Container>
      </section>
    </>
  );
}

export default Main;
