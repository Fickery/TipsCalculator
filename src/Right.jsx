import "./right.scss";

export default function Right() {
  return (
    <div className="right">
      <div className="right__group">
        <div className="leftmain__cont">
          <div className="right__text">
            <p className="right__label">Tip Amount</p>
            <p className="right__textsmall">/ person</p>
          </div>

          <h1 className="right__calculation">$0.00</h1>
        </div>

        <div className="rightmain__cont">
          <div className="right__text">
            <p className="right__label">Total</p>
            <p className="right__textsmall">/ person</p>
          </div>

          <h1 className="right__calculation">$0.00</h1>
        </div>
      </div>

      <button className="right__btn">Reset</button>
    </div>
  );
}
