import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./context/UserContext";
import App from "./App.js";
import { TripsProvider } from "./context/TripsContext";
import { PublicTripsProvider } from "./context/PublicTripsContext";

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <UserProvider>
        <TripsProvider>
          <PublicTripsProvider>
            <App />
          </PublicTripsProvider>
        </TripsProvider>
      </UserProvider>
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);
