import React from 'react';
import styles from './Calculator.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { calculatorActions } from '../store/calculator';

function Calculator(props) {
  const dispatch = useDispatch();
  const previousVal = useSelector((state) => state.previousVal);
  const currentVal = useSelector((state) => state.currentVal);

  const testHandler = () => {
    dispatch(calculatorActions.add());
  };

  const clearHandler = () => {
    dispatch(calculatorActions.clear());
  };

  console.log(previousVal);

  return (
    <main className={styles.app}>
      <section className={styles.output}>
        <div className={styles.previous}>{previousVal}</div>
        <div className={styles.current}>{currentVal}</div>
      </section>
      <button
        className={`${styles.tworows} ${styles.darkbtn}`}
        id="clear"
        type="clear"
        onClick={clearHandler}
      >
        AC
      </button>
      <button className={styles.darkbtn}>+/-</button>
      <button className={styles.orangebtn} id="divide" type="operator">
        /
      </button>
      <button onClick={testHandler} value={7} type="number">
        7
      </button>
      <button value={8} type="number">
        8
      </button>
      <button value={9} type="number">
        9
      </button>
      <button className={styles.orangebtn} id="multiply" type="operator">
        *
      </button>
      <button value={4} type="number">
        4
      </button>
      <button value={5} type="number">
        5
      </button>
      <button value={6} type="number">
        6
      </button>
      <button className={styles.orangebtn} id="subtract" type="operator">
        -
      </button>
      <button value={1} type="number">
        1
      </button>
      <button value={2} type="number">
        2
      </button>
      <button value={3} type="number">
        3
      </button>
      <button className={styles.orangebtn}>+</button>
      <button className={styles.tworows}>0</button>
      <button>.</button>
      <button className={styles.orangebtn}>=</button>
    </main>
  );
}

export default Calculator;
