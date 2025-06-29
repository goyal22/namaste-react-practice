import { REST_LOGO_URL } from "../utils/Constants";
const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className="card">
      <img
        src={REST_LOGO_URL + cloudinaryImageId}
        alt={cloudinaryImageId}
        className="card-img"
      />
      <div className="card-content">
        <h2 className="restaurant-name">{name}</h2>
        <p className="dish-name">{cuisines.join(",")}</p>
        <div className="rating">{avgRating}</div>
        <div className="rating">{costForTwo}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
