import styles from "./header.module.css";
import React from "react";

const Header = ({
  Lotto,
  initArray,
  included,
  setIncluded,
  selected,
  setSelected,
  history,
  setHistory,
  displayHistory,
  setDisplayHistory,
}) => {
  const setHistoryAndSetSelect = (selectedNumbers) => {
    setSelected(selectedNumbers);
    const newHistory = [selectedNumbers, ...history];
    newHistory.length = newHistory.length > 6 ? 5 : newHistory.length;
    setHistory(newHistory);
  };

  const handleDraw = () => {
    if (included.length < 6) {
      const selectedNumbers = Lotto.makeSelectedNumber(initArray);
      setHistoryAndSetSelect(selectedNumbers);
    } else {
      const selectedNumbers = Lotto.makeSelectedNumber(included);
      setHistoryAndSetSelect(selectedNumbers);
    }
  };
  const handleHistory = () => {
    setDisplayHistory(!displayHistory);
  };
  const handleInit = () => {
    setIncluded([]);
  };
  return (
    <header className={styles.header}>
      <div className={styles.title}>Lotto</div>
      <div className={styles.btnContainer}>
        <button onClick={handleHistory}>History</button>
        <button onClick={handleInit}>초기화</button>
        <button onClick={handleDraw}>Draw</button>
      </div>
    </header>
  );
};

export default Header;
