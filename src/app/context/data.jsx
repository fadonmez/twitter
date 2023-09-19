"use client";

import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const initialAccounts = [
    {
      name: "Fatih",
      username: "fatihdonmezq",
      image:
        "https://pbs.twimg.com/profile_images/1636465678180818956/lQ8gtLTW_400x400.jpg",
      isActive: false,
    },
    {
      name: "Fatih",
      username: "fatihsoftware",
      image:
        "https://pbs.twimg.com/profile_images/1640376708472635392/Aq6cNpkx_normal.jpg",
      isActive: true,
    },
  ];

  const [accounts, setAccounts] = useState(initialAccounts);

  const [trends] = useState([
    {
      title: "Kaan",
      postCount: 64252,
      category: "Turkiye",
    },
    {
      title: "Fenerbahçe-Nodslajnfd",
      postCount: null,
      category: "Spor",
    },
    {
      title: "Mesut Özil",
      postCount: 30000,
      category: "Futbol",
    },
    {
      title: "Kaan",
      postCount: 64252,
      category: "Turkiye",
    },
    {
      title: "Fenerbahçe-Nodslajnfd",
      postCount: null,
      category: "Spor",
    },
    {
      title: "Mesut Özil",
      postCount: 30000,
      category: "Futbol",
    },
    {
      title: "Kaan",
      postCount: 64252,
      category: "Turkiye",
    },
    {
      title: "Fenerbahçe-Nodslajnfd",
      postCount: null,
      category: "Spor",
    },
    {
      title: "Mesut Özil",
      postCount: 30000,
      category: "Futbol",
    },
    {
      title: "Kaan",
      postCount: 64252,
      category: "Turkiye",
    },
    {
      title: "Fenerbahçe-Nodslajnfd",
      postCount: null,
      category: "Spor",
    },
    {
      title: "Mesut Özil",
      postCount: 30000,
      category: "Futbol",
    },
  ]);

  const [activeUser, setActiveUser] = useState(
    accounts.find((account) => account.isActive)
  );

  const setUser = (selectedAccount) => {
    selectedAccount.isActive = true;
    setActiveUser(selectedAccount);
  };
  const [posts, setPosts] = useState([]);

  const data = {
    posts,
    setPosts,
    trends,
    accounts,
    setAccounts,
    activeUser,
    setUser,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export const useDataContext = () => useContext(DataContext);
