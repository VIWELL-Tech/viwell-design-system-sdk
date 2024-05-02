import { jsx as t, jsxs as g } from "react/jsx-runtime";
import h, { forwardRef as c, memo as m, useState as y, useEffect as p } from "react";
function b(e, s) {
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: 11, height: 13, fill: "none", ref: s, ...e, children: /* @__PURE__ */ t(
    "path",
    {
      fill: "#fff",
      d: "M8.64 6.814c.012-.91.5-1.772 1.277-2.25a2.778 2.778 0 0 0-2.162-1.168c-.91-.096-1.792.544-2.255.544-.473 0-1.186-.535-1.955-.519A2.903 2.903 0 0 0 1.122 4.9c-1.047 1.814-.266 4.48.738 5.945.502.718 1.089 1.52 1.856 1.492.752-.032 1.032-.48 1.94-.48.898 0 1.161.48 1.944.462.807-.014 1.315-.722 1.799-1.446.36-.512.638-1.077.823-1.675A2.613 2.613 0 0 1 8.64 6.814ZM7.16 2.432A2.64 2.64 0 0 0 7.765.54a2.685 2.685 0 0 0-1.737.899 2.534 2.534 0 0 0-.62 1.82 2.246 2.246 0 0 0 1.754-.828Z"
    }
  ) });
}
const w = c(b), W = m(w);
function S(e, s) {
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: 10, height: 11, fill: "none", ref: s, ...e, children: /* @__PURE__ */ t(
    "path",
    {
      fill: "#fff",
      d: "M9.21 5.109 7.455 3.97 6.012 5.54l1.32 1.433 1.878-1.22a.351.351 0 0 0 .121-.136.404.404 0 0 0 .044-.186.405.405 0 0 0-.044-.186.351.351 0 0 0-.121-.136ZM7.158 3.776 5.227 2.523.996.084l4.779 5.197 1.383-1.505Zm-6.092 7.141 4.168-2.582 1.8-1.169-1.26-1.368-4.708 5.12ZM.713.294.708 10.79l4.829-5.25L.713.294Z"
    }
  ) });
}
const M = c(S), $ = m(M);
function E(e, s) {
  return /* @__PURE__ */ t("svg", { xmlns: "http://www.w3.org/2000/svg", width: 14, height: 12, fill: "none", ref: s, ...e, children: /* @__PURE__ */ t(
    "path",
    {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M13 6H1m12 0-4.5 4.5M13 6 8.5 1.5"
    }
  ) });
}
const R = c(E), k = m(R);
function _({ title: e, titleId: s, ...r }, o) {
  return /* @__PURE__ */ g(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 60,
      height: 61,
      fill: "none",
      ref: o,
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
  );
}
const L = c(_), V = m(L);
function A({ title: e, titleId: s, ...r }, o) {
  return /* @__PURE__ */ g(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 60,
      height: 61,
      fill: "none",
      ref: o,
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
  );
}
const T = c(A), Z = m(T);
function v({ className: e, ...s }, r) {
  return /* @__PURE__ */ t(
    "svg",
    {
      width: 18,
      height: 18,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: r,
      className: e,
      ...s,
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
const C = c(v), Y = m(C), l = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TEXT: "text",
  SMALL_PRIMARY: "smallPrimary",
  SMALL_STROKE: "smallStroke"
}, N = {
  [l.PRIMARY]: `flex justify-center items-center gap-x-2 px-6 py-4 bg-system-black text-system-white text-sm leading-md min-w-32 hover:bg-grey-300 disabled:bg-grey-200 rounded-full transition-all ease-in-out duration-300 
                             font-medium disabled:cursor-not-allowed`,
  [l.SECONDARY]: "flex justify-center items-center gap-x-2 px-6 py-4 border-1 border-system-black text-system-black text-sm font-medium leading-md min-w-32 rounded-full group hover:border-grey-300 hover:text-grey-300 disabled:border-grey-100 disabled:text-grey-100",
  [l.TEXT]: "flex justify-center items-center gap-x-2 text-system-black text-sm font-medium leading-md group hover:text-grey-300 disabled:text-grey-100",
  [l.SMALL_PRIMARY]: "flex justify-center items-center gap-x-1 bg-system-white px-3 py-2 h-8 text-system-black font-medium text-xs leading-sm rounded-full shadow-md min-w-20 group hover:text-grey-300 hover:bg-grey-25 disabled:text-grey-100 disabled:bg-grey-25",
  [l.SMALL_STROKE]: "flex justify-center items-center gap-x-1 px-3 py-2 h-8 text-system-black font-medium text-xs leading-sm rounded-full border-1 border-system-black min-w-20 group hover:text-grey-200 hover:border-grey-200 disabled:text-grey-100 disabled:border-grey-100"
}, D = {
  [l.PRIMARY]: "stroke-system-white",
  [l.SECONDARY]: "stroke-system-black group-hover:stroke-grey-300 group-disabled:stroke-grey-100",
  [l.TEXT]: "stroke-system-black group-hover:stroke-grey-300 group-disabled:stroke-grey-100",
  [l.SMALL_PRIMARY]: "stroke-system-black group-hover:stroke-grey-300 group-disabled:stroke-grey-100",
  [l.SMALL_STROKE]: "stroke-system-black group-hover:stroke-grey-200 group-disabled:stroke-grey-100"
}, K = h.forwardRef(
  ({ variant: e, label: s, hasIcon: r = !1, disabled: o = !1, icon: i, ...a }) => {
    const u = N[e], x = D[e];
    return /* @__PURE__ */ g("button", { className: u, disabled: o, ...a, children: [
      r && ["smallPrimary", "smallStroke"].includes(e) && /* @__PURE__ */ t("span", { "data-testid": "start-button-icon", className: "inline-block", children: i ?? /* @__PURE__ */ t(Y, { className: x }) }),
      s,
      r && ["primary", "secondary", "text"].includes(e) && /* @__PURE__ */ t("span", { "data-testid": "end-button-icon", className: "inline-block", children: i ?? /* @__PURE__ */ t(k, { className: x }) })
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
  ALL_CAPS_12: "p-all-caps-12",
  HANDWRITTEN_14: "p-handwritten-14"
}, d = {
  SYSTEM_BLACK: "system-black",
  SYSTEM_WHITE: "system-white",
  SYSTEM_LIGHT_GREEN: "system-light-green",
  SYSTEM_GREEN: "system-green",
  SYSTEM_RED: "system-red",
  GREY_100: "grey-100"
}, H = (e) => e.startsWith("h4") ? "h4" : e.startsWith("p") ? "p" : e, G = {
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
  [n.ALL_CAPS_12]: "text-xs font-normal leading-sm",
  [n.HANDWRITTEN_14]: "font-handwritten text-sm font-medium leading-lg"
}, O = {
  [d.SYSTEM_LIGHT_GREEN]: "text-system-light-green",
  [d.SYSTEM_GREEN]: "text-system-green",
  [d.SYSTEM_RED]: "text-system-red",
  [d.SYSTEM_BLACK]: "text-system-black",
  [d.SYSTEM_WHITE]: "text-system-white",
  [d.GREY_100]: "text-grey-100"
};
function f({ variant: e, color: s = "system-black", text: r, ...o }) {
  const i = H(e), a = G[e] + " " + O[s];
  return /* @__PURE__ */ t(i, { className: a, ...o, children: r });
}
const X = h.forwardRef(
  ({ label: e, name: s, error: r = !1, errorMessage: o = "", disabled: i, ...a }, u) => /* @__PURE__ */ g("div", { className: "flex flex-col mb-4", children: [
    /* @__PURE__ */ t(f, { text: e, variant: "p-sm-12-m", color: i ? "grey-100" : "system-black" }),
    /* @__PURE__ */ t("input", { id: s, ref: u, name: s, className: `
     border-b-2 border-grey-50 h-8 outline-0 placeholder-grey-200 bg-transparent disabled:placeholder-grey-100 disabled:cursor-not-allowed
  text-system-black
     `, disabled: i, ...a }),
    r && /* @__PURE__ */ t("span", { role: "alert", className: "text-system-red text-sm mt-1", children: /* @__PURE__ */ t(f, { text: o, variant: "p-sm-12-m", color: "system-red" }) })
  ] })
), B = {
  S: "S"
}, I = {
  [B.S]: "flex flex-col self-center rounded-30 w-100 h-80 bg-system-white align-middle justify-around content-center px-10"
};
function q({ children: e, variant: s, isOpen: r }) {
  const [o, i] = y(!1);
  p(() => {
    i(r);
  }, [r]);
  const a = I[s];
  return o ? /* @__PURE__ */ t("div", { className: j.modalContainer, children: /* @__PURE__ */ t("div", { className: a, children: e }) }) : null;
}
const j = {
  modalContainer: "flex absolute top-0 bottom-0 right-0 left-0 bg-system-black bg-opacity-80 justify-center items-center"
}, z = (e, s = 16) => 1 / s * (e ?? 0) + "rem";
export {
  W as AppleIcon,
  k as ArrowRightIcon,
  K as Button,
  l as ButtonVariants,
  Y as EditIcon,
  V as FailCircle,
  $ as GoogleStoreIcon,
  X as Input,
  q as Modal,
  B as ModalVariants,
  Z as SuccessCircle,
  f as Text,
  d as TextColors,
  n as TextVariants,
  H as generateHTMLTag,
  z as pxToRem
};
