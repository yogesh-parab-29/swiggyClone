import RestaurantCard from "./RestaurantCard";
import { RestaurantData } from "../data/restaurantData";
import img from "../img/search-icon.png";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerUi";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);

  const [searchInput, setSearchInput] = useState("");

  function filteredData(searchInput, restaurantData) {
    const filterData = restaurantData.filter((item) =>
      item.data.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData;
  }

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const restaurantData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0841825&lng=72.8796038&page_type=DESKTOP_WEB_LISTING"
    );
    const restaurantDataJSON = await restaurantData.json();
    const RestaurantData =
      restaurantDataJSON?.data?.cards[2]?.data?.data?.cards;
    setRestaurantData(RestaurantData);
    setFilteredResData(RestaurantData);
    console.log(restaurantDataJSON.data.cards[2].data.data.cards);
  }

  return (
    <>
      <div className="searchbox-container">
        <div className="search-container">
          <input
            type="text"
            id="search-bar"
            placeholder="What can I help you with today?"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <img
            className="search-icon"
            src={img}
            onClick={(e) => {
              const data = filteredData(searchInput, restaurantData);
              console.log(data);
              setFilteredResData(data);
            }}
          />
        </div>
      </div>
      <div className="rc-container">
        {restaurantData.length === 0 ? (
          Array(15).fill().map((_, index) => (
            <ShimmerCard key={index} />
          ))
        ) : (
          filteredResData.map((res) => {
            return <RestaurantCard {...res.data} key={res.data.id} />;
          })
        )}
      </div>
    </>
  );
};

export default Body;
