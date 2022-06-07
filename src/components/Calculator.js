import React from 'react';
import styles from './Calculator.module.css';

function Calculator(props) {
  return (
    <main className={styles.app}>
      <section className={styles.output}>
        <div className={styles.previous}>123,456,789</div>
        <div className={styles.current}>
          123,456,789,999,999,999,999,999,999,999,999,999,999
        </div>
      </section>
      <button className={`${styles.tworows} ${styles.darkbtn}`}>AC</button>
      <button className={styles.darkbtn}>DEL</button>
      <button className={styles.orangebtn}>/</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className={styles.orangebtn}>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className={styles.orangebtn}>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className={styles.orangebtn}>+</button>
      <button>0</button>
      <button>.</button>
      <button className={`${styles.tworows} ${styles.orangebtn}`}>=</button>
    </main>
  );
}

export default Calculator;
