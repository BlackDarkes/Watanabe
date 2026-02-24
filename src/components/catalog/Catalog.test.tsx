import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Catalog } from "./Catalog";

describe("Компонент Catalog", () => {
  it("Отображение Catalog со всеми элементами", async () => {
    const ResolvedCatalog = await Catalog();
    render(ResolvedCatalog);

    expect(screen.getByRole("list")).toBeInTheDocument();
  })
})