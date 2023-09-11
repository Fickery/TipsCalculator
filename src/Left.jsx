import { useState } from "react";
import { NumericFormat } from "react-number-format";
import "./left.scss";

const tips = [5, 10, 15, 20, 25, 50];
const TipsInput = ({ label, id, handleChange, name, placeholder }) => {
  const handleInputChange = (values) => {
    const { value } = values;
    const numericValue = parseFloat(
      value.replace(label === "Bill" ? "$" : "", "")
    );
    handleChange(numericValue);
  };

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <NumericFormat
        className="left__input"
        type="text" // Set the type as text
        id={id}
        name={name || id}
        placeholder={placeholder}
        allowLeadingZeros={false}
        thousandSeparator=","
        prefix={label === "Bill" ? "$" : ""}
        onValueChange={handleInputChange}
      />
    </>
  );
};

export default function Left() {
  const [billAmount, setBillAmount] = useState(0);
  const [personAmount, setPersonAmount] = useState(0);
  const [perCost, setPerCost] = useState(0);

  const isBillEmpty = billAmount === "";

  const calculatePerPeronAmount = (tip) => {
    if (personAmount > 0 && billAmount !== "") {
      setPerCost(
        ((1 + 0.01 * tip) * parseFloat(billAmount)) / parseFloat(personAmount)
      );
    } else {
      setPerCost(0);
    }
    console.log(typeof billAmount, typeof personAmount);
  };

  console.log("billAmount:", billAmount);
  console.log("personAmount:", personAmount);
  console.log("perCost:", perCost);

  // const calculatePerPeronAmount = (tip) => {
  //   if (personAmount > 0) {
  //     // setPerCost(((tip / 100) * billAmount) / personAmount);
  //     setPerCost(((1 + 0.01 * tip) * billAmount) / personAmount);
  //   }
  // };

  return (
    <div className="left">
      <p>
        {billAmount}, {personAmount}, ${perCost}
      </p>
      <div className="left__group">
        <TipsInput handleChange={setBillAmount} label="Bill" placeholder="$" />
      </div>

      <div className="left__group">
        <label htmlFor="left__text">Select Tip %</label>
        <div className="tip">
          {tips.map((tip) => {
            return (
              <button
                className={`tip__btn ${isBillEmpty ? "disabled" : ""}`}
                disabled={isBillEmpty}
                onClick={() => calculatePerPeronAmount(tip)}
                key={tip}>
                {tip}%
              </button>
            );
          })}
        </div>
      </div>

      <div className="left__group">
        <TipsInput
          handleChange={setPersonAmount}
          label="Number of People"
          placeholder="People"
        />
      </div>
    </div>
  );
}
