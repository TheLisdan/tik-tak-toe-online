import clsx from "clsx";
import { createPortal } from "react-dom";

/**
 *
 * @param {{
 * className: string,
 * width: 'md' | 'full',
 * isOpen: boolean,
 * onClose: function
 * }} props
 * @returns
 */

export function UiModal({
  width = "md",
  className,
  children,
  isOpen = false,
  onClose,
}) {
  const handleClick = (e) => {
    const inModal = e.target.closest("[data-id=modal]");
    if (inModal) {
      return;
    }

    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const modal = (
    <div
      onClick={handleClick}
      className={clsx(
        "fixed inset-0 bg-slate-900/60 backdrop-blur py-10 overflow-y-auto",
        className,
      )}
    >
      <div
        data-id="modal"
        className={clsx(
          "bg-white rounded-lg min-h-[320px] mx-auto relative",
          "flex flex-col",
          {
            md: "max-w-[640px] w-full",
            full: "mx-5",
          }[width],
        )}
      >
        <button
          onClick={onClose}
          className="
          w-8 h-8 rounded flex items-center justify-center
          hover:bg-white/30 transition-colors bg-white/10 
          absolute top-0 left-[calc(100%+12px)]"
        >
          <CrossLightIcon className="w-4 h-4 text-white" />
        </button>
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document.getElementById("modals"));
}

UiModal.Header = function UiModalHeader({ children, className }) {
  return (
    <div className={clsx(className, "px-6 pt-6 pb-4 text-2xl")}>{children}</div>
  );
};

UiModal.Body = function UiModalBody({ children, className }) {
  return <div className={clsx(className, "px-6")}>{children}</div>;
};

UiModal.Footer = function UiModalFooter({ children, className }) {
  return (
    <div className={clsx(className, "mt-auto p-6 flex gap-4 justify-end")}>
      {children}
    </div>
  );
};

function CrossLightIcon({ className }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.34 15.86C0.47 15.95 0.62 16 0.78 16C0.88 16 0.98 15.98 1.08 15.94C1.17 15.9 1.26 15.84 1.33 15.77L8 9.1L14.66 15.77C14.73 15.84 14.82 15.9 14.91 15.94C15.01 15.98 15.11 16 15.21 16C15.37 16 15.52 15.95 15.65 15.86C15.78 15.78 15.88 15.66 15.94 15.51C16 15.37 16.01 15.21 15.98 15.06C15.95 14.91 15.88 14.77 15.77 14.66L9.1 8L15.77 1.33C15.91 1.18 16 0.98 16 0.78C16 0.57 15.91 0.37 15.77 0.22C15.62 0.08 15.42 0 15.21 0C15.01 0 14.81 0.08 14.66 0.22L8 6.89L1.33 0.22C1.18 0.08 0.98 0 0.78 0C0.57 0 0.37 0.08 0.22 0.22C0.08 0.37 0 0.57 0 0.78C0 0.98 0.08 1.18 0.22 1.33L6.89 8L0.22 14.66C0.11 14.77 0.04 14.91 0.01 15.06C-0.02 15.21 0 15.37 0.05 15.51C0.11 15.66 0.21 15.78 0.34 15.86Z"
        fill="currentColor"
      />
    </svg>
  );
}
