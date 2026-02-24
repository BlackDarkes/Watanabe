import { screen, render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { Footer } from "./Footer";

describe("Компонент Footer", () => {
  it("Отображение Footer со всеми элементами", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
})