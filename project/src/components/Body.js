import RestaurantCard from "./RestaurantCard";
import { RestaurantData } from "../data/restaurantData";
import img from "../img/search-icon.png";
import { useState, useEffect, useContext } from "react";
import ShimmerCard from "./ShimmerUi";
import { Link } from "react-router-dom";
import { filteredData } from "../utilities/helper";
import useOnline from "../utilities/useOnline";
import userContext from "../utilities/userContext";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredResData, setFilteredResData] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  // const { user, setUser } = useContext(userContext);
  // console.log(setUser, 1);

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
    // console.log(restaurantDataJSON.data.cards[2].data.data.cards);
  }
  const isOnline = useOnline();
  if (!isOnline) return <h1>Ooops you are offline</h1>;

  return (
    <>
      <div className="searchbox-container ">
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
              // console.log(data);
              // setFilteredResData(data);
            }}
          />
          {/* <input type="text" value={user.name} onChange={(e)=>{
            console.log(...user);
            return setUser({
              ...user,
              name: e.target.value,
            })
          }}/>
          <input type="text" value={user.email} onChange={(e)=>{
            console.log(...user);
            return setUser({
              ...user,
              email: e.target.value,
            })
          }}/> */}
        </div>
      </div>
      <div className="rc-container">
        {restaurantData.length === 0
          ? Array(15)
              .fill()
              .map((_, index) => <ShimmerCard key={index} />)
          : filteredResData.map((res) => {
              return (
                <Link to={"/restaurant/" + res.data.id} key={res.data.id}>
                  <RestaurantCard {...res.data}></RestaurantCard>
                </Link>
              );
            })}
      </div>
    </>
  );
};

export default Body;
