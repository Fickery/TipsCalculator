import PropTypes from "prop-types";
import { NumericFormat } from "react-number-format";
import "./left.scss";

Left.propTypes = {
  billAmount: PropTypes.number,
  setBillAmount: PropTypes.func,
  perCost: PropTypes.number,
  setPerCost: PropTypes.func,
  personAmount: PropTypes.number,
  setPersonAmount: PropTypes.func,
  selectedTip: PropTypes.number,
  setSelectedTip: PropTypes.func,
};

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
        type="text"
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

TipsInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
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

  return (
    <div className="left">
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
                onClick={() => {
                  calculatePerPeronAmount(tip);
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
        />
      </div>
    </div>
  );
}
