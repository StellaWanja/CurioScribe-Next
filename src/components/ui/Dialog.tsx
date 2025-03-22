"use client";

import React from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useId,
  FloatingOverlay,
  FloatingFocusManager,
} from "@floating-ui/react";
import { CircleX } from "lucide-react";

type DialogProps = {
  trigger: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
  className: string;
  dialogIsOpen: boolean;
  setDialogIsOpen: (dialogIsOpen: boolean) => void;
};

function Dialog({
  trigger,
  title,
  description,
  children,
  className,
  dialogIsOpen,
  setDialogIsOpen,
}: DialogProps) {
  const { refs, context } = useFloating({
    open: dialogIsOpen,
    onOpenChange: setDialogIsOpen,
  });
  const click = useClick(context);
  const dismiss = useDismiss(context, {
    outsidePressEvent: "mousedown",
  });
  const role = useRole(context);

  // Merge all the interactions into prop getters
  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  // Set up label and description ids
  const labelId = useId();
  const descriptionId = useId();

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {trigger}
      </div>

      {dialogIsOpen && (
        <FloatingOverlay
          lockScroll
          style={{ background: "rgba(0, 0, 0, 0.8)", zIndex: 50 }}
        >
          <FloatingFocusManager
            context={context}
            modal={true}
            initialFocus={refs.floating}
          >
            <div
              ref={refs.setFloating}
              aria-labelledby={labelId}
              aria-describedby={descriptionId}
              {...getFloatingProps()}
              className={className}
            >
              <h2
                id={labelId}
                className="text-xl font-semibold text-darkgrey dark:text-white"
              >
                {title}
              </h2>
              {description && (
                <p
                  id={descriptionId}
                  className="text-sm text-gray-600 dark:text-gray-300"
                >
                  {description}
                </p>
              )}

              <div className="mt-4">{children}</div>
              <button
                className="absolute top-2 right-2 text-darkgrey dark:text-white text-button text-xl focus:outline-none w-[3rem] h-[3rem] rounded-full flex items-center justify-center"
                onClick={() => setDialogIsOpen(false)}
                aria-label="Close dialog"
              >
                <CircleX />
              </button>
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </>
  );
}

export default Dialog;
