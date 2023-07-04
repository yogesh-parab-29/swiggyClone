import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utilities/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering Header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("Logo");

  console.log(logo[0].src);

  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Cart item should be 0", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId('cart')
  expect(cart.innerHTML).toBe("Cart - 0")
});
