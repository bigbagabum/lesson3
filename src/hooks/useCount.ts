import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export const useCount = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCount must be used inside CounterProvider");
  }
  const { count, setCount } = context;

  function increment(num: number) {
    setCount((prev) => prev + num);
  }
  function decrement(num: number) {
    setCount((prev) => prev - num);
  }

  return { count, increment, decrement };
};