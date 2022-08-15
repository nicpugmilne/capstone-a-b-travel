import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { UserProvider } from "./context/UserContext";
import App from "./App.js";
import { TripsProvider } from "./context/TripsContext";

ReactDOM.render(
  <ChakraProvider>
    <Router>
      <UserProvider>
        <TripsProvider>
          <App />
        </TripsProvider>
      </UserProvider>
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);
