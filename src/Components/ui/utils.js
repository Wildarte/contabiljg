import * as React from "react";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Slot = React.forwardRef(({ children, ...props }, ref) => {
  if (!React.isValidElement(children)) {
    return null;
  }
  return React.cloneElement(children, { ...props, ref });
});
Slot.displayName = "Slot";
