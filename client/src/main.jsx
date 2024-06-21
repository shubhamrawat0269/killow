import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import router from "./Routes";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" reverseOrder={false} />
  </React.StrictMode>
);
