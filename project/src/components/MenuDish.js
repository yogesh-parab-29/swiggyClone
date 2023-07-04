import { useDispatch } from "react-redux";
import { useState } from "react";
import { MENU_DISH_CDN_URL } from "../constants/constants";
import {
  addToCart,
  clearCart,
  setResMatch,
  removeFromCart,
} from "../utilities/cartSlice";
import { useSelector } from "react-redux";
import Modal from "./Modal";

const MenuDish = (DishInfo) => {
  const {
    name,
    price,
    description,
    imageId,
    id: dishId,
  } = DishInfo?.card?.info;
  const vegClassifier = DishInfo?.card?.info?.itemAttribute?.vegClassifier;
  let imageIdClass;
  !imageId ? (imageIdClass = "hidden") : "";
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const isItemInCart = cartItems.some((item) => item.card.info.id === dishId);
  const item = cartItems.find((item) => item.card.info.id === dishId);
  const handleAddItem = (dishInfo) => dispatch(addToCart(dishInfo));
  const handleRemoveItem = (dishInfo) => dispatch(removeFromCart(dishInfo));
  const successCondition = () => dispatch(clearCart());
  const failureCondition = () => dispatch(setResMatch(true));

  const restaurantMatch = useSelector((store) => store.cart.resMatch);
  const modalHeader = "Items already in Cart";
  const modalDesc =
    "Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?";
  const acceptBtn = "Yes";
  const rejectBtn = "No";

  return (
    <>
      <div className="dish-info-container">
        <div className="dish-info-left">
          <p className={`typeClassifier ${vegClassifier?.toLowerCase()}`}></p>
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
          {isItemInCart ? (
            <div className="item-count">
              <span
                className="subtract"
                onClick={() => handleRemoveItem(DishInfo)}
              >
                {" "}
                -{" "}
              </span>
              <span className="count">{item.count}</span>
              <span
                className="add"
                onClick={() => handleAddItem({ ...DishInfo, count: 1 })}
              >
                {" "}
                +{" "}
              </span>
            </div>
          ) : (
            <button
              className="add-to-cart"
              onClick={() => handleAddItem({ ...DishInfo, count: 1 })}
            >
              + ADD
            </button>
          )}
        </div>
      </div>
      <Modal
        show={restaurantMatch}
        // handleClose={hideModal}
        header={modalHeader}
        desc={modalDesc}
        success={successCondition}
        failure={failureCondition}
        successConditionText={acceptBtn}
        failureConditionText={rejectBtn}
      />
    </>
  );
};

export default MenuDish;
