import type { Component } from "solid-js";
import Comp from "./Comp";

const App: Component = () => {
  return (
    <>
      <h1>Hello world!!!!</h1>
      <Comp />
      <Comp initialCount={100} />
      <Comp />
    </>
  );
};

export default App;
