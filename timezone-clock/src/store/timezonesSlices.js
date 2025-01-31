import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const timezoneSlice = createSlice({
  name: "timezones",
  initialState: {
    cities: [],
  },
  reducers: {
    setCities(state, action) {
      state.cities = action.payload;
    },
  },
});

export const { setCities } = timezoneSlice.actions;
export default timezoneSlice.reducer;

export const fetchCities = () => async (dispatch) => {
  const response = await axios.get("/timezones.json");
  dispatch(setCities(response.data));
};
