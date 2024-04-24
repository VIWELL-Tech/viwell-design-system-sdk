import { jsx as e, jsxs as x } from "react/jsx-runtime";
import h, { forwardRef as d, memo as c } from "react";
const f = (t, s) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 11, height: 13, fill: "none", ref: s, ...t, children: /* @__PURE__ */ e(
  "path",
  {
    fill: "#fff",
    d: "M8.64 6.814c.012-.91.5-1.772 1.277-2.25a2.778 2.778 0 0 0-2.162-1.168c-.91-.096-1.792.544-2.255.544-.473 0-1.186-.535-1.955-.519A2.903 2.903 0 0 0 1.122 4.9c-1.047 1.814-.266 4.48.738 5.945.502.718 1.089 1.52 1.856 1.492.752-.032 1.032-.48 1.94-.48.898 0 1.161.48 1.944.462.807-.014 1.315-.722 1.799-1.446.36-.512.638-1.077.823-1.675A2.613 2.613 0 0 1 8.64 6.814ZM7.16 2.432A2.64 2.64 0 0 0 7.765.54a2.685 2.685 0 0 0-1.737.899 2.534 2.534 0 0 0-.62 1.82 2.246 2.246 0 0 0 1.754-.828Z"
  }
) }), p = d(f), G = c(p), _ = (t, s) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 10, height: 11, fill: "none", ref: s, ...t, children: /* @__PURE__ */ e(
  "path",
  {
    fill: "#fff",
    d: "M9.21 5.109 7.455 3.97 6.012 5.54l1.32 1.433 1.878-1.22a.351.351 0 0 0 .121-.136.404.404 0 0 0 .044-.186.405.405 0 0 0-.044-.186.351.351 0 0 0-.121-.136ZM7.158 3.776 5.227 2.523.996.084l4.779 5.197 1.383-1.505Zm-6.092 7.141 4.168-2.582 1.8-1.169-1.26-1.368-4.708 5.12ZM.713.294.708 10.79l4.829-5.25L.713.294Z"
  }
) }), M = d(_), H = c(M), u = (t, s) => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 14, height: 12, fill: "none", ref: s, ...t, children: /* @__PURE__ */ e(
  "path",
  {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M13 6H1m12 0-4.5 4.5M13 6 8.5 1.5"
  }
) }), S = d(u), E = c(S), R = {
  PRIMARY: "primary"
}, w = {
  [R.PRIMARY]: `px-6 py-4 bg-system-black text-system-white hover:bg-grey-300 disabled:bg-grey-200 rounded-full transition-all ease-in-out duration-300 
                             font-medium text-white bg-black disabled:cursor-not-allowed`
}, B = h.forwardRef(
  ({ variant: t, label: s, hasIcon: l = !1, disabled: a = !1, icon: r, ...m }) => {
    const i = w[t];
    return /* @__PURE__ */ x("button", { className: i, disabled: a, ...m, children: [
      s,
      l && /* @__PURE__ */ e("span", { "data-testid": "button-icon", className: "inline-block ml-2", children: r || /* @__PURE__ */ e(E, {}) })
    ] });
  }
), n = {
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
  SYSTEM_RED: "system-red",
  GREY_100: "grey-100"
}, y = (t) => t.startsWith("h4") ? "h4" : t.startsWith("p") ? "p" : t, L = {
  [n.H1]: "text-3xl font-medium leading-4xl",
  [n.H2]: "text-2xl font-medium leading-3xl",
  [n.H3]: "text-xl font-medium leading-2xl",
  [n.H4M]: "text-lg font-medium leading-xl",
  [n.H4R]: "text-lg font-normal leading-xl",
  [n.BODY_REG]: "text-md font-normal leading-lg",
  [n.BODY_14_REG]: "text-sm font-normal leading-md",
  [n.BODY_M]: "text-md font-medium leading-lg",
  [n.BODY_14_M]: "text-sm font-medium leading-md",
  [n.SMALL_12_REG]: "text-xs font-normal leading-sm",
  [n.SMALL_12_M]: "text-xs font-medium leading-sm",
  [n.SMALL_10]: "text-xs font-normal leading-xs",
  [n.ALL_CAPS_12]: "text-xs font-normal leading-sm"
}, b = {
  [o.SYSTEM_LIGHT_GREEN]: "text-system-light-green",
  [o.SYSTEM_GREEN]: "text-system-green",
  [o.SYSTEM_RED]: "text-system-red",
  [o.SYSTEM_BLACK]: "text-system-black",
  [o.SYSTEM_WHITE]: "text-system-white",
  [o.GREY_100]: "text-grey-100"
}, g = ({ variant: t, color: s = "system-black", text: l, ...a }) => {
  const r = y(t), m = L[t] + " " + b[s];
  return /* @__PURE__ */ e(r, { className: m, ...a, children: l });
}, v = h.forwardRef(
  ({ label: t, name: s, error: l = !1, errorMessage: a = "", disabled: r, ...m }, i) => /* @__PURE__ */ x("div", { className: "flex flex-col mb-4", children: [
    /* @__PURE__ */ e(g, { text: t, variant: "p-sm-12-m", color: r ? "grey-100" : "system-black" }),
    /* @__PURE__ */ e("input", { id: s, ref: i, name: s, className: `
     border-b-2 border-grey-50 h-8 outline-0 placeholder-grey-200 bg-transparent disabled:placeholder-grey-100 disabled:cursor-not-allowed
  text-system-black
     `, disabled: r, ...m }),
    l && /* @__PURE__ */ e("span", { role: "alert", className: "text-system-red text-sm mt-1", children: /* @__PURE__ */ e(g, { text: a, variant: "p-sm-12-m", color: "system-red" }) })
  ] })
), k = () => /* @__PURE__ */ e("div", { children: "Banner" }), C = () => /* @__PURE__ */ e("div", { children: "Footer" }), D = (t, s = 16) => 1 / s * (t || 0) + "rem";
export {
  G as AppleIcon,
  E as ArrowRightIcon,
  B as Button,
  R as ButtonVariants,
  H as GoogleStoreIcon,
  v as Input,
  k as MlBanner,
  C as OrFooter,
  g as Text,
  o as TextColors,
  n as TextVariants,
  y as generateHTMLTag,
  D as pxToRem
};
