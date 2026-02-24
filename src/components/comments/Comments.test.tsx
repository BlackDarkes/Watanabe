import { screen, render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Comments } from "./Comments";

describe("Компонент Comments", () => {
  it("Отображение Comments со всеми элементами", async () => {
    const ResolvedComments = await Comments();
    render(ResolvedComments);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });
});
