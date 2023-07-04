import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerUi";
import MenuSection from "./MenuSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar ,faWallet } from "@fortawesome/free-solid-svg-icons";
import useRestaurant from "../utilities/useRestaurant";
import { IMG_CDN_URL } from "../constants/constants";
import { faRupeeSign } from "@fortawesome/free-regular-svg-icons";

const RestaurantData = () => {
  const addId = useParams();
  const { id: resId } = addId;
  const restaurantDetails = useRestaurant(resId);
  if (!restaurantDetails) {
    return <ShimmerCard />;
  }
  const menuSections =
    restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(restaurantDetails, 11);
  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cloudinaryImageId,
  } = restaurantDetails?.cards[0]?.card?.card?.info;

  return (
    <>
      <section className="section">
        <div className="restaurant-details">
          <div className="restaurant-info">
            <div className="restaurant-image">
              <img
                className="rc-img"
                src={`${IMG_CDN_URL + cloudinaryImageId}`}
                alt="restaurant-img"
              />
            </div>
            <div className="restaurant-data">
              <h1 className="restaurant-name">{name}</h1>
              <h5 className="restaurant-type">{cuisines.join(", ")}</h5>
              <h5 className="restaurant-address">{areaName}</h5>
            </div>
          </div>
          <div className="restaurant-rating">
            <h3 className="restaurant-star-rating">
              <FontAwesomeIcon icon={faStar} style={{ color: "#06c125" }} />
              {avgRating}
            </h3>

            <p className="restaurant-rating-count">{totalRatingsString}</p>
          </div>
          <div className="restaurant-detail">
            <h5 className="restaurant-timing"></h5>
            <h5 className="restaurant-price"><FontAwesomeIcon className="wallet-icon" icon={faWallet} />{costForTwoMessage}</h5>
          </div>
        </div>
      </section>
      <section className="section">
        {menuSections
          .filter((menuSection) => menuSection?.card?.card?.title)
          .map((item) => {
            return (
              <MenuSection
                {...item}
                key={item?.card?.card?.title}
                resKey={resId}
              />
            );
          })}
      </section>
    </>
  );
};

export default RestaurantData;
