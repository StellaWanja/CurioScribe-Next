"use client";

import React, { useState } from "react";
import {
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from "@floating-ui/react";
import clsx from "clsx";

type TooltipProps = {
  children?: React.ReactNode;
  text: string;
  visible?: boolean;
  trigger?: "hover" | "manual";
  className: string;
};

function Tooltip({
  children,
  text,
  visible,
  trigger = "hover",
  className: tooltipStyle,
}: TooltipProps) {
  const [hoverOpen, setHoverOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: trigger === "manual" ? visible : hoverOpen,
    onOpenChange: trigger === "manual" ? undefined : setHoverOpen,
  });
  const hover = useHover(context, { enabled: trigger === "hover" });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  const { isMounted, styles } = useTransitionStyles(context, {
    duration: 200,
  });

  return (
    <div ref={refs.setReference} {...getReferenceProps()}>
      {children}

      {isMounted && (
        <div
          id="tooltip"
          role="tooltip"
          ref={refs.setFloating}
          style={{ ...floatingStyles, ...styles }}
          {...getFloatingProps()}
          className={clsx(
            tooltipStyle,
            "px-3 py-2 text-sm font-semibold rounded-md",
          )}
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
