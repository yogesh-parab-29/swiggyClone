import React, { Suspense, lazy, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import AboutUs from "./src/components/AboutUs";
import Error from "./src/components/Error";
import Cart from "./src/components/Cart";
import ContactUs from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantData from "./src/components/RestaurantData";
// import Instamart from "./src/components/Instamart";
import userContext from "./src/utilities/userContext";
import { Provider } from "react-redux";
import store from "./src/utilities/store";

// const Cart = lazy(() => import("./src/components/Cart"));
const Instamart = lazy(() => import("./src/components/Instamart"));

const AppLayout = () => {
  // const [user, setUser] = useState({
  //   name: "yogesh",
  //   email: "yogeshparab11312@gmail.com",
  // });
  // console.log(user, 11);
  return (
    <Provider store={store}>
      {/* <userContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      > */}
        <Header />
        <Outlet />
        <Footer />
      {/* </userContext.Provider> */}
    </Provider>
  );
};

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />
          </Suspense>
        ),
      },

      {
        path: "/restaurant/:id",
        element: <RestaurantData />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={Router} />);

/* import userContext <>

const [user,setUser] = useState({
  name:"yogesh",
  email:"yogesh@gmail.com",
})
< userContext.provider value={{
  user:user,
  setUser:setUser
}}>
</>

*/
