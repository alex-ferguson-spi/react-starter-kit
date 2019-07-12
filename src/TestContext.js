import { createContext } from "react";

// styled like a hook where first value is the default value and the 2nd is the function to update it
// a default value is not required here and Kent C Dodds actually doesn't use one
const TestContext = createContext(["", () => {}]);

export default TestContext;
