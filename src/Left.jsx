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

  return (
    <div className="left">
      <p>
        {props.data}, {inputValue}, {inputPeople}, {selectedTip}%
      </p>
      <div className="left__group">
        <label htmlFor="left__text">Bill</label>
        <input
          className="left__input"
          value={inputValue}
          onChange={handleBillChange}
          prefix={"$"}
          allowLeadingZeros={false}
          thousandSeparator=","
        />
      </div>

      <div className="left__group">
        <label className="left__text" htmlFor="left__text">
          Select Tip %
        </label>
        <ul className="tip">
          <li className="tip__item">
            <button className="tip__btn">5%</button>
          </li>
          <li className="tip__item">
            <button className="tip__btn">10%</button>
          </li>
          <li className="tip__item">
            <button className="tip__btn">15%</button>
          </li>
          <li className="tip__item">
            <button className="tip__btn">25%</button>
          </li>
          <li className="tip__item">
            <button className="tip__btn">50%</button>
          </li>
          <li className="tip__item">
            <button className="tip__btn">custom</button>
          </li>
        </ul>
      </div>

      <div className="left__group">
        <label htmlFor="left__text">Number of People</label>
        <input
          className="left__input"
          type="text"
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
