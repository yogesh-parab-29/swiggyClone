import userContext from "../utilities/userContext";
import { useContext } from "react";

const Footer = () => {
  // const { user } = useContext(userContext);
  return (
    <>
      <section className="footer">
        <div className="section">
          {" "}
          <p>Made by Yogesh Parab with ❤️</p>
          <p>&copy; 2023 Tummy Eats. All rights reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
