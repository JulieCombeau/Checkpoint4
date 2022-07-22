/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

import backendAPI from "../services/backendAPI";

const CurrentUsersContext = createContext();

export function CurrentUsersContextProvider({ children }) {
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    backendAPI
      .get("/api/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <CurrentUsersContext.Provider value={{ users, setUsers }}>
      {children}
    </CurrentUsersContext.Provider>
  );
}

export default CurrentUsersContext;
