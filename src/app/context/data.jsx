"use client";

import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const data = {
    posts,
    setPosts,
  };
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);
