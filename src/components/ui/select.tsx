import * as SelectPrimitive from "@radix-ui/react-select"
import { cva, type VariantProps } from "class-variance-authority"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import * as React from "react"
import { cn } from "../../lib/utils"

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

/*
 * 外观分两档：
 * - default：独立使用的标准触发器。
 * - bare：嵌在业务自绘容器里的裸触发器，边框 / 背景 / 高度 / 宽度全部交给外层，
 *   用于「图标 + 下拉」这种组合控件（如 video_library 的库选择器）。
 *
 * 聚焦环与展开态也放在 variant 里，而不是统一写在 className 里：
 * 后写的 className 会覆盖先写的同类 utility（tailwind-merge 保留后者），
 * 写在基础类里的话 bare 的 ring-0 会被基础类的 ring-2 顶掉。
 */
const triggerVariants = cva(
  "flex items-center justify-between gap-2 rounded-control border text-sm transition-[border-color,box-shadow] duration-base ease-standard placeholder:text-faint disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
  {
    variants: {
      variant: {
        default:
          "control-h w-full border-border-strong bg-surface px-2.5 shadow-xs focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 data-[state=open]:border-primary",
        bare: "h-auto w-auto min-w-0 flex-1 border-0 bg-transparent p-0 shadow-none focus-visible:outline-none data-[state=open]:border-0",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function SelectTrigger({
  className,
  variant,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & VariantProps<typeof triggerVariants>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(triggerVariants({ variant }), className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className="size-4 text-faint opacity-70" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "relative z-50 max-h-72 min-w-[8rem] overflow-hidden rounded-card border border-border bg-surface text-foreground shadow-dialog",
          position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.ScrollUpButton className="flex h-6 items-center justify-center bg-surface">
          <ChevronUp className="size-4" />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex h-6 items-center justify-center bg-surface">
          <ChevronDown className="size-4" />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({ className, ...props }: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      className={cn("px-2 py-1.5 text-xs font-semibold text-faint", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex w-full cursor-default items-center gap-2 rounded-control py-1.5 pr-8 pl-2 text-sm outline-none select-none",
        "focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <Check className="size-4 text-primary" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
