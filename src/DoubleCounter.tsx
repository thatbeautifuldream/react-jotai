import { useAtom } from "jotai";
import { doubledCounterAtom } from "./atoms";

export const DoubleCounter = () => {
  const [doubledCount] = useAtom(doubledCounterAtom);

  return <h1>Double Counter: {doubledCount}</h1>;
};

export default DoubleCounter;
