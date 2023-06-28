import userContext from "../utilities/userContext";
import { useContext } from "react";

const Footer = () => {
  // const { user } = useContext(userContext);
  return (
    <>
      <section className="section">
        <div className="footer">This is Footer compoment</div>
        {/* <h1> This site is developed by {user.name}- {user.email}</h1> */}
      </section>
    </>
  );
};

export default Footer;
