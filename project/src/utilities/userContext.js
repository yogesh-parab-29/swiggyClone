import React, { createContext } from "react";

const userContext = createContext({
  user: { name: "Dummy", email: "dummymail@gmail.com" },
});

export default userContext;
