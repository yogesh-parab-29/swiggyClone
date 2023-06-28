import { useState } from "react";
import { useSelector } from 'react-redux';

const Cart = () => {
  const handleClick = (e) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      console.log(e);
    }
    if (e.type === "wheel") {
      e.target.blur();
    }
  };

  const [user, setUser] = useState(null);

  const cartItem = useSelector((store)=> store.cart.items);

  return (
    <>
      <section className="cart-section">
        <div className="section">
          <div className="user-details">
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
                <p>New to Swiggy?</p>
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
            {/* <input
              type="number"
              maxLength="10"
              minLength="1"
              placeholder=" Please provide a number"
              onClick={handleClick}
              onKeyDown={(event) => {
                if (event.keyCode === 38 || event.keyCode === 40) {
                  event.preventDefault();
                }
              }}
              // onWheel={(event) => {
              //   event.preventDefault();
              // }}
              className="user-ContactNo"
            /> */}
          </div>
          <aside className="cart-summary">
            <div className="cart-summary-info">
              <div className="res-img">
                <img src="" alt="" />
              </div>
              <div className="res-name"></div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};

export default Cart;
