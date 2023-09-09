import { useState } from "react";
import "./left.scss";

export default function Left() {
  const [inputValue, setInputValue] = useState("");
  const [inputPeople, setInputPeople] = useState("");

  const handleBillChange = (e) => {
    let value = e.target.value;
    value = (Number(value.replace(/\D/g, "")) || "").toLocaleString();
    setInputValue(value);
  };

  const handlePeopleChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setInputPeople(value <= 999 ? value : "999");
  };

  return (
    <div className="left">
      <div className="left__group">
        <label htmlFor="left__text">Bill</label>
        <input
          className="left__input"
          type="text"
          value={"$" + inputValue}
          onChange={handleBillChange}
          placeholder="$"
        />
      </div>

      <div className="left__group">
        <label htmlFor="left__text">Select Tip %</label>
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
          placeholder="0"
        />
      </div>
    </div>
  );
}
