/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

import backendAPI from "../services/backendAPI";

const CurrentGameContext = createContext();

export function CurrentGameContextProvider({ children }) {
  const [games, setGames] = useState([]);

  const getAllGames = () => {
    backendAPI
      .get("/api/games")
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    getAllGames();
  }, []);

  return (
    <CurrentGameContext.Provider value={{ games, setGames }}>
      {children}
    </CurrentGameContext.Provider>
  );
}

export default CurrentGameContext;
