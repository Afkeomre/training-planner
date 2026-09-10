import Stack from '@/components/ui/Stack';
import TitleGroup from '@/components/ui/TitleGroup';
import Input from '@/components/ui/Input';
import UserIcon from '@/components/ui/icons/UserIcon';
import EnvelopeIcon from '@/components/ui/icons/EnvelopeIcon';
import LockIcon from '@/components/ui/icons/LockIcon';
import EyeCrossedIcon from '@/components/ui/icons/EyeCrossedIcon';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <>
      <TitleGroup eyebrow="Добро пожаловать!">Создайте аккаунт</TitleGroup>

      <form
        className="flex flex-1 flex-col justify-between items-center gap-4"
        method="post"
        action="#"
      >
        <Stack className="gap-4">
          <Input
            label="Имя"
            name="firstName"
            placeholder="Имя"
            autoComplete="given-name"
            icon={<UserIcon />}
          />
          <Input
            label="Фамилия"
            name="lastName"
            placeholder="Фамилия"
            autoComplete="family-name"
            icon={<UserIcon />}
          />
          <Input
            label="Электронная почта"
            name="email"
            type="email"
            placeholder="Электронная почта"
            autoComplete="email"
            icon={<EnvelopeIcon />}
            required
          />
          <Input
            label="Пароль"
            name="password"
            type="password"
            placeholder="Пароль"
            autoComplete="new-password"
            icon={<LockIcon />}
            iconRight={<EyeCrossedIcon />}
            required
          />

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              name="terms"
              required
              className="peer sr-only"
            />
            <span className="relative flex h-4 w-4 shrink-0 items-center justify-center rounded border border-gray-2 peer-checked:border-brand-2 peer-checked:bg-brand-2 after:absolute after:content-['✓'] after:text-[10px] after:leading-none after:text-white after:opacity-0 peer-checked:after:opacity-100  peer-focus-visible:ring-2 peer-focus-visible:ring-brand-2 peer-focus-visible:ring-offset-2" />
            <span className="text-xs text-gray-2">
              Продолжая, вы принимаете нашу{' '}
              <a
                className="underline hover:text-brand-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-1 focus-visible:ring-offset-1 rounded-sm transition-colors"
                href="#"
              >
                Политику конфиденциальности
              </a>{' '}
              и{' '}
              <a
                className="underline hover:text-brand-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-1 focus-visible:ring-offset-1 rounded-sm transition-colors"
                href="#"
              >
                Условия использования
              </a>
            </span>
          </label>
        </Stack>

        <Button type="submit">Зарегистрироваться</Button>
      </form>

      <p className="text-black-1 text-sm">
        Уже есть аккаунт?{' '}
        <Link
          className="font-medium rounded-sm text-secondary-1 hover:underline hover:text-brand-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary-1 focus-visible:ring-offset-2 active:text-secondary-2 transition-colors"
          href="/login"
        >
          Войти
        </Link>
      </p>
    </>
  );
}
