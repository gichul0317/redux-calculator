import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from './calculator';

const store = configureStore({
  reducer: calculatorReducer,
});

export default store;
