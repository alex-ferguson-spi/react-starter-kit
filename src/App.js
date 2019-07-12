import { hot } from "react-hot-loader/root";
import React, { useState } from "react";
import Button from "./components/Button";
import TestContext from "./TestContext";

const App = () => {
  const testHook = useState("red");
  return (
    <TestContext.Provider value={testHook}>
      <div>Hi</div>
      <Button text="I'm a button" />
    </TestContext.Provider>
  );
};

export default hot(App);
