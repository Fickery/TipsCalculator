import { useState } from "react";

import PropTypes from "prop-types";
import "./right.scss";

Right.propTypes = {
  billAmount: PropTypes.number.isRequired,
  setBillAmount: PropTypes.func.isRequired,
  perCost: PropTypes.number.isRequired,
  setPerCost: PropTypes.func.isRequired,
  personAmount: PropTypes.number.isRequired,
  setPersonAmount: PropTypes.func.isRequired,
  selectedTip: PropTypes.number.isRequired,
  setSelectedTip: PropTypes.func.isRequired,
};

export default function Right(props) {
  const isResetDisabled = props.billAmount === 0 || props.personAmount === 0;

  let tipAmount = props.perCost - props.billAmount / props.personAmount;
  tipAmount =
    isNaN(tipAmount) || !isFinite(tipAmount) || tipAmount < "" ? 0 : tipAmount;

  // let perTotal =
  //   props.billAmount === 0 || props.personAmount === 0 ? 0 : props.perCost;
  let perTotal = props.billAmount / props.personAmount + tipAmount;
  perTotal =
    isNaN(perTotal) || !isFinite(perTotal) || perTotal < "" ? 0 : perTotal;

  return (
    <div className="right">
      <div className="right__group">
        <div className="leftmain__cont">
          <div className="right__text">
            <p className="right__label">Tip Amount</p>
            <p className="right__textsmall">/ person</p>
          </div>

          <h3 className="right__inbtn">${tipAmount.toFixed(2)}</h3>
        </div>

        <div className="rightmain__cont">
          <div className="right__text">
            <p className="right__label">Total</p>
            <p className="right__textsmall">/ person</p>
          </div>

          <h3 className="right__inbtn">${perTotal.toFixed(2)}</h3>
        </div>
      </div>

      <button className="right__btn" disabled={isResetDisabled}>
        Reset
      </button>
    </div>
  );
}
