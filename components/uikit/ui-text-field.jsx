import clsx from "clsx";

/**
 * @param {{
 * label?: string,
 * required: bool,
 * helperText: string,
 * className: string,
 * errorText?: string
 * } & import('react').HTMLAttributes<HTMLInputElement>} props
 */

export function UiTextField({
  label,
  required,
  helperText,
  errorText,
  className,
  ...inputProps
}) {
  return (
    <div className={className}>
      {label && (
        <label
          for="example2"
          className={clsx(
            "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5",
            required && "after:text-orange-600 after:content-['*']",
          )}
        >
          {label}
        </label>
      )}

      <input
        required={required}
        type="email"
        id="example2"
        className={clsx(
          `
          block w-full rounded-md border-slate-200 
          shadow-sm leading-tight outline-0 border
          focus:ring-opacity-50 disabled:cursor-not-allowed 
         disabled:bg-gray-50 disabled:text-slate-400 py-2 px-2
          `,
          errorText
            ? "focus:border-orange-600 focus:ring focus:ring-orange-600/20 border-orange-600"
            : "focus:border-teal-600 focus:ring focus:ring-teal-600/20 border-slate-200",
        )}
        {...inputProps}
      />
      {(helperText || errorText) && (
        <p
          className={clsx(
            "mt-1 text-sm",
            errorText ? "text-orange-600" : "text-slate-400",
          )}
        >
          {errorText ?? helperText}
        </p>
      )}
    </div>
  );
}
