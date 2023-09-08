export default function Left() {
  return (
    <div className="left">
      <label htmlFor="bill">Bill</label>
      <input type="number" placeholder="$" value="Bill" />

      <label htmlFor="bill">Select Tip %</label>
      <ul class="tipCont">
        <li class="tipCont__item">
          <button class="tipCont__btn">5%</button>
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

      <label htmlFor="bill">Number of People</label>
      <input type="number" placeholder="$" value="Bill" />
    </div>
  );
}
