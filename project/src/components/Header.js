import Navbar from "./Navbar";
import logo from "../img/logo1.png";
/**
 * 
 * 
    Header
        -Logo
        -location
        -Navbar
    Body
        -serachbar
        -restaurantList
        -restaurantCard
            -image
            -name
            -rating
            -cuisines
    Footer
        -links
 * 
 * 
 */

const Header = () => (
  <>
    <header className="header">
        <div className="brand-logo ">
          <img src={logo} alt="" />
        </div>
        <div className="brand-title">TUMMY EATS</div>
      <Navbar />
    </header>
  </>
);

export default Header;
