import { jsx as s } from "react/jsx-runtime";
import { forwardRef as m, memo as a } from "react";
const T = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary"
}, d = {
  PRIMARY: "bg-green-200 hover:bg-green-400 active:bg-green-500",
  SECONDARY: "bg-blue-200 hover:bg-blue-400 active:bg-blue-500",
  TERTIARY: "bg-red-200 hover:bg-red-400 active:bg-red-500"
}, p = ({ label: e, variant: n = "PRIMARY", isDisabled: r = !1, onClick: l }) => /* @__PURE__ */ s(
  "button",
  {
    className: `text-5xl transition-colors px-6 py-2 rounded-md ${d[n]} ${r ? "bg-gray-300 text-slate-600 cursor-not-allowed pointer-events-none" : ""}`,
    onClick: r ? l : void 0,
    children: e
  }
), t = {
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
}, o = {
  SYSTEM_BLACK: "system-black",
  SYSTEM_WHITE: "system-white",
  SYSTEM_LIGHT_GREEN: "system-light-green",
  SYSTEM_GREEN: "system-green",
  SYSTEM_RED: "system-red"
}, c = (e) => e.startsWith("h4") ? "h4" : e.startsWith("p") ? "p" : e, x = {
  [t.H1]: "text-3xl font-medium leading-4xl",
  [t.H2]: "text-2xl font-medium leading-3xl",
  [t.H3]: "text-xl font-medium leading-2xl",
  [t.H4M]: "text-lg font-medium leading-xl",
  [t.H4R]: "text-lg font-normal leading-xl",
  [t.BODY_REG]: "text-md font-normal leading-lg",
  [t.BODY_14_REG]: "text-sm font-normal leading-md",
  [t.BODY_M]: "text-md font-medium leading-lg",
  [t.BODY_14_M]: "text-sm font-medium leading-md",
  [t.SMALL_12_REG]: "text-xs font-normal leading-sm",
  [t.SMALL_12_M]: "text-xs font-medium leading-sm",
  [t.SMALL_10]: "text-xs font-normal leading-xs",
  [t.ALL_CAPS_12]: "text-xs font-normal leading-sm"
}, _ = {
  [o.SYSTEM_LIGHT_GREEN]: "text-system-light-green",
  [o.SYSTEM_GREEN]: "text-system-green",
  [o.SYSTEM_RED]: "text-system-red",
  [o.SYSTEM_BLACK]: "text-system-black",
  [o.SYSTEM_WHITE]: "text-system-white"
}, A = ({ variant: e, color: n = "system-black", text: r, ...l }) => {
  const g = c(e), i = x[e] + " " + _[n];
  return /* @__PURE__ */ s(g, { className: i, ...l, children: r });
}, M = (e, n) => /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", width: 11, height: 13, fill: "none", ref: n, ...e, children: /* @__PURE__ */ s(
  "path",
  {
    fill: "#fff",
    d: "M8.64 6.814c.012-.91.5-1.772 1.277-2.25a2.778 2.778 0 0 0-2.162-1.168c-.91-.096-1.792.544-2.255.544-.473 0-1.186-.535-1.955-.519A2.903 2.903 0 0 0 1.122 4.9c-1.047 1.814-.266 4.48.738 5.945.502.718 1.089 1.52 1.856 1.492.752-.032 1.032-.48 1.94-.48.898 0 1.161.48 1.944.462.807-.014 1.315-.722 1.799-1.446.36-.512.638-1.077.823-1.675A2.613 2.613 0 0 1 8.64 6.814ZM7.16 2.432A2.64 2.64 0 0 0 7.765.54a2.685 2.685 0 0 0-1.737.899 2.534 2.534 0 0 0-.62 1.82 2.246 2.246 0 0 0 1.754-.828Z"
  }
) }), S = m(M), Y = a(S), h = (e, n) => /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", width: 10, height: 11, fill: "none", ref: n, ...e, children: /* @__PURE__ */ s(
  "path",
  {
    fill: "#fff",
    d: "M9.21 5.109 7.455 3.97 6.012 5.54l1.32 1.433 1.878-1.22a.351.351 0 0 0 .121-.136.404.404 0 0 0 .044-.186.405.405 0 0 0-.044-.186.351.351 0 0 0-.121-.136ZM7.158 3.776 5.227 2.523.996.084l4.779 5.197 1.383-1.505Zm-6.092 7.141 4.168-2.582 1.8-1.169-1.26-1.368-4.708 5.12ZM.713.294.708 10.79l4.829-5.25L.713.294Z"
  }
) }), f = m(h), L = a(f), u = () => /* @__PURE__ */ s("div", { children: "Banner" }), b = () => /* @__PURE__ */ s("div", { children: "Footer" }), v = (e, n = 16) => 1 / n * (e || 0) + "rem";
export {
  T as AT_BUTTON_VARIANT,
  Y as AppleIcon,
  p as Button,
  L as GoogleStoreIcon,
  u as MlBanner,
  b as OrFooter,
  A as Text,
  o as TextColors,
  t as TextVariants,
  c as generateHTMLTag,
  v as pxToRem,
  d as variantClasses
};
