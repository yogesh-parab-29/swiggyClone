import { useState, useEffect } from "react";
import { getRestaurantData } from "./helper";

const useRestaurant = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState(null);

  useEffect(() => {
    getRestaurantMenuData();
  }, []);

  async function getRestaurantMenuData() {
    const restaurantDataMenu = await getRestaurantData(id);
    const resDataJSON = await restaurantDataMenu.json();
    setRestaurantDetails(resDataJSON?.data);
  }
  return restaurantDetails;
};

export default useRestaurant;


