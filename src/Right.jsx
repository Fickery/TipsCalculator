import PropTypes from "prop-types";
import "./right.scss";

export default function Right({
  billAmount,
  perCost,
  personAmount,
  resetAllValues,
}) {
  const isResetDisabled = billAmount === 0 || personAmount === 0;

  let tipAmount = perCost - billAmount / personAmount;
  tipAmount =
    isNaN(tipAmount) || !isFinite(tipAmount) || tipAmount < "" ? 0 : tipAmount;

  let perTotal = billAmount / personAmount + tipAmount;
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

      <button
        className="right__btn"
        onClick={resetAllValues}
        disabled={isResetDisabled}>
        Reset
      </button>
    </div>
  );
}

Right.propTypes = {
  billAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  perCost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  personAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  resetAllValues: PropTypes.func.isRequired,
};
