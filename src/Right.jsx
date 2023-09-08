export default function Right() {
  return (
    <div className="right">
      <div class="main">
        <div class="leftmain-cont">
          <div class="left-text">
            <p>Tip Amount</p>
            <p>/ person</p>
          </div>

          <div class="right-input">
            <input className="right-inbtn" type="text" placeholder="$0.00" />
          </div>
        </div>

        <div class="rightmain-cont">
          <div class="left-text">
            <p>Total</p>
            <p>/ person</p>
          </div>

          <div class="right-input">
            <input className="right-inbtn" type="text" placeholder="$0.00" />
          </div>
        </div>
      </div>

      <button className="rightBtn">Reset</button>
    </div>
  );
}
