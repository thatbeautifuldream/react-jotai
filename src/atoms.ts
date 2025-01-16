import { atom } from "jotai";

export const counterAtom = atom(0);
// derived state
export const doubledCounterAtom = atom((get) => get(counterAtom) * 2);
