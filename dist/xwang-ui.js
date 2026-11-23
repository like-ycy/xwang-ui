import { jsx as r, jsxs as l } from "react/jsx-runtime";
import { cva as g } from "class-variance-authority";
import { clsx as v } from "clsx";
import { twMerge as y } from "tailwind-merge";
import * as m from "@radix-ui/react-checkbox";
import { Check as f, X as w, Circle as N, ChevronRight as C, ChevronUp as D, ChevronDown as x } from "lucide-react";
import * as c from "@radix-ui/react-dialog";
import * as a from "@radix-ui/react-dropdown-menu";
import * as k from "@radix-ui/react-label";
import * as d from "@radix-ui/react-popover";
import * as p from "@radix-ui/react-progress";
import * as i from "@radix-ui/react-select";
import * as b from "@radix-ui/react-switch";
import * as u from "@radix-ui/react-tabs";
function o(...e) {
  return y(v(e));
}
const S = g(
  "inline-flex h-[22px] items-center rounded-control border border-transparent px-2 text-xs font-medium whitespace-nowrap",
  {
    variants: {
      variant: {
        neutral: "border-border bg-surface-2 text-muted",
        info: "bg-info-soft text-info",
        success: "bg-success-soft text-success",
        warning: "bg-warning-soft text-warning",
        danger: "bg-danger-soft text-danger",
        primary: "bg-primary-soft text-primary"
      }
    },
    defaultVariants: {
      variant: "neutral"
    }
  }
);
function V({ className: e, variant: t, ...n }) {
  return /* @__PURE__ */ r("span", { className: o(S({ variant: t }), e), ...n });
}
const z = g(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-control font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary shadow-sm hover:bg-primary-hover active:bg-primary-active",
        secondary: "border border-border-strong bg-surface text-foreground hover:bg-surface-2 active:bg-surface-3",
        ghost: "bg-transparent text-foreground hover:bg-surface-2",
        danger: "bg-transparent text-danger hover:bg-danger-soft",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "control-h px-3.5 text-sm",
        sm: "control-h-sm px-2.5 text-xs",
        lg: "control-h-lg px-5 text-sm",
        icon: "control-h w-8 px-0",
        "icon-sm": "control-h-sm w-7 px-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function _({ className: e, variant: t, size: n, type: s = "button", ...h }) {
  return /* @__PURE__ */ r(
    "button",
    {
      type: s,
      className: o(z({ variant: t, size: n, className: e })),
      ...h
    }
  );
}
function G({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "card",
      className: o(
        "rounded-card border border-border bg-surface p-4 text-foreground shadow-card",
        e
      ),
      ...t
    }
  );
}
function B({ className: e, ...t }) {
  return /* @__PURE__ */ r("div", { "data-slot": "card-header", className: o("mb-1", e), ...t });
}
function A({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "h3",
    {
      "data-slot": "card-title",
      className: o("text-base font-semibold leading-6", e),
      ...t
    }
  );
}
function F({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "p",
    {
      "data-slot": "card-description",
      className: o("mb-4 text-sm text-muted", e),
      ...t
    }
  );
}
function H({ className: e, ...t }) {
  return /* @__PURE__ */ r("div", { "data-slot": "card-content", className: o("", e), ...t });
}
function O({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "card-footer",
      className: o(
        "mt-4 flex items-center justify-between border-t border-border pt-2.5 text-xs text-faint",
        e
      ),
      ...t
    }
  );
}
function U({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    m.Root,
    {
      "data-slot": "checkbox",
      className: o(
        "peer size-4 shrink-0 rounded-[4px] border border-border-strong bg-surface shadow-xs transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-on-primary",
        e
      ),
      ...t,
      children: /* @__PURE__ */ r(
        m.Indicator,
        {
          className: o("flex items-center justify-center text-current"),
          children: /* @__PURE__ */ r(f, { className: "size-3", strokeWidth: 3 })
        }
      )
    }
  );
}
const X = c.Root, W = c.Trigger, P = c.Portal, $ = c.Close;
function T({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    c.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: o(
        "fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  );
}
function q({
  className: e,
  children: t,
  showClose: n = !1,
  ...s
}) {
  return /* @__PURE__ */ l(P, { children: [
    /* @__PURE__ */ r(T, {}),
    /* @__PURE__ */ l(
      c.Content,
      {
        "data-slot": "dialog-content",
        className: o(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[420px] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-dialog border border-border bg-surface p-6 shadow-dialog",
          e
        ),
        ...s,
        children: [
          t,
          n && /* @__PURE__ */ l(c.Close, { className: "absolute top-4 right-4 rounded-control p-1 text-faint opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55", children: [
            /* @__PURE__ */ r(w, { className: "size-4" }),
            /* @__PURE__ */ r("span", { className: "sr-only", children: "关闭" })
          ] })
        ]
      }
    )
  ] });
}
function E({ className: e, ...t }) {
  return /* @__PURE__ */ r("div", { "data-slot": "dialog-header", className: o("flex flex-col gap-1.5", e), ...t });
}
function J({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    "div",
    {
      "data-slot": "dialog-footer",
      className: o("flex justify-end gap-2.5", e),
      ...t
    }
  );
}
function K({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    c.Title,
    {
      "data-slot": "dialog-title",
      className: o("text-base font-semibold", e),
      ...t
    }
  );
}
function Q({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    c.Description,
    {
      "data-slot": "dialog-description",
      className: o("text-sm text-muted", e),
      ...t
    }
  );
}
const Y = a.Root, Z = a.Trigger, ee = a.Group, te = a.Portal, re = a.Sub, oe = a.RadioGroup;
function ne({
  className: e,
  inset: t,
  children: n,
  ...s
}) {
  return /* @__PURE__ */ l(
    a.SubTrigger,
    {
      className: o(
        "flex cursor-default items-center gap-2 rounded-control px-2 py-1.5 text-sm outline-none select-none",
        "focus:bg-surface-2 data-[state=open]:bg-surface-2",
        t && "pl-8",
        e
      ),
      ...s,
      children: [
        n,
        /* @__PURE__ */ r(C, { className: "ml-auto size-4" })
      ]
    }
  );
}
function ae({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    a.SubContent,
    {
      className: o(
        "z-50 min-w-[8rem] overflow-hidden rounded-card border border-border bg-surface p-1 text-foreground shadow-dialog",
        e
      ),
      ...t
    }
  );
}
function se({
  className: e,
  sideOffset: t = 4,
  ...n
}) {
  return /* @__PURE__ */ r(a.Portal, { children: /* @__PURE__ */ r(
    a.Content,
    {
      sideOffset: t,
      className: o(
        "z-50 min-w-[8rem] overflow-hidden rounded-card border border-border bg-surface p-1 text-foreground shadow-dialog",
        e
      ),
      ...n
    }
  ) });
}
function ie({
  className: e,
  inset: t,
  variant: n = "default",
  ...s
}) {
  return /* @__PURE__ */ r(
    a.Item,
    {
      className: o(
        "relative flex cursor-default items-center gap-2 rounded-control px-2 py-1.5 text-sm outline-none select-none",
        "focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-faint",
        n === "destructive" && "text-danger focus:bg-danger-soft [&_svg]:text-danger",
        t && "pl-8",
        e
      ),
      ...s
    }
  );
}
function le({
  className: e,
  children: t,
  checked: n,
  ...s
}) {
  return /* @__PURE__ */ l(
    a.CheckboxItem,
    {
      className: o(
        "relative flex cursor-default items-center rounded-control py-1.5 pr-2 pl-8 text-sm outline-none select-none",
        "focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e
      ),
      checked: n,
      ...s,
      children: [
        /* @__PURE__ */ r("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ r(a.ItemIndicator, { children: /* @__PURE__ */ r(f, { className: "size-4 text-primary" }) }) }),
        t
      ]
    }
  );
}
function ce({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l(
    a.RadioItem,
    {
      className: o(
        "relative flex cursor-default items-center rounded-control py-1.5 pr-2 pl-8 text-sm outline-none select-none",
        "focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ r("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ r(a.ItemIndicator, { children: /* @__PURE__ */ r(N, { className: "size-2 fill-primary text-primary" }) }) }),
        t
      ]
    }
  );
}
function de({
  className: e,
  inset: t,
  ...n
}) {
  return /* @__PURE__ */ r(
    a.Label,
    {
      className: o(
        "px-2 py-1.5 text-xs font-semibold text-faint",
        t && "pl-8",
        e
      ),
      ...n
    }
  );
}
function ue({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    a.Separator,
    {
      className: o("-mx-1 my-1 h-px bg-border", e),
      ...t
    }
  );
}
function fe({ className: e, ...t }) {
  return /* @__PURE__ */ r("span", { className: o("ml-auto text-xs tracking-widest text-faint", e), ...t });
}
function me({ className: e, type: t, ...n }) {
  return /* @__PURE__ */ r(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: o(
        "control-h w-full rounded-control border border-border-strong bg-surface px-2.5 text-sm text-foreground shadow-xs transition-colors",
        "placeholder:text-faint",
        "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-danger aria-invalid:ring-danger/20",
        e
      ),
      ...n
    }
  );
}
function pe({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    k.Root,
    {
      "data-slot": "label",
      className: o(
        "flex items-center gap-2 text-sm font-semibold leading-none select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const be = d.Root, ge = d.Trigger, xe = d.Anchor;
function he({
  className: e,
  align: t = "center",
  sideOffset: n = 4,
  ...s
}) {
  return /* @__PURE__ */ r(d.Portal, { children: /* @__PURE__ */ r(
    d.Content,
    {
      align: t,
      sideOffset: n,
      className: o(
        "z-50 w-72 rounded-card border border-border bg-surface p-4 text-foreground shadow-dialog outline-none",
        e
      ),
      ...s
    }
  ) });
}
function ve({
  className: e,
  value: t,
  indicatorClassName: n,
  ...s
}) {
  return /* @__PURE__ */ r(
    p.Root,
    {
      "data-slot": "progress",
      value: t,
      className: o(
        "relative h-2 w-full overflow-hidden rounded-full bg-surface-2",
        e
      ),
      ...s,
      children: /* @__PURE__ */ r(
        p.Indicator,
        {
          className: o("h-full w-full flex-1 bg-primary transition-transform", n),
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
const ye = i.Root, we = i.Group, Ne = i.Value;
function Ce({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l(
    i.Trigger,
    {
      "data-slot": "select-trigger",
      className: o(
        "control-h flex w-full items-center justify-between gap-2 rounded-control border border-border-strong bg-surface px-2.5 text-sm shadow-xs transition-colors",
        "placeholder:text-faint",
        "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=open]:border-primary [&>span]:line-clamp-1",
        e
      ),
      ...n,
      children: [
        t,
        /* @__PURE__ */ r(i.Icon, { asChild: !0, children: /* @__PURE__ */ r(x, { className: "size-4 text-faint opacity-70" }) })
      ]
    }
  );
}
function De({
  className: e,
  children: t,
  position: n = "popper",
  ...s
}) {
  return /* @__PURE__ */ r(i.Portal, { children: /* @__PURE__ */ l(
    i.Content,
    {
      className: o(
        "relative z-50 max-h-72 min-w-[8rem] overflow-hidden rounded-card border border-border bg-surface text-foreground shadow-dialog",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: n,
      ...s,
      children: [
        /* @__PURE__ */ r(i.ScrollUpButton, { className: "flex h-6 items-center justify-center bg-surface", children: /* @__PURE__ */ r(D, { className: "size-4" }) }),
        /* @__PURE__ */ r(
          i.Viewport,
          {
            className: o(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ r(i.ScrollDownButton, { className: "flex h-6 items-center justify-center bg-surface", children: /* @__PURE__ */ r(x, { className: "size-4" }) })
      ]
    }
  ) });
}
function ke({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    i.Label,
    {
      className: o("px-2 py-1.5 text-xs font-semibold text-faint", e),
      ...t
    }
  );
}
function Se({
  className: e,
  children: t,
  ...n
}) {
  return /* @__PURE__ */ l(
    i.Item,
    {
      className: o(
        "relative flex w-full cursor-default items-center gap-2 rounded-control py-1.5 pr-8 pl-2 text-sm outline-none select-none",
        "focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e
      ),
      ...n,
      children: [
        /* @__PURE__ */ r("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ r(i.ItemIndicator, { children: /* @__PURE__ */ r(f, { className: "size-4 text-primary" }) }) }),
        /* @__PURE__ */ r(i.ItemText, { children: t })
      ]
    }
  );
}
function ze({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ r(
    i.Separator,
    {
      className: o("-mx-1 my-1 h-px bg-border", e),
      ...t
    }
  );
}
function Pe({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    b.Root,
    {
      "data-slot": "switch",
      className: o(
        "peer inline-flex h-5 w-[34px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-border-strong",
        e
      ),
      ...t,
      children: /* @__PURE__ */ r(
        b.Thumb,
        {
          className: o(
            "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-sm ring-0 transition-transform",
            "data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
const Te = u.Root;
function Ie({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    u.List,
    {
      "data-slot": "tabs-list",
      className: o(
        "inline-flex h-9 items-center justify-center gap-1 rounded-card bg-surface-2 p-1 text-muted",
        e
      ),
      ...t
    }
  );
}
function Me({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    u.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: o(
        "inline-flex items-center justify-center rounded-control px-3 py-1 text-sm font-medium whitespace-nowrap transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-[state=active]:bg-surface data-[state=active]:text-primary data-[state=active]:shadow-card",
        e
      ),
      ...t
    }
  );
}
function je({ className: e, ...t }) {
  return /* @__PURE__ */ r(
    u.Content,
    {
      "data-slot": "tabs-content",
      className: o(
        "mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55",
        e
      ),
      ...t
    }
  );
}
export {
  V as Badge,
  _ as Button,
  G as Card,
  H as CardContent,
  F as CardDescription,
  O as CardFooter,
  B as CardHeader,
  A as CardTitle,
  U as Checkbox,
  X as Dialog,
  $ as DialogClose,
  q as DialogContent,
  Q as DialogDescription,
  J as DialogFooter,
  E as DialogHeader,
  T as DialogOverlay,
  P as DialogPortal,
  K as DialogTitle,
  W as DialogTrigger,
  Y as DropdownMenu,
  le as DropdownMenuCheckboxItem,
  se as DropdownMenuContent,
  ee as DropdownMenuGroup,
  ie as DropdownMenuItem,
  de as DropdownMenuLabel,
  te as DropdownMenuPortal,
  oe as DropdownMenuRadioGroup,
  ce as DropdownMenuRadioItem,
  ue as DropdownMenuSeparator,
  fe as DropdownMenuShortcut,
  re as DropdownMenuSub,
  ae as DropdownMenuSubContent,
  ne as DropdownMenuSubTrigger,
  Z as DropdownMenuTrigger,
  me as Input,
  pe as Label,
  be as Popover,
  xe as PopoverAnchor,
  he as PopoverContent,
  ge as PopoverTrigger,
  ve as Progress,
  ye as Select,
  De as SelectContent,
  we as SelectGroup,
  Se as SelectItem,
  ke as SelectLabel,
  ze as SelectSeparator,
  Ce as SelectTrigger,
  Ne as SelectValue,
  Pe as Switch,
  Te as Tabs,
  je as TabsContent,
  Ie as TabsList,
  Me as TabsTrigger,
  S as badgeVariants,
  z as buttonVariants
};
