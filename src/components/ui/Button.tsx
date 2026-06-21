import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variants = {
  primary:
    "bg-rhino-orange text-white hover:bg-rhino-orange-light border border-rhino-orange hover:border-rhino-orange-light orange-glow",
  secondary:
    "bg-white text-rhino-black hover:bg-rhino-off-white border border-white",
  outline:
    "bg-transparent text-white border border-white/30 hover:border-rhino-orange hover:text-rhino-orange",
  ghost: "bg-transparent text-white hover:text-rhino-orange",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

export default function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  children,
  className,
  external,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-display tracking-widest uppercase transition-all duration-300 cursor-pointer",
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
