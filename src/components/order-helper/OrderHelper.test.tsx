import { render, screen } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { OrderHelper } from "./OrderHelper";

describe("Компонент OrderHelper", () => {
  it("Отображение OrderHelper со всеми элементами", () => {
    render(<OrderHelper />);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
