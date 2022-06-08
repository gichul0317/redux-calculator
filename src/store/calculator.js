import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  previousVal: '0',
  currentVal: '0',
  operator: '',
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: initialState,
  reducers: {
    clear(state) {
      state.previousVal = '0';
      state.currentVal = '0';
    },
    input(state, action) {
      state.currentVal = state.currentVal.replace(/^0+/, '') + action.payload;
      // console.log(state.currentVal);
    },
    add(state) {
      state.previousVal = state.currentVal;
      // console.log(state.previousVal);
      state.currentVal = '0';
      state.operator = 'add';
      // console.log(state.currentVal);
    },
    subtract(state) {
      state.previousVal = state.currentVal;
      state.currentVal = '0';
      state.operator = 'subtract';
    },
    calculate(state) {
      if (state.operator === 'add') {
        state.currentVal = String(
          parseFloat(state.previousVal) + parseFloat(state.currentVal)
        );
        console.log(state.currentVal);
        console.log(state.previousVal);
      } else if (state.operator === 'subtract') {
        state.currentVal = String(
          parseFloat(state.previousVal) - parseFloat(state.currentVal)
        );
      }
    },
  },
});

export const calculatorActions = calculatorSlice.actions;
export default calculatorSlice.reducer;
