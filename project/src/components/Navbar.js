import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartSlice from "../utilities/cartSlice";

const Navbar = () => {
  const cartItem = useSelector(store=> store.cart.items.length);
  // console.log(cartItem.length);

  return (
    <>
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">Cart - {cartItem}</Link>
        </li>
        <li>
          <Link to="/instamart">Instamart</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
