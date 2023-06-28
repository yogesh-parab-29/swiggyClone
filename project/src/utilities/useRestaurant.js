import { useState, useEffect } from "react";
import { getRestaurantData } from "./helper";

const useRestaurant = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);
  // console.log(id);

  useEffect(() => {
    getRestaurantMenuData();
  }, []);

  async function getRestaurantMenuData() {
    const restaurantDataMenu = await getRestaurantData(id);
    const resDataJSON = await restaurantDataMenu.json();
    setRestaurantDetails(resDataJSON?.data);
    // console.log(
    //   resDataJSON?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    // );

    // console.log(resDataJSON?.data);
    // console.log(resDataJSON?.data?.cards[0]?.card?.card?.info);
    // console.log(resDataJSON?.data);
    // console.log(restaurantDetails);
    // console.log(restaurantDetails?.cards[0]?.card?.card?.info);
  }
  return restaurantDetails;
};

export default useRestaurant;


