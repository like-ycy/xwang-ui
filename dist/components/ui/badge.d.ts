import { type VariantProps } from "class-variance-authority";
import * as React from "react";
declare const badgeVariants: (props?: ({
    variant?: "neutral" | "info" | "success" | "warning" | "danger" | "primary" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}
declare function Badge({ className, variant, ...props }: BadgeProps): React.JSX.Element;
export { Badge, badgeVariants };
