import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  add: 0,
  subtract: 0,
  multiply: 0,
  divide: 0,
  percentage: 0,
  sign: 0,
  clear: 0,
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
      state.clear = 0;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;
export default calculatorSlice.reducer;
