import React from "react";

import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { CurrentUserContextProvider } from "./contexts/UserContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentUserContextProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </CurrentUserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
