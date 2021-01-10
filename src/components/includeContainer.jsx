import React from "react";
import styles from "./includeContainer.module.css";

const IncludeContainer = ({
  initArray,
  setIncluded,
  included,
  includeDisplay,
}) => {
  const display = includeDisplay ? styles.visible : styles.hidden;

  const handleClick = (event) => {
    event.preventDefault();
    const value = Number(event.target.textContent);
    let newInclude;
    if (included.indexOf(value) !== -1) {
      newInclude = included.filter((num) => num !== value);
    } else {
      newInclude = [...included, value];
    }
    newInclude.sort((a, b) => a - b);
    setIncluded(newInclude);
  };

  return (
    <div className={`${styles.wrapper} ${display}`}>
      <div className={styles.container}>
        {initArray.map((num) => {
          if (included.indexOf(num) === -1) {
            return (
              <div
                key={Math.random() * Math.random()}
                className={styles.num}
                onClick={handleClick}
              >
                {num}
              </div>
            );
          }
          return (
            <div
              key={Math.random() * Math.random()}
              className={`${styles.num} ${styles.included}`}
              onClick={handleClick}
            >
              {num}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IncludeContainer;
