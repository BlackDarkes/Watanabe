import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { Faq } from "./Faq";

describe("Компонент Faq", () => {
  it("Отображение Faq со всеми элементами", () => {
    render(<Faq />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
