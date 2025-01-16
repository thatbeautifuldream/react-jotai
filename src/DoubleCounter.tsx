import { useAtom } from "jotai";
import { doubledCounterAtom } from "./atoms";

export const DoubleCounter = () => {
  const [doubledCount] = useAtom(doubledCounterAtom);

  return <p>Double Counter: {doubledCount}</p>;
};

export default DoubleCounter;
