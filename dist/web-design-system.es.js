import { jsx as t, jsxs as g } from "react/jsx-runtime";
import f, { forwardRef as d, memo as m } from "react";
function y(e, r) {
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: 11, height: 13, fill: "none", ref: r, ...e, children: /* @__PURE__ */ t(
    "path",
    {
      fill: "#fff",
      d: "M8.64 6.814c.012-.91.5-1.772 1.277-2.25a2.778 2.778 0 0 0-2.162-1.168c-.91-.096-1.792.544-2.255.544-.473 0-1.186-.535-1.955-.519A2.903 2.903 0 0 0 1.122 4.9c-1.047 1.814-.266 4.48.738 5.945.502.718 1.089 1.52 1.856 1.492.752-.032 1.032-.48 1.94-.48.898 0 1.161.48 1.944.462.807-.014 1.315-.722 1.799-1.446.36-.512.638-1.077.823-1.675A2.613 2.613 0 0 1 8.64 6.814ZM7.16 2.432A2.64 2.64 0 0 0 7.765.54a2.685 2.685 0 0 0-1.737.899 2.534 2.534 0 0 0-.62 1.82 2.246 2.246 0 0 0 1.754-.828Z"
    }
  ) });
}
const p = d(y), I = m(p);
function b(e, r) {
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: 10, height: 11, fill: "none", ref: r, ...e, children: /* @__PURE__ */ t(
    "path",
    {
      fill: "#fff",
      d: "M9.21 5.109 7.455 3.97 6.012 5.54l1.32 1.433 1.878-1.22a.351.351 0 0 0 .121-.136.404.404 0 0 0 .044-.186.405.405 0 0 0-.044-.186.351.351 0 0 0-.121-.136ZM7.158 3.776 5.227 2.523.996.084l4.779 5.197 1.383-1.505Zm-6.092 7.141 4.168-2.582 1.8-1.169-1.26-1.368-4.708 5.12ZM.713.294.708 10.79l4.829-5.25L.713.294Z"
    }
  ) });
}
const w = d(b), O = m(w);
function M(e, r) {
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: 14, height: 12, fill: "none", ref: r, ...e, children: /* @__PURE__ */ t(
    "path",
    {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M13 6H1m12 0-4.5 4.5M13 6 8.5 1.5"
    }
  ) });
}
const S = d(M), R = m(S);
function E({ title: e, titleId: r, ...n }, l) {
  return /* @__PURE__ */ g(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 60,
      height: 61,
      fill: "none",
      ref: l,
      "aria-labelledby": r,
      ...n,
      children: [
        e ? /* @__PURE__ */ t("title", { id: r, children: e }) : null,
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
  );
}
const _ = d(E), F = m(_);
function k({ title: e, titleId: r, ...n }, l) {
  return /* @__PURE__ */ g(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 60,
      height: 61,
      fill: "none",
      ref: l,
      "aria-labelledby": r,
      ...n,
      children: [
        e ? /* @__PURE__ */ t("title", { id: r, children: e }) : null,
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
  );
}
const L = d(k), j = m(L);
function A({ className: e, ...r }, n) {
  return /* @__PURE__ */ t(
    "svg",
    {
      width: 18,
      height: 18,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: n,
      className: e,
      ...r,
      children: /* @__PURE__ */ t(
        "path",
        {
          d: "M9.33344 14.7656H15.7084M10.8333 4.26562L4.0845 11.0145C3.59051 11.5084 3.20049 12.1081 3.08175 12.7965C2.96186 13.4916 2.92196 14.3543 3.33333 14.7656C3.7447 15.177 4.60733 15.1371 5.30244 15.0172C5.99088 14.8985 6.59051 14.5084 7.0845 14.0145L13.8333 7.26562M10.8333 4.26562C10.8333 4.26562 13.0833 2.01562 14.5833 3.51562C16.0833 5.01562 13.8333 7.26562 13.8333 7.26562M10.8333 4.26562L13.8333 7.26562",
          strokeWidth: 1.5,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
const T = d(A), v = m(T), o = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TEXT: "text",
  SMALL_PRIMARY: "smallPrimary",
  SMALL_STROKE: "smallStroke"
}, Y = {
  [o.PRIMARY]: `flex justify-center items-center gap-x-2 px-6 py-4 bg-system-black text-system-white text-sm leading-md min-w-32 hover:bg-grey-300 disabled:bg-grey-200 rounded-full transition-all ease-in-out duration-300 
                             font-medium disabled:cursor-not-allowed`,
  [o.SECONDARY]: "flex justify-center items-center gap-x-2 px-6 py-4 border-1 border-system-black text-system-black text-sm font-medium leading-md min-w-32 rounded-full group hover:border-grey-300 hover:text-grey-300 disabled:border-grey-100 disabled:text-grey-100",
  [o.TEXT]: "flex justify-center items-center gap-x-2 text-system-black text-sm font-medium leading-md group hover:text-grey-300 disabled:text-grey-100",
  [o.SMALL_PRIMARY]: "flex justify-center items-center gap-x-1 bg-system-white px-3 py-2 h-8 text-system-black font-medium text-xs leading-sm rounded-full shadow-md min-w-20 group hover:text-grey-300 hover:bg-grey-25 disabled:text-grey-100 disabled:bg-grey-25",
  [o.SMALL_STROKE]: "flex justify-center items-center gap-x-1 px-3 py-2 h-8 text-system-black font-medium text-xs leading-sm rounded-full border-1 border-system-black min-w-20 group hover:text-grey-200 hover:border-grey-200 disabled:text-grey-100 disabled:border-grey-100"
}, C = {
  [o.PRIMARY]: "stroke-system-white",
  [o.SECONDARY]: "stroke-system-black group-hover:stroke-grey-300 group-disabled:stroke-grey-100",
  [o.TEXT]: "stroke-system-black group-hover:stroke-grey-300 group-disabled:stroke-grey-100",
  [o.SMALL_PRIMARY]: "stroke-system-black group-hover:stroke-grey-300 group-disabled:stroke-grey-100",
  [o.SMALL_STROKE]: "stroke-system-black group-hover:stroke-grey-200 group-disabled:stroke-grey-100"
}, P = f.forwardRef(
  ({ variant: e, label: r, hasIcon: n = !1, disabled: l = !1, icon: i, ...c }) => {
    const x = Y[e], u = C[e];
    return /* @__PURE__ */ g("button", { className: x, disabled: l, ...c, children: [
      n && ["smallPrimary", "smallStroke"].includes(e) && /* @__PURE__ */ t("span", { "data-testid": "start-button-icon", className: "inline-block", children: i ?? /* @__PURE__ */ t(v, { className: u }) }),
      r,
      n && ["primary", "secondary", "text"].includes(e) && /* @__PURE__ */ t("span", { "data-testid": "end-button-icon", className: "inline-block", children: i ?? /* @__PURE__ */ t(R, { className: u }) })
    ] });
  }
), s = {
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
  ALL_CAPS_12: "p-all-caps-12",
  HANDWRITTEN_14: "p-handwritten-14"
}, a = {
  SYSTEM_BLACK: "system-black",
  SYSTEM_WHITE: "system-white",
  SYSTEM_LIGHT_GREEN: "system-light-green",
  SYSTEM_GREEN: "system-green",
  SYSTEM_RED: "system-red",
  GREY_100: "grey-100"
}, N = (e) => e.startsWith("h4") ? "h4" : e.startsWith("p") ? "p" : e, D = {
  [s.H1]: "text-3xl font-medium leading-4xl",
  [s.H2]: "text-2xl font-medium leading-3xl",
  [s.H3]: "text-xl font-medium leading-2xl",
  [s.H4M]: "text-lg font-medium leading-xl",
  [s.H4R]: "text-lg font-normal leading-xl",
  [s.BODY_REG]: "text-md font-normal leading-lg",
  [s.BODY_14_REG]: "text-sm font-normal leading-md",
  [s.BODY_M]: "text-md font-medium leading-lg",
  [s.BODY_14_M]: "text-sm font-medium leading-md",
  [s.SMALL_12_REG]: "text-xs font-normal leading-sm",
  [s.SMALL_12_M]: "text-xs font-medium leading-sm",
  [s.SMALL_10]: "text-xs font-normal leading-xs",
  [s.ALL_CAPS_12]: "text-xs font-normal leading-sm",
  [s.HANDWRITTEN_14]: "font-handwritten text-sm font-medium leading-lg"
}, H = {
  [a.SYSTEM_LIGHT_GREEN]: "text-system-light-green",
  [a.SYSTEM_GREEN]: "text-system-green",
  [a.SYSTEM_RED]: "text-system-red",
  [a.SYSTEM_BLACK]: "text-system-black",
  [a.SYSTEM_WHITE]: "text-system-white",
  [a.GREY_100]: "text-grey-100"
};
function h({ variant: e, color: r = "system-black", text: n, ...l }) {
  const i = N(e), c = D[e] + " " + H[r];
  return /* @__PURE__ */ t(i, { className: c, ...l, children: n });
}
const W = f.forwardRef(
  ({ label: e, name: r, error: n = !1, errorMessage: l = "", disabled: i, ...c }, x) => /* @__PURE__ */ g("div", { className: "flex flex-col mb-4", children: [
    /* @__PURE__ */ t(h, { text: e, variant: "p-sm-12-m", color: i ? "grey-100" : "system-black" }),
    /* @__PURE__ */ t("input", { id: r, ref: x, name: r, className: `
     border-b-2 border-grey-50 h-8 outline-0 placeholder-grey-200 bg-transparent disabled:placeholder-grey-100 disabled:cursor-not-allowed
  text-system-black
     `, disabled: i, ...c }),
    n && /* @__PURE__ */ t("span", { role: "alert", className: "text-system-red text-sm mt-1", children: /* @__PURE__ */ t(h, { text: l, variant: "p-sm-12-m", color: "system-red" }) })
  ] })
);
function Z() {
  return /* @__PURE__ */ t("div", { children: "Banner" });
}
const $ = (e, r = 16) => 1 / r * (e ?? 0) + "rem";
export {
  I as AppleIcon,
  R as ArrowRightIcon,
  P as Button,
  o as ButtonVariants,
  v as EditIcon,
  F as FailCircle,
  O as GoogleStoreIcon,
  W as Input,
  Z as MlBanner,
  j as SuccessCircle,
  h as Text,
  a as TextColors,
  s as TextVariants,
  N as generateHTMLTag,
  $ as pxToRem
};
