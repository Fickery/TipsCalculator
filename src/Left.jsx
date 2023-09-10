import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import "./left.scss";

export default function Left(props) {
  const data = props.data;
  const [inputValue, setInputValue] = useState("");
  const [inputPeople, setInputPeople] = useState("");
  const [selectedTip, setSelectedTip] = useState(0);

  const handleBillChange = (event) => {
    setInputValue(event.target.value);
    console.log("Input value:", event.target.value);
  };

  const handlePeopleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setInputPeople(value <= 999 ? value : "999");
  };

  const handleTipClick = (percentage) => {
    setSelectedTip(percentage / 100);
    console.log(percentage / 100);
  };

  const isBillEmpty = inputValue === "";

  return (
    <div className="left">
      <p>
        {props.data}, {inputValue}, {inputPeople}, {selectedTip}%
      </p>
      <div className="left__group">
        <label htmlFor="left__text">Bill</label>
        <NumericFormat
          className="left__input"
          value={inputValue}
          onChange={handleBillChange}
          prefix={"$"}
          allowLeadingZeros={false}
          thousandSeparator=","
        />
      </div>

      <div className="left__group">
        <label htmlFor="left__text">Select Tip %</label>
        <ul className="tip">
          {[5, 10, 15, 25, 50].map((percentage) => (
            <li className="tip__item" key={percentage}>
              <button
                className={`tip__btn ${isBillEmpty ? "disabled" : ""}`}
                disabled={isBillEmpty}
                onClick={() => handleTipClick(percentage)}>
                {percentage}%
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="left__group">
        <label htmlFor="left__text">Number of People</label>
        <NumericFormat
          className="left__input"
          type="text"
          value={inputPeople}
          onChange={handlePeopleChange}
          allowLeadingZeros={false}
          thousandSeparator=","
        />
      </div>
    </div>
  );
}
