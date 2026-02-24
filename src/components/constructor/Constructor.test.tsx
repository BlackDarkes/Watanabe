import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Constructor } from "./Constructor";

describe("Компонегт Constructor", () => {
  it("Отображение Constructor со всеми элементами", () => {
    render(<Constructor />);

    expect(screen.getByRole("heading", { name: /конструктор создания мерча/i })).toBeInTheDocument();
  });
});
