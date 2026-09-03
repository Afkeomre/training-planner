# Training Planner — AGENTS.md

Вектор проекта зафиксирован по итогам сессии `ses_fa36ab436ffeJwV8yBfTEP3P9t` (neon-harbor, 01.09.2026). Документ живой — корректируется по ходу работы без ограничений.

## 1. Идея продукта

Веб-приложение для планирования тренировок. Дизайн — mobile-first из Figma (bottom navigation + bottom sheet), адаптация под планшет/десктоп: bottom nav → sidebar/top bar, bottom sheet → dialog/side panel. Цель — портфолио под требования вакансий + красивая реализация.

## 2. Страницы (5)

1. **Лендинг** — публичная страница для неавторизованных (приветствие)
2. **Логин / Регистрация** — 1 или 2 страницы, форма
3. **Главная (только auth)** — сводка: сегодняшняя дата, план на день, прогресс за неделю, выполнение плана
4. **Календарь — центр приложения** — month view + week strip (полоска текущей недели), создать/редактировать/отметить как выполненную/пропустить тренировку. Выбор тренировки из списка в модалке с параметрами (время, км для бега, повторы для силовых). Отдельной страницы тренировок нет
5. **Статистика и анализ** — план vs факт, советы по корректировке. v1 — расчеты без AI, v2 опционально — LLM

## 3. Стек (итоговый упрощенный)

- **Основа:** Next.js App Router + TypeScript + Tailwind CSS
- **Авторизация/валидация:** Auth.js (NextAuth v5) + React Hook Form + Zod + @hookform/resolvers
- **Календарь:** react-day-picker + date-fns (кастом под Figma, иконки + цвет по типу тренировки)
- **БД:** PostgreSQL (Vercel Postgres / Neon) + Prisma + SQL. Один `DATABASE_URL` в `.env`, локально `npx prisma db push`, без docker-compose для БД
- **Сервер:** Next.js Server Actions / Route Handlers — отдельного Express нет
- **Стейт:** TanStack Query (серверное состояние) + Zustand (UI-стейт: модалки, фильтры). Redux Toolkit не используем
- **Тесты (в конце):** Jest + React Testing Library, E2E Playwright
- **Деплой:** Vercel (Serverless Functions + внешняя БД), один `Dockerfile` для приложения в самом конце для портфолио, без БД в Docker
- **CI/CD:** GitHub Actions (lint/typecheck/test → deploy), инкрементальные коммиты по фичам. GitLab не нужен
- **AI*:** опционально Vercel AI SDK (OpenAI/Mistral/Groq free tier)

## 4. Модель данных (предварительная)

```
User (Auth.js) 1—* WorkoutTemplate 1—* WorkoutInstance
- WorkoutTemplate: id, name, type (run/strength/...), defaultParams
- WorkoutInstance: id, templateId, userId, date, status (planned/done/skipped), params { duration, km, reps ... }, color/icon

```

Уточняется в Фазе 1, легко расширяется через Prisma.

## 5. Фазы выполнения (гибкие)

**Фаза 1 — База:** `create-next-app` + Tailwind + Prisma schema (User, WorkoutTemplate, WorkoutInstance) + Auth.js + RHF+Zod + календарь month + week strip на react-day-picker
**Фаза 2 — Логика:** Server Actions CRUD для календаря, защита роутов (middleware), TanStack Query + Zustand, адаптив Figma, страницы Главная/Статистика (расчеты без AI)
**Фаза 3 — Финал:** Jest + Playwright, GitHub Actions, деплой на Vercel с `DATABASE_URL`, один `Dockerfile`, опционально AI-советы

## 6. Принципы работы (из глобальных инструкций)

- Разрабатываешь ты сама, я — консультант для непонятных мест (особенно БД/Server Actions). Действуем постепенно, без спешки
- Перед крупными правками — объясняю план и зачем нужен шаг. Сложные концепции (Server Actions, DATABASE_URL) объясняю кратко на примере
- Не усложнять без необходимости, не добавлять зависимости без нужды
- Проверять актуальную доку через Context7, не придумывать API
- Без авто-коммитов/push без твоего разрешения, план гибкий — менять по ходу нормально

## 7. Окружение

- Node 22.19.0 + npm 10.9.3 (достаточно для Next.js >=18.17). Попытка обновления до 22.22.2/npm 12.0.2 уперлась в битую установку nvm-windows (promise-retry) — оставлено как есть, notice игнорируется
- Проект: `D:\frontend\training-planner`, чистый `create-next-app`, 1 коммит `Initial commit`
- Plan mode завершен, build mode разрешен, opencode пока не настраивали (отложено по просьбе)

## 8. Документация
- Этот `AGENTS.md` — источник вектора. Меняй в любой момент, я подхвачу в следующей сессии
- Отдельный `docs/PLAN.md` не нужен, рабочий план — в плане opencode
- `README.md` пока шаблон, полная дока пишется в Фазе 3

---

*Обновлено: 02.09.2026. Следующий шаг на выбор: модель данных / логика календаря / флоу авторизации.*