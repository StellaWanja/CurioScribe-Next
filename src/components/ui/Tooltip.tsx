"use client";

import React, { useState } from "react";
import {
  useFloating,
  useHover,
  useInteractions,
  useTransitionStyles,
} from "@floating-ui/react";

function Tooltip({
  children,
  text,
}: {
  children: React.ReactNode;
  text: string;
}) {
  const [toolTipIsOpen, setToolTipIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: toolTipIsOpen,
    onOpenChange: setToolTipIsOpen,
  });
  const hover = useHover(context);
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  const { isMounted, styles } = useTransitionStyles(context, {
    duration: 200,
  });

  return (
    <div ref={refs.setReference} {...getReferenceProps()}>
      {children}

      {toolTipIsOpen && isMounted && (
        <div
          id="tooltip"
          role="tooltip"
          ref={refs.setFloating}
          style={{ ...floatingStyles, ...styles }}
          {...getFloatingProps()}
          className="bg-yellow px-3 py-2 text-darkgrey text-sm font-semibold rounded-md"
        >
          {text}
        </div>
      )}
    </div>
  );
}

export default Tooltip;
