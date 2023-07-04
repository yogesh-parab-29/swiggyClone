import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartSlice from "../utilities/cartSlice";
import { useState } from "react";

const Navbar = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const resItem = useSelector((store) => store.restaurant.fetchedRes);
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <ul className="navbar-list">
        <li>
          <Link
            to="/"
            onClick={() => handleLinkClick("home")}
            className={activeLink === "home" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => handleLinkClick("about")}
            className={activeLink === "about" ? "active" : ""}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            data-testid="cart"
            to="/cart"
            onClick={() => handleLinkClick("cart")}
            className={activeLink === "cart" ? "active" : ""}
          >
            Cart({cartItem.length})
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
