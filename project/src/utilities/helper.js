export function filteredData(searchInput, restaurantData) {
  const filterData = restaurantData.filter((item) =>
    item.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filterData;
}


export async function getRestaurantData(id) {
  return await fetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0841825&lng=72.8796038&restaurantId=` +
    `${id}` +
    `&submitAction=ENTER`
  );
}