---
name: prisma-calendar
description: Работа с БД и календарём — Prisma + Server Actions + react-day-picker для Training Planner
---

# Prisma Calendar

Используй этот навык для задач про авторизацию, календарь и базу тренировок — `AGENTS.md:3-4`.

## Контекст проекта

- **Модель:** `User (Auth.js) 1—* WorkoutTemplate 1—* WorkoutInstance` — `WorkoutTemplate: id, name, type (run/strength/...), defaultParams`, `WorkoutInstance: id, templateId, userId, date, status (planned/done/skipped), params {duration, km, reps...}, color/icon` (`AGENTS.md:4`)
- **Стек:** PostgreSQL (Neon/Vercel) + Prisma + один `DATABASE_URL` в `.env`, локально `npx prisma db push` без docker-compose, сервер — Next.js Server Actions / Route Handlers, стейт — TanStack Query (сервер) + Zustand (UI: модалки/фильтры) (`AGENTS.md:3`)
- **Календарь:** `react-day-picker + date-fns`, кастом под Figma — иконка+цвет по типу, month view + week strip
- **Защита:** middleware для auth-роутов, TanStack Query для серверного состояния

## Перед кодом

1. Прочитай `prisma/schema.prisma` и `.env` (`DATABASE_URL`), найди существующие модели/миграции
2. Проверь актуальное API через Context7 — не придумывай поля Prisma / Auth.js / react-day-picker
3. Определи где логика: Server Action (мутация) vs Route Handler vs клиентский Zustand

## Этапы работы

### 1. Схема
- Минимальное изменение `schema.prisma`, без лишних полей/индексов
- Не добавляй зависимости без нужды, не меняй архитектуру без причины

### 2. Реализация
- Server Actions: валидация Zod, `revalidatePath`, обработка ошибок
- Клиент: TanStack Query для фетча/инвалидации, Zustand только для UI-стейта
- Календарь: кастом `DayPicker` (модификаторы по `type/status`), `date-fns` для дат, без Redux

### 3. Проверка
- `npx prisma generate` → `npx prisma db push` (если менял схему)
- `npx tsc --noEmit` / `npm run build` — типы и сборка
- Ручная проверка: создать/редактировать/отметить done/skipped тренировку, выбор шаблона с параметрами (км/повторы) в модалке

## Ограничения

- Не смешивай правку схемы с версткой/адаптивом — одна задача = один фокус
- Не создавай отдельную страницу тренировок — выбор из списка в модалке (`AGENTS.md:2`)
- После изменений кратко объясни что и почему менял, как проверял