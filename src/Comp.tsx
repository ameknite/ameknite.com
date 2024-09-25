import { createSignal } from "solid-js";

export default (props) => {
  const [count, setCount] = createSignal(props.initialCount || 1);
  const [multiplier, setMultiplier] = createSignal(2);
  const product = () => count() * multiplier();

  return (
    <div>
      <h1>
        {count()} * {multiplier()} = {product()}
      </h1>
      <button onClick={() => setCount(count() + 1)}>increment</button>
      <button onClick={() => setMultiplier(multiplier() + 1)}>
        multiplier
      </button>
    </div>
  );
};
