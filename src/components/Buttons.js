import React from 'react';
import styles from './Buttons.module.css';
import { useDispatch } from 'react-redux';
import { calculatorActions } from '../store/calculator';

function Buttons(props) {
  const dispatch = useDispatch();

  const inputHandler = (e) => {
    dispatch(calculatorActions.input(e.target.value));
  };

  const clearHandler = () => {
    dispatch(calculatorActions.clear());
  };

  const signHandler = () => {
    dispatch(calculatorActions.sign());
  };

  const decimalPointHandler = (e) => {
    dispatch(calculatorActions.decimal(e.target.value));
  };

  const addHandler = () => {
    dispatch(calculatorActions.add());
  };

  const subtractHandler = () => {
    dispatch(calculatorActions.subtract());
  };

  const multiplyHandler = () => {
    dispatch(calculatorActions.multiply());
  };

  const divideHandler = () => {
    dispatch(calculatorActions.divide());
  };

  const calculate = () => {
    dispatch(calculatorActions.calculate());
  };

  return (
    <React.Fragment>
      <button
        className={`${styles.tworows} ${styles.darkbtn}`}
        id="clear"
        type="clear"
        onClick={clearHandler}
      >
        AC
      </button>
      <button onClick={signHandler} className={styles.darkbtn}>
        +/-
      </button>
      <button
        onClick={divideHandler}
        className={styles.orangebtn}
        id="divide"
        type="operator"
      >
        /
      </button>
      <button onClick={inputHandler} value={7} type="number">
        7
      </button>
      <button onClick={inputHandler} value={8} type="number">
        8
      </button>
      <button onClick={inputHandler} value={9} type="number">
        9
      </button>
      <button
        onClick={multiplyHandler}
        className={styles.orangebtn}
        id="multiply"
        type="operator"
      >
        *
      </button>
      <button onClick={inputHandler} value={4} type="number">
        4
      </button>
      <button onClick={inputHandler} value={5} type="number">
        5
      </button>
      <button onClick={inputHandler} value={6} type="number">
        6
      </button>
      <button
        onClick={subtractHandler}
        className={styles.orangebtn}
        id="subtract"
        type="operator"
      >
        -
      </button>
      <button onClick={inputHandler} value={1} type="number">
        1
      </button>
      <button onClick={inputHandler} value={2} type="number">
        2
      </button>
      <button onClick={inputHandler} value={3} type="number">
        3
      </button>
      <button onClick={addHandler} className={styles.orangebtn}>
        +
      </button>
      <button onClick={inputHandler} className={styles.tworows} value={0}>
        0
      </button>
      <button onClick={decimalPointHandler} value={'.'}>
        .
      </button>
      <button onClick={calculate} className={styles.orangebtn}>
        =
      </button>
    </React.Fragment>
  );
}

export default Buttons;
