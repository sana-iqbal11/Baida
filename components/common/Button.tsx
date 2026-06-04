import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  icon?: ReactNode;
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-all duration-300";

  const variants = {
    primary: "bg-dark text-cream hover:bg-brown",
    secondary: "bg-cream text-dark hover:bg-gold hover:text-white",
    outline: "border border-cream text-cream hover:bg-cream hover:text-dark",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} >
      {icon}
      {children}
    </button>
  );
}