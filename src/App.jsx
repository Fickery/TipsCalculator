import Left from "./Left";
import Right from "./Right";
import "./App.scss";

function App() {
  const data = "Hello Everyone";

  return (
    <div id="content" className="main__cont">
      <Left data={data} />
      <Right data={data} />
    </div>
  );
}

export default App;
