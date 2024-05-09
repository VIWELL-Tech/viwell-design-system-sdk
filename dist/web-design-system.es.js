import { jsx as e, jsxs as c, Fragment as N } from "react/jsx-runtime";
import * as O from "react";
import E, { forwardRef as m, memo as f, useState as B, useCallback as L } from "react";
function V(t, r) {
  const { fill: n = "#fff", ...s } = t;
  return /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 11, height: 13, fill: "none", ref: r, ...s, children: /* @__PURE__ */ e(
    "path",
    {
      fill: n,
      d: "M8.64 6.814c.012-.91.5-1.772 1.277-2.25a2.778 2.778 0 0 0-2.162-1.168c-.91-.096-1.792.544-2.255.544-.473 0-1.186-.535-1.955-.519A2.903 2.903 0 0 0 1.122 4.9c-1.047 1.814-.266 4.48.738 5.945.502.718 1.089 1.52 1.856 1.492.752-.032 1.032-.48 1.94-.48.898 0 1.161.48 1.944.462.807-.014 1.315-.722 1.799-1.446.36-.512.638-1.077.823-1.675A2.613 2.613 0 0 1 8.64 6.814ZM7.16 2.432A2.64 2.64 0 0 0 7.765.54a2.685 2.685 0 0 0-1.737.899 2.534 2.534 0 0 0-.62 1.82 2.246 2.246 0 0 0 1.754-.828Z"
    }
  ) });
}
const K = m(V), Oe = f(K);
function F(t, r) {
  const { fill: n = "#fff", ...s } = t;
  return /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 10, height: 11, fill: "none", ref: r, ...s, children: /* @__PURE__ */ e(
    "path",
    {
      fill: n,
      d: "M9.21 5.109 7.455 3.97 6.012 5.54l1.32 1.433 1.878-1.22a.351.351 0 0 0 .121-.136.404.404 0 0 0 .044-.186.405.405 0 0 0-.044-.186.351.351 0 0 0-.121-.136ZM7.158 3.776 5.227 2.523.996.084l4.779 5.197 1.383-1.505Zm-6.092 7.141 4.168-2.582 1.8-1.169-1.26-1.368-4.708 5.12ZM.713.294.708 10.79l4.829-5.25L.713.294Z"
    }
  ) });
}
const U = m(F), Ve = f(U);
function J(t, r) {
  return /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", width: 14, height: 12, fill: "none", ref: r, ...t, children: /* @__PURE__ */ e(
    "path",
    {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M13 6H1m12 0-4.5 4.5M13 6 8.5 1.5"
    }
  ) });
}
const W = m(J), G = f(W);
function j({ title: t, titleId: r, ...n }, s) {
  return /* @__PURE__ */ c(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 60,
      height: 61,
      fill: "none",
      ref: s,
      "aria-labelledby": r,
      ...n,
      children: [
        t ? /* @__PURE__ */ e("title", { id: r, children: t }) : null,
        /* @__PURE__ */ e("circle", { cx: 30, cy: 30.25, r: 30, fill: "#FDEFED" }),
        /* @__PURE__ */ e(
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
const Z = m(j), Ke = f(Z);
function z({ title: t, titleId: r, ...n }, s) {
  return /* @__PURE__ */ c(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 60,
      height: 61,
      fill: "none",
      ref: s,
      "aria-labelledby": r,
      ...n,
      children: [
        t ? /* @__PURE__ */ e("title", { id: r, children: t }) : null,
        /* @__PURE__ */ e("circle", { cx: 30, cy: 30.25, r: 30, fill: "#E0F7DE" }),
        /* @__PURE__ */ e(
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
const q = m(z), Fe = f(q);
function _({ className: t, ...r }, n) {
  return /* @__PURE__ */ e(
    "svg",
    {
      width: 18,
      height: 18,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: n,
      className: t,
      ...r,
      children: /* @__PURE__ */ e(
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
const $ = m(_), ee = f($);
function te(t, r) {
  const { fill: n = "#A9A9A9", ...s } = t;
  return /* @__PURE__ */ e(
    "svg",
    {
      width: 7,
      height: 12,
      viewBox: "0 0 7 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: r,
      ...s,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M0.46967 10.4697C0.176777 10.7626 0.176777 11.2374 0.46967 11.5303C0.762563 11.8232 1.23744 11.8232 1.53033 11.5303L0.46967 10.4697ZM6 6L6.53033 6.53033C6.67098 6.38968 6.75 6.19891 6.75 6C6.75 5.80109 6.67098 5.61032 6.53033 5.46967L6 6ZM1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L1.53033 0.46967ZM1.53033 11.5303L6.53033 6.53033L5.46967 5.46967L0.46967 10.4697L1.53033 11.5303ZM6.53033 5.46967L1.53033 0.46967L0.46967 1.53033L5.46967 6.53033L6.53033 5.46967Z",
          fill: n
        }
      )
    }
  );
}
const re = m(te), ne = f(re);
function se(t, r) {
  const { stroke: n = "#A9A9A9", ...s } = t;
  return /* @__PURE__ */ e(
    "svg",
    {
      width: 18,
      height: 18,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: r,
      ...s,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M5.25 7.5L9 11.25L12.75 7.5",
          stroke: n,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
const oe = m(se), Ue = f(oe);
function ae({ title: t, titleId: r, ...n }, s) {
  return /* @__PURE__ */ c(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 20,
      height: 20,
      fill: "none",
      ref: s,
      "aria-labelledby": r,
      ...n,
      children: [
        t ? /* @__PURE__ */ e("title", { id: r, children: t }) : null,
        /* @__PURE__ */ e(
          "path",
          {
            stroke: "#980303",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            d: "M10 14.99V15m0-10v7m9-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          }
        )
      ]
    }
  );
}
const le = m(ae), ie = f(le);
function de({ title: t, titleId: r, ...n }, s) {
  return /* @__PURE__ */ c(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      fill: "none",
      ref: s,
      "aria-labelledby": r,
      ...n,
      children: [
        t ? /* @__PURE__ */ e("title", { id: r, children: t }) : null,
        /* @__PURE__ */ e("path", { stroke: "#41BD2C", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20 7 9 18l-5-5" })
      ]
    }
  );
}
const ce = m(de), Ae = f(ce);
function me(t, r) {
  const { stroke: n = "#232323", ...s } = t;
  return /* @__PURE__ */ e(
    "svg",
    {
      width: 20,
      height: 20,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: r,
      ...s,
      children: /* @__PURE__ */ e(
        "path",
        {
          d: "M16 16.7023C16 13.6706 12.5 13 10 13C7.5 13 4 13.6706 4 16.7023M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM13 7C13 8.65685 11.6569 10 10 10C8.34315 10 7 8.65685 7 7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7Z",
          stroke: n,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
const ge = m(me), Je = f(ge);
function fe(t, r) {
  const { stroke: n = "#232323", ...s } = t;
  return /* @__PURE__ */ c(
    "svg",
    {
      width: 18,
      height: 18,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: r,
      ...s,
      children: [
        /* @__PURE__ */ e(
          "path",
          {
            d: "M9 1H11C11.5523 1 12 1.44772 12 2V2.56879C12 2.99659 12.2871 3.36825 12.6822 3.53228C13.0775 3.69638 13.5377 3.63384 13.8403 3.33123L14.2426 2.92891C14.6331 2.53838 15.2663 2.53838 15.6568 2.92891L17.071 4.34312C17.4616 4.73365 17.4615 5.36681 17.071 5.75734L16.6688 6.1596C16.3661 6.46223 16.3036 6.92247 16.4677 7.31774C16.6317 7.71287 17.0034 8 17.4313 8L18 8C18.5523 8 19 8.44771 19 9V11C19 11.5523 18.5523 12 18 12H17.4312C17.0034 12 16.6318 12.2871 16.4677 12.6822C16.3036 13.0775 16.3661 13.5377 16.6688 13.8403L17.071 14.2426C17.4616 14.6331 17.4616 15.2663 17.071 15.6568L15.6568 17.071C15.2663 17.4616 14.6331 17.4616 14.2426 17.071L13.8403 16.6688C13.5377 16.3661 13.0775 16.3036 12.6822 16.4677C12.2871 16.6318 12 17.0034 12 17.4312V18C12 18.5523 11.5523 19 11 19H9C8.44772 19 8 18.5523 8 18V17.4313C8 17.0034 7.71287 16.6317 7.31774 16.4677C6.92247 16.3036 6.46223 16.3661 6.1596 16.6688L5.75732 17.071C5.36679 17.4616 4.73363 17.4616 4.34311 17.071L2.92889 15.6568C2.53837 15.2663 2.53837 14.6331 2.92889 14.2426L3.33123 13.8403C3.63384 13.5377 3.69638 13.0775 3.53228 12.6822C3.36825 12.2871 2.99659 12 2.56879 12H2C1.44772 12 1 11.5523 1 11V9C1 8.44772 1.44772 8 2 8L2.56877 8C2.99658 8 3.36825 7.71288 3.53229 7.31776C3.6964 6.9225 3.63386 6.46229 3.33123 6.15966L2.92891 5.75734C2.53838 5.36681 2.53838 4.73365 2.92891 4.34313L4.34312 2.92891C4.73365 2.53839 5.36681 2.53839 5.75734 2.92891L6.15966 3.33123C6.46228 3.63386 6.9225 3.6964 7.31776 3.53229C7.71288 3.36825 8 2.99658 8 2.56876V2C8 1.44772 8.44772 1 9 1Z",
            stroke: n,
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ e(
          "path",
          {
            d: "M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z",
            stroke: n,
            strokeWidth: "1.5"
          }
        )
      ]
    }
  );
}
const he = m(fe), We = f(he);
function ue({ title: t, titleId: r, ...n }, s) {
  return /* @__PURE__ */ c(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 14,
      height: 14,
      fill: "none",
      ref: s,
      "aria-labelledby": r,
      ...n,
      children: [
        t ? /* @__PURE__ */ e("title", { id: r, children: t }) : null,
        /* @__PURE__ */ e(
          "path",
          {
            stroke: "#232323",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 1.5,
            d: "M7 8.333V7m0 1.333v1.334m0-1.334c-2.667 0-5.333-.666-5.292-2m5.292 2c2.667 0 5.333-.666 5.293-2m-10.585 0c-.027.422-.041.872-.041 1.334 0 2.074.296 3.889.592 4.148.297.26 2.37.518 4.741.518 2.37 0 4.444-.259 4.74-.518.297-.26.593-2.074.593-4.148 0-.462-.014-.912-.04-1.334m-10.585 0c.09-1.472.321-2.613.551-2.814C2.556 3.259 5 3.062 5 3.062m7.293 3.271C12.2 4.861 11.97 3.72 11.74 3.52 11.444 3.259 9 3.062 9 3.062m-4 0a31.763 31.763 0 0 1 4 0m-4 0v-.729C5 1.15 6.092 1 7 1c.908 0 2 .15 2 1.333v.73"
          }
        )
      ]
    }
  );
}
const pe = m(ue), Ge = f(pe), p = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TEXT: "text",
  SMALL_PRIMARY: "smallPrimary",
  SMALL_STROKE: "smallStroke"
}, we = {
  [p.PRIMARY]: `flex justify-center items-center gap-x-2 px-6 py-4 bg-system-black text-system-white text-sm leading-md min-w-32 hover:bg-grey-300 disabled:bg-grey-200 rounded-full transition-all ease-in-out duration-300 
                             font-medium disabled:cursor-not-allowed`,
  [p.SECONDARY]: "flex justify-center items-center gap-x-2 px-6 py-4 border-1 border-system-black text-system-black text-sm font-medium leading-md min-w-32 rounded-full group hover:border-grey-300 hover:text-grey-300 disabled:border-grey-100 disabled:text-grey-100",
  [p.TEXT]: "flex justify-center items-center gap-x-2 text-system-black text-sm font-medium leading-md group hover:text-grey-300 disabled:text-grey-100",
  [p.SMALL_PRIMARY]: "flex justify-center items-center gap-x-1 bg-system-white px-3 py-2 h-8 text-system-black font-medium text-xs leading-sm rounded-full shadow-md min-w-20 group hover:text-grey-300 hover:bg-grey-25 disabled:text-grey-100 disabled:bg-grey-25",
  [p.SMALL_STROKE]: "flex justify-center items-center gap-x-1 px-3 py-2 h-8 text-system-black font-medium text-xs leading-sm rounded-full border-1 border-system-black min-w-20 group hover:text-grey-200 hover:border-grey-200 disabled:text-grey-100 disabled:border-grey-100"
}, xe = {
  [p.PRIMARY]: "stroke-system-white",
  [p.SECONDARY]: "stroke-system-black group-hover:stroke-grey-300 group-disabled:stroke-grey-100",
  [p.TEXT]: "stroke-system-black group-hover:stroke-grey-300 group-disabled:stroke-grey-100",
  [p.SMALL_PRIMARY]: "stroke-system-black group-hover:stroke-grey-300 group-disabled:stroke-grey-100",
  [p.SMALL_STROKE]: "stroke-system-black group-hover:stroke-grey-200 group-disabled:stroke-grey-100"
}, ye = E.forwardRef(
  ({ variant: t, label: r, hasIcon: n = !1, disabled: s = !1, icon: o, ...d }) => {
    const A = we[t], l = xe[t];
    return /* @__PURE__ */ c("button", { className: A, disabled: s, ...d, children: [
      n && ["smallPrimary", "smallStroke"].includes(t) && /* @__PURE__ */ e("span", { "data-testid": "start-button-icon", className: "inline-block", children: o ?? /* @__PURE__ */ e(ee, { className: l }) }),
      r,
      n && ["primary", "secondary", "text"].includes(t) && /* @__PURE__ */ e("span", { "data-testid": "end-button-icon", className: "inline-block", children: o ?? /* @__PURE__ */ e(G, { className: l }) })
    ] });
  }
), g = {
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
}, y = {
  SYSTEM_BLACK: "system-black",
  SYSTEM_WHITE: "system-white",
  SYSTEM_LIGHT_GREEN: "system-light-green",
  SYSTEM_GREEN: "system-green",
  SYSTEM_RED: "system-red",
  GREY_100: "grey-100"
}, ve = (t) => t.startsWith("h4") ? "h4" : t.startsWith("p") ? "p" : t, be = {
  [g.H1]: "text-3xl font-medium leading-4xl",
  [g.H2]: "text-2xl font-medium leading-3xl",
  [g.H3]: "text-xl font-medium leading-2xl",
  [g.H4M]: "text-lg font-medium leading-xl",
  [g.H4R]: "text-lg font-normal leading-xl",
  [g.BODY_REG]: "text-md font-normal leading-lg",
  [g.BODY_14_REG]: "text-sm font-normal leading-md",
  [g.BODY_M]: "text-md font-medium leading-lg",
  [g.BODY_14_M]: "text-sm font-medium leading-md",
  [g.SMALL_12_REG]: "text-xs font-normal leading-sm",
  [g.SMALL_12_M]: "text-xs font-medium leading-sm",
  [g.SMALL_10]: "text-xs font-normal leading-xs",
  [g.ALL_CAPS_12]: "text-xs font-normal leading-sm",
  [g.HANDWRITTEN_14]: "font-handwritten text-sm font-medium leading-lg"
}, ke = {
  [y.SYSTEM_LIGHT_GREEN]: "text-system-light-green",
  [y.SYSTEM_GREEN]: "text-system-green",
  [y.SYSTEM_RED]: "text-system-red",
  [y.SYSTEM_BLACK]: "text-system-black",
  [y.SYSTEM_WHITE]: "text-system-white",
  [y.GREY_100]: "text-grey-100"
};
function b({ variant: t, color: r = "system-black", text: n, ...s }) {
  const o = ve(t), d = be[t] + " " + ke[r];
  return /* @__PURE__ */ e(o, { className: d, ...s, children: n });
}
const je = E.forwardRef(
  ({ label: t, name: r, error: n = !1, errorMessage: s = "", disabled: o, ...d }, A) => /* @__PURE__ */ c("div", { className: "flex flex-col mb-4", children: [
    /* @__PURE__ */ e(b, { text: t, variant: "p-sm-12-m", color: o ? "grey-100" : "system-black" }),
    /* @__PURE__ */ e("input", { id: r, ref: A, name: r, className: `
     border-b-2 border-grey-50 h-8 outline-0 placeholder-grey-200 bg-transparent disabled:placeholder-grey-100 disabled:cursor-not-allowed
  text-system-black
     `, disabled: o, ...d }),
    n && /* @__PURE__ */ e("span", { role: "alert", className: "text-system-red text-sm mt-1", children: /* @__PURE__ */ e(b, { text: s, variant: "p-sm-12-m", color: "system-red" }) })
  ] })
), H = {
  BOTTOM_LEFT: "bottomLeft",
  BOTTOM_RIGHT: "bottomRight"
}, Ce = {
  [H.BOTTOM_LEFT]: "left-0 translate-y-1",
  [H.BOTTOM_RIGHT]: "right-0 translate-y-1"
}, Ze = O.forwardRef(
  ({ children: t, menu: r, disabled: n, placement: s = "bottomLeft", trigger: o = "hover", onClick: d, ...A }) => {
    const l = Ce[s], [h, i] = B(!1), a = L(() => {
      o === "click" && !n && i((u) => !u);
    }, [o, n]), w = L(() => {
      o === "hover" && !n && i(!0);
    }, [o, n]), X = L(() => {
      o === "hover" && i(!1);
    }, [o]), Q = L(
      (u, I) => () => {
        I.disabled || (d && (a(), d({ item: I, key: u })), a());
      },
      [d, i]
    );
    return /* @__PURE__ */ e(
      "div",
      {
        className: S.parentContainer,
        onClick: a,
        onMouseEnter: w,
        onMouseLeave: X,
        "data-testid": "dropdown-container",
        children: /* @__PURE__ */ c(N, { children: [
          t,
          h && /* @__PURE__ */ e("ul", { className: `${S.dropdownContainer} ${l}`, children: r.map((u) => /* @__PURE__ */ c(
            "li",
            {
              className: u.disabled ? S.disabledItem : S.dropDownItem,
              onClick: Q(u.key, u),
              "data-testid": u.key,
              children: [
                u.icon,
                u.label
              ]
            },
            u.key
          )) })
        ] })
      }
    );
  }
), S = {
  parentContainer: "relative inline-block pb-1 transition-border",
  dropdownContainer: "absolute z-[1000] bg-system-white shadow-md rounded-lg inline-flex flex-col gap-y-2 p-4 w-full min-w-[9rem] transform transition-all duration-300 ease-out",
  dropDownItem: "flex gap-x-1 items-center font-normal text-system-black text-sm leading-md rounded px-1 hover:bg-grey-25 cursor-pointer",
  disabledItem: "flex gap-x-1 items-center font-normal text-grey-100 text-sm leading-md rounded px-1 hover:bg-grey-25 cursor-not-allowed"
}, T = {
  SMALL: "small",
  LARGE: "large",
  DEFAULT: "default"
}, Le = {
  [T.DEFAULT]: "py-3 first:pt-0 last:pb-0",
  [T.SMALL]: "py-2 first:pt-0 last:pb-0",
  [T.LARGE]: "py-4 first:pt-0 last:pb-0"
};
function ze({
  dataSource: t,
  renderItem: r,
  rowKey: n,
  bordered: s = !0,
  testId: o,
  size: d = "default",
  ...A
}) {
  const l = n ?? ((i, a) => `default-list-key${a.toString()}`), h = Le[d];
  return /* @__PURE__ */ e("div", { ...A, children: /* @__PURE__ */ e("ul", { role: "list", "data-testid": o, className: s ? Y.borderedList : "", children: t.length && t.map((i, a) => {
    const w = typeof l == "function" ? l(i, a) : String(i[l]);
    return /* @__PURE__ */ e("li", { "data-testid": `list-item-${a}`, className: `${h} ${Y.listItem}`, children: r(i, a) }, w);
  }) }) });
}
const Y = {
  borderedList: "divide-y divide-grey-50",
  listItem: "font-normal text-md text-grey-300"
}, qe = {
  S: "S",
  L: "L"
};
function _e({ label: t, labelIcon: r, ctaLabel: n, onCtaClick: s, variant: o, ctaIcon: d, testId: A }) {
  return /* @__PURE__ */ c(
    "div",
    {
      "data-testid": `member-bar${A ?? ""}`,
      className: `${D.container} ${o === "S" ? "w-96" : "w-full"}`,
      children: [
        /* @__PURE__ */ c("div", { className: D.labelContainer, children: [
          r && /* @__PURE__ */ e("div", { className: D.iconContainer, children: r }),
          /* @__PURE__ */ e(b, { variant: "p-14-m", text: t })
        ] }),
        /* @__PURE__ */ e("div", { children: /* @__PURE__ */ e(ye, { variant: "smallStroke", label: n, onClick: s, hasIcon: !0, icon: d }) })
      ]
    }
  );
}
const D = {
  container: "flex h-20 rounded-16 justify-between drop-shadow-md  shadow-md items-center px-4 bg-system-white",
  labelContainer: "flex items-center",
  iconContainer: "mr-2.5"
}, v = {
  DEFAULT: "default",
  TRANSPARENT: "transparent"
}, Se = {
  [v.DEFAULT]: "bg-system-white border-t-1 border-grey-25",
  [v.TRANSPARENT]: "bg-transparent"
}, Me = {
  [v.DEFAULT]: "bg-grey-25",
  [v.TRANSPARENT]: "bg-system-white"
}, Te = {
  [v.DEFAULT]: "decoration-system-black",
  [v.TRANSPARENT]: "decoration-system-white"
}, De = {
  [v.DEFAULT]: y.SYSTEM_BLACK,
  [v.TRANSPARENT]: y.SYSTEM_WHITE
}, $e = m((t, r) => {
  const { variant: n = "default", footerLinkItems: s, footerDownloadLinks: o, ...d } = t, A = Se[n], l = Me[n], h = Te[n], i = De[n];
  return /* @__PURE__ */ c(
    "footer",
    {
      className: `${M.mainContainer} ${A}`,
      "data-testid": "footer-main-container",
      ref: r,
      ...d,
      children: [
        s.length && s.map((a) => {
          var w;
          return /* @__PURE__ */ c(
            "a",
            {
              href: a.href,
              target: "_blank",
              className: `${M.anchorLink} ${h}`,
              "data-testid": a.key,
              rel: "noreferrer",
              children: [
                (w = a.icon) == null ? void 0 : w.call(a, n),
                /* @__PURE__ */ e(b, { text: a.title, variant: "p-sm-10", color: i })
              ]
            },
            a.key
          );
        }),
        /* @__PURE__ */ e("div", { className: M.footerDivider, "data-testid": "footer-slash-divider", children: /* @__PURE__ */ e("span", { className: `h-4 inline-block w-[1.5px] ${l}` }) }),
        o.length && o.map((a) => {
          var w;
          return /* @__PURE__ */ c(
            "a",
            {
              href: a.href,
              target: "_blank",
              className: M.anchorIcon,
              "data-testid": a.key,
              rel: "noreferrer",
              children: [
                (w = a.icon) == null ? void 0 : w.call(a, n),
                /* @__PURE__ */ e(b, { text: a.title, variant: "p-sm-10", color: i })
              ]
            },
            a.key
          );
        })
      ]
    }
  );
}), M = {
  mainContainer: "flex justify-center flex-wrap items-center gap-x-5 h-14",
  anchorLink: "flex justify-center items-center gap-x-1 hover:underline underline-offset-2 decoration-1",
  footerDivider: "flex items-center",
  anchorIcon: "flex justify-center items-center gap-x-1"
}, Re = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAB0CAYAAADzVIoEAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABZkSURBVHgB7d1RctS4FgbgQ9Kh5o3cFYxJQhVvMCsYswJgBTQrAFZAWAFhBYQVDKwAzwqAt6maIfiu4Gbepiak556TqDMdt+22bB1Zkv+vKpXQCYnblq0j6UgiAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKobXX9wf39/zp+eUAJ2dnae/vbbbyUNwOfjG7lV8HG96npcBwcH+T///CPXI6ee+P9/ODk5eV59XeG9DXLjxo03f/zxx1HT9/lcPOf38ozC9uLr16/vaSCla1PysT2ovphl2e729vYvBFe4nP3K98xhl5+9c+fO/cVi8Zri8Y7LwTEFxtzfDykSLuoXX2Zdf5AfwhlfhJxgKSO35mdnZxl/frDpB/f29l7ytTikgfia3mr4VkZh2e3w/YwCtrW1tek9dJWRP3LMOcEVvmfKrj/L92hU54/f268UID6P9wnlUMUWQUhyaXW1/YBU/nyjHhIAAMAAnXsAOAorueIp+HNGgbe2GpzKB7+H07/++uuUBpJzYb7cNefERQuvZI3HxsFB5qDyl+t4cS7440vdD5jrLFG3q1ZrXxfHKmWv7YdM2fxsWlwZhWN5nmnTe7BQ0uV1cXVt5J74TO1/jxz/zUmoKbsZhaOseW3wc1GJHFdpvg6pHF7d37HqnAOwSlqps9nsPhfuOQWcF8A34HsZ5+YxmUJ7TMaM993nv/mk71AJ/99XPNZ92PR9Hv99y5/mZPc7C/70q5wLHmJoDTCqTJ7BnPxe4zdyrN+/f/9sc6yr5FrINTB5ARl5Ys71B/lse677GFjmjvn/vePyVnT9D7Hc98qOeZz8KfW0vGb85UsaqWz+/vvvnylilXL4M/k9j1KnvDs/Py+0728fegUAq6RVur29fUgBPRD4An2+efPm47ESMcw5+UiWBZMDldtNx2x+p00CmBTOpy4Sz/q+H1s8Tv6T64cTBzGHXB5ekrJNwZs2kyjVNeHs6dBkrxDve08GBQCrTGK1XDPNFu2pKZtHlCBf5XDsOkXL4ABgyVNh3kgu1MnJyU8UAD4nx9S9YLY+WCxb/yUHEw9cFlbTcvlESvi6HfF1e0EKtIMA6ULnB+zoZa7L++RjfeGyMuByKb/L+QwMfh+vbBLuJEl55f/KM+iWeW3XDGe54iwAEOa+kuBa67n52EUjIHRa5dAoucX/Uwot/ipnAYDwUJg3amtF+yZdVdyq/cgPoo0PoA6tf6l8O51XrXOgeZPxOXpg0x1tS/nYX4TQwjLT9qSXqKmcOK28Vv6mlM2MHHJdHlaGSx5yQPCI+nN+Di17b2w4P9aQ8T0udU9Ojmk/m8bkdBaAdN/yyXpM4zkOqYtGIkYOALq0aluPm3+H9CJ0DarUzgFHwYeklPTCY3olKTLHXpICk1Q5OilvK8mpVaeyzgTp/M03FDh5NsmwBz/IH3NZuM0vScVYUgC+f/9+TAr3FT83gr8uLnE5/ECOyf2UauUvnE8DlJMlLSIaAf/dLxQYU3iKtp9pezCbzP85daTxkF/SfNifnZ257KZdY7rvVMqlSeoKArck/2z41nvF4DiqpDLJzpRggD9uy/g4jZzJbe6rkhyLPdnPVkvw2xvfT8HVKS6prANgukPHGHcKtcC/a/lea4udu1dz6ti9KjeAdg8It1bk2mo8MHNSZsZCC3KMHxI/Uzh+rHtRMzDkMlFSpCRxU8Z3JXeIxlWSQwG8H++4EeH8uaQRmIVEbSEgvqmkiy25pIk++Fw0BkMdHsw2yWvqK3lp9QJ4rETfkWOS43H37t2MAsDHslvzWpFa9rJL0iNgEodH6zJv6bnphbv/J/fsletIjoUyvKdFLQAwXa5eE1BM9m9wzLkoa77V2vo3Mysy6shX1G96AZzyVYma6W/Ob2o+J3MKQF3Gu8xbJtiIy8ZzMyQwBjSWAuRwAa8gqS4FrNXl2mR1KlBo6lZbc9z6l6i/JA9MQFOQY74q0ch7MBrJwk01L5chbvASKrOWg/fhS9ctzdQrrhYIpCyo7wXgM6LmQn+PAsXH9t/KS05b/0JWnyNPNK6rr0pUKY8hb6iAvWmY3laQMo2u1zFh+DJquG4W1AMAkwXvqwsyp0BVk0k6TNGxXrjG50IVXWY39OClEt0wXW6InMa1tmWqZvJfqjRnjACExMtugBxRPyc/kVm2aTe9sXDr7Or9b1qPu0/rn0aY06wx75b8VaIawwBaK5FtJAvdUKXMIPmvPzNsUhBAwrwEAD4XC5nNZnMK02oA5HTsfywaC5j4qkTNehWukyZ3xxoGWCwWa+cNyX+D4fxB0rwEAEJx/vg1/NB7SAFaJvlsWlmqZ+t/FEqBnc9K1HkPho+NhxrklX8j+W8gM30XY8qQLG8BgMdegDzUYQDRoVUWRet/SbbHJMd8VaJayYC+y58JmLLKywXBICYXAL0AkCxvAYDw1QvAwwDPKUytrTJu/UsWd0Y9jLVilcllKMit3IxpqzIPeOdrJ/gufxwwre04ObV14LVoBLgAofAaAPjqBRgzGauJGQLYNPYf3HF3oZEMOHDHts40pjPyeLy3YSjJeqX1baLLqa0Dr8UM12EYAJLkNQAQnnoBdseek10lc/TbWv/meHOKkFYyoI+udI0HvKxq6Kv8mb0iqjD1zy2N2S4Ao/MeAHjsBQhqLH3THP3QjteG0ljpbkPl5pzSyoC+ejDWeo12dnYKgguSVCsfQ5aZVpgtAhAE7wGA8NQLMPrKbF2Z8e6cIqY0VuplSERjbwP2RLsHQ7r/q2v/Y+7/mrfycX5+nlNPSotGAYxulADAV3ZtXXJUiOrmcMcm9pUByf2x72qvScE9JGu9Rpj7/y9XiaQmnwJ5AJCcUQIAwRG5Rqurah7KNq1NGpK4ooRkwOs8rEmRV/6Nuf8rXO4OKuXDlBHkA0AyRgsAzAYiBSk7OzsLdUrghbpWXKw0kgHJQ1e6UNpKWm06Y8OCUQXBKmfnnnu4jmSnQLPDKUASRgsAhKedAp9kgS4MlFLrX2glA/pY3pnLospwkVYPBh/vw5rX0P1/3ehbNAOEbNQAQGncuGo31IWBUmr9LymtDKjalW6S6VQqao01KRqOt2xbYnqiMgKARqMGAMJHL4CvOeU2Umv9L8WYDKgciDlfk6JueqSvzbZiUTdDAgCuGz0AmGovQIqt/6UIkwFzUqSwxsPa7+PyjbHpFb7WkACI2egBgOFjSmAwvQCptv6XYkoG9LT7orMNguo2/sHc/1oY/wfYIIgAwExdUl8e2EcyWRehHIeWyJIB15L/OFgMdoOgurUtMPf/OhNseZk+ChCzUHoAaEqbBMWyQNEQMSQDmp6YvPJyuVgsHpPjgNTFBkENFdup2bceDO7+l3MU5MwfgJAEEwB4Wh44G3t54Ia925MjuR0Ka6g7TQZsyMMoZI0K18u/utggqKFie79pn4kJSja/BsClYAKAqWwSNIXW/4pgkwGb8jB2dnaWs1JC3CBorexg7v91nnI6AJIQTAAgJrJJUE4ToXQ9nSQDNkylu0qmU9oHvvexNw1XYO7/GrT+AToKKgBIvRfALAub0USY61mQW66SATdupKNQFnsfe8NwBdalX7G3t/ea0PoH6CyoAECYKWTaRukFWCwWU1yYRKMrfVBCXUMextpGOoElMubVF3i44ojgAlf+L/l6BbniJ0CoggsATAKWelbzSL0AkwsAlLrSBwVwDXkYRfUFsw1sQW5ZbxDE49qSO5Ctvoa5//8ylf8hAYCV4AIAw8eypvkIWwXfownSGNbpm0zZIfnvmkBWNXxY8zsmn/wn15KDo4+o/AH6CTIA8LQ8sGwV7LsXIKMJMsmArj3qk1DXMAZ/3NSa1ljV0GY9iqaAZapz/+WaS+8PV/y/bG9vf6MJJdUCuBZqD4CvrYLnnpcHzmiCzDz1gtzqtb9DXc9B21Q6rUTGrkMYDWvaH6c+91+uE5+jQ/Pxmiv8t9zV/4nPx//4ex8JK/0BDBZsAOCrF8DXJkGh7EMwFo2AznZ1vYY54l2m0mkMYXTtfVr7uYnM/Z/LOTIfco/OZTElAgBngg0ARGJbBU86ANBIBuyxul5d3sDGMqaVyLip3DVMG8XcfwBwIugAwDzoStIV3FbBqVJKBuw0nt6wkI4k/xXUgcaxbyp33MNR994KAgBwIOgAQPjaJGjqXfQ+jJkM2LCQznHXqXQaU1M7DGHk1ReaZisAANgKPgBQ2lu+Cr0AHiglA25sSZsAIa++bjOWrrEmQNsQRl2+wpTm/vN7fbD84H8+5s8v+PMbhYRMgMmaUeCk0uCH5BvthXtMV/IhgSrJ6+BznZNDm66d2UUvq/yfz1+/fi3IgqwJoHDscmxFzbee1PzsZOb+c1BXNgU7EtCZayrPhIwAoJfgewCEp02Cdk2rCxQpJdRtmlZXl0lvPbSk1Bu1tkHQ0HyF1EmjQJZt5o/bnqYLAyQpigDA1yZBVJ8lDo4pJQPW9hB1Xfe/C1+bG9kuVjRlHFAe8qfHBADWoggAhFICWdXYWwVPgtK1rJ1W13Xdfwvqmxs1HDN2/mvAwZwkaD4lALASTQBgEsjUx0DH2ip4SnwlA9qu+9+F1poAyw2CWnosJrn0b1emR8dHLyFAMqIJAAR3vx6TPvQCeKAxdltdE6BuGV0XmfRKQxiPzGfXPRaTcX5+fkj664YAJCOqAMDX8sDoBdDHwwAyrU47GXDtOrrIpNdYE2BlLYp59XtbW1to2XZgcjQwFADQUVQBgPCU9YteAGVaiZ3L4G1/f39t6h/1TP6r0lgTgMnUttfVF2W6ovl70IGvRgJACqILADz2AnTeshX60WhJk0kG5N9tteufLVkTgNyb1/wdtP4tYWogQDfRBQDC0w3ea7956E6pJS1j/6+XY+qrZrPZMTniaYVKzP3vQSlREyA5UQYAnjYJatqLHdzSaOHOa15zOo9eaU2Aqg+Y+9/bZFZNBOgrygBA+Oga3draQg+AsvPz84I8tNZcdv+v0C6DxwS9KA0vASQl2gDAVxcs6PK0vkNpeo2cUu5qxtz/AZRmmQAkJdoAwMfywDyOXBKo89BaU8sZUSyDBUFvJrDE7AmAFtEGAEJ7kyDTigBl2jM7NBPptIIXzP134gsBQKOoAwDlXoBj04oAD5Sm1QnVTXSUZjKUmPvvBM4hQIuoAwChtUnQkPXiwZ5WToePlrRC8IKy5wBfewQAAC2iDwCUksiw9apnGtfR1yp6roMXzP134+zsrCQAaBR9ACBcbxKE1v84XI+n+1pFz+WaAC42K4JLy+siH0joBVg3owRIEtn+/n7BX+Y0XJStf37AZRQ5x9fRybr/FiTYeEQDudisCP7FZeoBKZLVQn/44YeL9UIQuNmT8zebze7L1/y5xDns5+7duxn3RGbytc2U5yR6AISr5YHR+h+Xw/H0gjxytCaA76AFBtre3v7EQw3f/v77718IrG1tbT3joPejfCwrMLDHZfDiHC4Wi9c2/y+ZAMDRVDK11j8HFlhVsANX4+ljBHIOhhwKgmjs7e3JzpOZfM0VGWYMWeLWf8b3zHz5b/4a57AHLoeycV0mX9uWw2QCADG0F0Cz0uDoDAFABy6SAccaRx+aw6C0XDEoMJXX8+W/kWNgj3tPrgIogaRNe0PLYVIBgPQC8Mnom/Ud+8YryQQYQyvSscbRB64JoLJcMegwldfVPcdl9r8EnUnFRdc37TrFuiv2qkGUbTlMKgAQ/PDv1Q3LJ05lPYElD0l6yQQAA4dzRh1H75vD4GvGQizOz8+DLc/7+/tzquw4ydevJOhEEv+44vq4+hp6UOzVlUOyHD5NLgDgB4e0Hq1OgnQZa7e++G9kpEwyQSkRfSvSvgGgK31zGGazmfZ+CFEJdcjMtFzXEq1Cq8B8PG/64nHqa61W85qr1r/TchN4OXxZfX3SQwCi5/LA6gljPgoSj6Hdp0T0rUhv3rw5akXaZxOa2Of+S4uOJkAeuqbluvZ+Q0tgWywWQV4TSZxcHbNechhAOX3fIW4Jv9KDklW/Z1sOkwsAhM0mQT5a/8Y9UhZy1G+r5+I6QazhYJuMmsDcf+cPydDKsjx0uTKQqX5Z3feHJrC5HiLk8xdcxWUq/8O674WaQxHa+iqmHNZW/kLWUiALSQYANr0AHh++OSnj95JTWqx6ckLJordcE+DUDFtFS2OKK7dgg+nNMi3/T1y+Go9paAIb/+5b5FYWUs9MW+VvDO5B0Xi//Ez9kQIhF1Qq/7ZyaNsASjIAEB17AbwkjO3v7z8iP35OqTvWclZHUFn0FsNQ72PPflYa3lLvMevi4OAgb+puXVHSQBrncLnC3pjkecTPv7cbKn8nQwAa75ePK4hAdFkO2yp/6hFEJRsAdJxP7muxmIfkh4wN+Qo2fOmaDBjaCo5Flx9KZO6/xkMyl4cejUQqLm61vpbV1ai98nc1A0Cj8npGI5Isdek5ofVM9TUucig0uuulwo2lHPYJopINAAR3rR61fNtL6z/L1ua7anuZJdQL0HG759PQdtDrOJUxibn//OBRCXD59771PbNFHvb88Zorrm91yWp1+Dj/pAHMdC6Ne/aRWa3QG3n28Pl7zu9JKqy3tKHSWrIdu27whBSMVQ7l2tmUwz4zKZLYDKgJ9wKULZvLqLcYpfKvznf1IDPTbF5QAqQnp8MGQe9DzKKXqYxteRkptP5N5ZWTjuzs7OwTPwiP+T5653pr58xs5MN/I+drcY+v1aOerciShlGrpKXrna+RvL9XHEx/dj3cJBWjzD6SpE0TCN7vM5wx9P71UA6/cTk8knIoCZ8uz2NTOeSvrX5Pnx4Au78QIYmkTPfJKmn93yZFK5V/RiPg93x0cnKSRBDQcA2vcOv/dogBQHY5XecbNbTuQj3uru7cuXN/sVg0ZsYrKmm4XXLU6pbKlXtyDsmSKR+ypsCc/CrJjYzcOOXn8X+oJ5TDS33KYdI9AKJhi1m11n92OU3jmem2Ga0rXv6+ST58FfsOc+YaSsRdN/862Dn0pvdCWq159Xsxz/1flnF+6B7SODIKiG0OQHa5Be7cjNFn5F9GAembAGgqfimHcxpHRgHpk4uSfAAgJDJa6Yp1MvYvhU+6ukx3167pupFEnpzCkfHHW66EpJUhGfVf5GZbFhRJvHHdrapFsur52OtWvgq6G71S9q7EMPffVFSrG438KGV8Qyby5DRVYNILKBX9ys9dnT/+THBp09i1NGRWytwtM0wjlX9GcKVPIDWJAKDSC+Ck9V/tcgr8hpYgRcaVLmYILI+VPx/zp6cUAUkGNBtfrCpD791o6r2IZO7/bjXosh2XnIKmDHau/DOcv806VFzy7FJJ8EtJn5kUSc8CqJAWV/AVBtQzSTdF5eWCIlCzJsAxdj5LB7axHQY7KbrRpxxOJgAwFX8SSXFTVV1id2dnJ7S5/02K1X8kMvcfLmEb24FuYCdFJ/qUw0kMASxxEOCs25ULbRRd5224W72kiEh3+sHBwQP5Wrq7YkmiWz3u5b8pDrKk9gOCRm3drjLtjocBcP424JZrax7S1tbWkRmuhAY3AtuMCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAu/B9FDmuKpemLRwAAAABJRU5ErkJggg==", Ne = {
  DEFAULT: "default"
}, Ee = {
  [Ne.DEFAULT]: "bg-system-white"
}, et = m((t, r) => {
  const { variant: n = "default", menuItems: s, rightActions: o, ...d } = t, A = Ee[n];
  return /* @__PURE__ */ c("header", { className: `${A} ${x.mainHeader}`, ref: r, ...d, children: [
    /* @__PURE__ */ c("div", { className: x.navContainer, children: [
      /* @__PURE__ */ e("img", { src: Re, className: "w-32 h-7", alt: "Viwell Logo" }),
      /* @__PURE__ */ e("nav", { className: x.navMenu, children: s.length && s.map((l) => /* @__PURE__ */ c("div", { className: "flex items-center gap-x-1", children: [
        l.icon,
        /* @__PURE__ */ e(
          "a",
          {
            className: `${l.active ? x.activeNavLink : l.disabled ? x.disabledNavLink : x.defaultNavLink}`,
            href: l.href,
            onClick: (h) => {
              l.disabled && h.preventDefault();
            },
            children: l.label
          },
          l.key
        )
      ] }, l.key)) })
    ] }),
    /* @__PURE__ */ e("div", { className: x.rightContainer, children: (o == null ? void 0 : o.length) && o.map((l) => /* @__PURE__ */ e(
      "div",
      {
        className: l.disabled ? x.disabledRightActionItem : x.rightActionItem,
        children: l.actionItem
      },
      l.key
    )) })
  ] });
}), x = {
  mainHeader: "shadow-md flex items-center justify-between px-10 h-[76px]",
  navContainer: "flex items-center gap-x-10",
  rightContainer: "flex items-center gap-x-4",
  navMenu: "flex items-center gap-x-6",
  defaultNavLink: "font-medium text-system-black text-sm leading-[76px] group relative hover:text-grey-200 transition-all duration-300 ease-in-out hover:after:absolute hover:after:border-grey-200 hover:after:border-1 hover:after:bottom-0 hover:after:left-0 hover:after:w-full",
  activeNavLink: `font-medium text-system-black text-sm leading-[76px] group relative
                hover:text-grey-200 transition-all duration-300 ease-in-out after:absolute after:border-system-black after:border-1 after:bottom-0 after:left-0 after:w-full
                hover:after:border-grey-200`,
  disabledNavLink: "text-grey-100 font-medium text-sm leading-[76px] group relative cursor-not-allowed",
  rightActionItem: "font-medium text-system-black text-sm",
  disabledRightActionItem: "font-medium text-grey-100 text-sm"
}, k = {
  XS: "xs",
  S: "s",
  M: "m",
  L: "l",
  XL: "xl"
}, Be = {
  [k.XS]: "w-100 h-80 ",
  [k.S]: "w-100 h-100 ",
  [k.M]: "w-100 h-110 ",
  [k.L]: "w-150 h-120 ",
  [k.XL]: "w-180 h-150 "
}, Ie = "flex flex-col self-center rounded-30 bg-system-white align-middle justify-around content-center px-10";
function tt({ testId: t, variant: r, isOpen: n, triggerModalElement: s, renderContent: o }) {
  const [d, A] = B(n), l = () => {
    A(!0);
  }, h = () => {
    A(!1);
  }, i = Ie + " " + Be[r];
  return /* @__PURE__ */ c(N, { children: [
    s({ onOpen: l }),
    /* @__PURE__ */ e(N, { children: d && /* @__PURE__ */ e("div", { className: He.modalContainer, "data-testid": t, children: /* @__PURE__ */ e("div", { className: i, children: o({ onClose: h }) }) }) })
  ] });
}
const He = {
  modalContainer: "flex absolute top-0 bottom-0 right-0 left-0 bg-system-black bg-opacity-80 justify-center items-center"
}, rt = m((t, r) => {
  const { path: n, separator: s, testId: o, onItemClick: d } = t, A = n.split("/").filter((i) => i !== ""), l = (i) => (a) => {
    a.preventDefault(), d(`/${A.slice(0, i + 1).join("/")}`);
  }, h = (i) => i < A.length - 1;
  return /* @__PURE__ */ e("div", { ref: r, "data-testid": o, children: /* @__PURE__ */ e("ul", { className: R.mainContainer, children: A.map((i, a) => /* @__PURE__ */ c("li", { "data-testid": i, className: R.breadItem, children: [
    /* @__PURE__ */ e(
      "a",
      {
        "data-testid": `${i}-link`,
        href: `/${A.slice(0, a + 1).join("/")}`,
        onClick: l(a),
        className: R.breadTitle,
        children: i
      }
    ),
    h(a) && (E.isValidElement(s) ? s : /* @__PURE__ */ e(ne, { "data-testid": "breadcrumb-default-separator" }))
  ] }, i)) }) });
}), R = {
  mainContainer: "flex items-center gap-x-[0.625rem] flex-wrap",
  breadItem: "flex items-center gap-x-[0.625rem]",
  breadTitle: "text-grey-300 text-sm font-normal leading-md"
}, C = {
  NEGATIVE: "negative",
  POSITIVE: "positive",
  NEUTRAL: "neutral"
}, Ye = {
  [C.NEUTRAL]: "bg-grey-25",
  [C.POSITIVE]: "bg-system-light-green",
  [C.NEGATIVE]: "bg-brik-25"
}, Pe = {
  [C.POSITIVE]: /* @__PURE__ */ e(Ae, { "data-testid": "snackbar-positive-icon" }),
  [C.NEGATIVE]: /* @__PURE__ */ e(ie, { "data-testid": "snackbar-negative-icon" })
};
function nt({ variant: t, message: r, testId: n }) {
  const s = t === "neutral", [o, d] = B(!0);
  return setTimeout(() => {
    d(!1);
  }, 4e3), o ? /* @__PURE__ */ c("div", { "data-testid": `${n ?? "snackbar"}`, className: `${P.container} ${Ye[t]}`, children: [
    !s && /* @__PURE__ */ e("div", { className: P.iconContainer, children: Pe[t] }),
    /* @__PURE__ */ e(b, { variant: "p-14-reg", text: r })
  ] }) : null;
}
const P = {
  container: "flex w-fit rounded-2xl p-5 shadow-md",
  iconContainer: "mr-2.5"
}, st = (t, r = 16) => 1 / r * (t ?? 0) + "rem";
export {
  Oe as AppleIcon,
  Ue as ArrowDownIcon,
  G as ArrowRightIcon,
  rt as Breadcrumb,
  ye as Button,
  p as ButtonVariants,
  Ae as CheckIcon,
  Ze as Dropdown,
  ee as EditIcon,
  ie as ExclamationIcon,
  Ke as FailCircle,
  $e as Footer,
  Ve as GoogleStoreIcon,
  je as Input,
  ze as List,
  _e as MemberBar,
  qe as MemberBarVariants,
  tt as Modal,
  k as ModalVariants,
  et as Navbar,
  Ne as NavbarVariants,
  Ge as OrganizationIcon,
  Je as ProfileIcon,
  We as SettingIcon,
  T as SizeVariants,
  ne as SmallArrowRightIcon,
  nt as Snackbar,
  C as SnackbarVariants,
  Fe as SuccessCircle,
  b as Text,
  y as TextColors,
  g as TextVariants,
  R as breadcrumbStyles,
  v as footerVariants,
  ve as generateHTMLTag,
  Y as listStyles,
  x as navStyles,
  H as placementVariants,
  st as pxToRem,
  Le as sizeVariantClasses,
  M as styles
};
