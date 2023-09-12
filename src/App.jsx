import { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import "./App.scss";

export default function App() {
  const [billAmount, setBillAmount] = useState("");
  const [personAmount, setPersonAmount] = useState("");
  const [selectedTip, setSelectedTip] = useState(0);
  const [perCost, setPerCost] = useState(0);

  const resetAllValues = () => {
    setBillAmount("");
    setPersonAmount("");
    setSelectedTip(0);
    setPerCost(0);
  };

  return (
    <div id="content" className="main__cont">
      <Left
        billAmount={billAmount}
        setBillAmount={setBillAmount}
        personAmount={personAmount}
        setPersonAmount={setPersonAmount}
        selectedTip={selectedTip}
        setSelectedTip={setSelectedTip}
        perCost={perCost}
        setPerCost={setPerCost}
      />
      <Right
        billAmount={billAmount}
        personAmount={personAmount}
        perCost={perCost}
        resetAllValues={resetAllValues}
      />
    </div>
  );
}
