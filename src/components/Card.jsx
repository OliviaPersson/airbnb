import star from "../images/star.png";
import "./Card.css";

const Card = ({
  img,
  rating,
  reviewCount,
  country,
  title,
  price,
  openSpots,
}) => {
  return (
    <div className="card">
      <div className="image-container">
        {openSpots && <button className="badge">SOLD OUT</button>}
        <img className="activity-image" src={img} />
      </div>
      <div className="card-text-container">
        <div className="card-stats">
          <img className="star" src={star} alt="star" />
          <p className="rating">{rating}</p>
          <p className="rating-count">({reviewCount})</p>
          <div className="ellipse"></div>
          <p className="country">{country}</p>
        </div>
        <p className="activity-description">{title}</p>
        <p className="cost">
          <strong>From ${price} </strong>/ person
        </p>
      </div>
    </div>
  );
};

export default Card;
