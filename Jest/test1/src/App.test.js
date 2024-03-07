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

/*
test("Button Click Test", () => {
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("Updated Value")).toBeInTheDocument();
});
*/

//Before all - one time run / beforeEach - each time / after all :-

/*
beforeAll(() => {
  console.log("HEllo");
});
*/

// Snapshot

/* test("snapshot", () => {
  let container = render(<App />);
  expect(container).toMatchSnapshot();
});
*/

// What should we do :-

/*
- Testing component rendering 
- UI elements that we write
- Functions which we write
- Event Testing
- Props an states
- UI condition testing | UI state testing
*/

// What should we not do :-
/*
- External UI library code
- No need to test default function of JS and React
- Sometimes we should mock function rather that testing it in details
- Do not write snapshots in starting of the project
- Run test case after completing your functionality
- Make a standard for code coverage
*/

// RTL Queries :-

/*

// Find Single Element 
- getBy
- queryBy
- findBy

// Find Multiple elements
- getAllBy
- queryAllBy
- findAllBy

*/

// GetByRole Quesies are in RTL Queries

test("Get Role", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
  expect(input).toBeDisabled();
});
