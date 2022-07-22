import React from "react";

import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import { CurrentUserContextProvider } from "./contexts/UserContext";
import { CurrentUsersContextProvider } from "./contexts/UsersContext";
import { CurrentGamesContextProvider } from "./contexts/GamesContext";
import { CurrentEditorsContextProvider } from "./contexts/EditorsContext";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentGamesContextProvider>
        <CurrentUsersContextProvider>
          <CurrentUserContextProvider>
            <CurrentEditorsContextProvider>
              <ChakraProvider>
                <App />
              </ChakraProvider>
            </CurrentEditorsContextProvider>
          </CurrentUserContextProvider>
        </CurrentUsersContextProvider>
      </CurrentGamesContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
