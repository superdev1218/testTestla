import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  options: []
}
const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {}
})
export const selectOptions = state => state.option.options;
export const optionReducer = optionSlice.reducer;