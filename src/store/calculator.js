import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  previousVal: 0,
  currentVal: 0,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    add(state, action) {
      state.add += action.payload;
    },
    subtract(state, action) {
      state.subtract -= action.payload;
    },
    multiply(state, action) {
      state.multiply *= action.payload;
    },
    divide(state, action) {
      state.divide /= action.payload;
    },
    percentage(state, action) {
      state.percentage = state.percentage;
    },
    sign(state) {
      state.sign = -1 * state.sign;
    },
    clear(state) {
      state.previousVal = 0;
      state.currentVal = 0;
    },
    add(state, action) {
      state.currentVal = action.payload;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;
export default calculatorSlice.reducer;
