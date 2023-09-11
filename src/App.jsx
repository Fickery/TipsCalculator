import { useState } from "react";
import Left from "./Left";
import Right from "./Right";
import "./App.scss";

export default function App() {
  const [billAmount, setBillAmount] = useState(0);
  const [personAmount, setPersonAmount] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [perCost, setPerCost] = useState(0);

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
        setBillAmount={setBillAmount}
        personAmount={personAmount}
        setPersonAmount={setPersonAmount}
        selectedTip={selectedTip}
        setSelectedTip={setSelectedTip}
        perCost={perCost}
        setPerCost={setPerCost}
      />
    </div>
  );
}
