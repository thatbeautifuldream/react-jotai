import { useAtom } from "jotai";
import { counterAtom } from "./atoms";

const Counter = () => {
  const [_, setCount] = useAtom(counterAtom);

  return (
    <>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};

export default Counter;
