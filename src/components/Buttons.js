import React from 'react';
import styles from './Buttons.module.css';
import { useDispatch } from 'react-redux';
import { calculatorActions } from '../store/calculator';

function Buttons(props) {
  const dispatch = useDispatch();

  const addHandler = (e) => {
    dispatch(calculatorActions.add(e.target.value));
  };

  const clearHandler = () => {
    dispatch(calculatorActions.clear());
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
      <button className={styles.darkbtn}>+/-</button>
      <button className={styles.orangebtn} id="divide" type="operator">
        /
      </button>
      <button onClick={addHandler} value={7} type="number">
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
    </React.Fragment>
  );
}

export default Buttons;
