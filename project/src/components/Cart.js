import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../utilities/cartSlice";

const Cart = () => {
  const handleClick = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") e.preventDefault();
    if (e.type === "wheel") e.target.blur();
  };
  const dispatch = useDispatch();
  const handleAddItem = (dishInfo) => dispatch(addToCart(dishInfo));
  const handleRemoveItem = (dishInfo) => dispatch(removeFromCart(dishInfo));
  const [user, setUser] = useState(null);
  const cartItems = useSelector((store) => store.cart.items);

  const totalItems = cartItems.reduce(
    (total, cartItem) => total + cartItem.count,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, cartItem) =>
      total + (cartItem.card.info.price / 100) * cartItem.count,
    0
  );
  // const resItem = useSelector((store) => store.restaurant.fetchedRes);

  return (
    <>
      <section className="cart-section">
        <div className="section">
          <div className="user-details">
            <div className="user-basicInfo">
              <h3 className="user-acc">Account</h3>
              <p>
                To place your order now, log in to your existing account or sign
                up.
              </p>
              <div className="btn-section">
                <button
                  className="secondary-btn"
                  onClick={() => {
                    setUser("old-user");
                  }}
                >
                  <p>Have an account?</p>
                  <span>LOGIN</span>
                </button>
                <button
                  className="primary-btn"
                  onClick={() => {
                    setUser("new-user");
                  }}
                >
                  <p>New User?</p>
                  <span>SIGN UP</span>
                </button>
              </div>
              {user === "old-user" && (
                <>
                  <p className="title-text">
                    Enter login details or <a href="">create an account</a>
                  </p>
                  <input
                    type="number"
                    maxLength="10"
                    minLength="1"
                    placeholder=" Please provide a number"
                    // onClick={()=>handleClick}
                    onKeyDown={handleClick}
                    onWheel={handleClick}
                    // onScroll = {()=>handleClick}
                    className="user-ContactNo"
                  />
                </>
              )}
            </div>
            <div className="user-basicInfo">
              <h3 className="user-acc">Delivery address</h3>
            </div>
            <div className="user-basicInfo">
              <h3 className="user-acc">Payment</h3>
            </div>
          </div>
          <aside className="cart-summary">
            <div className="cart-summary-info">
              {cartItems.length === 0 ? (
                <div className="empty-cart-alert">
                  No items added to the cart
                </div>
              ) : (
                <div className="res-info">
                  <div className="res-img">
                    <img src="" alt="" />
                  </div>
                  <div className="res-name"></div>
                </div>
              )}

              {cartItems.map((cartItem) => {
                console.log(cartItem);
                const vegClassifier =
                  cartItem?.card?.info?.itemAttribute?.vegClassifier;
                return (
                  <div className="order-info" key={cartItem.card.info.id}>
                    <p
                      className={`typeClassifier ${vegClassifier?.toLowerCase()}`}
                    ></p>
                    <div className="res-dish">{cartItem.card.info.name}</div>
                    <div className="item-count">
                      <span
                        className="subtract"
                        onClick={() => handleRemoveItem(cartItem)}
                      >
                        {" "}
                        -{" "}
                      </span>
                      <span className="count">{cartItem.count}</span>
                      <span
                        className="add"
                        onClick={() => handleAddItem({ ...cartItem, count: 1 })}
                      >
                        {" "}
                        +{" "}
                      </span>
                    </div>
                    <div className="item-price">
                      {(cartItem.card.info.price / 100) * cartItem.count}
                    </div>
                  </div>
                );
              })}
              <div className="order-bill-details">
                <div>Bill Details </div>
                <span className="bill-block">
                  {" "}
                  <p className="bill-title"> Item Total</p>{" "}
                  <p className="bill-amount">{parseFloat(totalPrice).toFixed(2)}</p>
                </span>
                <span className="bill-block">
                  <p className="bill-title">GST and Restaurant charges </p>
                  <p className="bill-amount">{parseFloat(0.05 * totalPrice).toFixed(2)}</p>
                </span>
              </div>
              <div className="bill-block">
                <h3>GRAND TOTAL</h3>
                <div className="bill-amount">{parseFloat(totalPrice * 1.05).toFixed(2)}</div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Cart;
