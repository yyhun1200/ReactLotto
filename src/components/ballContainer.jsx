import React from "react";
import styles from "./ballContainer.module.css";

const BallContainer = ({ selected }) => {
  return (
    <div className={styles.container}>
      {selected.map((ball) => {
        return <span className={styles.ball}>{ball}</span>;
      })}
    </div>
  );
};

export default BallContainer;
