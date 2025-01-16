import { useAtom } from "jotai";
import "./App.css";
import { counterAtom } from "./atoms";
import CounterControls from "./CounterControls";
import DoubleCounter from "./DoubleCounter";
import UserInfo from "./UserInfo";
import ShoppingCart from "./ShoppingCart";

function App() {
  const [count] = useAtom(counterAtom);

  return (
    <>
      <h1>React + Jotai</h1>
      <div className="card">
        <p>Count: {count}</p>
        <DoubleCounter />
        <CounterControls />
      </div>
      <UserInfo />
      <ShoppingCart />
    </>
  );
}

export default App;
