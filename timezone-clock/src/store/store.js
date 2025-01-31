import { configureStore } from "@reduxjs/toolkit";
import timezoneReducer from "./timezonesSlices.js";

const store = configureStore({
  reducer: {
    timezones: timezoneReducer,
  },
});

export default store;
