import React from "react";
import ReactDOM from "react-dom/client";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import UserProvider from "./context/LoginContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);
