import { useAtom } from "jotai";
import { counterAtom } from "./App";

export const Counter = () => {
  const [_, setCount] = useAtom(counterAtom);

  return (
    <>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};
