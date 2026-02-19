interface IFooterItem {
  id: number;
  message: string;
  link?: string;
  isTitle?: boolean;
  isLink?: boolean;
  isText?: boolean;
}

const FOOTER_LINKS: IFooterItem[] = [
  {
    id: 1,
    message: "Ссылки для связи:",
    isTitle: true,
  },
  {
    id: 2,
    message: "email: watanabe@gmail.com",
    isLink: true,
    link: "mailto:watanabe@gmail.com",
  },
  {
    id: 3,
    message: "phone: +7(123) 456 78-90",
    isLink: true,
    link: "tel:+71234567890",
  },
  {
    id: 4,
    message: "tg: t.me/watanabe",
    isLink: true,
    link: "https://t.me/watanabe",
  },
];

const FOOTER_PAYMENT_METHODS: IFooterItem[] = [
  {
    id: 1,
    message: "Способы оплаты:",
    isTitle: true,
  },
  {
    id: 2,
    message: "Перевод",
    isText: true,
  },
  {
    id: 3,
    message: "Мобильные платежи",
    isText: true,
  },
  {
    id: 4,
    message: "MirPay",
    isText: true,
  },
];

const FOOTER_LEGAL_LINKS: IFooterItem[] = [
  {
    id: 1,
    message: "Юридическая информация:",
    isTitle: true,
  },
  {
    id: 2,
    message: "Политика конфиденциальности",
    isLink: true,
    link: "#",
  },
  {
    id: 3,
    message: "Обработка персональных данных",
    isLink: true,
    link: "#",
  },
];

export { type IFooterItem, FOOTER_LINKS, FOOTER_PAYMENT_METHODS, FOOTER_LEGAL_LINKS };