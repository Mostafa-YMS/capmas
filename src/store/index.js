import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import { birthNumbers } from "./reducers";

const store = configureStore({
  reducer: { birthNumbers },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(thunkMiddleware);
  },
  devTools: process.env.NODE_ENV === "production" ? false : true,
});

export default store;
