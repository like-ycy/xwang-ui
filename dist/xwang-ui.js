import { jsx as a, jsxs as d } from "react/jsx-runtime";
import { cva as f } from "class-variance-authority";
import { clsx as v } from "clsx";
import { twMerge as w } from "tailwind-merge";
import * as b from "@radix-ui/react-checkbox";
import { Check as m, X as y, Circle as N, ChevronRight as C, ChevronUp as D, ChevronDown as x } from "lucide-react";
import * as l from "@radix-ui/react-dialog";
import * as s from "@radix-ui/react-dropdown-menu";
import * as z from "@radix-ui/react-label";
import * as c from "@radix-ui/react-popover";
import * as p from "@radix-ui/react-progress";
import * as i from "@radix-ui/react-select";
import * as g from "@radix-ui/react-switch";
import * as u from "@radix-ui/react-tabs";
function r(...e) {
  return w(v(e));
}
const k = f(
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
function _({ className: e, variant: t, ...o }) {
  return /* @__PURE__ */ a("span", { className: r(k({ variant: t }), e), ...o });
}
const S = f(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-control font-semibold transition-[background-color,border-color,box-shadow,transform,translate] duration-base ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary shadow-sm hover:bg-primary-hover hover:shadow-card active:bg-primary-active active:translate-y-px",
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
function G({ className: e, variant: t, size: o, type: n = "button", ...h }) {
  return /* @__PURE__ */ a(
    "button",
    {
      type: n,
      className: r(S({ variant: t, size: o, className: e })),
      ...h
    }
  );
}
function B({
  className: e,
  interactive: t = !1,
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card",
      "data-interactive": t || void 0,
      className: r(
        "rounded-card border border-border bg-surface p-4 text-foreground shadow-card",
        t && "cursor-pointer transition-[border-color,box-shadow,translate] duration-base ease-standard hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-card-hover",
        e
      ),
      ...o
    }
  );
}
function A({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "card-header", className: r("mb-1", e), ...t });
}
function F({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "h3",
    {
      "data-slot": "card-title",
      className: r("text-base font-semibold leading-6", e),
      ...t
    }
  );
}
function H({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      "data-slot": "card-description",
      className: r("mb-4 text-sm text-muted", e),
      ...t
    }
  );
}
function O({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "card-content", className: r("", e), ...t });
}
function U({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "card-footer",
      className: r(
        "mt-4 flex items-center justify-between border-t border-border pt-2.5 text-xs text-faint",
        e
      ),
      ...t
    }
  );
}
function X({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    b.Root,
    {
      "data-slot": "checkbox",
      className: r(
        "peer size-4 shrink-0 rounded-[4px] border border-border-strong bg-surface shadow-xs transition-colors duration-base ease-standard",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-1 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-on-primary",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        b.Indicator,
        {
          className: r("flex items-center justify-center text-current"),
          children: /* @__PURE__ */ a(m, { className: "size-3", strokeWidth: 3 })
        }
      )
    }
  );
}
const W = l.Root, $ = l.Trigger, P = l.Portal, q = l.Close;
function T({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    l.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: r(
        "fixed inset-0 z-50 bg-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  );
}
function E({
  className: e,
  children: t,
  showClose: o = !1,
  ...n
}) {
  return /* @__PURE__ */ d(P, { children: [
    /* @__PURE__ */ a(T, {}),
    /* @__PURE__ */ d(
      l.Content,
      {
        "data-slot": "dialog-content",
        className: r(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[420px] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-dialog border border-border bg-surface p-6 shadow-dialog",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          e
        ),
        ...n,
        children: [
          t,
          o && /* @__PURE__ */ d(l.Close, { className: "absolute top-4 right-4 rounded-control p-1 text-faint opacity-70 transition-opacity duration-base ease-standard hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55", children: [
            /* @__PURE__ */ a(y, { className: "size-4" }),
            /* @__PURE__ */ a("span", { className: "sr-only", children: "关闭" })
          ] })
        ]
      }
    )
  ] });
}
function J({ className: e, ...t }) {
  return /* @__PURE__ */ a("div", { "data-slot": "dialog-header", className: r("flex flex-col gap-1.5", e), ...t });
}
function K({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      "data-slot": "dialog-footer",
      className: r("flex justify-end gap-2.5", e),
      ...t
    }
  );
}
function Q({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    l.Title,
    {
      "data-slot": "dialog-title",
      className: r("text-base font-semibold", e),
      ...t
    }
  );
}
function Y({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    l.Description,
    {
      "data-slot": "dialog-description",
      className: r("text-sm text-muted", e),
      ...t
    }
  );
}
const Z = s.Root, ee = s.Trigger, te = s.Group, ae = s.Portal, re = s.Sub, oe = s.RadioGroup;
function ne({
  className: e,
  inset: t,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ d(
    s.SubTrigger,
    {
      className: r(
        "flex cursor-default items-center gap-2 rounded-control px-2 py-1.5 text-sm outline-none select-none",
        "focus:bg-surface-2 data-[state=open]:bg-surface-2",
        t && "pl-8",
        e
      ),
      ...n,
      children: [
        o,
        /* @__PURE__ */ a(C, { className: "ml-auto size-4" })
      ]
    }
  );
}
function se({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    s.SubContent,
    {
      className: r(
        "z-50 min-w-[8rem] overflow-hidden rounded-card border border-border bg-surface p-1 text-foreground shadow-dialog",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        e
      ),
      ...t
    }
  );
}
function ie({
  className: e,
  sideOffset: t = 4,
  ...o
}) {
  return /* @__PURE__ */ a(s.Portal, { children: /* @__PURE__ */ a(
    s.Content,
    {
      sideOffset: t,
      className: r(
        "z-50 min-w-[8rem] overflow-hidden rounded-card border border-border bg-surface p-1 text-foreground shadow-dialog",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        e
      ),
      ...o
    }
  ) });
}
function de({
  className: e,
  inset: t,
  variant: o = "default",
  ...n
}) {
  return /* @__PURE__ */ a(
    s.Item,
    {
      className: r(
        "relative flex cursor-default items-center gap-2 rounded-control px-2 py-1.5 text-sm outline-none select-none",
        "focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-faint",
        o === "destructive" && "text-danger focus:bg-danger-soft [&_svg]:text-danger",
        t && "pl-8",
        e
      ),
      ...n
    }
  );
}
function le({
  className: e,
  children: t,
  checked: o,
  ...n
}) {
  return /* @__PURE__ */ d(
    s.CheckboxItem,
    {
      className: r(
        "relative flex cursor-default items-center rounded-control py-1.5 pr-2 pl-8 text-sm outline-none select-none",
        "focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e
      ),
      checked: o,
      ...n,
      children: [
        /* @__PURE__ */ a("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(s.ItemIndicator, { children: /* @__PURE__ */ a(m, { className: "size-4 text-primary" }) }) }),
        t
      ]
    }
  );
}
function ce({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ d(
    s.RadioItem,
    {
      className: r(
        "relative flex cursor-default items-center rounded-control py-1.5 pr-2 pl-8 text-sm outline-none select-none",
        "focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(s.ItemIndicator, { children: /* @__PURE__ */ a(N, { className: "size-2 fill-primary text-primary" }) }) }),
        t
      ]
    }
  );
}
function ue({
  className: e,
  inset: t,
  ...o
}) {
  return /* @__PURE__ */ a(
    s.Label,
    {
      className: r(
        "px-2 py-1.5 text-xs font-semibold text-faint",
        t && "pl-8",
        e
      ),
      ...o
    }
  );
}
function fe({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    s.Separator,
    {
      className: r("-mx-1 my-1 h-px bg-border", e),
      ...t
    }
  );
}
function me({ className: e, ...t }) {
  return /* @__PURE__ */ a("span", { className: r("ml-auto text-xs tracking-widest text-faint", e), ...t });
}
function be({ className: e, type: t, ...o }) {
  return /* @__PURE__ */ a(
    "input",
    {
      type: t,
      "data-slot": "input",
      className: r(
        "control-h w-full rounded-control border border-border-strong bg-surface px-2.5 text-sm text-foreground shadow-xs transition-[border-color,box-shadow] duration-base ease-standard",
        "placeholder:text-faint",
        "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-danger aria-invalid:ring-danger/20",
        e
      ),
      ...o
    }
  );
}
function pe({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    z.Root,
    {
      "data-slot": "label",
      className: r(
        "flex items-center gap-2 text-sm font-semibold leading-none select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      ...t
    }
  );
}
const ge = c.Root, xe = c.Trigger, he = c.Anchor;
function ve({
  className: e,
  align: t = "center",
  sideOffset: o = 4,
  ...n
}) {
  return /* @__PURE__ */ a(c.Portal, { children: /* @__PURE__ */ a(
    c.Content,
    {
      align: t,
      sideOffset: o,
      className: r(
        "z-50 w-72 rounded-card border border-border bg-surface p-4 text-foreground shadow-dialog outline-none",
        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
        e
      ),
      ...n
    }
  ) });
}
function we({
  className: e,
  value: t,
  indicatorClassName: o,
  ...n
}) {
  return /* @__PURE__ */ a(
    p.Root,
    {
      "data-slot": "progress",
      value: t,
      className: r(
        "relative h-2 w-full overflow-hidden rounded-full bg-surface-2",
        e
      ),
      ...n,
      children: /* @__PURE__ */ a(
        p.Indicator,
        {
          className: r("h-full w-full flex-1 bg-primary transition-transform duration-base ease-standard", o),
          style: { transform: `translateX(-${100 - (t || 0)}%)` }
        }
      )
    }
  );
}
const ye = i.Root, Ne = i.Group, Ce = i.Value, I = f(
  "flex items-center justify-between gap-2 rounded-control border text-sm transition-[border-color,box-shadow] duration-base ease-standard placeholder:text-faint disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
  {
    variants: {
      variant: {
        default: "control-h w-full border-border-strong bg-surface px-2.5 shadow-xs focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 data-[state=open]:border-primary",
        bare: "h-auto w-auto min-w-0 flex-1 border-0 bg-transparent p-0 shadow-none focus-visible:outline-none data-[state=open]:border-0"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
function De({
  className: e,
  variant: t,
  children: o,
  ...n
}) {
  return /* @__PURE__ */ d(
    i.Trigger,
    {
      "data-slot": "select-trigger",
      className: r(I({ variant: t }), e),
      ...n,
      children: [
        o,
        /* @__PURE__ */ a(i.Icon, { asChild: !0, children: /* @__PURE__ */ a(x, { className: "size-4 text-faint opacity-70" }) })
      ]
    }
  );
}
function ze({
  className: e,
  children: t,
  position: o = "popper",
  ...n
}) {
  return /* @__PURE__ */ a(i.Portal, { children: /* @__PURE__ */ d(
    i.Content,
    {
      className: r(
        "relative z-50 max-h-72 min-w-[8rem] overflow-hidden rounded-card border border-border bg-surface text-foreground shadow-dialog",
        o === "popper" && "data-[side=bottom]:translate-y-1 data-[side=top]:-translate-y-1",
        e
      ),
      position: o,
      ...n,
      children: [
        /* @__PURE__ */ a(i.ScrollUpButton, { className: "flex h-6 items-center justify-center bg-surface", children: /* @__PURE__ */ a(D, { className: "size-4" }) }),
        /* @__PURE__ */ a(
          i.Viewport,
          {
            className: r(
              "p-1",
              o === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t
          }
        ),
        /* @__PURE__ */ a(i.ScrollDownButton, { className: "flex h-6 items-center justify-center bg-surface", children: /* @__PURE__ */ a(x, { className: "size-4" }) })
      ]
    }
  ) });
}
function ke({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    i.Label,
    {
      className: r("px-2 py-1.5 text-xs font-semibold text-faint", e),
      ...t
    }
  );
}
function Se({
  className: e,
  children: t,
  ...o
}) {
  return /* @__PURE__ */ d(
    i.Item,
    {
      className: r(
        "relative flex w-full cursor-default items-center gap-2 rounded-control py-1.5 pr-8 pl-2 text-sm outline-none select-none",
        "focus:bg-surface-2 data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e
      ),
      ...o,
      children: [
        /* @__PURE__ */ a("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ a(i.ItemIndicator, { children: /* @__PURE__ */ a(m, { className: "size-4 text-primary" }) }) }),
        /* @__PURE__ */ a(i.ItemText, { children: t })
      ]
    }
  );
}
function Pe({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    i.Separator,
    {
      className: r("-mx-1 my-1 h-px bg-border", e),
      ...t
    }
  );
}
function Te({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    g.Root,
    {
      "data-slot": "switch",
      className: r(
        "peer inline-flex h-5 w-[34px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-base ease-standard",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-border-strong",
        e
      ),
      ...t,
      children: /* @__PURE__ */ a(
        g.Thumb,
        {
          className: r(
            "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-sm ring-0 transition-transform duration-base ease-standard",
            "data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
const Ie = u.Root;
function Me({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    u.List,
    {
      "data-slot": "tabs-list",
      className: r(
        "inline-flex h-9 items-center justify-center gap-1 rounded-card bg-surface-2 p-1 text-muted",
        e
      ),
      ...t
    }
  );
}
function je({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    u.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: r(
        "inline-flex items-center justify-center rounded-control px-3 py-1 text-sm font-medium whitespace-nowrap transition-colors duration-base ease-standard",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55",
        "disabled:pointer-events-none disabled:opacity-50",
        "data-[state=active]:bg-surface data-[state=active]:text-primary data-[state=active]:shadow-card",
        e
      ),
      ...t
    }
  );
}
function Re({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    u.Content,
    {
      "data-slot": "tabs-content",
      className: r(
        "mt-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/55",
        e
      ),
      ...t
    }
  );
}
export {
  _ as Badge,
  G as Button,
  B as Card,
  O as CardContent,
  H as CardDescription,
  U as CardFooter,
  A as CardHeader,
  F as CardTitle,
  X as Checkbox,
  W as Dialog,
  q as DialogClose,
  E as DialogContent,
  Y as DialogDescription,
  K as DialogFooter,
  J as DialogHeader,
  T as DialogOverlay,
  P as DialogPortal,
  Q as DialogTitle,
  $ as DialogTrigger,
  Z as DropdownMenu,
  le as DropdownMenuCheckboxItem,
  ie as DropdownMenuContent,
  te as DropdownMenuGroup,
  de as DropdownMenuItem,
  ue as DropdownMenuLabel,
  ae as DropdownMenuPortal,
  oe as DropdownMenuRadioGroup,
  ce as DropdownMenuRadioItem,
  fe as DropdownMenuSeparator,
  me as DropdownMenuShortcut,
  re as DropdownMenuSub,
  se as DropdownMenuSubContent,
  ne as DropdownMenuSubTrigger,
  ee as DropdownMenuTrigger,
  be as Input,
  pe as Label,
  ge as Popover,
  he as PopoverAnchor,
  ve as PopoverContent,
  xe as PopoverTrigger,
  we as Progress,
  ye as Select,
  ze as SelectContent,
  Ne as SelectGroup,
  Se as SelectItem,
  ke as SelectLabel,
  Pe as SelectSeparator,
  De as SelectTrigger,
  Ce as SelectValue,
  Te as Switch,
  Ie as Tabs,
  Re as TabsContent,
  Me as TabsList,
  je as TabsTrigger,
  k as badgeVariants,
  S as buttonVariants
};
