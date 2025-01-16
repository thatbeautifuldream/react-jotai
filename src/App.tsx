import { atom, useAtom } from "jotai";
import "./App.css";
import { Counter } from "./Counter";

export const counterAtom = atom(0);

function App() {
  const [count] = useAtom(counterAtom);

  return (
    <>
      <h1>React + Jotai</h1>
      <div className="card">
        <h1>Count: {count}</h1>
        <Counter />
      </div>
    </>
  );
}

export default App;
