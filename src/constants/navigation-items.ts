interface INavItem {
  id: number;
  name: string;
  href?: string;
  link?: string;
}

const NAV_ITEMS: INavItem[] = [
  {
    id: 1,
    name: "Почему мы?",
    href: "/#why-us",
  },
  {
    id: 2,
    name: "Отзывы",
    href: "/#comments",
  },
  {
    id: 3,
    name: "Как заказать",
    href: "/#order-helper",
  },
  {
    id: 4,
    name: "Каталог",
    href: "/#catalog",
  },
  {
    id: 5,
    name: "Конструктор",
    link: "/designer",
  },
  {
    id: 6,
    name: "FAQ",
    href: "/#faq",
  }
]

export { type INavItem, NAV_ITEMS };