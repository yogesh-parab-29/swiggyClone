import TungaDarbar from "../data/restaurantData";
// import { RestaurantData as Restaurant } from "../data/restaurantData";
import { IMG_CDN_URL } from "../constants/constants";
const RestaurantCard = (Restaurant) => {
  const {
    name,
    cuisines,
    avgRating,
    slaString,
    costForTwoString,
    cloudinaryImageId,
    id,
  } = Restaurant;
  // console.log(name,cuisines,avgRating,slaString,costForTwoString,cloudinaryImageId);
  return (
    <>
      <div className="rc-card">
        <div className="rc-img-container">
          <img
            className="rc-img"
            src={`${IMG_CDN_URL + cloudinaryImageId}`}
            alt="restaurant-img"
          />
        </div>
        <h3 className="rc-name">{name}</h3>
        <h4 className="rc-category">{cuisines.join(", ")}</h4>
        <div>
          <span className="rc-rating">{avgRating}</span>
          <span>|</span>
          <span className="rc-edt">{slaString}</span>
          <span>|</span>
          <span className="rc-cost">{costForTwoString}</span>
        </div>
        <div className="rc-quick-view">
          <span>Quick View</span>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
