import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { WhyUs } from "./WhyUs";

describe("Компонент WhyUs", () => {
  it("Отображение WhyUs со всеми элементами", () => {
    render(<WhyUs />);

    expect(screen.getByRole("paragraph")).toBeInTheDocument();
  });
});
