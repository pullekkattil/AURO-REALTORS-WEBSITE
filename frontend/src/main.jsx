import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  extendTheme,
} from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Second from "./pages/Second.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
      path: "/second",
      element: <Second />,
  }
]);

const Theme = extendTheme({
  components: {
    Box,
    Button,
    Container,
    Heading,
    Text,
  },
  colors: {
    brand: {
      red1: "#AC4B3E",
      darkblue1: "#14352",  
      lightblue1: "#09B7B4",
      black1: "#00030A",   
      orange1: "#E57844",
      light1: "#BC9891",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ColorModeScript initialColorMode={Theme.config.initialColorMode} /> */}
    <ChakraProvider theme={Theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
