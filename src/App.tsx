import { useAtom } from "jotai";
import "./App.css";
import Counter from "./Counter";
import DoubleCounter from "./DoubleCounter";
import { counterAtom } from "./atoms";

function App() {
  const [count] = useAtom(counterAtom);

  return (
    <>
      <h1>React + Jotai</h1>
      <div className="card">
        <h1>Count: {count}</h1>
        <Counter />
        <DoubleCounter />
      </div>
    </>
  );
}

export default App;
