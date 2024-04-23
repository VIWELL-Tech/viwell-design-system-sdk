import { jsx as s } from "react/jsx-runtime";
import { forwardRef as i, memo as g } from "react";
const T = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary"
}, d = {
  PRIMARY: "bg-green-200 hover:bg-green-400 active:bg-green-500",
  SECONDARY: "bg-blue-200 hover:bg-blue-400 active:bg-blue-500",
  TERTIARY: "bg-red-200 hover:bg-red-400 active:bg-red-500"
}, h = ({ label: t, variant: n = "PRIMARY", isDisabled: o = !1, onClick: l }) => /* @__PURE__ */ s(
  "button",
  {
    className: `text-5xl transition-colors px-6 py-2 rounded-md ${d[n]} ${o ? "bg-gray-300 text-slate-600 cursor-not-allowed pointer-events-none" : ""}`,
    onClick: o ? l : void 0,
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
}, r = {
  SYSTEM_BLACK: "system-black",
  SYSTEM_WHITE: "system-white",
  SYSTEM_LIGHT_GREEN: "system-light-green",
  SYSTEM_GREEN: "system-green",
  SYSTEM_RED: "system-red"
}, c = (t) => t.startsWith("h4") ? "h4" : t.startsWith("p") ? "p" : t, x = {
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
}, _ = {
  [r.SYSTEM_LIGHT_GREEN]: "text-system-light-green",
  [r.SYSTEM_GREEN]: "text-system-green",
  [r.SYSTEM_RED]: "text-system-red",
  [r.SYSTEM_BLACK]: "text-system-black",
  [r.SYSTEM_WHITE]: "text-system-white"
}, A = ({ variant: t, color: n = "system-black", text: o, ...l }) => {
  const m = c(t), a = x[t] + " " + _[n];
  return /* @__PURE__ */ s(m, { className: a, ...l, children: o });
}, E = (t, n) => /* @__PURE__ */ s("svg", { xmlns: "http://www.w3.org/2000/svg", width: 11, height: 13, fill: "none", ref: n, ...t, children: /* @__PURE__ */ s(
  "path",
  {
    fill: "#fff",
    d: "M8.64 6.814c.012-.91.5-1.772 1.277-2.25a2.778 2.778 0 0 0-2.162-1.168c-.91-.096-1.792.544-2.255.544-.473 0-1.186-.535-1.955-.519A2.903 2.903 0 0 0 1.122 4.9c-1.047 1.814-.266 4.48.738 5.945.502.718 1.089 1.52 1.856 1.492.752-.032 1.032-.48 1.94-.48.898 0 1.161.48 1.944.462.807-.014 1.315-.722 1.799-1.446.36-.512.638-1.077.823-1.675A2.613 2.613 0 0 1 8.64 6.814ZM7.16 2.432A2.64 2.64 0 0 0 7.765.54a2.685 2.685 0 0 0-1.737.899 2.534 2.534 0 0 0-.62 1.82 2.246 2.246 0 0 0 1.754-.828Z"
  }
) }), M = i(E), f = g(M), p = () => /* @__PURE__ */ s("div", { children: "Banner" }), Y = () => /* @__PURE__ */ s("div", { children: "Footer" }), u = (t, n = 16) => 1 / n * (t || 0) + "rem";
export {
  T as AT_BUTTON_VARIANT,
  f as AppleIcon,
  h as Button,
  p as MlBanner,
  Y as OrFooter,
  A as Text,
  r as TextColors,
  e as TextVariants,
  c as generateHTMLTag,
  u as pxToRem,
  d as variantClasses
};
