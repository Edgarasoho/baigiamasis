import React from "react";
import ImageSlider from "../../SlideShow/SlideShow";
import "./About.scss";
function About() {
  return (
    <div className="about">
      <h1>APIE MUS</h1>
      <p>Čia galite rašyti norimą tekstą ir jį rodyti vartotojui.</p>
      <ImageSlider />
    </div>
  );
}

export default About;
