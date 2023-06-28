import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerUi";
import MenuSection from "./MenuSection";
import useRestaurant from "../utilities/useRestaurant";

const RestaurantData = () => {
  // const [restaurantDetails, setRestaurantDetails] = useState(null);
  const addId = useParams();
  const { id:resId } = addId;
  
  const restaurantDetails = useRestaurant(resId);
  // console.log(restaurantDetails);
  if (!restaurantDetails) {
    return <ShimmerCard />;
  }
  const menuSections =
    restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  // console.log(menuSections);
  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = restaurantDetails?.cards[0]?.card?.card?.info;

  //const {} = restaurantDetails?.cards[2]
  return (
    <>
      <section className="section">
        <div className="restaurant-details">
          <div className="restaurant-info">
            <h1 className="restaurant-name">{name}</h1>
            <h5 className="restaurant-type">{cuisines.join(", ")}</h5>
            <h5 className="restaurant-address">{areaName}</h5>
          </div>
          <div className="restaurant-rating">
            <h1 className="restaurant-star-rating">{avgRating}</h1>
            <p className="restaurant-rating-count">{totalRatingsString}</p>
          </div>
          <div className="restaurant-detail">
            <h3 className="restaurant-timing"></h3>
            <h3 className="restaurant-price">{costForTwoMessage}</h3>
          </div>
        </div>
      </section>
      <section className="section">
        {menuSections
          .filter((menuSection) => menuSection?.card?.card?.title)
          .map((item) => {
            // console.log(item?.card?.card?.title);
            return <MenuSection {...item} key={item?.card?.card?.title} resKey ={resId}/>;
          })}
      </section>
    </>
  );
};

export default RestaurantData;
