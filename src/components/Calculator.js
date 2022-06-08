import React from 'react';
import styles from './Calculator.module.css';
import { useSelector } from 'react-redux';
import Buttons from './Buttons';

function Calculator(props) {
  const previousVal = useSelector((state) => state.previousVal);
  const currentVal = useSelector((state) => state.currentVal);

  return (
    <main className={styles.app}>
      <section className={styles.output}>
        <div className={styles.previous}>{previousVal}</div>
        <div className={styles.current}>{currentVal}</div>
      </section>
      <Buttons />
    </main>
  );
}

export default Calculator;
