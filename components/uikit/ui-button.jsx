import clsx from "clsx";

/**
 * @param {{
 * children: any,
 * className: string,
 * size: "md" | "lg",
 * variant: "primary" | "outline"
 * }} props
 */

export function UiButton({ children, className, size, variant }) {
  const buttonClassName = clsx(
    "transition-colors leading-tight",
    className,
    {
      md: "rounded py-2 px-6 text-sm",
      lg: "rounded-lg px-5 py-2 text-2xl",
    }[size],

    {
      primary: "bg-teal-600 hover:bg-teal-500 text-white shadow",
      outline: "border border-teal-600 text-teal-600 hover:bg-teal-50",
    }[variant],
  );

  return <button className={buttonClassName}>{children}</button>;
}
