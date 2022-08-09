import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import App from "./App.js";

ReactDOM.render(
  <ChakraProvider>  
    <Router>
      <App />
    </Router>
  </ChakraProvider>,
  document.getElementById("root")
);