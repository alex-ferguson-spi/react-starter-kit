import React from "react";
import ReactDOMServer from "react-dom/server";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import "jest-dom/extend-expect";
import "jest-axe/extend-expect";
import "@testing-library/react/cleanup-after-each";
import Button from "./Button";

// automatically unmount and cleanup DOM after the test is finished.
// afterEach(cleanup);

expect.extend(toHaveNoViolations);

const props = (isDisabled, text) => ({
  isDisabled,
  onClick: jest.fn(),
  text
});

describe("Button", () => {
  test("loads and displays I'm a Button", () => {
    // Arrange
    const btnText = "I'm a Button";
    const { getByText, getByTestId } = render(
      <Button {...props(true, btnText)} />
    );
    const btn = getByText(btnText);
    // Act
    fireEvent.click(btn);

    // Assert
    expect(btn).toBeTruthy();
  });

  test("should not have basic accessibility issues", async () => {
    const html = ReactDOMServer.renderToString(<Button />);
    const results = await axe(html);
    expect(results).toHaveNoViolations();
  });
});
