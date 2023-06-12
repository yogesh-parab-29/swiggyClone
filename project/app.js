// import React from "react";
// import ReactDOM from "react-dom/client";

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

// const title = <h1>Namaste React!!!!</h1>;

// const Heading = () => {
//   return (
//     <div>
//       {title}
//       <h2>Namaste React Functional Component</h2>
//       <h2>This is H2 tag</h2>
//     </div>
//   );
// };

const AppLayout = ()=>(
  <>
  <Header/>
  <Body/>
  <Footer/>
  </>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
