import { render, screen } from "@testing-library/react";
import App from "./App";

test("Input Box", () => {
  render(<App />);
  const value = screen.getByRole("textbox");
  let checkInputPlaceHolder = screen.getByPlaceholderText("Enter Use Case");
  expect(value).toBeInTheDocument();
  expect(checkInputPlaceHolder).toBeInTheDocument();
  expect(value).toHaveAttribute("type", "text");
});

// check the grouping by using describe method :-
// Only is used for to test only one:-

describe.only("UI test case group", () => {
  test("case number 2", () => {
    render(<App />);
    let textValue = screen.getByText(/Hello/i);
    expect(textValue).toBeInTheDocument();
  });
});

//Nested Groups

describe("UI test case group 2", () => {
  test("case number 2", () => {
    render(<App />);
    let textValue = screen.getByText(/Hello/i);
    expect(textValue).toBeInTheDocument();
  });

  describe.only("UI test case group", () => {
    test("case number 2", () => {
      render(<App />);
      let textValue = screen.getByText(/Hello/i);
      expect(textValue).toBeInTheDocument();
    });
  });
});