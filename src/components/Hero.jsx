import imageCollection from "../images/image-collection.png";
import "./Hero.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />
      <img
        className="image-collection"
        src={imageCollection}
        alt="Collection of various images"
      />
      <div className="text-content-container">
        <h1 className="text-content-label">Online Experiences</h1>
        <p className="text-content">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
