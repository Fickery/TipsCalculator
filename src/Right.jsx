import "./right.scss";

export default function Right(props) {
  return (
    <div className="right">
      <div className="right__group">
        <div className="leftmain__cont">
          <div className="right__text">
            <p>Tip Amount</p>
            <p className="right__textsmall">/ person</p>
          </div>

          <h3 className="right__inbtn">{props.data}</h3>
        </div>

        <div className="rightmain__cont">
          <div className="right__text">
            <p>Total</p>
            <p className="right__textsmall">/ person</p>
          </div>

          <h3 className="right__inbtn">$0.00</h3>
        </div>
      </div>

      <button className="right__btn">Reset</button>
    </div>
  );
}
