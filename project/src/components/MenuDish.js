import { useDispatch } from "react-redux";
import { MENU_DISH_CDN_URL } from "../constants/constants";
import { addToCart , setLastItemResId } from "../utilities/cartSlice";

const MenuDish = (DishInfo) => {
  // console.log(DishInfo.card.info, DishInfo.card.info.itemAttribute.vegClassifier.toLowerCase());
  const { name, price, description, imageId } = DishInfo?.card?.info;
  const vegClassifier = DishInfo?.card?.info?.itemAttribute?.vegClassifier;
  let imageIdClass;
  // console.log(DishInfo,113);

  !imageId ? (imageIdClass = "hidden") : "";
  const dispatch = useDispatch();

  const handleAddItem = (DishInfo) => {
    // console.log(DishInfo , 11);
    // dispatch(setLastItemResId(DishInfo.resKey))
    dispatch(addToCart(DishInfo));
  };
  return (
    <>
      <div className="dish-info-container">
        <div className="dish-info-left">
          <p className={`typeClassifier ${vegClassifier.toLowerCase()}`}></p>
          <h3 className="dish-name">{name}</h3>
          <h4 className="dish-price">{price / 100}</h4>
          <h5 className="dish-description">{description}</h5>
        </div>
        <div className="dish-info-right">
          <div className="dish-img-container">
            <img
              className={"dish-img " + imageIdClass}
              src={MENU_DISH_CDN_URL + imageId}
              alt=""
            />
          </div>
          <button
            className="add-to-cart"
            onClick={() => handleAddItem(DishInfo)}
          >
            + ADD
          </button>
        </div>
      </div>
    </>
  );
};

export default MenuDish;
