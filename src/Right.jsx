export default function Right() {
  return (
    <div className="right">
      <label htmlFor="bill">Tip Amount</label>
      <input type="number" placeholder="$" value="Bill" />

      <label htmlFor="bill">Total</label>
      <input type="number" placeholder="$" value="Bill" />
      <button>Reset</button>
    </div>
  );
}
