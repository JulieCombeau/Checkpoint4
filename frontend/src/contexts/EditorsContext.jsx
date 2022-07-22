/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

import backendAPI from "../services/backendAPI";

const CurrentEditorsContext = createContext();

export function CurrentEditorsContextProvider({ children }) {
  const [editors, setEditors] = useState([]);

  const getAllEditors = () => {
    backendAPI
      .get("/api/editors")
      .then((response) => {
        setEditors(response.data);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  useEffect(() => {
    getAllEditors();
  }, []);

  return (
    <CurrentEditorsContext.Provider value={{ editors, setEditors }}>
      {children}
    </CurrentEditorsContext.Provider>
  );
}

export default CurrentEditorsContext;
