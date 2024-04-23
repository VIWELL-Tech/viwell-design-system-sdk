import { jsx as o } from "react/jsx-runtime";
const d = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary"
}, m = {
  PRIMARY: "bg-green-200 hover:bg-green-400 active:bg-green-500",
  SECONDARY: "bg-blue-200 hover:bg-blue-400 active:bg-blue-500",
  TERTIARY: "bg-red-200 hover:bg-red-400 active:bg-red-500"
}, g = ({ label: t, variant: n = "PRIMARY", isDisabled: r = !1, onClick: l }) => /* @__PURE__ */ o(
  "button",
  {
    className: `text-5xl transition-colors px-6 py-2 rounded-md ${m[n]} ${r ? "bg-gray-300 text-slate-600 cursor-not-allowed pointer-events-none" : ""}`,
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
}, a = (t) => t.startsWith("h4") ? "h4" : t.startsWith("p") ? "p" : t, x = ({ variant: t, text: n, ...r }) => {
  const l = {
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
  }, s = a(t);
  return /* @__PURE__ */ o(s, { className: l[t], ...r, children: n });
}, _ = () => /* @__PURE__ */ o("div", { children: "Banner" }), c = () => /* @__PURE__ */ o("div", { children: "Footer" }), u = (t, n = 16) => 1 / n * (t || 0) + "rem";
export {
  d as AT_BUTTON_VARIANT,
  g as Button,
  _ as MlBanner,
  c as OrFooter,
  x as Text,
  e as TextVariants,
  a as generateHTMLTag,
  u as pxToRem,
  m as variantClasses
};
