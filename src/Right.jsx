import "./right.scss";

export default function Right() {
  return (
    <div className="right">
      <div className="right__group">
        <div className="leftmain__cont">
          <div className="right__text">
            <p>Tip Amount</p>
            <p className="right__textsmall">/ person</p>
          </div>

          <input className="right__inbtn" type="text" placeholder="$0.00" />
        </div>

        <div className="rightmain__cont">
          <div className="right__text">
            <p>Total</p>
            <p className="right__textsmall">/ person</p>
          </div>

          <input className="right__inbtn" type="text" placeholder="$0.00" />
        </div>
      </div>

      <button className="right__btn">Reset</button>
    </div>
  );
}
