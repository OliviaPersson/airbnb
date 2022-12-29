import React from "react";
import Hero from "./components/Hero";
import Card from "./components/Card";
import katieImage from "./images/katie-zaferes.png";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Hero />
      <Card
        img={katieImage}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price="136"
      />
    </React.Fragment>
  );
}

export default App;
