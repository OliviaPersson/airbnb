import "./Card.css";
import katieImage from "../images/katie-zaferes.png";
import star from "../images/star.png";

const Card = () => {
  return (
    <div className="card-container">
      <div className="image-container">
        <button className="sold-out-label">SOLD OUT</button>
        <img className="card-image" src={katieImage} alt="Katie Zaferes" />
      </div>
      <div className="card-text-container">
        <div className="rating-text-container">
          <img className="star" src={star} alt="star" />
          <p className="rating">5.0</p>
          <p className="rating-amount">(6)</p>
          <div className="ellipse"></div>
          <p className="country">USA</p>
        </div>
        <p className="experience-description">
          Life lessons with Katie Zaferes
        </p>
        <p className="cost">
          <strong>From $136 </strong>/ person
        </p>
      </div>
    </div>
  );
};

export default Card;
