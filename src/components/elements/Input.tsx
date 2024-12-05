import * as React from "react";

import { cn } from "../../utils/helpers";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { label: string }
>(({ className, label, required, type, ...props }, ref) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-secondary">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus:ring-primary focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    </div>
  );
});
Input.displayName = "Input";

export { Input };
