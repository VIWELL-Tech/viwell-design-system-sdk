import { jsx as t, jsxs as m } from "react/jsx-runtime";
import x, { forwardRef as c, memo as d } from "react";
const f = (e, s) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: 11, height: 13, fill: "none", ref: s, ...e, children: /* @__PURE__ */ t(
  "path",
  {
    fill: "#fff",
    d: "M8.64 6.814c.012-.91.5-1.772 1.277-2.25a2.778 2.778 0 0 0-2.162-1.168c-.91-.096-1.792.544-2.255.544-.473 0-1.186-.535-1.955-.519A2.903 2.903 0 0 0 1.122 4.9c-1.047 1.814-.266 4.48.738 5.945.502.718 1.089 1.52 1.856 1.492.752-.032 1.032-.48 1.94-.48.898 0 1.161.48 1.944.462.807-.014 1.315-.722 1.799-1.446.36-.512.638-1.077.823-1.675A2.613 2.613 0 0 1 8.64 6.814ZM7.16 2.432A2.64 2.64 0 0 0 7.765.54a2.685 2.685 0 0 0-1.737.899 2.534 2.534 0 0 0-.62 1.82 2.246 2.246 0 0 0 1.754-.828Z"
  }
) }), p = c(f), B = d(p), u = (e, s) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: 10, height: 11, fill: "none", ref: s, ...e, children: /* @__PURE__ */ t(
  "path",
  {
    fill: "#fff",
    d: "M9.21 5.109 7.455 3.97 6.012 5.54l1.32 1.433 1.878-1.22a.351.351 0 0 0 .121-.136.404.404 0 0 0 .044-.186.405.405 0 0 0-.044-.186.351.351 0 0 0-.121-.136ZM7.158 3.776 5.227 2.523.996.084l4.779 5.197 1.383-1.505Zm-6.092 7.141 4.168-2.582 1.8-1.169-1.26-1.368-4.708 5.12ZM.713.294.708 10.79l4.829-5.25L.713.294Z"
  }
) }), w = c(u), C = d(w), _ = (e, s) => /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: 14, height: 12, fill: "none", ref: s, ...e, children: /* @__PURE__ */ t(
  "path",
  {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "M13 6H1m12 0-4.5 4.5M13 6 8.5 1.5"
  }
) }), M = c(_), S = d(M), E = ({ title: e, titleId: s, ...r }, l) => /* @__PURE__ */ m(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 60,
    height: 61,
    fill: "none",
    ref: l,
    "aria-labelledby": s,
    ...r,
    children: [
      e ? /* @__PURE__ */ t("title", { id: s, children: e }) : null,
      /* @__PURE__ */ t("circle", { cx: 30, cy: 30.25, r: 30, fill: "#FDEFED" }),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "#EF8671",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M30 36.487v.013M30 24v8.75"
        }
      )
    ]
  }
), R = c(E), D = d(R), y = ({ title: e, titleId: s, ...r }, l) => /* @__PURE__ */ m(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: 60,
    height: 61,
    fill: "none",
    ref: l,
    "aria-labelledby": s,
    ...r,
    children: [
      e ? /* @__PURE__ */ t("title", { id: s, children: e }) : null,
      /* @__PURE__ */ t("circle", { cx: 30, cy: 30.25, r: 30, fill: "#E0F7DE" }),
      /* @__PURE__ */ t(
        "path",
        {
          stroke: "#41BD2C",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          d: "M40 24 26.25 37.75 20 31.5"
        }
      )
    ]
  }
), L = c(y), F = d(L), b = {
  PRIMARY: "primary"
}, Y = {
  [b.PRIMARY]: `px-6 py-4 bg-system-black text-system-white hover:bg-grey-300 disabled:bg-grey-200 rounded-full transition-all ease-in-out duration-300 
                             font-medium text-white bg-black disabled:cursor-not-allowed`
}, N = x.forwardRef(
  ({ variant: e, label: s, hasIcon: r = !1, disabled: l = !1, icon: o, ...a }) => {
    const g = Y[e];
    return /* @__PURE__ */ m("button", { className: g, disabled: l, ...a, children: [
      s,
      r && /* @__PURE__ */ t("span", { "data-testid": "button-icon", className: "inline-block ml-2", children: o || /* @__PURE__ */ t(S, {}) })
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
}, i = {
  SYSTEM_BLACK: "system-black",
  SYSTEM_WHITE: "system-white",
  SYSTEM_LIGHT_GREEN: "system-light-green",
  SYSTEM_GREEN: "system-green",
  SYSTEM_RED: "system-red",
  GREY_100: "grey-100"
}, v = (e) => e.startsWith("h4") ? "h4" : e.startsWith("p") ? "p" : e, A = {
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
}, T = {
  [i.SYSTEM_LIGHT_GREEN]: "text-system-light-green",
  [i.SYSTEM_GREEN]: "text-system-green",
  [i.SYSTEM_RED]: "text-system-red",
  [i.SYSTEM_BLACK]: "text-system-black",
  [i.SYSTEM_WHITE]: "text-system-white",
  [i.GREY_100]: "text-grey-100"
}, h = ({ variant: e, color: s = "system-black", text: r, ...l }) => {
  const o = v(e), a = A[e] + " " + T[s];
  return /* @__PURE__ */ t(o, { className: a, ...l, children: r });
}, O = x.forwardRef(
  ({ label: e, name: s, error: r = !1, errorMessage: l = "", disabled: o, ...a }, g) => /* @__PURE__ */ m("div", { className: "flex flex-col mb-4", children: [
    /* @__PURE__ */ t(h, { text: e, variant: "p-sm-12-m", color: o ? "grey-100" : "system-black" }),
    /* @__PURE__ */ t("input", { id: s, ref: g, name: s, className: `
     border-b-2 border-grey-50 h-8 outline-0 placeholder-grey-200 bg-transparent disabled:placeholder-grey-100 disabled:cursor-not-allowed
  text-system-black
     `, disabled: o, ...a }),
    r && /* @__PURE__ */ t("span", { role: "alert", className: "text-system-red text-sm mt-1", children: /* @__PURE__ */ t(h, { text: l, variant: "p-sm-12-m", color: "system-red" }) })
  ] })
), I = () => /* @__PURE__ */ t("div", { children: "Banner" }), W = () => /* @__PURE__ */ t("div", { children: "Footer" }), Z = (e, s = 16) => 1 / s * (e || 0) + "rem";
export {
  B as AppleIcon,
  S as ArrowRightIcon,
  N as Button,
  b as ButtonVariants,
  D as FailCircle,
  C as GoogleStoreIcon,
  O as Input,
  I as MlBanner,
  W as OrFooter,
  F as SuccessCircle,
  h as Text,
  i as TextColors,
  n as TextVariants,
  v as generateHTMLTag,
  Z as pxToRem
};
