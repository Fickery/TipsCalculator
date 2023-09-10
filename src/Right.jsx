import "./right.scss";

export default function Right(props) {
  return (
    <div className="right">
      <div className="right__group">
        <div className="leftmain__cont">
          <div className="right__text">
            <p className="right__label">Tip Amount</p>
            <p className="right__textsmall">/ person</p>
          </div>

<<<<<<< HEAD
          <h3 className="right__inbtn">{props.data}</h3>
=======
          <h1 className="right__calculation">$0.00</h1>
>>>>>>> ba53136728b80820a9d11a18589afc289f57b7b2
        </div>

        <div className="rightmain__cont">
          <div className="right__text">
            <p className="right__label">Total</p>
            <p className="right__textsmall">/ person</p>
          </div>

<<<<<<< HEAD
          <h3 className="right__inbtn">$0.00</h3>
=======
          <h1 className="right__calculation">$0.00</h1>
>>>>>>> ba53136728b80820a9d11a18589afc289f57b7b2
        </div>
      </div>

      <button className="right__btn">Reset</button>
    </div>
  );
}
