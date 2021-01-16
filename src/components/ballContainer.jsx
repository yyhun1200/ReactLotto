import React, { memo } from "react";
import styles from "./ballContainer.module.css";

const BallContainer = memo(({ selected }) => {
  return (
    <div className={styles.container}>
      {selected.map((ball, index) => {
        return (
          <span key={"ball" + index} className={styles.ball}>
            {ball}
          </span>
        );
      })}
    </div>
  );
});

export default BallContainer;
