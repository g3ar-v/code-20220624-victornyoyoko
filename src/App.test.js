import { render, screen } from "@testing-library/react";
import App from "./App";
import Logo from "./components/logo";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("Logo specification", () => {});
