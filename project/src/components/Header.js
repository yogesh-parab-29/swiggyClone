import Navbar from "./Navbar";
import logo from "../resources/img/logo1.png";

const Header = () => (
  <>
    <header className="header">
        <div className="brand-logo">
          <img data-testid="Logo" src={logo} alt="" />
        </div>
        <div className="brand-title">TUMMY EATS</div>
      <Navbar />
    </header>
  </>
);

export default Header;
