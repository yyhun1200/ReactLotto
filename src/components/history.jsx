import React from "react";
import BallContainer from "./ballContainer";
import styles from "./history.module.css";

const History = ({ displayHistory, history }) => {
  const visible = displayHistory ? styles.display : styles.hidden;
  return (
    <div className={`${styles.history} ${visible}`}>
      history
      {history.map((array, index) => {
        return (
          <BallContainer
            key={"history" + index}
            className={styles.ballContainer}
            selected={array}
          />
        );
      })}
    </div>
  );
};

export default History;
