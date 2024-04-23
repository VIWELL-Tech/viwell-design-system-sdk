import { jsxs as c, jsx as n } from "react/jsx-runtime";
import { forwardRef as m, memo as d } from "react";
const g = {
  PRIMARY: "primary"
}, x = {
  [g.PRIMARY]: `px-6 py-4 bg-system-black text-system-white hover:bg-grey-300 disabled:bg-grey-200 rounded-full transition-all ease-in-out duration-300 
                             font-medium text-white bg-black disabled:cursor-not-allowed`
}, A = ({ variant: t, label: s, disabled: i = !1, icon: o, ...a }) => {
  const r = x[t];
  return console.log("variant", t, "classes", r), console.log("icon", o), /* @__PURE__ */ c("button", { className: r, disabled: i, ...a, children: [
    s,
    o && /* @__PURE__ */ n("span", { "data-testid": "button-icon", className: "inline-block ml-2", children: o })
  ] });
}, e = {
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
}, l = {
  SYSTEM_BLACK: "system-black",
  SYSTEM_WHITE: "system-white",
  SYSTEM_LIGHT_GREEN: "system-light-green",
  SYSTEM_GREEN: "system-green",
  SYSTEM_RED: "system-red"
}, h = (t) => t.startsWith("h4") ? "h4" : t.startsWith("p") ? "p" : t, f = {
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
  [l.SYSTEM_LIGHT_GREEN]: "text-system-light-green",
  [l.SYSTEM_GREEN]: "text-system-green",
  [l.SYSTEM_RED]: "text-system-red",
  [l.SYSTEM_BLACK]: "text-system-black",
  [l.SYSTEM_WHITE]: "text-system-white"
}, T = ({ variant: t, color: s = "system-black", text: i, ...o }) => {
  const a = h(t), r = f[t] + " " + _[s];
  return /* @__PURE__ */ n(a, { className: r, ...o, children: i });
}, M = (t, s) => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: 11, height: 13, fill: "none", ref: s, ...t, children: /* @__PURE__ */ n(
  "path",
  {
    fill: "#fff",
    d: "M8.64 6.814c.012-.91.5-1.772 1.277-2.25a2.778 2.778 0 0 0-2.162-1.168c-.91-.096-1.792.544-2.255.544-.473 0-1.186-.535-1.955-.519A2.903 2.903 0 0 0 1.122 4.9c-1.047 1.814-.266 4.48.738 5.945.502.718 1.089 1.52 1.856 1.492.752-.032 1.032-.48 1.94-.48.898 0 1.161.48 1.944.462.807-.014 1.315-.722 1.799-1.446.36-.512.638-1.077.823-1.675A2.613 2.613 0 0 1 8.64 6.814ZM7.16 2.432A2.64 2.64 0 0 0 7.765.54a2.685 2.685 0 0 0-1.737.899 2.534 2.534 0 0 0-.62 1.82 2.246 2.246 0 0 0 1.754-.828Z"
  }
) }), S = m(M), Y = d(S), p = (t, s) => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: 10, height: 11, fill: "none", ref: s, ...t, children: /* @__PURE__ */ n(
  "path",
  {
    fill: "#fff",
    d: "M9.21 5.109 7.455 3.97 6.012 5.54l1.32 1.433 1.878-1.22a.351.351 0 0 0 .121-.136.404.404 0 0 0 .044-.186.405.405 0 0 0-.044-.186.351.351 0 0 0-.121-.136ZM7.158 3.776 5.227 2.523.996.084l4.779 5.197 1.383-1.505Zm-6.092 7.141 4.168-2.582 1.8-1.169-1.26-1.368-4.708 5.12ZM.713.294.708 10.79l4.829-5.25L.713.294Z"
  }
) }), E = m(p), y = d(E), u = (t, s) => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", width: 14, height: 12, fill: "none", ref: s, ...t, children: /* @__PURE__ */ n(
  "path",
  {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M13 6H1m12 0-4.5 4.5M13 6 8.5 1.5"
  }
) }), w = m(u), H = d(w), G = () => /* @__PURE__ */ n("div", { children: "Banner" }), b = () => /* @__PURE__ */ n("div", { children: "Footer" }), B = (t, s = 16) => 1 / s * (t || 0) + "rem";
export {
  Y as AppleIcon,
  H as ArrowRightIcon,
  A as Button,
  g as ButtonVariants,
  y as GoogleStoreIcon,
  G as MlBanner,
  b as OrFooter,
  T as Text,
  l as TextColors,
  e as TextVariants,
  h as generateHTMLTag,
  B as pxToRem
};
