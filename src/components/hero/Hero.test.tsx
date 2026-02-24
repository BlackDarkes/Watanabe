import { screen, render } from "@testing-library/react";
import { it, describe, expect } from "vitest";
import { Hero } from "./Hero";

describe("Компонент Hero", () => {
  it("Отображение Hero со всеми элементами", async () => {
    const ResolvedHero = await Hero();
    render(ResolvedHero);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
