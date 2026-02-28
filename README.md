# Watanabe

## 📜 Лицензия
Этот проект распространяется под лицензией **GPL-3.0**.  
Подробнее см. [LICENSE](LICENSE).

**Описание проекта**: House — это лендинг сайт аниме мерча с оформлением заказа, созданием кастомного дизайна одежды и товаров, а также modules архитектурой, он написан на NextJS(TypeScript) с server-action и api-routes и Tailwindcss.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![NextJS](https://img.shields.io/badge/Next.js-15-000000?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%2338B2AC.svg?logo=tailwind-css&logoColor=white)](#)

### Функционал

- Адаптивный дизайн
- Анимации при наведении, фокусировании и нажатии
- Анимированный header
- форма оформления заказа
- При заказе отправляются письма на почту
- Модальные окна
- Валидация данных
- Автоматическая прокрутка
- Бизнес логика

### Технологии
- **Frontend**: Next, TypeScript, Tailwindcss, Zustand, Zod, Vitest + Testing-library.
  [![NextJS](https://img.shields.io/badge/Next.js-15-000000?logo=next.js)](https://nextjs.org/) 
  [![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-%233178C6?logo=typescript)](https://www.typescriptlang.org/)  
  [![Zustand](https://img.shields.io/badge/Zustand-4.4-%23000000?logo=zustand)](https://github.com/pmndrs/zustand) 
  [![Zod](https://img.shields.io/badge/Zod-1.0-%23007ACC?logo=zod)](https://github.com/colinhacks/zod)
- **Дизайн**: Figma.
  [![Figma](https://img.shields.io/badge/Figma-Design-%23F24E1E?logo=figma)](https://figma.com/)

### Установка

1. Клонирование репозитория:

   ```bash
   https://github.com/BlackDarkes/Watanabe.git

   ```

2. Запустите проект:
   
    Node.js >= 20.x
    pnpm >= 10.x
   ```bash
   cd frontend && pnpm install && pnpm run dev
   ```

### Пример кода

## Next

```TypeScript
import { IProduct } from "@/shared/types/product.interface";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IModelFormStore {
  isOpen: boolean;
  name: string | null;
  price: number | null;
  handleOpen: (product: IProduct | null) => void;
}

export const useModelFormStore = create<IModelFormStore>()(
  devtools((set) => ({
    isOpen: false,
    name: null,
    price: null,

    handleOpen: (product: IProduct | null) => {
      set((state) => ({ isOpen: !state.isOpen }));
      document.body.classList.toggle("overflow-hidden");

      if (product) {
        set({ name: product.name, price: product.price });
      } else {
        set({ name: null, price: null });
      }
    }
  })),
);
```

### Структура проекта:
    project/  
    ├── public/       
    ├── src/        
    └── README.md  

## Изображения проекта:
1. **Desktop изображения:**
  ![Главная страница (десктоп)](images/desktop/home.png)
  *Рис. 1: Главная страница сайта в десктопной версии.* 

  ![Страница конструктора (десктоп)](images/desktop/constructor.png)
  *Рис. 2: Страница конструктора.*

  ![Форма оформления заказа (десктоп)](images/desktop/form.png)
  *Рис. 3: Форма оформления заказа.*


1. **Mobile изображения:**
   
   ![Главная страница (мобильный)](images/mobile/home.png)

   *Рис. 4: Главная страница сайта в мобильной версии.*
   
   ![Страница конструктора (мобильный)](images/mobile/constructor.png)

   *Рис. 5: Header в мобильной версии.*
   
   ![Бургер меню (мобильный)](images/mobile/burger-menu.png)

   *Рис. 6: Бургер меню в мобильной версии.*

   ![Форма оформления заказа (мобильный)](images/mobile/form.png)

   *Рис. 7: Форма оформления заказа.*