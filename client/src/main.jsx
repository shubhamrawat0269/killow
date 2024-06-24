import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";

import router from "./Routes";
import { persistor, store } from "./store/store";

import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster position="top-right" reverseOrder={false} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
