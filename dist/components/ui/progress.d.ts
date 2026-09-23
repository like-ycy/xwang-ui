import * as ProgressPrimitive from "@radix-ui/react-progress";
import * as React from "react";
declare function Progress({ className, value, indicatorClassName, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root> & {
    indicatorClassName?: string;
}): React.JSX.Element;
export { Progress };
