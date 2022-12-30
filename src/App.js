import React from "react";
import Hero from "./components/Hero";
import Card from "./components/Card";
import { getAllActivityCardData } from "./data";
import "./App.css";

function App() {
  const cardData = [...getAllActivityCardData()];

  return (
    <React.Fragment>
      <Hero />
      <section className="card-list-container">
        {cardData.map((card) => {
          return (
            <Card
              key={card.id}
              img={card.coverImg}
              rating={card.stats.rating}
              reviewCount={card.stats.reviewCount}
              country={card.location}
              title={card.title}
              price={card.price}
              openSpots={card.openSpots}
            />
          );
        })}
      </section>
    </React.Fragment>
  );
}

export default App;
