import styles from "./header.module.css";
import React from "react";

const Header = ({
  Lotto,
  included,
  setIncluded,
  selected,
  setSelected,
  history,
  setHistory,
  displayHistory,
  setDisplayHistory,
}) => {
  const handleDraw = () => {
    if (included.length < 6) {
      const selectedNumbers = Lotto.makeSelectedNumber();
      setHistoryAndSetSelect(selectedNumbers);
    } else {
      const selectedNumbers = Lotto.makeSelectedNumber(included);
      setHistoryAndSetSelect(selectedNumbers);
    }
  };

  const setHistoryAndSetSelect = (selectedNumbers) => {
    setSelected(selectedNumbers);
    const newHistory = [selectedNumbers, ...history];
    console.log(newHistory.length > 5);
    newHistory.length = newHistory.length > 5 ? 5 : newHistory.length;
    setHistory(newHistory);
  };
  const handleHistory = () => {
    setDisplayHistory(!displayHistory);
  };
  const handleInit = () => {
    setIncluded([]);
    setHistory([]);
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
