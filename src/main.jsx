import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import colorSlice from "./features/color.js";
import Userslice from "./UserSlice.js";
import Outlets from "./features/Outlet.js";
import Counter from "./features/Couter.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import reduxSlice from "./features/redux.js";
const store = configureStore({
  reducer: {
    color: colorSlice,
    users: Userslice,
    outlets: Outlets,
    Counter: Counter,
    redux: reduxSlice,
  },
});
const queryclient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryclient}>
        <App />
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
