import React from "react";
import { render } from "@testing-library/react";
import ArticlePreview from "./ArticlePreview";

test("renders learn react link", () => {
  const { getByText } = render(<ArticlePreview />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
