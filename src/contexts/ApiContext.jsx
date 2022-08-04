import React from "react";

export const ApiContext = React.createContext();

export const ApiProvider = ({ children, value }) => (
  <ApiContext.Provider value={value}>{children}</ApiContext.Provider>
);
