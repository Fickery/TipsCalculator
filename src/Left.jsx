export default function Left() {
  return (
    <div className="left">
      <div className="left-group">
        <label htmlFor="bill">Bill</label>
        <input className="input-left" type="text" placeholder="$" />
      </div>

      <div className="left-group">
        <label htmlFor="bill">Select Tip %</label>
        <ul className="tipCont">
          <li className="tipCont__item">
            <button className="tipCont__btn">5%</button>
          </li>
          <li class="tipCont__item">
            <button class="tipCont__btn">10%</button>
          </li>
          <li class="tipCont__item">
            <button class="tipCont__btn">15%</button>
          </li>
          <li class="tipCont__item">
            <button class="tipCont__btn">25%</button>
          </li>
          <li class="tipCont__item">
            <button class="tipCont__btn">50%</button>
          </li>
          <li class="tipCont__item">
            <button class="tipCont__btn">custom</button>
          </li>
        </ul>
      </div>

      <div className="left-group">
        <label htmlFor="bill">Number of People</label>
        <input className="input-left" type="text" placeholder="$" />
      </div>
    </div>
  );
}
