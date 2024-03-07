import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

/*
test("Input Box", () => {
  render(<App />);
  const value = screen.getByRole("textbox");
  let checkInputPlaceHolder = screen.getByPlaceholderText("Enter Use Case");
  expect(value).toBeInTheDocument();
  expect(checkInputPlaceHolder).toBeInTheDocument();
  expect(value).toHaveAttribute("type", "text");
});
*/

// check the grouping by using describe method :-
// Only is used for to test only one:-

/*
describe.only("UI test case group", () => {
  test("case number 2", () => {
    render(<App />);
    let textValue = screen.getByText(/Hello/i);
    expect(textValue).toBeInTheDocument();
  });
});
*/

//Nested Groups

/*
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
*/

//Testing on onChange with fire event:-

/*
test("onChange", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "a" } });
  expect(input.value).toBe("a");
});
*/

//Testing on button with fire event :-

test("Button Click Test", () => {
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Updated Value")).toBeInTheDocument();
});

//Before all - one time run / beforeEach - each time / after all :-

beforeAll(() => {
  console.log("HEllo");
});
