import { useState } from "react";
import styles from "./app.module.css";
import BallContainer from "./components/ballContainer";
import Header from "./components/header";
import History from "./components/history";
import IncludeContainer from "./components/includeContainer";
import down from "./img/angle-down-solid.svg";

function App({ Lotto }) {
  const todayPick = [1, 2, 3, 4, 5, 6];

  const [selected, setSelected] = useState(todayPick);
  const [included, setIncluded] = useState([]);
  const [includeDisplay, setIncludeDisplay] = useState(false);
  const [history, setHistory] = useState([]);
  const [displayHistory, setDisplayHistory] = useState(false);

  const handleDown = () => {
    setIncludeDisplay(!includeDisplay);
  };
  return (
    <div className={styles.app}>
      <Header
        Lotto={Lotto}
        included={included}
        setIncluded={setIncluded}
        selected={selected}
        setSelected={setSelected}
        history={history}
        setHistory={setHistory}
        displayHistory={displayHistory}
        setDisplayHistory={setDisplayHistory}
      />
      <History history={history} displayHistory={displayHistory} />
      <BallContainer selected={selected} />
      <IncludeContainer
        initArray={Lotto.initArray}
        setIncluded={setIncluded}
        included={included}
        includeDisplay={includeDisplay}
      />
      <div className={styles.down} onClick={handleDown}>
        <img src={down} alt="down" />
      </div>
    </div>
  );
}

export default App;
