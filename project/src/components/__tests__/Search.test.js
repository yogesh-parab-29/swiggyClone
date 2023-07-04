import Body from "../Body";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utilities/store";
import { restaurantDataDummy } from "../../mocks/dummyData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(restaurantDataDummy),
  });
});

test("search page result", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getAllByTestId("shimmer");

  expect(shimmer.length).toBe(15);
});
