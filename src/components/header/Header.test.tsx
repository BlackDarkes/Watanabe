import { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { Header } from "./Header";
import { useBurgerStore } from "./model/burger-store";

vi.mock("./model/burger-store.ts", () => ({
  useBurgerStore: vi.fn(),
}));

vi.mock("next/link", () => ({
  default: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

describe("Компонент Header", () => {
  it("Отображение Header со всеми элементами", () => {
    const handleOpenMock = vi.fn();

    vi.mocked(useBurgerStore).mockReturnValue({
      isOpenBurger: false,
      handleOpen: handleOpenMock,
    });

    render(<Header />);

    expect(screen.getByRole("banner")).toBeInTheDocument();
  })

  it("Отображение Header с открытым бургером", () => {
    vi.mocked(useBurgerStore).mockReturnValue({
      isOpenBurger: true,
      handleOpen: vi.fn(),
    });

    render(<Header />);
  })
});
