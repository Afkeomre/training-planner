import TitleGroup from '@/components/ui/TitleGroup';
import AuthFooter from '@/components/features/AuthFooter';
import Stack from '@/components/ui/Stack';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import EnvelopeIcon from '@/components/ui/icons/EnvelopeIcon';
import LockIcon from '@/components/ui/icons/LockIcon';
import EyeCrossedIcon from '@/components/ui/icons/EyeCrossedIcon';
import LoginIcon from '@/components/ui/icons/LoginIcon';

export default function LoginPage() {
  return (
    <>
      <TitleGroup eyebrow="Добро пожаловать!">С возвращением</TitleGroup>
      <form
        action="#"
        method="post"
        className="flex flex-1 flex-col w-full justify-between items-center gap-4"
      >
        <Stack className="w-full max-w-[440px] gap-4">
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
            autoComplete="current-password"
            icon={<LockIcon />}
            iconRight={<EyeCrossedIcon />}
            required
          />
        </Stack>

        <Button type="submit">
          <span>{<LoginIcon />}</span>
          Войти
        </Button>
      </form>

      <AuthFooter
        content="Ещё не завели аккаунт?"
        path="/register"
        link="Зарегистрироваться"
      />
    </>
  );
}
