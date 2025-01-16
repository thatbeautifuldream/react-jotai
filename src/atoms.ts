import { atom } from "jotai";
import { loadable } from "jotai/utils";

export const counterAtom = atom(0);
// derived atom
export const doubledCounterAtom = atom((get) => get(counterAtom) * 2);

// async atom
const asyncUserAtom = atom(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json();
});

export const loadableUserAtom = loadable(asyncUserAtom);
