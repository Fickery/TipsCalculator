import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import { debounce } from "lodash";
import "./left.scss";

const tips = [5, 10, 15, 20, 25, 50];

const TipsInput = ({ label, id, handleChange, name, placeholder, value }) => {
  const debouncedHandleChange = debounce((numValue) => {
    handleChange(numValue);
  }, 500);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <NumericFormat
        className="left__input"
        type="text"
        id={id}
        name={name || id}
        placeholder={placeholder}
        allowLeadingZeros={false}
        thousandSeparator=","
        prefix={label === "Bill" ? "$" : ""}
        onValueChange={(values) =>
          debouncedHandleChange(values.floatValue || "")
        }
        value={value}
      />
    </>
  );
};

export default function Left({
  billAmount,
  setBillAmount,
  perCost,
  setPerCost,
  personAmount,
  setPersonAmount,
  selectedTip,
  setSelectedTip,
}) {
  const isBillEmpty = billAmount === "";

  const handleTipClick = (percentage) => {
    setSelectedTip(percentage / 100);
    console.log(percentage / 100);
  };

  const calculatePerPersonAmount = (tip) => {
    if (personAmount > 0 && billAmount !== "") {
      const calculatedPerCost =
        ((1 + 0.01 * tip) * parseFloat(billAmount)) / parseFloat(personAmount);

      if (isNaN(calculatedPerCost) || !isFinite(calculatedPerCost)) {
        setPerCost(0);
      } else {
        setPerCost(calculatedPerCost);
      }
    } else {
      setPerCost(0);
    }
    console.log(typeof billAmount, typeof personAmount);
  };

  console.log("billAmount:", billAmount);
  console.log("personAmount:", personAmount);
  console.log("perCost:", perCost);

  return (
    <div className="left">
      <div className="left__group">
        <TipsInput
          handleChange={setBillAmount}
          label="Bill"
          placeholder="$"
          value={billAmount}
        />
      </div>

      <div className="left__group">
        <label htmlFor="left__text">Select Tip %</label>
        <div className="tip">
          {tips.map((tip) => {
            return (
              <button
                className={`tip__btn ${isBillEmpty ? "disabled" : ""}`}
                disabled={isBillEmpty}
                onClick={() => {
                  calculatePerPersonAmount(tip);
                  handleTipClick(selectedTip);
                }}
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
          value={personAmount}
        />
      </div>
    </div>
  );
}

TipsInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Left.propTypes = {
  billAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Adjusted for flexibility
  setBillAmount: PropTypes.func.isRequired,
  perCost: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Adjusted for flexibility
  setPerCost: PropTypes.func.isRequired,
  personAmount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Adjusted for flexibility
  setPersonAmount: PropTypes.func.isRequired,
  selectedTip: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Adjusted for flexibility
  setSelectedTip: PropTypes.func.isRequired,
};
