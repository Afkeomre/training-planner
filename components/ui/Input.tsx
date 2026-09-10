type Props = {
  type?: 'text' | 'email' | 'password';
  label: string;
  name: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
};

export default function Input({
  type = 'text',
  placeholder,
  label,
  name,
  autoComplete,
  required,
  icon,
  iconRight,
}: Props) {
  return (
    <label className="relative w-full py-4 px-11 bg-border-1 rounded-xl transition-shadow focus-within:shadow-focus-soft">
      <span className="sr-only">{label}</span>
      <span
        className="absolute left-4 top-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        {icon}
      </span>
      <input
        className="w-full bg-transparent text-black-1 placeholder-gray-2 outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
      />
      <span
        className="absolute right-4 top-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        {iconRight}
      </span>
    </label>
  );
}
