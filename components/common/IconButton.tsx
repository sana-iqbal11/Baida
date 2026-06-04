import { ReactNode } from "react";

type IconButtonProps = {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
};

export default function IconButton({
  icon,
  label,
  onClick,
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="relative flex h-11 w-11 items-center justify-center rounded-full border border-beige text-dark hover:bg-beige transition"
    >
      {icon}
    </button>
  );
}