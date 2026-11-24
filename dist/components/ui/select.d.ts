import * as SelectPrimitive from "@radix-ui/react-select";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";
declare const Select: React.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const triggerVariants: (props?: ({
    variant?: "default" | "bare" | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
declare function SelectTrigger({ className, variant, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Trigger> & VariantProps<typeof triggerVariants>): React.JSX.Element;
declare function SelectContent({ className, children, position, ...props }: React.ComponentProps<typeof SelectPrimitive.Content>): React.JSX.Element;
declare function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>): React.JSX.Element;
declare function SelectItem({ className, children, ...props }: React.ComponentProps<typeof SelectPrimitive.Item>): React.JSX.Element;
declare function SelectSeparator({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Separator>): React.JSX.Element;
export { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue, };
