import star from "../images/star.png";
import "./Card.css";

const Card = ({ items }) => {
  const { coverImg, stats, location, title, price, openSpots } = items;

  return (
    <div className="card">
      <div className="image-container">
        {openSpots === 0 && <button className="badge">SOLD OUT</button>}
        <img className="activity-image" src={coverImg} />
      </div>
      <div className="card-text-container">
        <div className="card-stats">
          <img className="star" src={star} alt="star" />
          <p className="rating">{stats.rating}</p>
          <p className="rating-count">({stats.reviewCount})</p>
          <div className="ellipse"></div>
          <p className="country">{location}</p>
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
