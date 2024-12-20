import * as React from "react";
import { Check } from 'lucide-react';

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  HTMLInputElement, // Tipo do elemento HTML
  React.ComponentPropsWithoutRef<"input">
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    type="checkbox"
    className={cn(
      "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className ?? "" // Utilizando o operador de coalescência nula
    )}
    {...props}
  />
));
Checkbox.displayName = "Checkbox";

export { Checkbox };
