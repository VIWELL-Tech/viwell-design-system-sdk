import { jsx as o } from "react/jsx-runtime";
const c = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary"
}, i = {
  PRIMARY: "bg-green-200 hover:bg-green-400 active:bg-green-500",
  SECONDARY: "bg-blue-200 hover:bg-blue-400 active:bg-blue-500",
  TERTIARY: "bg-red-200 hover:bg-red-400 active:bg-red-500"
}, E = ({ label: t, variant: n = "PRIMARY", isDisabled: r = !1, onClick: l }) => /* @__PURE__ */ o(
  "button",
  {
    className: `text-5xl transition-colors px-6 py-2 rounded-md ${i[n]} ${r ? "bg-gray-300 text-slate-600 cursor-not-allowed pointer-events-none" : ""}`,
    onClick: r ? l : void 0,
    children: t
  }
), e = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4M: "h4m",
  H4R: "h4r",
  BODY_REG: "p-reg",
  BODY_14_REG: "p-14-reg",
  BODY_M: "p-m",
  BODY_14_M: "p-14-m",
  SMALL_12_REG: "p-sm-12-reg",
  SMALL_12_M: "p-sm-12-m",
  SMALL_10: "p-sm-10",
  ALL_CAPS_12: "p-all-caps-12"
}, s = {
  SYSTEM_BLACK: "system-black",
  SYSTEM_WHITE: "system-white",
  SYSTEM_LIGHT_GREEN: "system-light-green",
  SYSTEM_GREEN: "system-green",
  SYSTEM_RED: "system-red"
}, g = (t) => t.startsWith("h4") ? "h4" : t.startsWith("p") ? "p" : t, x = {
  [e.H1]: "text-3xl font-medium leading-4xl",
  [e.H2]: "text-2xl font-medium leading-3xl",
  [e.H3]: "text-xl font-medium leading-2xl",
  [e.H4M]: "text-lg font-medium leading-xl",
  [e.H4R]: "text-lg font-normal leading-xl",
  [e.BODY_REG]: "text-md font-normal leading-lg",
  [e.BODY_14_REG]: "text-sm font-normal leading-md",
  [e.BODY_M]: "text-md font-medium leading-lg",
  [e.BODY_14_M]: "text-sm font-medium leading-md",
  [e.SMALL_12_REG]: "text-xs font-normal leading-sm",
  [e.SMALL_12_M]: "text-xs font-medium leading-sm",
  [e.SMALL_10]: "text-xs font-normal leading-xs",
  [e.ALL_CAPS_12]: "text-xs font-normal leading-sm"
}, d = {
  [s.SYSTEM_LIGHT_GREEN]: "text-system-light-green",
  [s.SYSTEM_GREEN]: "text-system-green",
  [s.SYSTEM_RED]: "text-system-red",
  [s.SYSTEM_BLACK]: "text-system-black",
  [s.SYSTEM_WHITE]: "text-system-white"
}, S = ({ variant: t, color: n, text: r, ...l }) => {
  const m = g(t), a = x[t] + " " + d[n || "system-black"];
  return /* @__PURE__ */ o(m, { className: a, ...l, children: r });
}, M = () => /* @__PURE__ */ o("div", { children: "Banner" }), T = () => /* @__PURE__ */ o("div", { children: "Footer" }), R = (t, n = 16) => 1 / n * (t || 0) + "rem";
export {
  c as AT_BUTTON_VARIANT,
  E as Button,
  M as MlBanner,
  T as OrFooter,
  S as Text,
  s as TextColors,
  e as TextVariants,
  g as generateHTMLTag,
  R as pxToRem,
  i as variantClasses
};
