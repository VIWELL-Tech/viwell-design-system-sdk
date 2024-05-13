import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import React__default, { forwardRef, memo, useState, useCallback, useEffect, useRef } from "react";
function AppleLogoSvg(t, e) {
  const { fill: r = "#fff", ...i } = t;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 11, height: 13, fill: "none", ref: e, ...i, children: /* @__PURE__ */ jsx(
    "path",
    {
      fill: r,
      d: "M8.64 6.814c.012-.91.5-1.772 1.277-2.25a2.778 2.778 0 0 0-2.162-1.168c-.91-.096-1.792.544-2.255.544-.473 0-1.186-.535-1.955-.519A2.903 2.903 0 0 0 1.122 4.9c-1.047 1.814-.266 4.48.738 5.945.502.718 1.089 1.52 1.856 1.492.752-.032 1.032-.48 1.94-.48.898 0 1.161.48 1.944.462.807-.014 1.315-.722 1.799-1.446.36-.512.638-1.077.823-1.675A2.613 2.613 0 0 1 8.64 6.814ZM7.16 2.432A2.64 2.64 0 0 0 7.765.54a2.685 2.685 0 0 0-1.737.899 2.534 2.534 0 0 0-.62 1.82 2.246 2.246 0 0 0 1.754-.828Z"
    }
  ) });
}
const ForwardRef$g = forwardRef(AppleLogoSvg), AppleIcon = memo(ForwardRef$g);
function GoogleStoreSvg(t, e) {
  const { fill: r = "#fff", ...i } = t;
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 10, height: 11, fill: "none", ref: e, ...i, children: /* @__PURE__ */ jsx(
    "path",
    {
      fill: r,
      d: "M9.21 5.109 7.455 3.97 6.012 5.54l1.32 1.433 1.878-1.22a.351.351 0 0 0 .121-.136.404.404 0 0 0 .044-.186.405.405 0 0 0-.044-.186.351.351 0 0 0-.121-.136ZM7.158 3.776 5.227 2.523.996.084l4.779 5.197 1.383-1.505Zm-6.092 7.141 4.168-2.582 1.8-1.169-1.26-1.368-4.708 5.12ZM.713.294.708 10.79l4.829-5.25L.713.294Z"
    }
  ) });
}
const ForwardRef$f = forwardRef(GoogleStoreSvg), GoogleStoreIcon = memo(ForwardRef$f);
function ArrowRightSVG(t, e) {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 14, height: 12, fill: "none", ref: e, ...t, children: /* @__PURE__ */ jsx(
    "path",
    {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: 1.5,
      d: "M13 6H1m12 0-4.5 4.5M13 6 8.5 1.5"
    }
  ) });
}
const ForwardRef$e = forwardRef(ArrowRightSVG), ArrowRightIcon = memo(ForwardRef$e);
function FailCircleSvg({ title: t, titleId: e, ...r }, i) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 60,
      height: 61,
      fill: "none",
      ref: i,
      "aria-labelledby": e,
      ...r,
      children: [
        t ? /* @__PURE__ */ jsx("title", { id: e, children: t }) : null,
        /* @__PURE__ */ jsx("circle", { cx: 30, cy: 30.25, r: 30, fill: "#FDEFED" }),
        /* @__PURE__ */ jsx(
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
const ForwardRef$d = forwardRef(FailCircleSvg), FailCircle = memo(ForwardRef$d);
function SuccessCircleSvg({ title: t, titleId: e, ...r }, i) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 60,
      height: 61,
      fill: "none",
      ref: i,
      "aria-labelledby": e,
      ...r,
      children: [
        t ? /* @__PURE__ */ jsx("title", { id: e, children: t }) : null,
        /* @__PURE__ */ jsx("circle", { cx: 30, cy: 30.25, r: 30, fill: "#E0F7DE" }),
        /* @__PURE__ */ jsx(
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
const ForwardRef$c = forwardRef(SuccessCircleSvg), SuccessCircle = memo(ForwardRef$c);
function EditSVG({ className: t, ...e }, r) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: 18,
      height: 18,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: r,
      className: t,
      ...e,
      children: /* @__PURE__ */ jsx(
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
const ForwardRef$b = forwardRef(EditSVG), EditIcon = memo(ForwardRef$b);
function SmallArrowRightSvg(t, e) {
  const { fill: r = "#A9A9A9", ...i } = t;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: 7,
      height: 12,
      viewBox: "0 0 7 12",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: e,
      ...i,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M0.46967 10.4697C0.176777 10.7626 0.176777 11.2374 0.46967 11.5303C0.762563 11.8232 1.23744 11.8232 1.53033 11.5303L0.46967 10.4697ZM6 6L6.53033 6.53033C6.67098 6.38968 6.75 6.19891 6.75 6C6.75 5.80109 6.67098 5.61032 6.53033 5.46967L6 6ZM1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L1.53033 0.46967ZM1.53033 11.5303L6.53033 6.53033L5.46967 5.46967L0.46967 10.4697L1.53033 11.5303ZM6.53033 5.46967L1.53033 0.46967L0.46967 1.53033L5.46967 6.53033L6.53033 5.46967Z",
          fill: r
        }
      )
    }
  );
}
const ForwardRef$a = forwardRef(SmallArrowRightSvg), SmallArrowRightIcon = memo(ForwardRef$a);
function ArrowDownSVG(t, e) {
  const { stroke: r = "#A9A9A9", ...i } = t;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: 18,
      height: 18,
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: e,
      ...i,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M5.25 7.5L9 11.25L12.75 7.5",
          stroke: r,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
const ForwardRef$9 = forwardRef(ArrowDownSVG), ArrowDownIcon = memo(ForwardRef$9);
function ExclamationSvg({ title: t, titleId: e, ...r }, i) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 20,
      height: 20,
      fill: "none",
      ref: i,
      "aria-labelledby": e,
      ...r,
      children: [
        t ? /* @__PURE__ */ jsx("title", { id: e, children: t }) : null,
        /* @__PURE__ */ jsx(
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
const ForwardRef$8 = forwardRef(ExclamationSvg), ExclamationIcon = memo(ForwardRef$8);
function CheckSvg({ title: t, titleId: e, ...r }, i) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 24,
      height: 24,
      fill: "none",
      ref: i,
      "aria-labelledby": e,
      ...r,
      children: [
        t ? /* @__PURE__ */ jsx("title", { id: e, children: t }) : null,
        /* @__PURE__ */ jsx("path", { stroke: "#41BD2C", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20 7 9 18l-5-5" })
      ]
    }
  );
}
const ForwardRef$7 = forwardRef(CheckSvg), CheckIcon = memo(ForwardRef$7);
function ProfileSvg(t, e) {
  const { stroke: r = "#232323", ...i } = t;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: 20,
      height: 20,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: e,
      ...i,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16 16.7023C16 13.6706 12.5 13 10 13C7.5 13 4 13.6706 4 16.7023M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10ZM13 7C13 8.65685 11.6569 10 10 10C8.34315 10 7 8.65685 7 7C7 5.34315 8.34315 4 10 4C11.6569 4 13 5.34315 13 7Z",
          stroke: r,
          strokeWidth: "1.5",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
const ForwardRef$6 = forwardRef(ProfileSvg), ProfileIcon = memo(ForwardRef$6);
function SettingSvg(t, e) {
  const { stroke: r = "#232323", ...i } = t;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: 18,
      height: 18,
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: e,
      ...i,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9 1H11C11.5523 1 12 1.44772 12 2V2.56879C12 2.99659 12.2871 3.36825 12.6822 3.53228C13.0775 3.69638 13.5377 3.63384 13.8403 3.33123L14.2426 2.92891C14.6331 2.53838 15.2663 2.53838 15.6568 2.92891L17.071 4.34312C17.4616 4.73365 17.4615 5.36681 17.071 5.75734L16.6688 6.1596C16.3661 6.46223 16.3036 6.92247 16.4677 7.31774C16.6317 7.71287 17.0034 8 17.4313 8L18 8C18.5523 8 19 8.44771 19 9V11C19 11.5523 18.5523 12 18 12H17.4312C17.0034 12 16.6318 12.2871 16.4677 12.6822C16.3036 13.0775 16.3661 13.5377 16.6688 13.8403L17.071 14.2426C17.4616 14.6331 17.4616 15.2663 17.071 15.6568L15.6568 17.071C15.2663 17.4616 14.6331 17.4616 14.2426 17.071L13.8403 16.6688C13.5377 16.3661 13.0775 16.3036 12.6822 16.4677C12.2871 16.6318 12 17.0034 12 17.4312V18C12 18.5523 11.5523 19 11 19H9C8.44772 19 8 18.5523 8 18V17.4313C8 17.0034 7.71287 16.6317 7.31774 16.4677C6.92247 16.3036 6.46223 16.3661 6.1596 16.6688L5.75732 17.071C5.36679 17.4616 4.73363 17.4616 4.34311 17.071L2.92889 15.6568C2.53837 15.2663 2.53837 14.6331 2.92889 14.2426L3.33123 13.8403C3.63384 13.5377 3.69638 13.0775 3.53228 12.6822C3.36825 12.2871 2.99659 12 2.56879 12H2C1.44772 12 1 11.5523 1 11V9C1 8.44772 1.44772 8 2 8L2.56877 8C2.99658 8 3.36825 7.71288 3.53229 7.31776C3.6964 6.9225 3.63386 6.46229 3.33123 6.15966L2.92891 5.75734C2.53838 5.36681 2.53838 4.73365 2.92891 4.34313L4.34312 2.92891C4.73365 2.53839 5.36681 2.53839 5.75734 2.92891L6.15966 3.33123C6.46228 3.63386 6.9225 3.6964 7.31776 3.53229C7.71288 3.36825 8 2.99658 8 2.56876V2C8 1.44772 8.44772 1 9 1Z",
            stroke: r,
            strokeWidth: "1.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10Z",
            stroke: r,
            strokeWidth: "1.5"
          }
        )
      ]
    }
  );
}
const ForwardRef$5 = forwardRef(SettingSvg), SettingIcon = memo(ForwardRef$5);
function UploadSvg({ title: t, titleId: e, ...r }, i) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 16,
      height: 15,
      fill: "none",
      ref: i,
      "aria-labelledby": e,
      ...r,
      children: [
        t ? /* @__PURE__ */ jsx("title", { id: e, children: t }) : null,
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#232323",
            d: "M11.75 5.5H11c0 .414.336.75.75.75V5.5Zm1.124 4.976a.75.75 0 1 0 .752 1.298l-.752-1.298ZM4.948 6.36a.75.75 0 0 0 .464-1.426L4.948 6.36Zm-2.574 5.414a.75.75 0 1 0 .752-1.298l-.752 1.298ZM8 7l.53-.53a.75.75 0 0 0-1.06 0L8 7Zm-.75 6.75a.75.75 0 0 0 1.5 0h-1.5Zm2.47-3.97a.75.75 0 0 0 1.06-1.06L9.72 9.78Zm-4.5-1.06a.75.75 0 0 0 1.06 1.06L5.22 8.72ZM5 4.75a3 3 0 0 1 3-3V.25a4.5 4.5 0 0 0-4.5 4.5H5Zm3-3a3 3 0 0 1 3 3h1.5A4.5 4.5 0 0 0 8 .25v1.5Zm3 3v.75h1.5v-.75H11Zm-7.5 0v.75H5v-.75H3.5Zm8.25 1.5A2.25 2.25 0 0 1 14 8.5h1.5a3.75 3.75 0 0 0-3.75-3.75v1.5ZM14 8.5c0 .84-.457 1.59-1.126 1.976l.752 1.298A3.792 3.792 0 0 0 15.5 8.5H14Zm-12 0a2.25 2.25 0 0 1 2.25-2.25v-1.5A3.75 3.75 0 0 0 .5 8.5H2Zm2.25-2.25c.245 0 .479.039.698.11l.464-1.426A3.747 3.747 0 0 0 4.25 4.75v1.5Zm-1.124 4.226A2.292 2.292 0 0 1 2 8.5H.5c0 1.382.75 2.623 1.874 3.274l.752-1.298ZM7.25 7v6.75h1.5V7h-1.5Zm3.53 1.72L8.53 6.47 7.47 7.53l2.25 2.25 1.06-1.06ZM7.47 6.47 5.22 8.72l1.06 1.06 2.25-2.25-1.06-1.06Z"
          }
        )
      ]
    }
  );
}
const ForwardRef$4 = forwardRef(UploadSvg), UploadIcon = memo(ForwardRef$4);
function PlusSvg({ title: t, titleId: e, ...r }, i) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 10,
      height: 10,
      fill: "none",
      ref: i,
      "aria-labelledby": e,
      ...r,
      children: [
        t ? /* @__PURE__ */ jsx("title", { id: e, children: t }) : null,
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#232323",
            d: "M5.75 1.25a.75.75 0 0 0-1.5 0h1.5Zm-1.5 7.5a.75.75 0 0 0 1.5 0h-1.5Zm-3-4.5a.75.75 0 0 0 0 1.5v-1.5Zm7.5 1.5a.75.75 0 0 0 0-1.5v1.5Zm-4.5-4.5v7.5h1.5v-7.5h-1.5Zm-3 4.5h7.5v-1.5h-7.5v1.5Z"
          }
        )
      ]
    }
  );
}
const ForwardRef$3 = forwardRef(PlusSvg), PlusIcon = memo(ForwardRef$3);
function OrganizationSvg({ title: t, titleId: e, ...r }, i) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 14,
      height: 14,
      fill: "none",
      ref: i,
      "aria-labelledby": e,
      ...r,
      children: [
        t ? /* @__PURE__ */ jsx("title", { id: e, children: t }) : null,
        /* @__PURE__ */ jsx(
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
const ForwardRef$2 = forwardRef(OrganizationSvg), OrganizationIcon = memo(ForwardRef$2);
function XSvg({ title: t, titleId: e, ...r }, i) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: 10,
      height: 10,
      fill: "none",
      ref: i,
      "aria-labelledby": e,
      ...r,
      children: [
        t ? /* @__PURE__ */ jsx("title", { id: e, children: t }) : null,
        /* @__PURE__ */ jsx("path", { stroke: "#232323", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 1 1 9m0-8 8 8" })
      ]
    }
  );
}
const ForwardRef$1 = forwardRef(XSvg), XIcon = memo(ForwardRef$1);
function UsersSVG(t, e) {
  const { fill: r = "#232323", ...i } = t;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      width: 18,
      height: 17,
      viewBox: "0 0 18 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: e,
      ...i,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M14.6667 13.4961C14.2525 13.4961 13.9167 13.8319 13.9167 14.2461C13.9167 14.6603 14.2525 14.9961 14.6667 14.9961V13.4961ZM13.8129 9.37165C13.4066 9.2909 13.0118 9.55479 12.9311 9.96106C12.8503 10.3673 13.1142 10.7621 13.5205 10.8429L13.8129 9.37165ZM11 6.82943C10.5858 6.82943 10.25 7.16521 10.25 7.57943C10.25 7.99364 10.5858 8.32943 11 8.32943V6.82943ZM11 1.49609C10.5858 1.49609 10.25 1.83188 10.25 2.24609C10.25 2.66031 10.5858 2.99609 11 2.99609V1.49609ZM15.5834 12.5794C15.5834 13.0857 15.1729 13.4961 14.6667 13.4961V14.9961C16.0014 14.9961 17.0834 13.9141 17.0834 12.5794H15.5834ZM13.5205 10.8429C14.152 10.9684 14.686 11.1676 15.0484 11.4527C15.378 11.712 15.5834 12.0514 15.5834 12.5794H17.0834C17.0834 11.5559 16.6381 10.7948 15.9758 10.2738C15.3462 9.77852 14.5468 9.51752 13.8129 9.37165L13.5205 10.8429ZM12.9167 4.91276C12.9167 5.97131 12.0586 6.82943 11 6.82943V8.32943C12.887 8.32943 14.4167 6.79973 14.4167 4.91276H12.9167ZM11 2.99609C12.0586 2.99609 12.9167 3.85421 12.9167 4.91276H14.4167C14.4167 3.02579 12.887 1.49609 11 1.49609V2.99609ZM3.33335 14.9962H10.6667V13.4962H3.33335V14.9962ZM7.00002 9.16284C6.35358 9.16284 4.91429 9.14454 3.63117 9.50375C2.98569 9.68445 2.31389 9.9774 1.79489 10.4724C1.25359 10.9887 0.916687 11.6903 0.916687 12.5795H2.41669C2.41669 12.1085 2.57979 11.7966 2.83015 11.5579C3.10281 11.2978 3.51435 11.0941 4.03554 10.9482C5.08575 10.6542 6.31313 10.6628 7.00002 10.6628V9.16284ZM7.00002 10.6628C7.68691 10.6628 8.91429 10.6542 9.9645 10.9482C10.4857 11.0941 10.8972 11.2978 11.1699 11.5579C11.4203 11.7966 11.5834 12.1085 11.5834 12.5795H13.0834C13.0834 11.6903 12.7465 10.9887 12.2051 10.4724C11.6861 9.9774 11.0143 9.68445 10.3689 9.50375C9.08575 9.14454 7.64646 9.16284 7.00002 9.16284V10.6628ZM0.916687 12.5795C0.916687 13.9142 1.99867 14.9962 3.33335 14.9962V13.4962C2.82709 13.4962 2.41669 13.0858 2.41669 12.5795H0.916687ZM11.5834 12.5795C11.5834 13.0858 11.1729 13.4962 10.6667 13.4962V14.9962C12.0014 14.9962 13.0834 13.9142 13.0834 12.5795H11.5834ZM8.91669 4.91276C8.91669 5.97131 8.05857 6.82943 7.00002 6.82943V8.32943C8.88699 8.32943 10.4167 6.79973 10.4167 4.91276H8.91669ZM7.00002 6.82943C5.94147 6.82943 5.08335 5.97131 5.08335 4.91276H3.58335C3.58335 6.79973 5.11305 8.32943 7.00002 8.32943V6.82943ZM5.08335 4.91276C5.08335 3.85421 5.94147 2.99609 7.00002 2.99609V1.49609C5.11305 1.49609 3.58335 3.02579 3.58335 4.91276H5.08335ZM7.00002 2.99609C8.05857 2.99609 8.91669 3.85421 8.91669 4.91276H10.4167C10.4167 3.02579 8.88699 1.49609 7.00002 1.49609V2.99609Z",
          fill: r
        }
      )
    }
  );
}
const ForwardRef = forwardRef(UsersSVG), UsersIcon = memo(ForwardRef), ButtonVariants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TEXT: "text",
  SMALL_PRIMARY: "smallPrimary",
  SMALL_STROKE: "smallStroke"
}, variantClasses$4 = {
  [ButtonVariants.PRIMARY]: `flex justify-center items-center gap-x-2 px-6 py-4 bg-system-black text-system-white text-sm leading-md min-w-32 hover:bg-grey-300 disabled:bg-grey-200 rounded-full transition-all ease-in-out duration-300 
                             font-medium disabled:cursor-not-allowed`,
  [ButtonVariants.SECONDARY]: "flex justify-center items-center gap-x-2 px-6 py-4 border-1 border-system-black text-system-black text-sm font-medium leading-md min-w-32 rounded-full group hover:border-grey-300 hover:text-grey-300 disabled:border-grey-100 disabled:text-grey-100",
  [ButtonVariants.TEXT]: "flex justify-center items-center gap-x-2 text-system-black text-sm font-medium leading-md group hover:text-grey-300 disabled:text-grey-100",
  [ButtonVariants.SMALL_PRIMARY]: "flex justify-center items-center gap-x-1 bg-system-white px-3 py-2 h-8 text-system-black font-medium text-xs leading-sm rounded-full shadow-md min-w-20 group hover:text-grey-300 hover:bg-grey-25 disabled:text-grey-100 disabled:bg-grey-25",
  [ButtonVariants.SMALL_STROKE]: "flex justify-center items-center gap-x-1 px-3 py-2 h-8 text-system-black font-medium text-xs leading-sm rounded-full border-1 border-system-black min-w-20 group hover:text-grey-200 hover:border-grey-200 disabled:text-grey-100 disabled:border-grey-100"
}, iconVariantClasses = {
  [ButtonVariants.PRIMARY]: "stroke-system-white",
  [ButtonVariants.SECONDARY]: "stroke-system-black group-hover:stroke-grey-300 group-disabled:stroke-grey-100",
  [ButtonVariants.TEXT]: "stroke-system-black group-hover:stroke-grey-300 group-disabled:stroke-grey-100",
  [ButtonVariants.SMALL_PRIMARY]: "stroke-system-black group-hover:stroke-grey-300 group-disabled:stroke-grey-100",
  [ButtonVariants.SMALL_STROKE]: "stroke-system-black group-hover:stroke-grey-200 group-disabled:stroke-grey-100"
}, Button = React__default.forwardRef(
  ({ variant: t, label: e, hasIcon: r = !1, disabled: i = !1, icon: s, ...a }, n) => {
    const l = variantClasses$4[t], o = iconVariantClasses[t];
    return /* @__PURE__ */ jsxs("button", { className: l, disabled: i, ...a, children: [
      r && ["smallPrimary", "smallStroke"].includes(t) && /* @__PURE__ */ jsx("span", { "data-testid": "start-button-icon", className: "inline-block", children: s ?? /* @__PURE__ */ jsx(EditIcon, { className: o }) }),
      e,
      r && ["primary", "secondary", "text"].includes(t) && /* @__PURE__ */ jsx("span", { "data-testid": "end-button-icon", className: "inline-block", children: s ?? /* @__PURE__ */ jsx(ArrowRightIcon, { className: o }) })
    ] });
  }
), TextVariants = {
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
}, TextColors = {
  SYSTEM_BLACK: "system-black",
  SYSTEM_WHITE: "system-white",
  SYSTEM_LIGHT_GREEN: "system-light-green",
  SYSTEM_GREEN: "system-green",
  SYSTEM_RED: "system-red",
  GREY_100: "grey-100"
}, generateHTMLTag = (t) => t.startsWith("h4") ? "h4" : t.startsWith("p") ? "p" : t, variantClasses$3 = {
  [TextVariants.H1]: "text-3xl font-medium leading-4xl",
  [TextVariants.H2]: "text-2xl font-medium leading-3xl",
  [TextVariants.H3]: "text-xl font-medium leading-2xl",
  [TextVariants.H4M]: "text-lg font-medium leading-xl",
  [TextVariants.H4R]: "text-lg font-normal leading-xl",
  [TextVariants.BODY_REG]: "text-md font-normal leading-lg",
  [TextVariants.BODY_14_REG]: "text-sm font-normal leading-md",
  [TextVariants.BODY_M]: "text-md font-medium leading-lg",
  [TextVariants.BODY_14_M]: "text-sm font-medium leading-md",
  [TextVariants.SMALL_12_REG]: "text-xs font-normal leading-sm",
  [TextVariants.SMALL_12_M]: "text-xs font-medium leading-sm",
  [TextVariants.SMALL_10]: "text-xs font-normal leading-xs",
  [TextVariants.ALL_CAPS_12]: "text-xs font-normal leading-sm",
  [TextVariants.HANDWRITTEN_14]: "font-handwritten text-sm font-medium leading-lg"
}, colorClass = {
  [TextColors.SYSTEM_LIGHT_GREEN]: "text-system-light-green",
  [TextColors.SYSTEM_GREEN]: "text-system-green",
  [TextColors.SYSTEM_RED]: "text-system-red",
  [TextColors.SYSTEM_BLACK]: "text-system-black",
  [TextColors.SYSTEM_WHITE]: "text-system-white",
  [TextColors.GREY_100]: "text-grey-100"
};
function Text({ variant: t, color: e = "system-black", text: r, ...i }) {
  const s = generateHTMLTag(t), a = variantClasses$3[t] + " " + colorClass[e];
  return /* @__PURE__ */ jsx(s, { className: a, ...i, children: r });
}
const Input = React__default.forwardRef(
  ({ label: t, name: e, error: r = !1, errorMessage: i = "", disabled: s, ...a }, n) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col mb-4", children: [
    /* @__PURE__ */ jsx(Text, { text: t, variant: "p-sm-12-m", color: s ? "grey-100" : "system-black" }),
    /* @__PURE__ */ jsx("input", { id: e, ref: n, name: e, className: `
     border-b-2 border-grey-50 h-8 outline-0 placeholder-grey-200 bg-transparent disabled:placeholder-grey-100 disabled:cursor-not-allowed
  text-system-black
     `, disabled: s, ...a }),
    r && /* @__PURE__ */ jsx("span", { role: "alert", className: "text-system-red text-sm mt-1", children: /* @__PURE__ */ jsx(Text, { text: i, variant: "p-sm-12-m", color: "system-red" }) })
  ] })
), placementVariants = {
  BOTTOM_LEFT: "bottomLeft",
  BOTTOM_RIGHT: "bottomRight"
}, placementVariantClasses = {
  [placementVariants.BOTTOM_LEFT]: "left-0 translate-y-1",
  [placementVariants.BOTTOM_RIGHT]: "right-0 translate-y-1"
}, Dropdown = React.forwardRef(
  ({ children: t, menu: e, disabled: r, placement: i = "bottomLeft", trigger: s = "hover", onClick: a, ...n }) => {
    const l = placementVariantClasses[i], [o, f] = useState(!1), d = useCallback(() => {
      s === "click" && !r && f((y) => !y);
    }, [s, r]), C = useCallback(() => {
      s === "hover" && !r && f(!0);
    }, [s, r]), c = useCallback(() => {
      s === "hover" && f(!1);
    }, [s]), S = useCallback(
      (y, g) => () => {
        g.disabled || (a && (d(), a({ item: g, key: y })), d());
      },
      [a, f]
    );
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: styles$6.parentContainer,
        onClick: d,
        onMouseEnter: C,
        onMouseLeave: c,
        "data-testid": "dropdown-container",
        children: /* @__PURE__ */ jsxs(Fragment, { children: [
          t,
          o && /* @__PURE__ */ jsx("ul", { className: `${styles$6.dropdownContainer} ${l}`, children: e.map((y) => /* @__PURE__ */ jsxs(
            "li",
            {
              className: y.disabled ? styles$6.disabledItem : styles$6.dropDownItem,
              onClick: S(y.key, y),
              "data-testid": y.key,
              children: [
                y.icon,
                y.label
              ]
            },
            y.key
          )) })
        ] })
      }
    );
  }
), styles$6 = {
  parentContainer: "relative inline-block pb-1 transition-border",
  dropdownContainer: "absolute z-[1000] bg-system-white shadow-md rounded-lg inline-flex flex-col gap-y-2 p-4 w-full min-w-[9rem] transform transition-all duration-300 ease-out",
  dropDownItem: "flex gap-x-1 items-center font-normal text-system-black text-sm leading-md rounded px-1 hover:bg-grey-25 cursor-pointer",
  disabledItem: "flex gap-x-1 items-center font-normal text-grey-100 text-sm leading-md rounded px-1 hover:bg-grey-25 cursor-not-allowed"
}, SizeVariants = {
  SMALL: "small",
  LARGE: "large",
  DEFAULT: "default"
}, sizeVariantClasses = {
  [SizeVariants.DEFAULT]: "py-3 first:pt-0 last:pb-0",
  [SizeVariants.SMALL]: "py-2 first:pt-0 last:pb-0",
  [SizeVariants.LARGE]: "py-4 first:pt-0 last:pb-0"
};
function List({ dataSource: t, bordered: e = !0, testId: r, size: i = "default", ...s }) {
  const a = sizeVariantClasses[i];
  return /* @__PURE__ */ jsx("div", { ...s, children: /* @__PURE__ */ jsx("ul", { role: "list", "data-testid": r, className: e ? listStyles.borderedList : "", children: t.length && t.map((n, l) => /* @__PURE__ */ jsxs("li", { "data-testid": `list-item-${l}`, className: `${a} ${listStyles.listItem}`, children: [
    /* @__PURE__ */ jsx("div", { "data-testid": `list-title-${l}`, className: listStyles.listTile, children: n.title }),
    /* @__PURE__ */ jsx("div", { "data-testid": `list-value-${l}`, className: listStyles.listValue, children: n.value })
  ] }, n.id)) }) });
}
const listStyles = {
  borderedList: "divide-y divide-grey-50",
  listItem: "flex items-end justify-between",
  listTile: "text-grey-300 font-normal text-md leading-lg",
  listValue: "text-system-black font-normal text-md leading-lg"
}, AvatarSizeVariants = {
  Large: "large",
  SMALL: "small"
}, variantClasses$2 = {
  [AvatarSizeVariants.Large]: "bg-grey-50 w-24 h-24 rounded-full inline-block relative",
  [AvatarSizeVariants.SMALL]: "bg-grey-50 w-[2rem] h-[2rem] rounded-full inline-block relative"
}, childTextClasses = {
  [AvatarSizeVariants.Large]: "text-grey-200 leading-[6rem] font-extralight text-4xl absolute left-1/2 origin-left",
  [AvatarSizeVariants.SMALL]: "text-grey-200 leading-8 font-extralight absolute left-1/2 origin-left"
}, childNodeClasses = {
  [AvatarSizeVariants.Large]: "inline-flex w-24 h-24 items-center justify-center p-4",
  [AvatarSizeVariants.SMALL]: "inline-flex w-[2rem] h-[2rem] items-center justify-center p-2"
}, Avatar = React.forwardRef(
  ({ size: t = "small", src: e, draggable: r, alt: i, children: s, id: a, ...n }) => {
    const l = variantClasses$2[t], o = childTextClasses[t], f = childNodeClasses[t];
    function d() {
      if (e && typeof e == "string")
        return /* @__PURE__ */ jsx(
          "img",
          {
            className: "block w-full h-full object-cover rounded-full",
            src: e,
            draggable: r,
            alt: i,
            "data-testid": "avatar-image-child"
          }
        );
      if (s && typeof s == "string") {
        const c = {
          transform: `scale(${Math.min(1, 2.5 / s.length)}) translateX(-50%)`
        };
        return /* @__PURE__ */ jsx("span", { className: o, style: c, "data-testid": "avatar-text-child", children: s });
      }
      return /* @__PURE__ */ jsx("span", { className: f, "data-testid": "avatar-child", children: s });
    }
    return /* @__PURE__ */ jsx("span", { className: l, "data-testid": a, ...n, children: /* @__PURE__ */ jsx(d, {}) });
  }
), Select = React__default.forwardRef(
  ({ label: t, name: e, error: r = !1, errorMessage: i = "", disabled: s, options: a, placeholder: n, ...l }, o) => /* @__PURE__ */ jsxs("div", { className: styles$5.container, children: [
    /* @__PURE__ */ jsx(Text, { text: t, variant: "p-sm-12-m", color: s ? "grey-100" : "system-black" }),
    /* @__PURE__ */ jsx("div", { className: styles$5.iconContainer, children: /* @__PURE__ */ jsx(ArrowDownIcon, {}) }),
    /* @__PURE__ */ jsxs("select", { id: e, ref: o, name: e, className: styles$5.select, disabled: s, ...l, children: [
      /* @__PURE__ */ jsx("option", { disabled: !0, selected: !0, hidden: !0, value: "", children: n }, n),
      a.map((f) => /* @__PURE__ */ jsx("option", { value: f, children: f }, f))
    ] }),
    r && /* @__PURE__ */ jsx("span", { role: "alert", className: styles$5.error, children: /* @__PURE__ */ jsx(Text, { text: i, variant: "p-sm-12-m", color: "system-red" }) })
  ] })
), styles$5 = {
  container: "flex relative w-full flex-col mb-4",
  select: "appearance-none border-b-2 border-grey-50 h-8 outline-0 placeholder-grey-200 bg-transparent disabled:placeholder-grey-100 disabled:cursor-not-allowed text-system-black",
  iconContainer: "absolute top-4 right-0",
  error: "text-system-red text-sm mt-1"
};
var commonjsGlobal = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function getDefaultExportFromCjs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var lottie$1 = { exports: {} };
(function(module, exports) {
  typeof navigator < "u" && function(t, e) {
    module.exports = e();
  }(commonjsGlobal, function() {
    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1, initialDefaultFrame = -999999, setWebWorker = function(e) {
      _useWebWorker = !!e;
    }, getWebWorker = function() {
      return _useWebWorker;
    }, setLocationHref = function(e) {
      locationHref = e;
    }, getLocationHref = function() {
      return locationHref;
    };
    function createTag(t) {
      return document.createElement(t);
    }
    function extendPrototype(t, e) {
      var r, i = t.length, s;
      for (r = 0; r < i; r += 1) {
        s = t[r].prototype;
        for (var a in s)
          Object.prototype.hasOwnProperty.call(s, a) && (e.prototype[a] = s[a]);
      }
    }
    function getDescriptor(t, e) {
      return Object.getOwnPropertyDescriptor(t, e);
    }
    function createProxyFunction(t) {
      function e() {
      }
      return e.prototype = t, e;
    }
    var audioControllerFactory = function() {
      function t(e) {
        this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1;
      }
      return t.prototype = {
        addAudio: function(r) {
          this.audios.push(r);
        },
        pause: function() {
          var r, i = this.audios.length;
          for (r = 0; r < i; r += 1)
            this.audios[r].pause();
        },
        resume: function() {
          var r, i = this.audios.length;
          for (r = 0; r < i; r += 1)
            this.audios[r].resume();
        },
        setRate: function(r) {
          var i, s = this.audios.length;
          for (i = 0; i < s; i += 1)
            this.audios[i].setRate(r);
        },
        createAudio: function(r) {
          return this.audioFactory ? this.audioFactory(r) : window.Howl ? new window.Howl({
            src: [r]
          }) : {
            isPlaying: !1,
            play: function() {
              this.isPlaying = !0;
            },
            seek: function() {
              this.isPlaying = !1;
            },
            playing: function() {
            },
            rate: function() {
            },
            setVolume: function() {
            }
          };
        },
        setAudioFactory: function(r) {
          this.audioFactory = r;
        },
        setVolume: function(r) {
          this._volume = r, this._updateVolume();
        },
        mute: function() {
          this._isMuted = !0, this._updateVolume();
        },
        unmute: function() {
          this._isMuted = !1, this._updateVolume();
        },
        getVolume: function() {
          return this._volume;
        },
        _updateVolume: function() {
          var r, i = this.audios.length;
          for (r = 0; r < i; r += 1)
            this.audios[r].volume(this._volume * (this._isMuted ? 0 : 1));
        }
      }, function() {
        return new t();
      };
    }(), createTypedArray = /* @__PURE__ */ function() {
      function t(r, i) {
        var s = 0, a = [], n;
        switch (r) {
          case "int16":
          case "uint8c":
            n = 1;
            break;
          default:
            n = 1.1;
            break;
        }
        for (s = 0; s < i; s += 1)
          a.push(n);
        return a;
      }
      function e(r, i) {
        return r === "float32" ? new Float32Array(i) : r === "int16" ? new Int16Array(i) : r === "uint8c" ? new Uint8ClampedArray(i) : t(r, i);
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? e : t;
    }();
    function createSizedArray(t) {
      return Array.apply(null, {
        length: t
      });
    }
    function _typeof$6(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$6 = function(r) {
        return typeof r;
      } : _typeof$6 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$6(t);
    }
    var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
    (function() {
      var t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], e, r = t.length;
      for (e = 0; e < r; e += 1)
        BMMath[t[e]] = Math[t[e]];
    })(), BMMath.random = Math.random, BMMath.abs = function(t) {
      var e = _typeof$6(t);
      if (e === "object" && t.length) {
        var r = createSizedArray(t.length), i, s = t.length;
        for (i = 0; i < s; i += 1)
          r[i] = Math.abs(t[i]);
        return r;
      }
      return Math.abs(t);
    };
    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
    function styleDiv(t) {
      t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
    }
    function BMEnterFrameEvent(t, e, r, i) {
      this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1;
    }
    function BMCompleteEvent(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1;
    }
    function BMCompleteLoopEvent(t, e, r, i) {
      this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1;
    }
    function BMSegmentStartEvent(t, e, r) {
      this.type = t, this.firstFrame = e, this.totalFrames = r;
    }
    function BMDestroyEvent(t, e) {
      this.type = t, this.target = e;
    }
    function BMRenderFrameErrorEvent(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
    }
    function BMConfigErrorEvent(t) {
      this.type = "configError", this.nativeError = t;
    }
    var createElementID = /* @__PURE__ */ function() {
      var t = 0;
      return function() {
        return t += 1, idPrefix$1 + "__lottie_element_" + t;
      };
    }();
    function HSVtoRGB(t, e, r) {
      var i, s, a, n, l, o, f, d;
      switch (n = Math.floor(t * 6), l = t * 6 - n, o = r * (1 - e), f = r * (1 - l * e), d = r * (1 - (1 - l) * e), n % 6) {
        case 0:
          i = r, s = d, a = o;
          break;
        case 1:
          i = f, s = r, a = o;
          break;
        case 2:
          i = o, s = r, a = d;
          break;
        case 3:
          i = o, s = f, a = r;
          break;
        case 4:
          i = d, s = o, a = r;
          break;
        case 5:
          i = r, s = o, a = f;
          break;
      }
      return [i, s, a];
    }
    function RGBtoHSV(t, e, r) {
      var i = Math.max(t, e, r), s = Math.min(t, e, r), a = i - s, n, l = i === 0 ? 0 : a / i, o = i / 255;
      switch (i) {
        case s:
          n = 0;
          break;
        case t:
          n = e - r + a * (e < r ? 6 : 0), n /= 6 * a;
          break;
        case e:
          n = r - t + a * 2, n /= 6 * a;
          break;
        case r:
          n = t - e + a * 4, n /= 6 * a;
          break;
      }
      return [n, l, o];
    }
    function addSaturationToRGB(t, e) {
      var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
      return r[1] += e, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addBrightnessToRGB(t, e) {
      var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
      return r[2] += e, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2]);
    }
    function addHueToRGB(t, e) {
      var r = RGBtoHSV(t[0] * 255, t[1] * 255, t[2] * 255);
      return r[0] += e / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2]);
    }
    var rgbToHex = function() {
      var t = [], e, r;
      for (e = 0; e < 256; e += 1)
        r = e.toString(16), t[e] = r.length === 1 ? "0" + r : r;
      return function(i, s, a) {
        return i < 0 && (i = 0), s < 0 && (s = 0), a < 0 && (a = 0), "#" + t[i] + t[s] + t[a];
      };
    }(), setSubframeEnabled = function(e) {
      subframeEnabled = !!e;
    }, getSubframeEnabled = function() {
      return subframeEnabled;
    }, setExpressionsPlugin = function(e) {
      expressionsPlugin = e;
    }, getExpressionsPlugin = function() {
      return expressionsPlugin;
    }, setExpressionInterfaces = function(e) {
      expressionsInterfaces = e;
    }, getExpressionInterfaces = function() {
      return expressionsInterfaces;
    }, setDefaultCurveSegments = function(e) {
      defaultCurveSegments = e;
    }, getDefaultCurveSegments = function() {
      return defaultCurveSegments;
    }, setIdPrefix = function(e) {
      idPrefix$1 = e;
    };
    function createNS(t) {
      return document.createElementNS(svgNS, t);
    }
    function _typeof$5(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$5 = function(r) {
        return typeof r;
      } : _typeof$5 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$5(t);
    }
    var dataManager = /* @__PURE__ */ function() {
      var t = 1, e = [], r, i, s = {
        onmessage: function() {
        },
        postMessage: function(S) {
          r({
            data: S
          });
        }
      }, a = {
        postMessage: function(S) {
          s.onmessage({
            data: S
          });
        }
      };
      function n(c) {
        if (window.Worker && window.Blob && getWebWorker()) {
          var S = new Blob(["var _workerSelf = self; self.onmessage = ", c.toString()], {
            type: "text/javascript"
          }), y = URL.createObjectURL(S);
          return new Worker(y);
        }
        return r = c, s;
      }
      function l() {
        i || (i = n(function(S) {
          function y() {
            function _(R, T) {
              var M, b, A = R.length, L, F, B, G;
              for (b = 0; b < A; b += 1)
                if (M = R[b], "ks" in M && !M.completed) {
                  if (M.completed = !0, M.hasMask) {
                    var N = M.masksProperties;
                    for (F = N.length, L = 0; L < F; L += 1)
                      if (N[L].pt.k.i)
                        P(N[L].pt.k);
                      else
                        for (G = N[L].pt.k.length, B = 0; B < G; B += 1)
                          N[L].pt.k[B].s && P(N[L].pt.k[B].s[0]), N[L].pt.k[B].e && P(N[L].pt.k[B].e[0]);
                  }
                  M.ty === 0 ? (M.layers = p(M.refId, T), _(M.layers, T)) : M.ty === 4 ? x(M.shapes) : M.ty === 5 && z(M);
                }
            }
            function u(R, T) {
              if (R) {
                var M = 0, b = R.length;
                for (M = 0; M < b; M += 1)
                  R[M].t === 1 && (R[M].data.layers = p(R[M].data.refId, T), _(R[M].data.layers, T));
              }
            }
            function m(R, T) {
              for (var M = 0, b = T.length; M < b; ) {
                if (T[M].id === R)
                  return T[M];
                M += 1;
              }
              return null;
            }
            function p(R, T) {
              var M = m(R, T);
              return M ? M.layers.__used ? JSON.parse(JSON.stringify(M.layers)) : (M.layers.__used = !0, M.layers) : null;
            }
            function x(R) {
              var T, M = R.length, b, A;
              for (T = M - 1; T >= 0; T -= 1)
                if (R[T].ty === "sh")
                  if (R[T].ks.k.i)
                    P(R[T].ks.k);
                  else
                    for (A = R[T].ks.k.length, b = 0; b < A; b += 1)
                      R[T].ks.k[b].s && P(R[T].ks.k[b].s[0]), R[T].ks.k[b].e && P(R[T].ks.k[b].e[0]);
                else
                  R[T].ty === "gr" && x(R[T].it);
            }
            function P(R) {
              var T, M = R.i.length;
              for (T = 0; T < M; T += 1)
                R.i[T][0] += R.v[T][0], R.i[T][1] += R.v[T][1], R.o[T][0] += R.v[T][0], R.o[T][1] += R.v[T][1];
            }
            function E(R, T) {
              var M = T ? T.split(".") : [100, 100, 100];
              return R[0] > M[0] ? !0 : M[0] > R[0] ? !1 : R[1] > M[1] ? !0 : M[1] > R[1] ? !1 : R[2] > M[2] ? !0 : M[2] > R[2] ? !1 : null;
            }
            var k = /* @__PURE__ */ function() {
              var R = [4, 4, 14];
              function T(b) {
                var A = b.t.d;
                b.t.d = {
                  k: [{
                    s: A,
                    t: 0
                  }]
                };
              }
              function M(b) {
                var A, L = b.length;
                for (A = 0; A < L; A += 1)
                  b[A].ty === 5 && T(b[A]);
              }
              return function(b) {
                if (E(R, b.v) && (M(b.layers), b.assets)) {
                  var A, L = b.assets.length;
                  for (A = 0; A < L; A += 1)
                    b.assets[A].layers && M(b.assets[A].layers);
                }
              };
            }(), I = /* @__PURE__ */ function() {
              var R = [4, 7, 99];
              return function(T) {
                if (T.chars && !E(R, T.v)) {
                  var M, b = T.chars.length;
                  for (M = 0; M < b; M += 1) {
                    var A = T.chars[M];
                    A.data && A.data.shapes && (x(A.data.shapes), A.data.ip = 0, A.data.op = 99999, A.data.st = 0, A.data.sr = 1, A.data.ks = {
                      p: {
                        k: [0, 0],
                        a: 0
                      },
                      s: {
                        k: [100, 100],
                        a: 0
                      },
                      a: {
                        k: [0, 0],
                        a: 0
                      },
                      r: {
                        k: 0,
                        a: 0
                      },
                      o: {
                        k: 100,
                        a: 0
                      }
                    }, T.chars[M].t || (A.data.shapes.push({
                      ty: "no"
                    }), A.data.shapes[0].it.push({
                      p: {
                        k: [0, 0],
                        a: 0
                      },
                      s: {
                        k: [100, 100],
                        a: 0
                      },
                      a: {
                        k: [0, 0],
                        a: 0
                      },
                      r: {
                        k: 0,
                        a: 0
                      },
                      o: {
                        k: 100,
                        a: 0
                      },
                      sk: {
                        k: 0,
                        a: 0
                      },
                      sa: {
                        k: 0,
                        a: 0
                      },
                      ty: "tr"
                    })));
                  }
                }
              };
            }(), V = /* @__PURE__ */ function() {
              var R = [5, 7, 15];
              function T(b) {
                var A = b.t.p;
                typeof A.a == "number" && (A.a = {
                  a: 0,
                  k: A.a
                }), typeof A.p == "number" && (A.p = {
                  a: 0,
                  k: A.p
                }), typeof A.r == "number" && (A.r = {
                  a: 0,
                  k: A.r
                });
              }
              function M(b) {
                var A, L = b.length;
                for (A = 0; A < L; A += 1)
                  b[A].ty === 5 && T(b[A]);
              }
              return function(b) {
                if (E(R, b.v) && (M(b.layers), b.assets)) {
                  var A, L = b.assets.length;
                  for (A = 0; A < L; A += 1)
                    b.assets[A].layers && M(b.assets[A].layers);
                }
              };
            }(), H = /* @__PURE__ */ function() {
              var R = [4, 1, 9];
              function T(b) {
                var A, L = b.length, F, B;
                for (A = 0; A < L; A += 1)
                  if (b[A].ty === "gr")
                    T(b[A].it);
                  else if (b[A].ty === "fl" || b[A].ty === "st")
                    if (b[A].c.k && b[A].c.k[0].i)
                      for (B = b[A].c.k.length, F = 0; F < B; F += 1)
                        b[A].c.k[F].s && (b[A].c.k[F].s[0] /= 255, b[A].c.k[F].s[1] /= 255, b[A].c.k[F].s[2] /= 255, b[A].c.k[F].s[3] /= 255), b[A].c.k[F].e && (b[A].c.k[F].e[0] /= 255, b[A].c.k[F].e[1] /= 255, b[A].c.k[F].e[2] /= 255, b[A].c.k[F].e[3] /= 255);
                    else
                      b[A].c.k[0] /= 255, b[A].c.k[1] /= 255, b[A].c.k[2] /= 255, b[A].c.k[3] /= 255;
              }
              function M(b) {
                var A, L = b.length;
                for (A = 0; A < L; A += 1)
                  b[A].ty === 4 && T(b[A].shapes);
              }
              return function(b) {
                if (E(R, b.v) && (M(b.layers), b.assets)) {
                  var A, L = b.assets.length;
                  for (A = 0; A < L; A += 1)
                    b.assets[A].layers && M(b.assets[A].layers);
                }
              };
            }(), O = /* @__PURE__ */ function() {
              var R = [4, 4, 18];
              function T(b) {
                var A, L = b.length, F, B;
                for (A = L - 1; A >= 0; A -= 1)
                  if (b[A].ty === "sh")
                    if (b[A].ks.k.i)
                      b[A].ks.k.c = b[A].closed;
                    else
                      for (B = b[A].ks.k.length, F = 0; F < B; F += 1)
                        b[A].ks.k[F].s && (b[A].ks.k[F].s[0].c = b[A].closed), b[A].ks.k[F].e && (b[A].ks.k[F].e[0].c = b[A].closed);
                  else
                    b[A].ty === "gr" && T(b[A].it);
              }
              function M(b) {
                var A, L, F = b.length, B, G, N, q;
                for (L = 0; L < F; L += 1) {
                  if (A = b[L], A.hasMask) {
                    var Y = A.masksProperties;
                    for (G = Y.length, B = 0; B < G; B += 1)
                      if (Y[B].pt.k.i)
                        Y[B].pt.k.c = Y[B].cl;
                      else
                        for (q = Y[B].pt.k.length, N = 0; N < q; N += 1)
                          Y[B].pt.k[N].s && (Y[B].pt.k[N].s[0].c = Y[B].cl), Y[B].pt.k[N].e && (Y[B].pt.k[N].e[0].c = Y[B].cl);
                  }
                  A.ty === 4 && T(A.shapes);
                }
              }
              return function(b) {
                if (E(R, b.v) && (M(b.layers), b.assets)) {
                  var A, L = b.assets.length;
                  for (A = 0; A < L; A += 1)
                    b.assets[A].layers && M(b.assets[A].layers);
                }
              };
            }();
            function D(R) {
              R.__complete || (H(R), k(R), I(R), V(R), O(R), _(R.layers, R.assets), u(R.chars, R.assets), R.__complete = !0);
            }
            function z(R) {
              R.t.a.length === 0 && "m" in R.t.p;
            }
            var j = {};
            return j.completeData = D, j.checkColors = H, j.checkChars = I, j.checkPathProperties = V, j.checkShapes = O, j.completeLayers = _, j;
          }
          if (a.dataManager || (a.dataManager = y()), a.assetLoader || (a.assetLoader = /* @__PURE__ */ function() {
            function _(m) {
              var p = m.getResponseHeader("content-type");
              return p && m.responseType === "json" && p.indexOf("json") !== -1 || m.response && _typeof$5(m.response) === "object" ? m.response : m.response && typeof m.response == "string" ? JSON.parse(m.response) : m.responseText ? JSON.parse(m.responseText) : null;
            }
            function u(m, p, x, P) {
              var E, k = new XMLHttpRequest();
              try {
                k.responseType = "json";
              } catch {
              }
              k.onreadystatechange = function() {
                if (k.readyState === 4)
                  if (k.status === 200)
                    E = _(k), x(E);
                  else
                    try {
                      E = _(k), x(E);
                    } catch (I) {
                      P && P(I);
                    }
              };
              try {
                k.open(["G", "E", "T"].join(""), m, !0);
              } catch {
                k.open(["G", "E", "T"].join(""), p + "/" + m, !0);
              }
              k.send();
            }
            return {
              load: u
            };
          }()), S.data.type === "loadAnimation")
            a.assetLoader.load(S.data.path, S.data.fullPath, function(_) {
              a.dataManager.completeData(_), a.postMessage({
                id: S.data.id,
                payload: _,
                status: "success"
              });
            }, function() {
              a.postMessage({
                id: S.data.id,
                status: "error"
              });
            });
          else if (S.data.type === "complete") {
            var g = S.data.animation;
            a.dataManager.completeData(g), a.postMessage({
              id: S.data.id,
              payload: g,
              status: "success"
            });
          } else
            S.data.type === "loadData" && a.assetLoader.load(S.data.path, S.data.fullPath, function(_) {
              a.postMessage({
                id: S.data.id,
                payload: _,
                status: "success"
              });
            }, function() {
              a.postMessage({
                id: S.data.id,
                status: "error"
              });
            });
        }), i.onmessage = function(c) {
          var S = c.data, y = S.id, g = e[y];
          e[y] = null, S.status === "success" ? g.onComplete(S.payload) : g.onError && g.onError();
        });
      }
      function o(c, S) {
        t += 1;
        var y = "processId_" + t;
        return e[y] = {
          onComplete: c,
          onError: S
        }, y;
      }
      function f(c, S, y) {
        l();
        var g = o(S, y);
        i.postMessage({
          type: "loadAnimation",
          path: c,
          fullPath: window.location.origin + window.location.pathname,
          id: g
        });
      }
      function d(c, S, y) {
        l();
        var g = o(S, y);
        i.postMessage({
          type: "loadData",
          path: c,
          fullPath: window.location.origin + window.location.pathname,
          id: g
        });
      }
      function C(c, S, y) {
        l();
        var g = o(S, y);
        i.postMessage({
          type: "complete",
          animation: c,
          id: g
        });
      }
      return {
        loadAnimation: f,
        loadData: d,
        completeAnimation: C
      };
    }(), ImagePreloader = function() {
      var t = function() {
        var u = createTag("canvas");
        u.width = 1, u.height = 1;
        var m = u.getContext("2d");
        return m.fillStyle = "rgba(0,0,0,0)", m.fillRect(0, 0, 1, 1), u;
      }();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function r() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i(u, m, p) {
        var x = "";
        if (u.e)
          x = u.p;
        else if (m) {
          var P = u.p;
          P.indexOf("images/") !== -1 && (P = P.split("/")[1]), x = m + P;
        } else
          x = p, x += u.u ? u.u : "", x += u.p;
        return x;
      }
      function s(u) {
        var m = 0, p = setInterval((function() {
          var x = u.getBBox();
          (x.width || m > 500) && (this._imageLoaded(), clearInterval(p)), m += 1;
        }).bind(this), 50);
      }
      function a(u) {
        var m = i(u, this.assetsPath, this.path), p = createNS("image");
        isSafari ? this.testImageLoaded(p) : p.addEventListener("load", this._imageLoaded, !1), p.addEventListener("error", (function() {
          x.img = t, this._imageLoaded();
        }).bind(this), !1), p.setAttributeNS("http://www.w3.org/1999/xlink", "href", m), this._elementHelper.append ? this._elementHelper.append(p) : this._elementHelper.appendChild(p);
        var x = {
          img: p,
          assetData: u
        };
        return x;
      }
      function n(u) {
        var m = i(u, this.assetsPath, this.path), p = createTag("img");
        p.crossOrigin = "anonymous", p.addEventListener("load", this._imageLoaded, !1), p.addEventListener("error", (function() {
          x.img = t, this._imageLoaded();
        }).bind(this), !1), p.src = m;
        var x = {
          img: p,
          assetData: u
        };
        return x;
      }
      function l(u) {
        var m = {
          assetData: u
        }, p = i(u, this.assetsPath, this.path);
        return dataManager.loadData(p, (function(x) {
          m.img = x, this._footageLoaded();
        }).bind(this), (function() {
          m.img = {}, this._footageLoaded();
        }).bind(this)), m;
      }
      function o(u, m) {
        this.imagesLoadedCb = m;
        var p, x = u.length;
        for (p = 0; p < x; p += 1)
          u[p].layers || (!u[p].t || u[p].t === "seq" ? (this.totalImages += 1, this.images.push(this._createImageData(u[p]))) : u[p].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(u[p]))));
      }
      function f(u) {
        this.path = u || "";
      }
      function d(u) {
        this.assetsPath = u || "";
      }
      function C(u) {
        for (var m = 0, p = this.images.length; m < p; ) {
          if (this.images[m].assetData === u)
            return this.images[m].img;
          m += 1;
        }
        return null;
      }
      function c() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }
      function S() {
        return this.totalImages === this.loadedAssets;
      }
      function y() {
        return this.totalFootages === this.loadedFootagesCount;
      }
      function g(u, m) {
        u === "svg" ? (this._elementHelper = m, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      }
      function _() {
        this._imageLoaded = e.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = s.bind(this), this.createFootageData = l.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return _.prototype = {
        loadAssets: o,
        setAssetsPath: d,
        setPath: f,
        loadedImages: S,
        loadedFootages: y,
        destroy: c,
        getAsset: C,
        createImgData: n,
        createImageData: a,
        imageLoaded: e,
        footageLoaded: r,
        setCacheType: g
      }, _;
    }();
    function BaseEvent() {
    }
    BaseEvent.prototype = {
      triggerEvent: function(e, r) {
        if (this._cbs[e])
          for (var i = this._cbs[e], s = 0; s < i.length; s += 1)
            i[s](r);
      },
      addEventListener: function(e, r) {
        return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(r), (function() {
          this.removeEventListener(e, r);
        }).bind(this);
      },
      removeEventListener: function(e, r) {
        if (!r)
          this._cbs[e] = null;
        else if (this._cbs[e]) {
          for (var i = 0, s = this._cbs[e].length; i < s; )
            this._cbs[e][i] === r && (this._cbs[e].splice(i, 1), i -= 1, s -= 1), i += 1;
          this._cbs[e].length || (this._cbs[e] = null);
        }
      }
    };
    var markerParser = /* @__PURE__ */ function() {
      function t(e) {
        for (var r = e.split(`\r
`), i = {}, s, a = 0, n = 0; n < r.length; n += 1)
          s = r[n].split(":"), s.length === 2 && (i[s[0]] = s[1].trim(), a += 1);
        if (a === 0)
          throw new Error();
        return i;
      }
      return function(e) {
        for (var r = [], i = 0; i < e.length; i += 1) {
          var s = e[i], a = {
            time: s.tm,
            duration: s.dr
          };
          try {
            a.payload = JSON.parse(e[i].cm);
          } catch {
            try {
              a.payload = t(e[i].cm);
            } catch {
              a.payload = {
                name: e[i].cm
              };
            }
          }
          r.push(a);
        }
        return r;
      };
    }(), ProjectInterface = /* @__PURE__ */ function() {
      function t(e) {
        this.compositions.push(e);
      }
      return function() {
        function e(r) {
          for (var i = 0, s = this.compositions.length; i < s; ) {
            if (this.compositions[i].data && this.compositions[i].data.nm === r)
              return this.compositions[i].prepareFrame && this.compositions[i].data.xt && this.compositions[i].prepareFrame(this.currentFrame), this.compositions[i].compInterface;
            i += 1;
          }
          return null;
        }
        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
      };
    }(), renderers = {}, registerRenderer = function(e, r) {
      renderers[e] = r;
    };
    function getRenderer(t) {
      return renderers[t];
    }
    function getRegisteredRenderer() {
      if (renderers.canvas)
        return "canvas";
      for (var t in renderers)
        if (renderers[t])
          return t;
      return "";
    }
    function _typeof$4(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$4 = function(r) {
        return typeof r;
      } : _typeof$4 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$4(t);
    }
    var AnimationItem = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin();
    };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      t.animType ? e = t.animType : t.renderer && (e = t.renderer);
      var r = getRenderer(e);
      this.renderer = new r(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = "autoplay" in t ? t.autoplay : !0, this.name = t.name ? t.name : "", this.autoloadSegments = Object.prototype.hasOwnProperty.call(t, "autoloadSegments") ? t.autoloadSegments : !0, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
    }, AnimationItem.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, AnimationItem.prototype.setupAnimation = function(t) {
      dataManager.completeAnimation(t, this.configAnimation);
    }, AnimationItem.prototype.setData = function(t, e) {
      e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
      var r = {
        wrapper: t,
        animationData: e
      }, i = t.attributes;
      r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
      var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
      s === "false" ? r.loop = !1 : s === "true" ? r.loop = !0 : s !== "" && (r.loop = parseInt(s, 10));
      var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : i.getNamedItem("bm-autoplay") ? i.getNamedItem("bm-autoplay").value : !0;
      r.autoplay = a !== "false", r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "";
      var n = i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "";
      n === "false" && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy");
    }, AnimationItem.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e = this.animationData.layers, r, i = e.length, s = t.layers, a, n = s.length;
      for (a = 0; a < n; a += 1)
        for (r = 0; r < i; ) {
          if (e[r].id === s[a].id) {
            e[r] = s[a];
            break;
          }
          r += 1;
        }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
        for (i = t.assets.length, r = 0; r < i; r += 1)
          this.animationData.assets.push(t.assets[r]);
      this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
    }, AnimationItem.prototype.onSegmentComplete = function(t) {
      this.animationData = t;
      var e = getExpressionsPlugin();
      e && e.initExpressions(this), this.loadNextSegment();
    }, AnimationItem.prototype.loadNextSegment = function() {
      var t = this.animationData.segments;
      if (!t || t.length === 0 || !this.autoloadSegments) {
        this.trigger("data_ready"), this.timeCompleted = this.totalFrames;
        return;
      }
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, AnimationItem.prototype.loadSegments = function() {
      var t = this.animationData.segments;
      t || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, AnimationItem.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, AnimationItem.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, AnimationItem.prototype.configAnimation = function(t) {
      if (this.renderer)
        try {
          this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
        } catch (e) {
          this.triggerConfigError(e);
        }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, AnimationItem.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = !0;
        var t = getExpressionsPlugin();
        t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, AnimationItem.prototype.resize = function(t, e) {
      var r = typeof t == "number" ? t : void 0, i = typeof e == "number" ? e : void 0;
      this.renderer.updateContainerSize(r, i);
    }, AnimationItem.prototype.setSubframe = function(t) {
      this.isSubframeEnabled = !!t;
    }, AnimationItem.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, AnimationItem.prototype.renderFrame = function() {
      if (!(this.isLoaded === !1 || !this.renderer))
        try {
          this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
        } catch (t) {
          this.triggerRenderFrameError(t);
        }
    }, AnimationItem.prototype.play = function(t) {
      t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
    }, AnimationItem.prototype.pause = function(t) {
      t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
    }, AnimationItem.prototype.togglePause = function(t) {
      t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause());
    }, AnimationItem.prototype.stop = function(t) {
      t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
    }, AnimationItem.prototype.getMarkerData = function(t) {
      for (var e, r = 0; r < this.markers.length; r += 1)
        if (e = this.markers[r], e.payload && e.payload.name === t)
          return e;
      return null;
    }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
      if (!(r && this.name !== r)) {
        var i = Number(t);
        if (isNaN(i)) {
          var s = this.getMarkerData(t);
          s && this.goToAndStop(s.time, !0);
        } else
          e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
        this.pause();
      }
    }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
      if (!(r && this.name !== r)) {
        var i = Number(t);
        if (isNaN(i)) {
          var s = this.getMarkerData(t);
          s && (s.duration ? this.playSegments([s.time, s.time + s.duration], !0) : this.goToAndStop(s.time, !0));
        } else
          this.goToAndStop(i, e, r);
        this.play();
      }
    }, AnimationItem.prototype.advanceTime = function(t) {
      if (!(this.isPaused === !0 || this.isLoaded === !1)) {
        var e = this.currentRawFrame + t * this.frameModifier, r = !1;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? !this.loop || this.playCount === this.loop ? this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : e < 0 ? this.checkSegments(e % this.totalFrames) || (this.loop && !(this.playCount-- <= 0 && this.loop !== !0) ? (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0) : (r = !0, e = 0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
      }
    }, AnimationItem.prototype.adjustSegment = function(t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
    }, AnimationItem.prototype.setSegment = function(t, e) {
      var r = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, r !== -1 && this.goToAndStop(r, !0);
    }, AnimationItem.prototype.playSegments = function(t, e) {
      if (e && (this.segments.length = 0), _typeof$4(t[0]) === "object") {
        var r, i = t.length;
        for (r = 0; r < i; r += 1)
          this.segments.push(t[r]);
      } else
        this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, AnimationItem.prototype.resetSegments = function(t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
    }, AnimationItem.prototype.checkSegments = function(t) {
      return this.segments.length ? (this.adjustSegment(this.segments.shift(), t), !0) : !1;
    }, AnimationItem.prototype.destroy = function(t) {
      t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
      this.currentRawFrame = t, this.gotoFrame();
    }, AnimationItem.prototype.setSpeed = function(t) {
      this.playSpeed = t, this.updaFrameModifier();
    }, AnimationItem.prototype.setDirection = function(t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
    }, AnimationItem.prototype.setLoop = function(t) {
      this.loop = t;
    }, AnimationItem.prototype.setVolume = function(t, e) {
      e && this.name !== e || this.audioController.setVolume(t);
    }, AnimationItem.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, AnimationItem.prototype.mute = function(t) {
      t && this.name !== t || this.audioController.mute();
    }, AnimationItem.prototype.unmute = function(t) {
      t && this.name !== t || this.audioController.unmute();
    }, AnimationItem.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, AnimationItem.prototype.getPath = function() {
      return this.path;
    }, AnimationItem.prototype.getAssetsPath = function(t) {
      var e = "";
      if (t.e)
        e = t.p;
      else if (this.assetsPath) {
        var r = t.p;
        r.indexOf("images/") !== -1 && (r = r.split("/")[1]), e = this.assetsPath + r;
      } else
        e = this.path, e += t.u ? t.u : "", e += t.p;
      return e;
    }, AnimationItem.prototype.getAssetData = function(t) {
      for (var e = 0, r = this.assets.length; e < r; ) {
        if (t === this.assets[e].id)
          return this.assets[e];
        e += 1;
      }
      return null;
    }, AnimationItem.prototype.hide = function() {
      this.renderer.hide();
    }, AnimationItem.prototype.show = function() {
      this.renderer.show();
    }, AnimationItem.prototype.getDuration = function(t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate;
    }, AnimationItem.prototype.updateDocumentData = function(t, e, r) {
      try {
        var i = this.renderer.getElementByPath(t);
        i.updateDocumentData(e, r);
      } catch {
      }
    }, AnimationItem.prototype.trigger = function(t) {
      if (this._cbs && this._cbs[t])
        switch (t) {
          case "enterFrame":
            this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
            break;
          case "drawnFrame":
            this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
            break;
          case "loopComplete":
            this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
            break;
          case "complete":
            this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
            break;
          case "segmentStart":
            this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
            break;
          case "destroy":
            this.triggerEvent(t, new BMDestroyEvent(t, this));
            break;
          default:
            this.triggerEvent(t);
        }
      t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
    }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
      var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    }, AnimationItem.prototype.triggerConfigError = function(t) {
      var e = new BMConfigErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    };
    var animationManager = function() {
      var t = {}, e = [], r = 0, i = 0, s = 0, a = !0, n = !1;
      function l(T) {
        for (var M = 0, b = T.target; M < i; )
          e[M].animation === b && (e.splice(M, 1), M -= 1, i -= 1, b.isPaused || C()), M += 1;
      }
      function o(T, M) {
        if (!T)
          return null;
        for (var b = 0; b < i; ) {
          if (e[b].elem === T && e[b].elem !== null)
            return e[b].animation;
          b += 1;
        }
        var A = new AnimationItem();
        return c(A, T), A.setData(T, M), A;
      }
      function f() {
        var T, M = e.length, b = [];
        for (T = 0; T < M; T += 1)
          b.push(e[T].animation);
        return b;
      }
      function d() {
        s += 1, H();
      }
      function C() {
        s -= 1;
      }
      function c(T, M) {
        T.addEventListener("destroy", l), T.addEventListener("_active", d), T.addEventListener("_idle", C), e.push({
          elem: M,
          animation: T
        }), i += 1;
      }
      function S(T) {
        var M = new AnimationItem();
        return c(M, null), M.setParams(T), M;
      }
      function y(T, M) {
        var b;
        for (b = 0; b < i; b += 1)
          e[b].animation.setSpeed(T, M);
      }
      function g(T, M) {
        var b;
        for (b = 0; b < i; b += 1)
          e[b].animation.setDirection(T, M);
      }
      function _(T) {
        var M;
        for (M = 0; M < i; M += 1)
          e[M].animation.play(T);
      }
      function u(T) {
        var M = T - r, b;
        for (b = 0; b < i; b += 1)
          e[b].animation.advanceTime(M);
        r = T, s && !n ? window.requestAnimationFrame(u) : a = !0;
      }
      function m(T) {
        r = T, window.requestAnimationFrame(u);
      }
      function p(T) {
        var M;
        for (M = 0; M < i; M += 1)
          e[M].animation.pause(T);
      }
      function x(T, M, b) {
        var A;
        for (A = 0; A < i; A += 1)
          e[A].animation.goToAndStop(T, M, b);
      }
      function P(T) {
        var M;
        for (M = 0; M < i; M += 1)
          e[M].animation.stop(T);
      }
      function E(T) {
        var M;
        for (M = 0; M < i; M += 1)
          e[M].animation.togglePause(T);
      }
      function k(T) {
        var M;
        for (M = i - 1; M >= 0; M -= 1)
          e[M].animation.destroy(T);
      }
      function I(T, M, b) {
        var A = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), L, F = A.length;
        for (L = 0; L < F; L += 1)
          b && A[L].setAttribute("data-bm-type", b), o(A[L], T);
        if (M && F === 0) {
          b || (b = "svg");
          var B = document.getElementsByTagName("body")[0];
          B.innerText = "";
          var G = createTag("div");
          G.style.width = "100%", G.style.height = "100%", G.setAttribute("data-bm-type", b), B.appendChild(G), o(G, T);
        }
      }
      function V() {
        var T;
        for (T = 0; T < i; T += 1)
          e[T].animation.resize();
      }
      function H() {
        !n && s && a && (window.requestAnimationFrame(m), a = !1);
      }
      function O() {
        n = !0;
      }
      function D() {
        n = !1, H();
      }
      function z(T, M) {
        var b;
        for (b = 0; b < i; b += 1)
          e[b].animation.setVolume(T, M);
      }
      function j(T) {
        var M;
        for (M = 0; M < i; M += 1)
          e[M].animation.mute(T);
      }
      function R(T) {
        var M;
        for (M = 0; M < i; M += 1)
          e[M].animation.unmute(T);
      }
      return t.registerAnimation = o, t.loadAnimation = S, t.setSpeed = y, t.setDirection = g, t.play = _, t.pause = p, t.stop = P, t.togglePause = E, t.searchAnimations = I, t.resize = V, t.goToAndStop = x, t.destroy = k, t.freeze = O, t.unfreeze = D, t.setVolume = z, t.mute = j, t.unmute = R, t.getRegisteredAnimations = f, t;
    }(), BezierFactory = function() {
      var t = {};
      t.getBezierEasing = r;
      var e = {};
      function r(m, p, x, P, E) {
        var k = E || ("bez_" + m + "_" + p + "_" + x + "_" + P).replace(/\./g, "p");
        if (e[k])
          return e[k];
        var I = new u([m, p, x, P]);
        return e[k] = I, I;
      }
      var i = 4, s = 1e-3, a = 1e-7, n = 10, l = 11, o = 1 / (l - 1), f = typeof Float32Array == "function";
      function d(m, p) {
        return 1 - 3 * p + 3 * m;
      }
      function C(m, p) {
        return 3 * p - 6 * m;
      }
      function c(m) {
        return 3 * m;
      }
      function S(m, p, x) {
        return ((d(p, x) * m + C(p, x)) * m + c(p)) * m;
      }
      function y(m, p, x) {
        return 3 * d(p, x) * m * m + 2 * C(p, x) * m + c(p);
      }
      function g(m, p, x, P, E) {
        var k, I, V = 0;
        do
          I = p + (x - p) / 2, k = S(I, P, E) - m, k > 0 ? x = I : p = I;
        while (Math.abs(k) > a && ++V < n);
        return I;
      }
      function _(m, p, x, P) {
        for (var E = 0; E < i; ++E) {
          var k = y(p, x, P);
          if (k === 0)
            return p;
          var I = S(p, x, P) - m;
          p -= I / k;
        }
        return p;
      }
      function u(m) {
        this._p = m, this._mSampleValues = f ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this);
      }
      return u.prototype = {
        get: function(p) {
          var x = this._p[0], P = this._p[1], E = this._p[2], k = this._p[3];
          return this._precomputed || this._precompute(), x === P && E === k ? p : p === 0 ? 0 : p === 1 ? 1 : S(this._getTForX(p), P, k);
        },
        // Private part
        _precompute: function() {
          var p = this._p[0], x = this._p[1], P = this._p[2], E = this._p[3];
          this._precomputed = !0, (p !== x || P !== E) && this._calcSampleValues();
        },
        _calcSampleValues: function() {
          for (var p = this._p[0], x = this._p[2], P = 0; P < l; ++P)
            this._mSampleValues[P] = S(P * o, p, x);
        },
        /**
             * getTForX chose the fastest heuristic to determine the percentage value precisely from a given X projection.
             */
        _getTForX: function(p) {
          for (var x = this._p[0], P = this._p[2], E = this._mSampleValues, k = 0, I = 1, V = l - 1; I !== V && E[I] <= p; ++I)
            k += o;
          --I;
          var H = (p - E[I]) / (E[I + 1] - E[I]), O = k + H * o, D = y(O, x, P);
          return D >= s ? _(p, O, x, P) : D === 0 ? O : g(p, k, k + o, x, P);
        }
      }, t;
    }(), pooling = /* @__PURE__ */ function() {
      function t(e) {
        return e.concat(createSizedArray(e.length));
      }
      return {
        double: t
      };
    }(), poolFactory = /* @__PURE__ */ function() {
      return function(t, e, r) {
        var i = 0, s = t, a = createSizedArray(s), n = {
          newElement: l,
          release: o
        };
        function l() {
          var f;
          return i ? (i -= 1, f = a[i]) : f = e(), f;
        }
        function o(f) {
          i === s && (a = pooling.double(a), s *= 2), r && r(f), a[i] = f, i += 1;
        }
        return n;
      };
    }(), bezierLengthPool = function() {
      function t() {
        return {
          addedLength: 0,
          percents: createTypedArray("float32", getDefaultCurveSegments()),
          lengths: createTypedArray("float32", getDefaultCurveSegments())
        };
      }
      return poolFactory(8, t);
    }(), segmentsLengthPool = function() {
      function t() {
        return {
          lengths: [],
          totalLength: 0
        };
      }
      function e(r) {
        var i, s = r.lengths.length;
        for (i = 0; i < s; i += 1)
          bezierLengthPool.release(r.lengths[i]);
        r.lengths.length = 0;
      }
      return poolFactory(8, t, e);
    }();
    function bezFunction() {
      var t = Math;
      function e(c, S, y, g, _, u) {
        var m = c * g + S * _ + y * u - _ * g - u * c - y * S;
        return m > -1e-3 && m < 1e-3;
      }
      function r(c, S, y, g, _, u, m, p, x) {
        if (y === 0 && u === 0 && x === 0)
          return e(c, S, g, _, m, p);
        var P = t.sqrt(t.pow(g - c, 2) + t.pow(_ - S, 2) + t.pow(u - y, 2)), E = t.sqrt(t.pow(m - c, 2) + t.pow(p - S, 2) + t.pow(x - y, 2)), k = t.sqrt(t.pow(m - g, 2) + t.pow(p - _, 2) + t.pow(x - u, 2)), I;
        return P > E ? P > k ? I = P - E - k : I = k - E - P : k > E ? I = k - E - P : I = E - P - k, I > -1e-4 && I < 1e-4;
      }
      var i = /* @__PURE__ */ function() {
        return function(c, S, y, g) {
          var _ = getDefaultCurveSegments(), u, m, p, x, P, E = 0, k, I = [], V = [], H = bezierLengthPool.newElement();
          for (p = y.length, u = 0; u < _; u += 1) {
            for (P = u / (_ - 1), k = 0, m = 0; m < p; m += 1)
              x = bmPow(1 - P, 3) * c[m] + 3 * bmPow(1 - P, 2) * P * y[m] + 3 * (1 - P) * bmPow(P, 2) * g[m] + bmPow(P, 3) * S[m], I[m] = x, V[m] !== null && (k += bmPow(I[m] - V[m], 2)), V[m] = I[m];
            k && (k = bmSqrt(k), E += k), H.percents[u] = P, H.lengths[u] = E;
          }
          return H.addedLength = E, H;
        };
      }();
      function s(c) {
        var S = segmentsLengthPool.newElement(), y = c.c, g = c.v, _ = c.o, u = c.i, m, p = c._length, x = S.lengths, P = 0;
        for (m = 0; m < p - 1; m += 1)
          x[m] = i(g[m], g[m + 1], _[m], u[m + 1]), P += x[m].addedLength;
        return y && p && (x[m] = i(g[m], g[0], _[m], u[0]), P += x[m].addedLength), S.totalLength = P, S;
      }
      function a(c) {
        this.segmentLength = 0, this.points = new Array(c);
      }
      function n(c, S) {
        this.partialLength = c, this.point = S;
      }
      var l = /* @__PURE__ */ function() {
        var c = {};
        return function(S, y, g, _) {
          var u = (S[0] + "_" + S[1] + "_" + y[0] + "_" + y[1] + "_" + g[0] + "_" + g[1] + "_" + _[0] + "_" + _[1]).replace(/\./g, "p");
          if (!c[u]) {
            var m = getDefaultCurveSegments(), p, x, P, E, k, I = 0, V, H, O = null;
            S.length === 2 && (S[0] !== y[0] || S[1] !== y[1]) && e(S[0], S[1], y[0], y[1], S[0] + g[0], S[1] + g[1]) && e(S[0], S[1], y[0], y[1], y[0] + _[0], y[1] + _[1]) && (m = 2);
            var D = new a(m);
            for (P = g.length, p = 0; p < m; p += 1) {
              for (H = createSizedArray(P), k = p / (m - 1), V = 0, x = 0; x < P; x += 1)
                E = bmPow(1 - k, 3) * S[x] + 3 * bmPow(1 - k, 2) * k * (S[x] + g[x]) + 3 * (1 - k) * bmPow(k, 2) * (y[x] + _[x]) + bmPow(k, 3) * y[x], H[x] = E, O !== null && (V += bmPow(H[x] - O[x], 2));
              V = bmSqrt(V), I += V, D.points[p] = new n(V, H), O = H;
            }
            D.segmentLength = I, c[u] = D;
          }
          return c[u];
        };
      }();
      function o(c, S) {
        var y = S.percents, g = S.lengths, _ = y.length, u = bmFloor((_ - 1) * c), m = c * S.addedLength, p = 0;
        if (u === _ - 1 || u === 0 || m === g[u])
          return y[u];
        for (var x = g[u] > m ? -1 : 1, P = !0; P; )
          if (g[u] <= m && g[u + 1] > m ? (p = (m - g[u]) / (g[u + 1] - g[u]), P = !1) : u += x, u < 0 || u >= _ - 1) {
            if (u === _ - 1)
              return y[u];
            P = !1;
          }
        return y[u] + (y[u + 1] - y[u]) * p;
      }
      function f(c, S, y, g, _, u) {
        var m = o(_, u), p = 1 - m, x = t.round((p * p * p * c[0] + (m * p * p + p * m * p + p * p * m) * y[0] + (m * m * p + p * m * m + m * p * m) * g[0] + m * m * m * S[0]) * 1e3) / 1e3, P = t.round((p * p * p * c[1] + (m * p * p + p * m * p + p * p * m) * y[1] + (m * m * p + p * m * m + m * p * m) * g[1] + m * m * m * S[1]) * 1e3) / 1e3;
        return [x, P];
      }
      var d = createTypedArray("float32", 8);
      function C(c, S, y, g, _, u, m) {
        _ < 0 ? _ = 0 : _ > 1 && (_ = 1);
        var p = o(_, m);
        u = u > 1 ? 1 : u;
        var x = o(u, m), P, E = c.length, k = 1 - p, I = 1 - x, V = k * k * k, H = p * k * k * 3, O = p * p * k * 3, D = p * p * p, z = k * k * I, j = p * k * I + k * p * I + k * k * x, R = p * p * I + k * p * x + p * k * x, T = p * p * x, M = k * I * I, b = p * I * I + k * x * I + k * I * x, A = p * x * I + k * x * x + p * I * x, L = p * x * x, F = I * I * I, B = x * I * I + I * x * I + I * I * x, G = x * x * I + I * x * x + x * I * x, N = x * x * x;
        for (P = 0; P < E; P += 1)
          d[P * 4] = t.round((V * c[P] + H * y[P] + O * g[P] + D * S[P]) * 1e3) / 1e3, d[P * 4 + 1] = t.round((z * c[P] + j * y[P] + R * g[P] + T * S[P]) * 1e3) / 1e3, d[P * 4 + 2] = t.round((M * c[P] + b * y[P] + A * g[P] + L * S[P]) * 1e3) / 1e3, d[P * 4 + 3] = t.round((F * c[P] + B * y[P] + G * g[P] + N * S[P]) * 1e3) / 1e3;
        return d;
      }
      return {
        getSegmentsLength: s,
        getNewSegment: C,
        getPointInSegment: f,
        buildBezierData: l,
        pointOnLine2D: e,
        pointOnLine3D: r
      };
    }
    var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
    function interpolateValue(t, e) {
      var r = this.offsetTime, i;
      this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
      for (var s = e.lastIndex, a = s, n = this.keyframes.length - 1, l = !0, o, f, d; l; ) {
        if (o = this.keyframes[a], f = this.keyframes[a + 1], a === n - 1 && t >= f.t - r) {
          o.h && (o = f), s = 0;
          break;
        }
        if (f.t - r > t) {
          s = a;
          break;
        }
        a < n - 1 ? a += 1 : (s = 0, l = !1);
      }
      d = this.keyframesMetadata[a] || {};
      var C, c, S, y, g, _, u = f.t - r, m = o.t - r, p;
      if (o.to) {
        d.bezierData || (d.bezierData = bez.buildBezierData(o.s, f.s || o.e, o.to, o.ti));
        var x = d.bezierData;
        if (t >= u || t < m) {
          var P = t >= u ? x.points.length - 1 : 0;
          for (c = x.points[P].point.length, C = 0; C < c; C += 1)
            i[C] = x.points[P].point[C];
        } else {
          d.__fnct ? _ = d.__fnct : (_ = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y, o.n).get, d.__fnct = _), S = _((t - m) / (u - m));
          var E = x.segmentLength * S, k, I = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastAddedLength : 0;
          for (g = e.lastFrame < t && e._lastKeyframeIndex === a ? e._lastPoint : 0, l = !0, y = x.points.length; l; ) {
            if (I += x.points[g].partialLength, E === 0 || S === 0 || g === x.points.length - 1) {
              for (c = x.points[g].point.length, C = 0; C < c; C += 1)
                i[C] = x.points[g].point[C];
              break;
            } else if (E >= I && E < I + x.points[g + 1].partialLength) {
              for (k = (E - I) / x.points[g + 1].partialLength, c = x.points[g].point.length, C = 0; C < c; C += 1)
                i[C] = x.points[g].point[C] + (x.points[g + 1].point[C] - x.points[g].point[C]) * k;
              break;
            }
            g < y - 1 ? g += 1 : l = !1;
          }
          e._lastPoint = g, e._lastAddedLength = I - x.points[g].partialLength, e._lastKeyframeIndex = a;
        }
      } else {
        var V, H, O, D, z;
        if (n = o.s.length, p = f.s || o.e, this.sh && o.h !== 1)
          if (t >= u)
            i[0] = p[0], i[1] = p[1], i[2] = p[2];
          else if (t <= m)
            i[0] = o.s[0], i[1] = o.s[1], i[2] = o.s[2];
          else {
            var j = createQuaternion(o.s), R = createQuaternion(p), T = (t - m) / (u - m);
            quaternionToEuler(i, slerp(j, R, T));
          }
        else
          for (a = 0; a < n; a += 1)
            o.h !== 1 && (t >= u ? S = 1 : t < m ? S = 0 : (o.o.x.constructor === Array ? (d.__fnct || (d.__fnct = []), d.__fnct[a] ? _ = d.__fnct[a] : (V = o.o.x[a] === void 0 ? o.o.x[0] : o.o.x[a], H = o.o.y[a] === void 0 ? o.o.y[0] : o.o.y[a], O = o.i.x[a] === void 0 ? o.i.x[0] : o.i.x[a], D = o.i.y[a] === void 0 ? o.i.y[0] : o.i.y[a], _ = BezierFactory.getBezierEasing(V, H, O, D).get, d.__fnct[a] = _)) : d.__fnct ? _ = d.__fnct : (V = o.o.x, H = o.o.y, O = o.i.x, D = o.i.y, _ = BezierFactory.getBezierEasing(V, H, O, D).get, o.keyframeMetadata = _), S = _((t - m) / (u - m)))), p = f.s || o.e, z = o.h === 1 ? o.s[a] : o.s[a] + (p[a] - o.s[a]) * S, this.propType === "multidimensional" ? i[a] = z : i = z;
      }
      return e.lastIndex = s, i;
    }
    function slerp(t, e, r) {
      var i = [], s = t[0], a = t[1], n = t[2], l = t[3], o = e[0], f = e[1], d = e[2], C = e[3], c, S, y, g, _;
      return S = s * o + a * f + n * d + l * C, S < 0 && (S = -S, o = -o, f = -f, d = -d, C = -C), 1 - S > 1e-6 ? (c = Math.acos(S), y = Math.sin(c), g = Math.sin((1 - r) * c) / y, _ = Math.sin(r * c) / y) : (g = 1 - r, _ = r), i[0] = g * s + _ * o, i[1] = g * a + _ * f, i[2] = g * n + _ * d, i[3] = g * l + _ * C, i;
    }
    function quaternionToEuler(t, e) {
      var r = e[0], i = e[1], s = e[2], a = e[3], n = Math.atan2(2 * i * a - 2 * r * s, 1 - 2 * i * i - 2 * s * s), l = Math.asin(2 * r * i + 2 * s * a), o = Math.atan2(2 * r * a - 2 * i * s, 1 - 2 * r * r - 2 * s * s);
      t[0] = n / degToRads, t[1] = l / degToRads, t[2] = o / degToRads;
    }
    function createQuaternion(t) {
      var e = t[0] * degToRads, r = t[1] * degToRads, i = t[2] * degToRads, s = Math.cos(e / 2), a = Math.cos(r / 2), n = Math.cos(i / 2), l = Math.sin(e / 2), o = Math.sin(r / 2), f = Math.sin(i / 2), d = s * a * n - l * o * f, C = l * o * n + s * a * f, c = l * a * n + s * o * f, S = s * o * n - l * a * f;
      return [C, c, S, d];
    }
    function getValueAtCurrentTime() {
      var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && t >= r || this._caching.lastFrame < e && t < e))) {
        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var i = this.interpolateValue(t, this._caching);
        this.pv = i;
      }
      return this._caching.lastFrame = t, this.pv;
    }
    function setVValue(t) {
      var e;
      if (this.propType === "unidimensional")
        e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
      else
        for (var r = 0, i = this.v.length; r < i; )
          e = t[r] * this.mult, mathAbs(this.v[r] - e) > 1e-5 && (this.v[r] = e, this._mdf = !0), r += 1;
    }
    function processEffectsSequence() {
      if (!(this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length)) {
        if (this.lock) {
          this.setVValue(this.pv);
          return;
        }
        this.lock = !0, this._mdf = this._isFirstFrame;
        var t, e = this.effectsSequence.length, r = this.kf ? this.pv : this.data.k;
        for (t = 0; t < e; t += 1)
          r = this.effectsSequence[t](r);
        this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }
    function addEffect(t) {
      this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }
    function ValueProperty(t, e, r, i) {
      this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function MultiDimensionalProperty(t, e, r, i) {
      this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
      var s, a = e.k.length;
      for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1)
        this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
      this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function KeyframedValueProperty(t, e, r, i) {
      this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
        lastFrame: initFrame,
        lastIndex: 0,
        value: 0,
        _lastKeyframeIndex: -1
      }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect;
    }
    function KeyframedMultidimensionalProperty(t, e, r, i) {
      this.propType = "multidimensional";
      var s, a = e.k.length, n, l, o, f;
      for (s = 0; s < a - 1; s += 1)
        e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (n = e.k[s].s, l = e.k[s + 1].s, o = e.k[s].to, f = e.k[s].ti, (n.length === 2 && !(n[0] === l[0] && n[1] === l[1]) && bez.pointOnLine2D(n[0], n[1], l[0], l[1], n[0] + o[0], n[1] + o[1]) && bez.pointOnLine2D(n[0], n[1], l[0], l[1], l[0] + f[0], l[1] + f[1]) || n.length === 3 && !(n[0] === l[0] && n[1] === l[1] && n[2] === l[2]) && bez.pointOnLine3D(n[0], n[1], n[2], l[0], l[1], l[2], n[0] + o[0], n[1] + o[1], n[2] + o[2]) && bez.pointOnLine3D(n[0], n[1], n[2], l[0], l[1], l[2], l[0] + f[0], l[1] + f[1], l[2] + f[2])) && (e.k[s].to = null, e.k[s].ti = null), n[0] === l[0] && n[1] === l[1] && o[0] === 0 && o[1] === 0 && f[0] === 0 && f[1] === 0 && (n.length === 2 || n[2] === l[2] && o[2] === 0 && f[2] === 0) && (e.k[s].to = null, e.k[s].ti = null));
      this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
      var d = e.k[0].s.length;
      for (this.v = createTypedArray("float32", d), this.pv = createTypedArray("float32", d), s = 0; s < d; s += 1)
        this.v[s] = initFrame, this.pv[s] = initFrame;
      this._caching = {
        lastFrame: initFrame,
        lastIndex: 0,
        value: createTypedArray("float32", d)
      }, this.addEffect = addEffect;
    }
    var PropertyFactory = /* @__PURE__ */ function() {
      function t(r, i, s, a, n) {
        i.sid && (i = r.globalData.slotManager.getProp(i));
        var l;
        if (!i.k.length)
          l = new ValueProperty(r, i, a, n);
        else if (typeof i.k[0] == "number")
          l = new MultiDimensionalProperty(r, i, a, n);
        else
          switch (s) {
            case 0:
              l = new KeyframedValueProperty(r, i, a, n);
              break;
            case 1:
              l = new KeyframedMultidimensionalProperty(r, i, a, n);
              break;
          }
        return l.effectsSequence.length && n.addDynamicProperty(l), l;
      }
      var e = {
        getProp: t
      };
      return e;
    }();
    function DynamicPropertyContainer() {
    }
    DynamicPropertyContainer.prototype = {
      addDynamicProperty: function(e) {
        this.dynamicProperties.indexOf(e) === -1 && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0);
      },
      iterateDynamicProperties: function() {
        this._mdf = !1;
        var e, r = this.dynamicProperties.length;
        for (e = 0; e < r; e += 1)
          this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0);
      },
      initDynamicPropertyContainer: function(e) {
        this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
      }
    };
    var pointPool = function() {
      function t() {
        return createTypedArray("float32", 2);
      }
      return poolFactory(8, t);
    }();
    function ShapePath() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
    }
    ShapePath.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var r = 0; r < e; )
        this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1;
    }, ShapePath.prototype.setLength = function(t) {
      for (; this._maxLength < t; )
        this.doubleArrayLength();
      this._length = t;
    }, ShapePath.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
    }, ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
      var a;
      switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
        case "v":
          a = this.v;
          break;
        case "i":
          a = this.i;
          break;
        case "o":
          a = this.o;
          break;
        default:
          a = [];
          break;
      }
      (!a[i] || a[i] && !s) && (a[i] = pointPool.newElement()), a[i][0] = t, a[i][1] = e;
    }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, l) {
      this.setXYAt(t, e, "v", n, l), this.setXYAt(r, i, "o", n, l), this.setXYAt(s, a, "i", n, l);
    }, ShapePath.prototype.reverse = function() {
      var t = new ShapePath();
      t.setPathData(this.c, this._length);
      var e = this.v, r = this.o, i = this.i, s = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1);
      var a = this._length - 1, n = this._length, l;
      for (l = s; l < n; l += 1)
        t.setTripleAt(e[a][0], e[a][1], i[a][0], i[a][1], r[a][0], r[a][1], l, !1), a -= 1;
      return t;
    }, ShapePath.prototype.length = function() {
      return this._length;
    };
    var shapePool = function() {
      function t() {
        return new ShapePath();
      }
      function e(s) {
        var a = s._length, n;
        for (n = 0; n < a; n += 1)
          pointPool.release(s.v[n]), pointPool.release(s.i[n]), pointPool.release(s.o[n]), s.v[n] = null, s.i[n] = null, s.o[n] = null;
        s._length = 0, s.c = !1;
      }
      function r(s) {
        var a = i.newElement(), n, l = s._length === void 0 ? s.v.length : s._length;
        for (a.setLength(l), a.c = s.c, n = 0; n < l; n += 1)
          a.setTripleAt(s.v[n][0], s.v[n][1], s.o[n][0], s.o[n][1], s.i[n][0], s.i[n][1], n);
        return a;
      }
      var i = poolFactory(4, t, e);
      return i.clone = r, i;
    }();
    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
    }
    ShapeCollection.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, ShapeCollection.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1)
        shapePool.release(this.shapes[t]);
      this._length = 0;
    };
    var shapeCollectionPool = function() {
      var t = {
        newShapeCollection: s,
        release: a
      }, e = 0, r = 4, i = createSizedArray(r);
      function s() {
        var n;
        return e ? (e -= 1, n = i[e]) : n = new ShapeCollection(), n;
      }
      function a(n) {
        var l, o = n._length;
        for (l = 0; l < o; l += 1)
          shapePool.release(n.shapes[l]);
        n._length = 0, e === r && (i = pooling.double(i), r *= 2), i[e] = n, e += 1;
      }
      return t;
    }(), ShapePropertyFactory = function() {
      var t = -999999;
      function e(u, m, p) {
        var x = p.lastIndex, P, E, k, I, V, H, O, D, z, j = this.keyframes;
        if (u < j[0].t - this.offsetTime)
          P = j[0].s[0], k = !0, x = 0;
        else if (u >= j[j.length - 1].t - this.offsetTime)
          P = j[j.length - 1].s ? j[j.length - 1].s[0] : j[j.length - 2].e[0], k = !0;
        else {
          for (var R = x, T = j.length - 1, M = !0, b, A, L; M && (b = j[R], A = j[R + 1], !(A.t - this.offsetTime > u)); )
            R < T - 1 ? R += 1 : M = !1;
          if (L = this.keyframesMetadata[R] || {}, k = b.h === 1, x = R, !k) {
            if (u >= A.t - this.offsetTime)
              D = 1;
            else if (u < b.t - this.offsetTime)
              D = 0;
            else {
              var F;
              L.__fnct ? F = L.__fnct : (F = BezierFactory.getBezierEasing(b.o.x, b.o.y, b.i.x, b.i.y).get, L.__fnct = F), D = F((u - (b.t - this.offsetTime)) / (A.t - this.offsetTime - (b.t - this.offsetTime)));
            }
            E = A.s ? A.s[0] : b.e[0];
          }
          P = b.s[0];
        }
        for (H = m._length, O = P.i[0].length, p.lastIndex = x, I = 0; I < H; I += 1)
          for (V = 0; V < O; V += 1)
            z = k ? P.i[I][V] : P.i[I][V] + (E.i[I][V] - P.i[I][V]) * D, m.i[I][V] = z, z = k ? P.o[I][V] : P.o[I][V] + (E.o[I][V] - P.o[I][V]) * D, m.o[I][V] = z, z = k ? P.v[I][V] : P.v[I][V] + (E.v[I][V] - P.v[I][V]) * D, m.v[I][V] = z;
      }
      function r() {
        var u = this.comp.renderedFrame - this.offsetTime, m = this.keyframes[0].t - this.offsetTime, p = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, x = this._caching.lastFrame;
        return x !== t && (x < m && u < m || x > p && u > p) || (this._caching.lastIndex = x < u ? this._caching.lastIndex : 0, this.interpolateShape(u, this.pv, this._caching)), this._caching.lastFrame = u, this.pv;
      }
      function i() {
        this.paths = this.localShapeCollection;
      }
      function s(u, m) {
        if (u._length !== m._length || u.c !== m.c)
          return !1;
        var p, x = u._length;
        for (p = 0; p < x; p += 1)
          if (u.v[p][0] !== m.v[p][0] || u.v[p][1] !== m.v[p][1] || u.o[p][0] !== m.o[p][0] || u.o[p][1] !== m.o[p][1] || u.i[p][0] !== m.i[p][0] || u.i[p][1] !== m.i[p][1])
            return !1;
        return !0;
      }
      function a(u) {
        s(this.v, u) || (this.v = shapePool.clone(u), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
      }
      function n() {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (!this.effectsSequence.length) {
            this._mdf = !1;
            return;
          }
          if (this.lock) {
            this.setVValue(this.pv);
            return;
          }
          this.lock = !0, this._mdf = !1;
          var u;
          this.kf ? u = this.pv : this.data.ks ? u = this.data.ks.k : u = this.data.pt.k;
          var m, p = this.effectsSequence.length;
          for (m = 0; m < p; m += 1)
            u = this.effectsSequence[m](u);
          this.setVValue(u), this.lock = !1, this.frameId = this.elem.globalData.frameId;
        }
      }
      function l(u, m, p) {
        this.propType = "shape", this.comp = u.comp, this.container = u, this.elem = u, this.data = m, this.k = !1, this.kf = !1, this._mdf = !1;
        var x = p === 3 ? m.pt.k : m.ks.k;
        this.v = shapePool.clone(x), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
      }
      function o(u) {
        this.effectsSequence.push(u), this.container.addDynamicProperty(this);
      }
      l.prototype.interpolateShape = e, l.prototype.getValue = n, l.prototype.setVValue = a, l.prototype.addEffect = o;
      function f(u, m, p) {
        this.propType = "shape", this.comp = u.comp, this.elem = u, this.container = u, this.offsetTime = u.data.st, this.keyframes = p === 3 ? m.pt.k : m.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
        var x = this.keyframes[0].s[0].i.length;
        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, x), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = t, this.reset = i, this._caching = {
          lastFrame: t,
          lastIndex: 0
        }, this.effectsSequence = [r.bind(this)];
      }
      f.prototype.getValue = n, f.prototype.interpolateShape = e, f.prototype.setVValue = a, f.prototype.addEffect = o;
      var d = function() {
        var u = roundCorner;
        function m(p, x) {
          this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = x.d, this.elem = p, this.comp = p.comp, this.frameId = -1, this.initDynamicPropertyContainer(p), this.p = PropertyFactory.getProp(p, x.p, 1, 0, this), this.s = PropertyFactory.getProp(p, x.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
        }
        return m.prototype = {
          reset: i,
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
          },
          convertEllToPath: function() {
            var x = this.p.v[0], P = this.p.v[1], E = this.s.v[0] / 2, k = this.s.v[1] / 2, I = this.d !== 3, V = this.v;
            V.v[0][0] = x, V.v[0][1] = P - k, V.v[1][0] = I ? x + E : x - E, V.v[1][1] = P, V.v[2][0] = x, V.v[2][1] = P + k, V.v[3][0] = I ? x - E : x + E, V.v[3][1] = P, V.i[0][0] = I ? x - E * u : x + E * u, V.i[0][1] = P - k, V.i[1][0] = I ? x + E : x - E, V.i[1][1] = P - k * u, V.i[2][0] = I ? x + E * u : x - E * u, V.i[2][1] = P + k, V.i[3][0] = I ? x - E : x + E, V.i[3][1] = P + k * u, V.o[0][0] = I ? x + E * u : x - E * u, V.o[0][1] = P - k, V.o[1][0] = I ? x + E : x - E, V.o[1][1] = P + k * u, V.o[2][0] = I ? x - E * u : x + E * u, V.o[2][1] = P + k, V.o[3][0] = I ? x - E : x + E, V.o[3][1] = P - k * u;
          }
        }, extendPrototype([DynamicPropertyContainer], m), m;
      }(), C = function() {
        function u(m, p) {
          this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = m, this.comp = m.comp, this.data = p, this.frameId = -1, this.d = p.d, this.initDynamicPropertyContainer(m), p.sy === 1 ? (this.ir = PropertyFactory.getProp(m, p.ir, 0, 0, this), this.is = PropertyFactory.getProp(m, p.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(m, p.pt, 0, 0, this), this.p = PropertyFactory.getProp(m, p.p, 1, 0, this), this.r = PropertyFactory.getProp(m, p.r, 0, degToRads, this), this.or = PropertyFactory.getProp(m, p.or, 0, 0, this), this.os = PropertyFactory.getProp(m, p.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
        }
        return u.prototype = {
          reset: i,
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
          },
          convertStarToPath: function() {
            var p = Math.floor(this.pt.v) * 2, x = Math.PI * 2 / p, P = !0, E = this.or.v, k = this.ir.v, I = this.os.v, V = this.is.v, H = 2 * Math.PI * E / (p * 2), O = 2 * Math.PI * k / (p * 2), D, z, j, R, T = -Math.PI / 2;
            T += this.r.v;
            var M = this.data.d === 3 ? -1 : 1;
            for (this.v._length = 0, D = 0; D < p; D += 1) {
              z = P ? E : k, j = P ? I : V, R = P ? H : O;
              var b = z * Math.cos(T), A = z * Math.sin(T), L = b === 0 && A === 0 ? 0 : A / Math.sqrt(b * b + A * A), F = b === 0 && A === 0 ? 0 : -b / Math.sqrt(b * b + A * A);
              b += +this.p.v[0], A += +this.p.v[1], this.v.setTripleAt(b, A, b - L * R * j * M, A - F * R * j * M, b + L * R * j * M, A + F * R * j * M, D, !0), P = !P, T += x * M;
            }
          },
          convertPolygonToPath: function() {
            var p = Math.floor(this.pt.v), x = Math.PI * 2 / p, P = this.or.v, E = this.os.v, k = 2 * Math.PI * P / (p * 4), I, V = -Math.PI * 0.5, H = this.data.d === 3 ? -1 : 1;
            for (V += this.r.v, this.v._length = 0, I = 0; I < p; I += 1) {
              var O = P * Math.cos(V), D = P * Math.sin(V), z = O === 0 && D === 0 ? 0 : D / Math.sqrt(O * O + D * D), j = O === 0 && D === 0 ? 0 : -O / Math.sqrt(O * O + D * D);
              O += +this.p.v[0], D += +this.p.v[1], this.v.setTripleAt(O, D, O - z * k * E * H, D - j * k * E * H, O + z * k * E * H, D + j * k * E * H, I, !0), V += x * H;
            }
            this.paths.length = 0, this.paths[0] = this.v;
          }
        }, extendPrototype([DynamicPropertyContainer], u), u;
      }(), c = function() {
        function u(m, p) {
          this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = m, this.comp = m.comp, this.frameId = -1, this.d = p.d, this.initDynamicPropertyContainer(m), this.p = PropertyFactory.getProp(m, p.p, 1, 0, this), this.s = PropertyFactory.getProp(m, p.s, 1, 0, this), this.r = PropertyFactory.getProp(m, p.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
        }
        return u.prototype = {
          convertRectToPath: function() {
            var p = this.p.v[0], x = this.p.v[1], P = this.s.v[0] / 2, E = this.s.v[1] / 2, k = bmMin(P, E, this.r.v), I = k * (1 - roundCorner);
            this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(p + P, x - E + k, p + P, x - E + k, p + P, x - E + I, 0, !0), this.v.setTripleAt(p + P, x + E - k, p + P, x + E - I, p + P, x + E - k, 1, !0), k !== 0 ? (this.v.setTripleAt(p + P - k, x + E, p + P - k, x + E, p + P - I, x + E, 2, !0), this.v.setTripleAt(p - P + k, x + E, p - P + I, x + E, p - P + k, x + E, 3, !0), this.v.setTripleAt(p - P, x + E - k, p - P, x + E - k, p - P, x + E - I, 4, !0), this.v.setTripleAt(p - P, x - E + k, p - P, x - E + I, p - P, x - E + k, 5, !0), this.v.setTripleAt(p - P + k, x - E, p - P + k, x - E, p - P + I, x - E, 6, !0), this.v.setTripleAt(p + P - k, x - E, p + P - I, x - E, p + P - k, x - E, 7, !0)) : (this.v.setTripleAt(p - P, x + E, p - P + I, x + E, p - P, x + E, 2), this.v.setTripleAt(p - P, x - E, p - P, x - E + I, p - P, x - E, 3))) : (this.v.setTripleAt(p + P, x - E + k, p + P, x - E + I, p + P, x - E + k, 0, !0), k !== 0 ? (this.v.setTripleAt(p + P - k, x - E, p + P - k, x - E, p + P - I, x - E, 1, !0), this.v.setTripleAt(p - P + k, x - E, p - P + I, x - E, p - P + k, x - E, 2, !0), this.v.setTripleAt(p - P, x - E + k, p - P, x - E + k, p - P, x - E + I, 3, !0), this.v.setTripleAt(p - P, x + E - k, p - P, x + E - I, p - P, x + E - k, 4, !0), this.v.setTripleAt(p - P + k, x + E, p - P + k, x + E, p - P + I, x + E, 5, !0), this.v.setTripleAt(p + P - k, x + E, p + P - I, x + E, p + P - k, x + E, 6, !0), this.v.setTripleAt(p + P, x + E - k, p + P, x + E - k, p + P, x + E - I, 7, !0)) : (this.v.setTripleAt(p - P, x - E, p - P + I, x - E, p - P, x - E, 1, !0), this.v.setTripleAt(p - P, x + E, p - P, x + E - I, p - P, x + E, 2, !0), this.v.setTripleAt(p + P, x + E, p + P - I, x + E, p + P, x + E, 3, !0)));
          },
          getValue: function() {
            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
          },
          reset: i
        }, extendPrototype([DynamicPropertyContainer], u), u;
      }();
      function S(u, m, p) {
        var x;
        if (p === 3 || p === 4) {
          var P = p === 3 ? m.pt : m.ks, E = P.k;
          E.length ? x = new f(u, m, p) : x = new l(u, m, p);
        } else
          p === 5 ? x = new c(u, m) : p === 6 ? x = new d(u, m) : p === 7 && (x = new C(u, m));
        return x.k && u.addDynamicProperty(x), x;
      }
      function y() {
        return l;
      }
      function g() {
        return f;
      }
      var _ = {};
      return _.getShapeProp = S, _.getConstructorFunction = y, _.getKeyframedConstructorFunction = g, _;
    }();
    /*!
     Transformation Matrix v2.0
     (c) Epistemex 2014-2015
     www.epistemex.com
     By Ken Fyrstenberg
     Contributions by leeoniya.
     License: MIT, header required.
     */
    var Matrix = /* @__PURE__ */ function() {
      var t = Math.cos, e = Math.sin, r = Math.tan, i = Math.round;
      function s() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function a(b) {
        if (b === 0)
          return this;
        var A = t(b), L = e(b);
        return this._t(A, -L, 0, 0, L, A, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function n(b) {
        if (b === 0)
          return this;
        var A = t(b), L = e(b);
        return this._t(1, 0, 0, 0, 0, A, -L, 0, 0, L, A, 0, 0, 0, 0, 1);
      }
      function l(b) {
        if (b === 0)
          return this;
        var A = t(b), L = e(b);
        return this._t(A, 0, L, 0, 0, 1, 0, 0, -L, 0, A, 0, 0, 0, 0, 1);
      }
      function o(b) {
        if (b === 0)
          return this;
        var A = t(b), L = e(b);
        return this._t(A, -L, 0, 0, L, A, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function f(b, A) {
        return this._t(1, A, b, 1, 0, 0);
      }
      function d(b, A) {
        return this.shear(r(b), r(A));
      }
      function C(b, A) {
        var L = t(A), F = e(A);
        return this._t(L, F, 0, 0, -F, L, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(b), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(L, -F, 0, 0, F, L, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function c(b, A, L) {
        return !L && L !== 0 && (L = 1), b === 1 && A === 1 && L === 1 ? this : this._t(b, 0, 0, 0, 0, A, 0, 0, 0, 0, L, 0, 0, 0, 0, 1);
      }
      function S(b, A, L, F, B, G, N, q, Y, Z, K, rt, J, $, Q, X) {
        return this.props[0] = b, this.props[1] = A, this.props[2] = L, this.props[3] = F, this.props[4] = B, this.props[5] = G, this.props[6] = N, this.props[7] = q, this.props[8] = Y, this.props[9] = Z, this.props[10] = K, this.props[11] = rt, this.props[12] = J, this.props[13] = $, this.props[14] = Q, this.props[15] = X, this;
      }
      function y(b, A, L) {
        return L = L || 0, b !== 0 || A !== 0 || L !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, b, A, L, 1) : this;
      }
      function g(b, A, L, F, B, G, N, q, Y, Z, K, rt, J, $, Q, X) {
        var W = this.props;
        if (b === 1 && A === 0 && L === 0 && F === 0 && B === 0 && G === 1 && N === 0 && q === 0 && Y === 0 && Z === 0 && K === 1 && rt === 0)
          return W[12] = W[12] * b + W[15] * J, W[13] = W[13] * G + W[15] * $, W[14] = W[14] * K + W[15] * Q, W[15] *= X, this._identityCalculated = !1, this;
        var st = W[0], lt = W[1], at = W[2], it = W[3], nt = W[4], ot = W[5], U = W[6], ht = W[7], ft = W[8], tt = W[9], pt = W[10], et = W[11], ct = W[12], ut = W[13], dt = W[14], mt = W[15];
        return W[0] = st * b + lt * B + at * Y + it * J, W[1] = st * A + lt * G + at * Z + it * $, W[2] = st * L + lt * N + at * K + it * Q, W[3] = st * F + lt * q + at * rt + it * X, W[4] = nt * b + ot * B + U * Y + ht * J, W[5] = nt * A + ot * G + U * Z + ht * $, W[6] = nt * L + ot * N + U * K + ht * Q, W[7] = nt * F + ot * q + U * rt + ht * X, W[8] = ft * b + tt * B + pt * Y + et * J, W[9] = ft * A + tt * G + pt * Z + et * $, W[10] = ft * L + tt * N + pt * K + et * Q, W[11] = ft * F + tt * q + pt * rt + et * X, W[12] = ct * b + ut * B + dt * Y + mt * J, W[13] = ct * A + ut * G + dt * Z + mt * $, W[14] = ct * L + ut * N + dt * K + mt * Q, W[15] = ct * F + ut * q + dt * rt + mt * X, this._identityCalculated = !1, this;
      }
      function _(b) {
        var A = b.props;
        return this.transform(A[0], A[1], A[2], A[3], A[4], A[5], A[6], A[7], A[8], A[9], A[10], A[11], A[12], A[13], A[14], A[15]);
      }
      function u() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
      }
      function m(b) {
        for (var A = 0; A < 16; ) {
          if (b.props[A] !== this.props[A])
            return !1;
          A += 1;
        }
        return !0;
      }
      function p(b) {
        var A;
        for (A = 0; A < 16; A += 1)
          b.props[A] = this.props[A];
        return b;
      }
      function x(b) {
        var A;
        for (A = 0; A < 16; A += 1)
          this.props[A] = b[A];
      }
      function P(b, A, L) {
        return {
          x: b * this.props[0] + A * this.props[4] + L * this.props[8] + this.props[12],
          y: b * this.props[1] + A * this.props[5] + L * this.props[9] + this.props[13],
          z: b * this.props[2] + A * this.props[6] + L * this.props[10] + this.props[14]
        };
      }
      function E(b, A, L) {
        return b * this.props[0] + A * this.props[4] + L * this.props[8] + this.props[12];
      }
      function k(b, A, L) {
        return b * this.props[1] + A * this.props[5] + L * this.props[9] + this.props[13];
      }
      function I(b, A, L) {
        return b * this.props[2] + A * this.props[6] + L * this.props[10] + this.props[14];
      }
      function V() {
        var b = this.props[0] * this.props[5] - this.props[1] * this.props[4], A = this.props[5] / b, L = -this.props[1] / b, F = -this.props[4] / b, B = this.props[0] / b, G = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / b, N = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / b, q = new Matrix();
        return q.props[0] = A, q.props[1] = L, q.props[4] = F, q.props[5] = B, q.props[12] = G, q.props[13] = N, q;
      }
      function H(b) {
        var A = this.getInverseMatrix();
        return A.applyToPointArray(b[0], b[1], b[2] || 0);
      }
      function O(b) {
        var A, L = b.length, F = [];
        for (A = 0; A < L; A += 1)
          F[A] = H(b[A]);
        return F;
      }
      function D(b, A, L) {
        var F = createTypedArray("float32", 6);
        if (this.isIdentity())
          F[0] = b[0], F[1] = b[1], F[2] = A[0], F[3] = A[1], F[4] = L[0], F[5] = L[1];
        else {
          var B = this.props[0], G = this.props[1], N = this.props[4], q = this.props[5], Y = this.props[12], Z = this.props[13];
          F[0] = b[0] * B + b[1] * N + Y, F[1] = b[0] * G + b[1] * q + Z, F[2] = A[0] * B + A[1] * N + Y, F[3] = A[0] * G + A[1] * q + Z, F[4] = L[0] * B + L[1] * N + Y, F[5] = L[0] * G + L[1] * q + Z;
        }
        return F;
      }
      function z(b, A, L) {
        var F;
        return this.isIdentity() ? F = [b, A, L] : F = [b * this.props[0] + A * this.props[4] + L * this.props[8] + this.props[12], b * this.props[1] + A * this.props[5] + L * this.props[9] + this.props[13], b * this.props[2] + A * this.props[6] + L * this.props[10] + this.props[14]], F;
      }
      function j(b, A) {
        if (this.isIdentity())
          return b + "," + A;
        var L = this.props;
        return Math.round((b * L[0] + A * L[4] + L[12]) * 100) / 100 + "," + Math.round((b * L[1] + A * L[5] + L[13]) * 100) / 100;
      }
      function R() {
        for (var b = 0, A = this.props, L = "matrix3d(", F = 1e4; b < 16; )
          L += i(A[b] * F) / F, L += b === 15 ? ")" : ",", b += 1;
        return L;
      }
      function T(b) {
        var A = 1e4;
        return b < 1e-6 && b > 0 || b > -1e-6 && b < 0 ? i(b * A) / A : b;
      }
      function M() {
        var b = this.props, A = T(b[0]), L = T(b[1]), F = T(b[4]), B = T(b[5]), G = T(b[12]), N = T(b[13]);
        return "matrix(" + A + "," + L + "," + F + "," + B + "," + G + "," + N + ")";
      }
      return function() {
        this.reset = s, this.rotate = a, this.rotateX = n, this.rotateY = l, this.rotateZ = o, this.skew = d, this.skewFromAxis = C, this.shear = f, this.scale = c, this.setTransform = S, this.translate = y, this.transform = g, this.multiply = _, this.applyToPoint = P, this.applyToX = E, this.applyToY = k, this.applyToZ = I, this.applyToPointArray = z, this.applyToTriplePoints = D, this.applyToPointStringified = j, this.toCSS = R, this.to2dCSS = M, this.clone = p, this.cloneFromProps = x, this.equals = m, this.inversePoints = O, this.inversePoint = H, this.getInverseMatrix = V, this._t = this.transform, this.isIdentity = u, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
      };
    }();
    function _typeof$3(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$3 = function(r) {
        return typeof r;
      } : _typeof$3 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$3(t);
    }
    var lottie = {};
    function setLocation(t) {
      setLocationHref(t);
    }
    function searchAnimations() {
      animationManager.searchAnimations();
    }
    function setSubframeRendering(t) {
      setSubframeEnabled(t);
    }
    function setPrefix(t) {
      setIdPrefix(t);
    }
    function loadAnimation(t) {
      return animationManager.loadAnimation(t);
    }
    function setQuality(t) {
      if (typeof t == "string")
        switch (t) {
          case "high":
            setDefaultCurveSegments(200);
            break;
          default:
          case "medium":
            setDefaultCurveSegments(50);
            break;
          case "low":
            setDefaultCurveSegments(10);
            break;
        }
      else
        !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
    }
    function inBrowser() {
      return typeof navigator < "u";
    }
    function installPlugin(t, e) {
      t === "expressions" && setExpressionsPlugin(e);
    }
    function getFactory(t) {
      switch (t) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null;
      }
    }
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
    function checkReady() {
      document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(t) {
      for (var e = queryString.split("&"), r = 0; r < e.length; r += 1) {
        var i = e[r].split("=");
        if (decodeURIComponent(i[0]) == t)
          return decodeURIComponent(i[1]);
      }
      return null;
    }
    var queryString = "";
    {
      var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || {
        src: ""
      };
      queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer");
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    try {
      _typeof$3(exports) !== "object" && (window.bodymovin = lottie);
    } catch (t) {
    }
    var ShapeModifiers = function() {
      var t = {}, e = {};
      t.registerModifier = r, t.getModifier = i;
      function r(s, a) {
        e[s] || (e[s] = a);
      }
      function i(s, a, n) {
        return new e[s](a, n);
      }
      return t;
    }();
    function ShapeModifier() {
    }
    ShapeModifier.prototype.initModifierProperties = function() {
    }, ShapeModifier.prototype.addShapeToModifier = function() {
    }, ShapeModifier.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = {
          shape: t.sh,
          data: t,
          localShapeCollection: shapeCollectionPool.newShapeCollection()
        };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
      }
    }, ShapeModifier.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, ShapeModifier.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier);
    function TrimModifier() {
    }
    extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
      this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this), this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, TrimModifier.prototype.addShapeToModifier = function(t) {
      t.pathsData = [];
    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
      var a = [];
      e <= 1 ? a.push({
        s: t,
        e
      }) : t >= 1 ? a.push({
        s: t - 1,
        e: e - 1
      }) : (a.push({
        s: t,
        e: 1
      }), a.push({
        s: 0,
        e: e - 1
      }));
      var n = [], l, o = a.length, f;
      for (l = 0; l < o; l += 1)
        if (f = a[l], !(f.e * s < i || f.s * s > i + r)) {
          var d, C;
          f.s * s <= i ? d = 0 : d = (f.s * s - i) / r, f.e * s >= i + r ? C = 1 : C = (f.e * s - i) / r, n.push([d, C]);
        }
      return n.length || n.push([0, 0]), n;
    }, TrimModifier.prototype.releasePathsData = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        segmentsLengthPool.release(t[e]);
      return t.length = 0, t;
    }, TrimModifier.prototype.processShapes = function(t) {
      var e, r;
      if (this._mdf || t) {
        var i = this.o.v % 360 / 360;
        if (i < 0 && (i += 1), this.s.v > 1 ? e = 1 + i : this.s.v < 0 ? e = 0 + i : e = this.s.v + i, this.e.v > 1 ? r = 1 + i : this.e.v < 0 ? r = 0 + i : r = this.e.v + i, e > r) {
          var s = e;
          e = r, r = s;
        }
        e = Math.round(e * 1e4) * 1e-4, r = Math.round(r * 1e4) * 1e-4, this.sValue = e, this.eValue = r;
      } else
        e = this.sValue, r = this.eValue;
      var a, n, l = this.shapes.length, o, f, d, C, c, S = 0;
      if (r === e)
        for (n = 0; n < l; n += 1)
          this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
      else if (r === 1 && e === 0 || r === 0 && e === 1) {
        if (this._mdf)
          for (n = 0; n < l; n += 1)
            this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0;
      } else {
        var y = [], g, _;
        for (n = 0; n < l; n += 1)
          if (g = this.shapes[n], !g.shape._mdf && !this._mdf && !t && this.m !== 2)
            g.shape.paths = g.localShapeCollection;
          else {
            if (a = g.shape.paths, f = a._length, c = 0, !g.shape._mdf && g.pathsData.length)
              c = g.totalShapeLength;
            else {
              for (d = this.releasePathsData(g.pathsData), o = 0; o < f; o += 1)
                C = bez.getSegmentsLength(a.shapes[o]), d.push(C), c += C.totalLength;
              g.totalShapeLength = c, g.pathsData = d;
            }
            S += c, g.shape._mdf = !0;
          }
        var u = e, m = r, p = 0, x;
        for (n = l - 1; n >= 0; n -= 1)
          if (g = this.shapes[n], g.shape._mdf) {
            for (_ = g.localShapeCollection, _.releaseShapes(), this.m === 2 && l > 1 ? (x = this.calculateShapeEdges(e, r, g.totalShapeLength, p, S), p += g.totalShapeLength) : x = [[u, m]], f = x.length, o = 0; o < f; o += 1) {
              u = x[o][0], m = x[o][1], y.length = 0, m <= 1 ? y.push({
                s: g.totalShapeLength * u,
                e: g.totalShapeLength * m
              }) : u >= 1 ? y.push({
                s: g.totalShapeLength * (u - 1),
                e: g.totalShapeLength * (m - 1)
              }) : (y.push({
                s: g.totalShapeLength * u,
                e: g.totalShapeLength
              }), y.push({
                s: 0,
                e: g.totalShapeLength * (m - 1)
              }));
              var P = this.addShapes(g, y[0]);
              if (y[0].s !== y[0].e) {
                if (y.length > 1) {
                  var E = g.shape.paths.shapes[g.shape.paths._length - 1];
                  if (E.c) {
                    var k = P.pop();
                    this.addPaths(P, _), P = this.addShapes(g, y[1], k);
                  } else
                    this.addPaths(P, _), P = this.addShapes(g, y[1]);
                }
                this.addPaths(P, _);
              }
            }
            g.shape.paths = _;
          }
      }
    }, TrimModifier.prototype.addPaths = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1)
        e.addShape(t[r]);
    }, TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
      s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1);
    }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
      e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1);
    }, TrimModifier.prototype.addShapes = function(t, e, r) {
      var i = t.pathsData, s = t.shape.paths.shapes, a, n = t.shape.paths._length, l, o, f = 0, d, C, c, S, y = [], g, _ = !0;
      for (r ? (C = r._length, g = r._length) : (r = shapePool.newElement(), C = 0, g = 0), y.push(r), a = 0; a < n; a += 1) {
        for (c = i[a].lengths, r.c = s[a].c, o = s[a].c ? c.length : c.length + 1, l = 1; l < o; l += 1)
          if (d = c[l - 1], f + d.addedLength < e.s)
            f += d.addedLength, r.c = !1;
          else if (f > e.e) {
            r.c = !1;
            break;
          } else
            e.s <= f && e.e >= f + d.addedLength ? (this.addSegment(s[a].v[l - 1], s[a].o[l - 1], s[a].i[l], s[a].v[l], r, C, _), _ = !1) : (S = bez.getNewSegment(s[a].v[l - 1], s[a].v[l], s[a].o[l - 1], s[a].i[l], (e.s - f) / d.addedLength, (e.e - f) / d.addedLength, c[l - 1]), this.addSegmentFromArray(S, r, C, _), _ = !1, r.c = !1), f += d.addedLength, C += 1;
        if (s[a].c && c.length) {
          if (d = c[l - 1], f <= e.e) {
            var u = c[l - 1].addedLength;
            e.s <= f && e.e >= f + u ? (this.addSegment(s[a].v[l - 1], s[a].o[l - 1], s[a].i[0], s[a].v[0], r, C, _), _ = !1) : (S = bez.getNewSegment(s[a].v[l - 1], s[a].v[0], s[a].o[l - 1], s[a].i[0], (e.s - f) / u, (e.e - f) / u, c[l - 1]), this.addSegmentFromArray(S, r, C, _), _ = !1, r.c = !1);
          } else
            r.c = !1;
          f += d.addedLength, C += 1;
        }
        if (r._length && (r.setXYAt(r.v[g][0], r.v[g][1], "i", g), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), f > e.e)
          break;
        a < n - 1 && (r = shapePool.newElement(), _ = !0, y.push(r), C = 0);
      }
      return y;
    };
    function PuckerAndBloatModifier() {
    }
    extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
      var r = e / 100, i = [0, 0], s = t._length, a = 0;
      for (a = 0; a < s; a += 1)
        i[0] += t.v[a][0], i[1] += t.v[a][1];
      i[0] /= s, i[1] /= s;
      var n = shapePool.newElement();
      n.c = t.c;
      var l, o, f, d, C, c;
      for (a = 0; a < s; a += 1)
        l = t.v[a][0] + (i[0] - t.v[a][0]) * r, o = t.v[a][1] + (i[1] - t.v[a][1]) * r, f = t.o[a][0] + (i[0] - t.o[a][0]) * -r, d = t.o[a][1] + (i[1] - t.o[a][1]) * -r, C = t.i[a][0] + (i[0] - t.i[a][0]) * -r, c = t.i[a][1] + (i[1] - t.i[a][1]) * -r, n.setTripleAt(l, o, f, d, C, c, a);
      return n;
    }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, a, n = this.amount.v;
      if (n !== 0) {
        var l, o;
        for (r = 0; r < i; r += 1) {
          if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t))
            for (o.releaseShapes(), l.shape._mdf = !0, e = l.shape.paths.shapes, a = l.shape.paths._length, s = 0; s < a; s += 1)
              o.addShape(this.processPath(e[s], n));
          l.shape.paths = l.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    var TransformPropertyFactory = function() {
      var t = [0, 0];
      function e(o) {
        var f = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || f, this.a && o.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && o.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && o.skewFromAxis(-this.sk.v, this.sa.v), this.r ? o.rotate(-this.r.v) : o.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? o.translate(this.px.v, this.py.v, -this.pz.v) : o.translate(this.px.v, this.py.v, 0) : o.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }
      function r(o) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || o) {
            var f;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var d, C;
              if (f = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime)
                this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (d = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / f, 0), C = this.p.getValueAtTime(this.p.keyframes[0].t / f, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (d = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / f, 0), C = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / f, 0)) : (d = this.p.pv, C = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / f, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                d = [], C = [];
                var c = this.px, S = this.py;
                c._caching.lastFrame + c.offsetTime <= c.keyframes[0].t ? (d[0] = c.getValueAtTime((c.keyframes[0].t + 0.01) / f, 0), d[1] = S.getValueAtTime((S.keyframes[0].t + 0.01) / f, 0), C[0] = c.getValueAtTime(c.keyframes[0].t / f, 0), C[1] = S.getValueAtTime(S.keyframes[0].t / f, 0)) : c._caching.lastFrame + c.offsetTime >= c.keyframes[c.keyframes.length - 1].t ? (d[0] = c.getValueAtTime(c.keyframes[c.keyframes.length - 1].t / f, 0), d[1] = S.getValueAtTime(S.keyframes[S.keyframes.length - 1].t / f, 0), C[0] = c.getValueAtTime((c.keyframes[c.keyframes.length - 1].t - 0.01) / f, 0), C[1] = S.getValueAtTime((S.keyframes[S.keyframes.length - 1].t - 0.01) / f, 0)) : (d = [c.pv, S.pv], C[0] = c.getValueAtTime((c._caching.lastFrame + c.offsetTime - 0.01) / f, c.offsetTime), C[1] = S.getValueAtTime((S._caching.lastFrame + S.offsetTime - 0.01) / f, S.offsetTime));
              } else
                C = t, d = C;
              this.v.rotate(-Math.atan2(d[1] - C[1], d[0] - C[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }
      function i() {
        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length)
          this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1;
        else
          return;
        if (!this.s.effectsSequence.length)
          this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2;
        else
          return;
        if (this.sk)
          if (!this.sk.effectsSequence.length && !this.sa.effectsSequence.length)
            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
          else
            return;
        this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : !this.rz.effectsSequence.length && !this.ry.effectsSequence.length && !this.rx.effectsSequence.length && !this.or.effectsSequence.length && (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
      }
      function s() {
      }
      function a(o) {
        this._addDynamicProperty(o), this.elem.addDynamicProperty(o), this._isDirty = !0;
      }
      function n(o, f, d) {
        if (this.elem = o, this.frameId = -1, this.propType = "transform", this.data = f, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(d || o), f.p && f.p.s ? (this.px = PropertyFactory.getProp(o, f.p.x, 0, 0, this), this.py = PropertyFactory.getProp(o, f.p.y, 0, 0, this), f.p.z && (this.pz = PropertyFactory.getProp(o, f.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(o, f.p || {
          k: [0, 0, 0]
        }, 1, 0, this), f.rx) {
          if (this.rx = PropertyFactory.getProp(o, f.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(o, f.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(o, f.rz, 0, degToRads, this), f.or.k[0].ti) {
            var C, c = f.or.k.length;
            for (C = 0; C < c; C += 1)
              f.or.k[C].to = null, f.or.k[C].ti = null;
          }
          this.or = PropertyFactory.getProp(o, f.or, 1, degToRads, this), this.or.sh = !0;
        } else
          this.r = PropertyFactory.getProp(o, f.r || {
            k: 0
          }, 0, degToRads, this);
        f.sk && (this.sk = PropertyFactory.getProp(o, f.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(o, f.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(o, f.a || {
          k: [0, 0, 0]
        }, 1, 0, this), this.s = PropertyFactory.getProp(o, f.s || {
          k: [100, 100, 100]
        }, 1, 0.01, this), f.o ? this.o = PropertyFactory.getProp(o, f.o, 0, 0.01, o) : this.o = {
          _mdf: !1,
          v: 1
        }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
      }
      n.prototype = {
        applyToMatrix: e,
        getValue: r,
        precalculateMatrix: i,
        autoOrient: s
      }, extendPrototype([DynamicPropertyContainer], n), n.prototype.addDynamicProperty = a, n.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty;
      function l(o, f, d) {
        return new n(o, f, d);
      }
      return {
        getTransformProperty: l
      };
    }();
    function RepeaterModifier() {
    }
    extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
      var n = a ? -1 : 1, l = i.s.v[0] + (1 - i.s.v[0]) * (1 - s), o = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
      t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / l : l, a ? 1 / o : o), r.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
    }, RepeaterModifier.prototype.init = function(t, e, r, i) {
      for (this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]); r > 0; )
        r -= 1, this._elements.unshift(e[r]);
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, RepeaterModifier.prototype.resetElements = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it);
    }, RepeaterModifier.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e;
    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1)
        t[r]._render = e, t[r].ty === "gr" && this.changeGroupRender(t[r].it, e);
    }, RepeaterModifier.prototype.processShapes = function(t) {
      var e, r, i, s, a, n = !1;
      if (this._mdf || t) {
        var l = Math.ceil(this.c.v);
        if (this._groups.length < l) {
          for (; this._groups.length < l; ) {
            var o = {
              it: this.cloneElements(this._elements),
              ty: "gr"
            };
            o.it.push({
              a: {
                a: 0,
                ix: 1,
                k: [0, 0]
              },
              nm: "Transform",
              o: {
                a: 0,
                ix: 7,
                k: 100
              },
              p: {
                a: 0,
                ix: 2,
                k: [0, 0]
              },
              r: {
                a: 1,
                ix: 6,
                k: [{
                  s: 0,
                  e: 0,
                  t: 0
                }, {
                  s: 0,
                  e: 0,
                  t: 1
                }]
              },
              s: {
                a: 0,
                ix: 3,
                k: [100, 100]
              },
              sa: {
                a: 0,
                ix: 5,
                k: 0
              },
              sk: {
                a: 0,
                ix: 4,
                k: 0
              },
              ty: "tr"
            }), this.arr.splice(0, 0, o), this._groups.splice(0, 0, o), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), n = !0;
        }
        a = 0;
        var f;
        for (i = 0; i <= this._groups.length - 1; i += 1) {
          if (f = a < l, this._groups[i]._render = f, this.changeGroupRender(this._groups[i].it, f), !f) {
            var d = this.elemsData[i].it, C = d[d.length - 1];
            C.transform.op.v !== 0 ? (C.transform.op._mdf = !0, C.transform.op.v = 0) : C.transform.op._mdf = !1;
          }
          a += 1;
        }
        this._currentCopies = l;
        var c = this.o.v, S = c % 1, y = c > 0 ? Math.floor(c) : Math.ceil(c), g = this.pMatrix.props, _ = this.rMatrix.props, u = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var m = 0;
        if (c > 0) {
          for (; m < y; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), m += 1;
          S && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, S, !1), m += S);
        } else if (c < 0) {
          for (; m > y; )
            this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), m -= 1;
          S && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -S, !0), m -= S);
        }
        i = this.data.m === 1 ? 0 : this._currentCopies - 1, s = this.data.m === 1 ? 1 : -1, a = this._currentCopies;
        for (var p, x; a; ) {
          if (e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, x = r.length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), m !== 0) {
            for ((i !== 0 && s === 1 || i !== this._currentCopies - 1 && s === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(_[0], _[1], _[2], _[3], _[4], _[5], _[6], _[7], _[8], _[9], _[10], _[11], _[12], _[13], _[14], _[15]), this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), p = 0; p < x; p += 1)
              r[p] = this.matrix.props[p];
            this.matrix.reset();
          } else
            for (this.matrix.reset(), p = 0; p < x; p += 1)
              r[p] = this.matrix.props[p];
          m += 1, a -= 1, i += s;
        }
      } else
        for (a = this._currentCopies, i = 0, s = 1; a; )
          e = this.elemsData[i].it, r = e[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += s;
      return n;
    }, RepeaterModifier.prototype.addShape = function() {
    };
    function RoundCornersModifier() {
    }
    extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
      var r = shapePool.newElement();
      r.c = t.c;
      var i, s = t._length, a, n, l, o, f, d, C = 0, c, S, y, g, _, u;
      for (i = 0; i < s; i += 1)
        a = t.v[i], l = t.o[i], n = t.i[i], a[0] === l[0] && a[1] === l[1] && a[0] === n[0] && a[1] === n[1] ? (i === 0 || i === s - 1) && !t.c ? (r.setTripleAt(a[0], a[1], l[0], l[1], n[0], n[1], C), C += 1) : (i === 0 ? o = t.v[s - 1] : o = t.v[i - 1], f = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), d = f ? Math.min(f / 2, e) / f : 0, _ = a[0] + (o[0] - a[0]) * d, c = _, u = a[1] - (a[1] - o[1]) * d, S = u, y = c - (c - a[0]) * roundCorner, g = S - (S - a[1]) * roundCorner, r.setTripleAt(c, S, y, g, _, u, C), C += 1, i === s - 1 ? o = t.v[0] : o = t.v[i + 1], f = Math.sqrt(Math.pow(a[0] - o[0], 2) + Math.pow(a[1] - o[1], 2)), d = f ? Math.min(f / 2, e) / f : 0, y = a[0] + (o[0] - a[0]) * d, c = y, g = a[1] + (o[1] - a[1]) * d, S = g, _ = c - (c - a[0]) * roundCorner, u = S - (S - a[1]) * roundCorner, r.setTripleAt(c, S, y, g, _, u, C), C += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], C), C += 1);
      return r;
    }, RoundCornersModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, a, n = this.rd.v;
      if (n !== 0) {
        var l, o;
        for (r = 0; r < i; r += 1) {
          if (l = this.shapes[r], o = l.localShapeCollection, !(!l.shape._mdf && !this._mdf && !t))
            for (o.releaseShapes(), l.shape._mdf = !0, e = l.shape.paths.shapes, a = l.shape.paths._length, s = 0; s < a; s += 1)
              o.addShape(this.processPath(e[s], n));
          l.shape.paths = l.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    function floatEqual(t, e) {
      return Math.abs(t - e) * 1e5 <= Math.min(Math.abs(t), Math.abs(e));
    }
    function floatZero(t) {
      return Math.abs(t) <= 1e-5;
    }
    function lerp(t, e, r) {
      return t * (1 - r) + e * r;
    }
    function lerpPoint(t, e, r) {
      return [lerp(t[0], e[0], r), lerp(t[1], e[1], r)];
    }
    function quadRoots(t, e, r) {
      if (t === 0)
        return [];
      var i = e * e - 4 * t * r;
      if (i < 0)
        return [];
      var s = -e / (2 * t);
      if (i === 0)
        return [s];
      var a = Math.sqrt(i) / (2 * t);
      return [s - a, s + a];
    }
    function polynomialCoefficients(t, e, r, i) {
      return [-t + 3 * e - 3 * r + i, 3 * t - 6 * e + 3 * r, -3 * t + 3 * e, t];
    }
    function singlePoint(t) {
      return new PolynomialBezier(t, t, t, t, !1);
    }
    function PolynomialBezier(t, e, r, i, s) {
      s && pointEqual(t, e) && (e = lerpPoint(t, i, 1 / 3)), s && pointEqual(r, i) && (r = lerpPoint(t, i, 2 / 3));
      var a = polynomialCoefficients(t[0], e[0], r[0], i[0]), n = polynomialCoefficients(t[1], e[1], r[1], i[1]);
      this.a = [a[0], n[0]], this.b = [a[1], n[1]], this.c = [a[2], n[2]], this.d = [a[3], n[3]], this.points = [t, e, r, i];
    }
    PolynomialBezier.prototype.point = function(t) {
      return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
    }, PolynomialBezier.prototype.derivative = function(t) {
      return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
    }, PolynomialBezier.prototype.tangentAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[1], e[0]);
    }, PolynomialBezier.prototype.normalAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[0], e[1]);
    }, PolynomialBezier.prototype.inflectionPoints = function() {
      var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (floatZero(t))
        return [];
      var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, r = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
      if (r < 0)
        return [];
      var i = Math.sqrt(r);
      return floatZero(i) ? i > 0 && i < 1 ? [e] : [] : [e - i, e + i].filter(function(s) {
        return s > 0 && s < 1;
      });
    }, PolynomialBezier.prototype.split = function(t) {
      if (t <= 0)
        return [singlePoint(this.points[0]), this];
      if (t >= 1)
        return [this, singlePoint(this.points[this.points.length - 1])];
      var e = lerpPoint(this.points[0], this.points[1], t), r = lerpPoint(this.points[1], this.points[2], t), i = lerpPoint(this.points[2], this.points[3], t), s = lerpPoint(e, r, t), a = lerpPoint(r, i, t), n = lerpPoint(s, a, t);
      return [new PolynomialBezier(this.points[0], e, s, n, !0), new PolynomialBezier(n, a, i, this.points[3], !0)];
    };
    function extrema(t, e) {
      var r = t.points[0][e], i = t.points[t.points.length - 1][e];
      if (r > i) {
        var s = i;
        i = r, r = s;
      }
      for (var a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), n = 0; n < a.length; n += 1)
        if (a[n] > 0 && a[n] < 1) {
          var l = t.point(a[n])[e];
          l < r ? r = l : l > i && (i = l);
        }
      return {
        min: r,
        max: i
      };
    }
    PolynomialBezier.prototype.bounds = function() {
      return {
        x: extrema(this, 0),
        y: extrema(this, 1)
      };
    }, PolynomialBezier.prototype.boundingBox = function() {
      var t = this.bounds();
      return {
        left: t.x.min,
        right: t.x.max,
        top: t.y.min,
        bottom: t.y.max,
        width: t.x.max - t.x.min,
        height: t.y.max - t.y.min,
        cx: (t.x.max + t.x.min) / 2,
        cy: (t.y.max + t.y.min) / 2
      };
    };
    function intersectData(t, e, r) {
      var i = t.boundingBox();
      return {
        cx: i.cx,
        cy: i.cy,
        width: i.width,
        height: i.height,
        bez: t,
        t: (e + r) / 2,
        t1: e,
        t2: r
      };
    }
    function splitData(t) {
      var e = t.bez.split(0.5);
      return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)];
    }
    function boxIntersect(t, e) {
      return Math.abs(t.cx - e.cx) * 2 < t.width + e.width && Math.abs(t.cy - e.cy) * 2 < t.height + e.height;
    }
    function intersectsImpl(t, e, r, i, s, a) {
      if (boxIntersect(t, e)) {
        if (r >= a || t.width <= i && t.height <= i && e.width <= i && e.height <= i) {
          s.push([t.t, e.t]);
          return;
        }
        var n = splitData(t), l = splitData(e);
        intersectsImpl(n[0], l[0], r + 1, i, s, a), intersectsImpl(n[0], l[1], r + 1, i, s, a), intersectsImpl(n[1], l[0], r + 1, i, s, a), intersectsImpl(n[1], l[1], r + 1, i, s, a);
      }
    }
    PolynomialBezier.prototype.intersections = function(t, e, r) {
      e === void 0 && (e = 2), r === void 0 && (r = 7);
      var i = [];
      return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, i, r), i;
    }, PolynomialBezier.shapeSegment = function(t, e) {
      var r = (e + 1) % t.length();
      return new PolynomialBezier(t.v[e], t.o[e], t.i[r], t.v[r], !0);
    }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
      var r = (e + 1) % t.length();
      return new PolynomialBezier(t.v[r], t.i[r], t.o[e], t.v[e], !0);
    };
    function crossProduct(t, e) {
      return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
    }
    function lineIntersection(t, e, r, i) {
      var s = [t[0], t[1], 1], a = [e[0], e[1], 1], n = [r[0], r[1], 1], l = [i[0], i[1], 1], o = crossProduct(crossProduct(s, a), crossProduct(n, l));
      return floatZero(o[2]) ? null : [o[0] / o[2], o[1] / o[2]];
    }
    function polarOffset(t, e, r) {
      return [t[0] + Math.cos(e) * r, t[1] - Math.sin(e) * r];
    }
    function pointDistance(t, e) {
      return Math.hypot(t[0] - e[0], t[1] - e[1]);
    }
    function pointEqual(t, e) {
      return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
    }
    function ZigZagModifier() {
    }
    extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    };
    function setPoint(t, e, r, i, s, a, n) {
      var l = r - Math.PI / 2, o = r + Math.PI / 2, f = e[0] + Math.cos(r) * i * s, d = e[1] - Math.sin(r) * i * s;
      t.setTripleAt(f, d, f + Math.cos(l) * a, d - Math.sin(l) * a, f + Math.cos(o) * n, d - Math.sin(o) * n, t.length());
    }
    function getPerpendicularVector(t, e) {
      var r = [e[0] - t[0], e[1] - t[1]], i = -Math.PI * 0.5, s = [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]];
      return s;
    }
    function getProjectingAngle(t, e) {
      var r = e === 0 ? t.length() - 1 : e - 1, i = (e + 1) % t.length(), s = t.v[r], a = t.v[i], n = getPerpendicularVector(s, a);
      return Math.atan2(0, 1) - Math.atan2(n[1], n[0]);
    }
    function zigZagCorner(t, e, r, i, s, a, n) {
      var l = getProjectingAngle(e, r), o = e.v[r % e._length], f = e.v[r === 0 ? e._length - 1 : r - 1], d = e.v[(r + 1) % e._length], C = a === 2 ? Math.sqrt(Math.pow(o[0] - f[0], 2) + Math.pow(o[1] - f[1], 2)) : 0, c = a === 2 ? Math.sqrt(Math.pow(o[0] - d[0], 2) + Math.pow(o[1] - d[1], 2)) : 0;
      setPoint(t, e.v[r % e._length], l, n, i, c / ((s + 1) * 2), C / ((s + 1) * 2));
    }
    function zigZagSegment(t, e, r, i, s, a) {
      for (var n = 0; n < i; n += 1) {
        var l = (n + 1) / (i + 1), o = s === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, f = e.normalAngle(l), d = e.point(l);
        setPoint(t, d, f, a, r, o / ((i + 1) * 2), o / ((i + 1) * 2)), a = -a;
      }
      return a;
    }
    ZigZagModifier.prototype.processPath = function(t, e, r, i) {
      var s = t._length, a = shapePool.newElement();
      if (a.c = t.c, t.c || (s -= 1), s === 0)
        return a;
      var n = -1, l = PolynomialBezier.shapeSegment(t, 0);
      zigZagCorner(a, t, 0, e, r, i, n);
      for (var o = 0; o < s; o += 1)
        n = zigZagSegment(a, l, e, r, i, -n), o === s - 1 && !t.c ? l = null : l = PolynomialBezier.shapeSegment(t, (o + 1) % s), zigZagCorner(a, t, o + 1, e, r, i, n);
      return a;
    }, ZigZagModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, a, n = this.amplitude.v, l = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
      if (n !== 0) {
        var f, d;
        for (r = 0; r < i; r += 1) {
          if (f = this.shapes[r], d = f.localShapeCollection, !(!f.shape._mdf && !this._mdf && !t))
            for (d.releaseShapes(), f.shape._mdf = !0, e = f.shape.paths.shapes, a = f.shape.paths._length, s = 0; s < a; s += 1)
              d.addShape(this.processPath(e[s], n, l, o));
          f.shape.paths = f.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    function linearOffset(t, e, r) {
      var i = Math.atan2(e[0] - t[0], e[1] - t[1]);
      return [polarOffset(t, i, r), polarOffset(e, i, r)];
    }
    function offsetSegment(t, e) {
      var r, i, s, a, n, l, o;
      o = linearOffset(t.points[0], t.points[1], e), r = o[0], i = o[1], o = linearOffset(t.points[1], t.points[2], e), s = o[0], a = o[1], o = linearOffset(t.points[2], t.points[3], e), n = o[0], l = o[1];
      var f = lineIntersection(r, i, s, a);
      f === null && (f = i);
      var d = lineIntersection(n, l, s, a);
      return d === null && (d = n), new PolynomialBezier(r, f, d, l);
    }
    function joinLines(t, e, r, i, s) {
      var a = e.points[3], n = r.points[0];
      if (i === 3 || pointEqual(a, n))
        return a;
      if (i === 2) {
        var l = -e.tangentAngle(1), o = -r.tangentAngle(0) + Math.PI, f = lineIntersection(a, polarOffset(a, l + Math.PI / 2, 100), n, polarOffset(n, l + Math.PI / 2, 100)), d = f ? pointDistance(f, a) : pointDistance(a, n) / 2, C = polarOffset(a, l, 2 * d * roundCorner);
        return t.setXYAt(C[0], C[1], "o", t.length() - 1), C = polarOffset(n, o, 2 * d * roundCorner), t.setTripleAt(n[0], n[1], n[0], n[1], C[0], C[1], t.length()), n;
      }
      var c = pointEqual(a, e.points[2]) ? e.points[0] : e.points[2], S = pointEqual(n, r.points[1]) ? r.points[3] : r.points[1], y = lineIntersection(c, a, n, S);
      return y && pointDistance(y, a) < s ? (t.setTripleAt(y[0], y[1], y[0], y[1], y[0], y[1], t.length()), y) : a;
    }
    function getIntersection(t, e) {
      var r = t.intersections(e);
      return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null;
    }
    function pruneSegmentIntersection(t, e) {
      var r = t.slice(), i = e.slice(), s = getIntersection(t[t.length - 1], e[0]);
      return s && (r[t.length - 1] = t[t.length - 1].split(s[0])[0], i[0] = e[0].split(s[1])[1]), t.length > 1 && e.length > 1 && (s = getIntersection(t[0], e[e.length - 1]), s) ? [[t[0].split(s[0])[0]], [e[e.length - 1].split(s[1])[1]]] : [r, i];
    }
    function pruneIntersections(t) {
      for (var e, r = 1; r < t.length; r += 1)
        e = pruneSegmentIntersection(t[r - 1], t[r]), t[r - 1] = e[0], t[r] = e[1];
      return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
    }
    function offsetSegmentSplit(t, e) {
      var r = t.inflectionPoints(), i, s, a, n;
      if (r.length === 0)
        return [offsetSegment(t, e)];
      if (r.length === 1 || floatEqual(r[1], 1))
        return a = t.split(r[0]), i = a[0], s = a[1], [offsetSegment(i, e), offsetSegment(s, e)];
      a = t.split(r[0]), i = a[0];
      var l = (r[1] - r[0]) / (1 - r[0]);
      return a = a[1].split(l), n = a[0], s = a[1], [offsetSegment(i, e), offsetSegment(n, e), offsetSegment(s, e)];
    }
    function OffsetPathModifier() {
    }
    extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
    }, OffsetPathModifier.prototype.processPath = function(t, e, r, i) {
      var s = shapePool.newElement();
      s.c = t.c;
      var a = t.length();
      t.c || (a -= 1);
      var n, l, o, f = [];
      for (n = 0; n < a; n += 1)
        o = PolynomialBezier.shapeSegment(t, n), f.push(offsetSegmentSplit(o, e));
      if (!t.c)
        for (n = a - 1; n >= 0; n -= 1)
          o = PolynomialBezier.shapeSegmentInverted(t, n), f.push(offsetSegmentSplit(o, e));
      f = pruneIntersections(f);
      var d = null, C = null;
      for (n = 0; n < f.length; n += 1) {
        var c = f[n];
        for (C && (d = joinLines(s, C, c[0], r, i)), C = c[c.length - 1], l = 0; l < c.length; l += 1)
          o = c[l], d && pointEqual(o.points[0], d) ? s.setXYAt(o.points[1][0], o.points[1][1], "o", s.length() - 1) : s.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], s.length()), s.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], s.length()), d = o.points[3];
      }
      return f.length && joinLines(s, C, f[0][0], r, i), s;
    }, OffsetPathModifier.prototype.processShapes = function(t) {
      var e, r, i = this.shapes.length, s, a, n = this.amount.v, l = this.miterLimit.v, o = this.lineJoin;
      if (n !== 0) {
        var f, d;
        for (r = 0; r < i; r += 1) {
          if (f = this.shapes[r], d = f.localShapeCollection, !(!f.shape._mdf && !this._mdf && !t))
            for (d.releaseShapes(), f.shape._mdf = !0, e = f.shape.paths.shapes, a = f.shape.paths._length, s = 0; s < a; s += 1)
              d.addShape(this.processPath(e[s], n, o, l));
          f.shape.paths = f.localShapeCollection;
        }
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    function getFontProperties(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], r = "normal", i = "normal", s = e.length, a, n = 0; n < s; n += 1)
        switch (a = e[n].toLowerCase(), a) {
          case "italic":
            i = "italic";
            break;
          case "bold":
            r = "700";
            break;
          case "black":
            r = "900";
            break;
          case "medium":
            r = "500";
            break;
          case "regular":
          case "normal":
            r = "400";
            break;
          case "light":
          case "thin":
            r = "200";
            break;
        }
      return {
        style: i,
        weight: t.fWeight || r
      };
    }
    var FontManager = function() {
      var t = 5e3, e = {
        w: 0,
        size: 0,
        shapes: [],
        data: {
          shapes: []
        }
      }, r = [];
      r = r.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var i = 127988, s = 917631, a = 917601, n = 917626, l = 65039, o = 8205, f = 127462, d = 127487, C = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function c(T) {
        var M = T.split(","), b, A = M.length, L = [];
        for (b = 0; b < A; b += 1)
          M[b] !== "sans-serif" && M[b] !== "monospace" && L.push(M[b]);
        return L.join(",");
      }
      function S(T, M) {
        var b = createTag("span");
        b.setAttribute("aria-hidden", !0), b.style.fontFamily = M;
        var A = createTag("span");
        A.innerText = "giItT1WQy@!-/#", b.style.position = "absolute", b.style.left = "-10000px", b.style.top = "-10000px", b.style.fontSize = "300px", b.style.fontVariant = "normal", b.style.fontStyle = "normal", b.style.fontWeight = "normal", b.style.letterSpacing = "0", b.appendChild(A), document.body.appendChild(b);
        var L = A.offsetWidth;
        return A.style.fontFamily = c(T) + ", " + M, {
          node: A,
          w: L,
          parent: b
        };
      }
      function y() {
        var T, M = this.fonts.length, b, A, L = M;
        for (T = 0; T < M; T += 1)
          this.fonts[T].loaded ? L -= 1 : this.fonts[T].fOrigin === "n" || this.fonts[T].origin === 0 ? this.fonts[T].loaded = !0 : (b = this.fonts[T].monoCase.node, A = this.fonts[T].monoCase.w, b.offsetWidth !== A ? (L -= 1, this.fonts[T].loaded = !0) : (b = this.fonts[T].sansCase.node, A = this.fonts[T].sansCase.w, b.offsetWidth !== A && (L -= 1, this.fonts[T].loaded = !0)), this.fonts[T].loaded && (this.fonts[T].sansCase.parent.parentNode.removeChild(this.fonts[T].sansCase.parent), this.fonts[T].monoCase.parent.parentNode.removeChild(this.fonts[T].monoCase.parent)));
        L !== 0 && Date.now() - this.initTime < t ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }
      function g(T, M) {
        var b = document.body && M ? "svg" : "canvas", A, L = getFontProperties(T);
        if (b === "svg") {
          var F = createNS("text");
          F.style.fontSize = "100px", F.setAttribute("font-family", T.fFamily), F.setAttribute("font-style", L.style), F.setAttribute("font-weight", L.weight), F.textContent = "1", T.fClass ? (F.style.fontFamily = "inherit", F.setAttribute("class", T.fClass)) : F.style.fontFamily = T.fFamily, M.appendChild(F), A = F;
        } else {
          var B = new OffscreenCanvas(500, 500).getContext("2d");
          B.font = L.style + " " + L.weight + " 100px " + T.fFamily, A = B;
        }
        function G(N) {
          return b === "svg" ? (A.textContent = N, A.getComputedTextLength()) : A.measureText(N).width;
        }
        return {
          measureText: G
        };
      }
      function _(T, M) {
        if (!T) {
          this.isLoaded = !0;
          return;
        }
        if (this.chars) {
          this.isLoaded = !0, this.fonts = T.list;
          return;
        }
        if (!document.body) {
          this.isLoaded = !0, T.list.forEach(function(K) {
            K.helper = g(K), K.cache = {};
          }), this.fonts = T.list;
          return;
        }
        var b = T.list, A, L = b.length, F = L;
        for (A = 0; A < L; A += 1) {
          var B = !0, G, N;
          if (b[A].loaded = !1, b[A].monoCase = S(b[A].fFamily, "monospace"), b[A].sansCase = S(b[A].fFamily, "sans-serif"), !b[A].fPath)
            b[A].loaded = !0, F -= 1;
          else if (b[A].fOrigin === "p" || b[A].origin === 3) {
            if (G = document.querySelectorAll('style[f-forigin="p"][f-family="' + b[A].fFamily + '"], style[f-origin="3"][f-family="' + b[A].fFamily + '"]'), G.length > 0 && (B = !1), B) {
              var q = createTag("style");
              q.setAttribute("f-forigin", b[A].fOrigin), q.setAttribute("f-origin", b[A].origin), q.setAttribute("f-family", b[A].fFamily), q.type = "text/css", q.innerText = "@font-face {font-family: " + b[A].fFamily + "; font-style: normal; src: url('" + b[A].fPath + "');}", M.appendChild(q);
            }
          } else if (b[A].fOrigin === "g" || b[A].origin === 1) {
            for (G = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), N = 0; N < G.length; N += 1)
              G[N].href.indexOf(b[A].fPath) !== -1 && (B = !1);
            if (B) {
              var Y = createTag("link");
              Y.setAttribute("f-forigin", b[A].fOrigin), Y.setAttribute("f-origin", b[A].origin), Y.type = "text/css", Y.rel = "stylesheet", Y.href = b[A].fPath, document.body.appendChild(Y);
            }
          } else if (b[A].fOrigin === "t" || b[A].origin === 2) {
            for (G = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), N = 0; N < G.length; N += 1)
              b[A].fPath === G[N].src && (B = !1);
            if (B) {
              var Z = createTag("link");
              Z.setAttribute("f-forigin", b[A].fOrigin), Z.setAttribute("f-origin", b[A].origin), Z.setAttribute("rel", "stylesheet"), Z.setAttribute("href", b[A].fPath), M.appendChild(Z);
            }
          }
          b[A].helper = g(b[A], M), b[A].cache = {}, this.fonts.push(b[A]);
        }
        F === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
      }
      function u(T) {
        if (T) {
          this.chars || (this.chars = []);
          var M, b = T.length, A, L = this.chars.length, F;
          for (M = 0; M < b; M += 1) {
            for (A = 0, F = !1; A < L; )
              this.chars[A].style === T[M].style && this.chars[A].fFamily === T[M].fFamily && this.chars[A].ch === T[M].ch && (F = !0), A += 1;
            F || (this.chars.push(T[M]), L += 1);
          }
        }
      }
      function m(T, M, b) {
        for (var A = 0, L = this.chars.length; A < L; ) {
          if (this.chars[A].ch === T && this.chars[A].style === M && this.chars[A].fFamily === b)
            return this.chars[A];
          A += 1;
        }
        return (typeof T == "string" && T.charCodeAt(0) !== 13 || !T) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", T, M, b)), e;
      }
      function p(T, M, b) {
        var A = this.getFontByName(M), L = T;
        if (!A.cache[L]) {
          var F = A.helper;
          if (T === " ") {
            var B = F.measureText("|" + T + "|"), G = F.measureText("||");
            A.cache[L] = (B - G) / 100;
          } else
            A.cache[L] = F.measureText(T) / 100;
        }
        return A.cache[L] * b;
      }
      function x(T) {
        for (var M = 0, b = this.fonts.length; M < b; ) {
          if (this.fonts[M].fName === T)
            return this.fonts[M];
          M += 1;
        }
        return this.fonts[0];
      }
      function P(T) {
        var M = 0, b = T.charCodeAt(0);
        if (b >= 55296 && b <= 56319) {
          var A = T.charCodeAt(1);
          A >= 56320 && A <= 57343 && (M = (b - 55296) * 1024 + A - 56320 + 65536);
        }
        return M;
      }
      function E(T, M) {
        var b = T.toString(16) + M.toString(16);
        return C.indexOf(b) !== -1;
      }
      function k(T) {
        return T === o;
      }
      function I(T) {
        return T === l;
      }
      function V(T) {
        var M = P(T);
        return M >= f && M <= d;
      }
      function H(T) {
        return V(T.substr(0, 2)) && V(T.substr(2, 2));
      }
      function O(T) {
        return r.indexOf(T) !== -1;
      }
      function D(T, M) {
        var b = P(T.substr(M, 2));
        if (b !== i)
          return !1;
        var A = 0;
        for (M += 2; A < 5; ) {
          if (b = P(T.substr(M, 2)), b < a || b > n)
            return !1;
          A += 1, M += 2;
        }
        return P(T.substr(M, 2)) === s;
      }
      function z() {
        this.isLoaded = !0;
      }
      var j = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      j.isModifier = E, j.isZeroWidthJoiner = k, j.isFlagEmoji = H, j.isRegionalCode = V, j.isCombinedCharacter = O, j.isRegionalFlag = D, j.isVariationSelector = I, j.BLACK_FLAG_CODE_POINT = i;
      var R = {
        addChars: u,
        addFonts: _,
        getCharData: m,
        getFontByName: x,
        measureText: p,
        checkLoadedFonts: y,
        setIsLoaded: z
      };
      return j.prototype = R, j;
    }();
    function SlotManager(t) {
      this.animationData = t;
    }
    SlotManager.prototype.getProp = function(t) {
      return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
    };
    function slotFactory(t) {
      return new SlotManager(t);
    }
    function RenderableElement() {
    }
    RenderableElement.prototype = {
      initRenderable: function() {
        this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
      },
      addRenderableComponent: function(e) {
        this.renderableComponents.indexOf(e) === -1 && this.renderableComponents.push(e);
      },
      removeRenderableComponent: function(e) {
        this.renderableComponents.indexOf(e) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1);
      },
      prepareRenderableFrame: function(e) {
        this.checkLayerLimits(e);
      },
      checkTransparency: function() {
        this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
      },
      /**
         * @function
         * Initializes frame related properties.
         *
         * @param {number} num
         * current frame number in Layer's time
         *
         */
      checkLayerLimits: function(e) {
        this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
      },
      renderRenderable: function() {
        var e, r = this.renderableComponents.length;
        for (e = 0; e < r; e += 1)
          this.renderableComponents[e].renderFrame(this._isFirstFrame);
      },
      sourceRectAtTime: function() {
        return {
          top: 0,
          left: 0,
          width: 100,
          height: 100
        };
      },
      getLayerSize: function() {
        return this.data.ty === 5 ? {
          w: this.data.textData.width,
          h: this.data.textData.height
        } : {
          w: this.data.width,
          h: this.data.height
        };
      }
    };
    var getBlendMode = /* @__PURE__ */ function() {
      var t = {
        0: "source-over",
        1: "multiply",
        2: "screen",
        3: "overlay",
        4: "darken",
        5: "lighten",
        6: "color-dodge",
        7: "color-burn",
        8: "hard-light",
        9: "soft-light",
        10: "difference",
        11: "exclusion",
        12: "hue",
        13: "saturation",
        14: "color",
        15: "luminosity"
      };
      return function(e) {
        return t[e] || "";
      };
    }();
    function SliderEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function AngleEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function ColorEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
    }
    function PointEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, r);
    }
    function LayerIndexEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function MaskIndexEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function CheckboxEffect(t, e, r) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, r);
    }
    function NoValueEffect() {
      this.p = {};
    }
    function EffectsManager(t, e) {
      var r = t.ef || [];
      this.effectElements = [];
      var i, s = r.length, a;
      for (i = 0; i < s; i += 1)
        a = new GroupEffect(r[i], e), this.effectElements.push(a);
    }
    function GroupEffect(t, e) {
      this.init(t, e);
    }
    extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var r, i = this.data.ef.length, s, a = this.data.ef;
      for (r = 0; r < i; r += 1) {
        switch (s = null, a[r].ty) {
          case 0:
            s = new SliderEffect(a[r], e, this);
            break;
          case 1:
            s = new AngleEffect(a[r], e, this);
            break;
          case 2:
            s = new ColorEffect(a[r], e, this);
            break;
          case 3:
            s = new PointEffect(a[r], e, this);
            break;
          case 4:
          case 7:
            s = new CheckboxEffect(a[r], e, this);
            break;
          case 10:
            s = new LayerIndexEffect(a[r], e, this);
            break;
          case 11:
            s = new MaskIndexEffect(a[r], e, this);
            break;
          case 5:
            s = new EffectsManager(a[r], e);
            break;
          default:
            s = new NoValueEffect(a[r]);
            break;
        }
        s && this.effectElements.push(s);
      }
    };
    function BaseElement() {
    }
    BaseElement.prototype = {
      checkMasks: function() {
        if (!this.data.hasMask)
          return !1;
        for (var e = 0, r = this.data.masksProperties.length; e < r; ) {
          if (this.data.masksProperties[e].mode !== "n" && this.data.masksProperties[e].cl !== !1)
            return !0;
          e += 1;
        }
        return !1;
      },
      initExpressions: function() {
        var e = getExpressionInterfaces();
        if (e) {
          var r = e("layer"), i = e("effects"), s = e("shape"), a = e("text"), n = e("comp");
          this.layerInterface = r(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
          var l = i.createEffectsInterface(this, this.layerInterface);
          this.layerInterface.registerEffectsInterface(l), this.data.ty === 0 || this.data.xt ? this.compInterface = n(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = s(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface);
        }
      },
      setBlendMode: function() {
        var e = getBlendMode(this.data.bm), r = this.baseElement || this.layerElement;
        r.style["mix-blend-mode"] = e;
      },
      initBaseData: function(e, r, i) {
        this.globalData = r, this.comp = i, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
      },
      getType: function() {
        return this.type;
      },
      sourceRectAtTime: function() {
      }
    };
    function FrameElement() {
    }
    FrameElement.prototype = {
      /**
         * @function
         * Initializes frame related properties.
         *
         */
      initFrame: function() {
        this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
      },
      /**
         * @function
         * Calculates all dynamic values
         *
         * @param {number} num
         * current frame number in Layer's time
         * @param {boolean} isVisible
         * if layers is currently in range
         *
         */
      prepareProperties: function(e, r) {
        var i, s = this.dynamicProperties.length;
        for (i = 0; i < s; i += 1)
          (r || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
      },
      addDynamicProperty: function(e) {
        this.dynamicProperties.indexOf(e) === -1 && this.dynamicProperties.push(e);
      }
    };
    function FootageElement(t, e, r) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, r);
    }
    FootageElement.prototype.prepareFrame = function() {
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
      return null;
    }, FootageElement.prototype.renderFrame = function() {
    }, FootageElement.prototype.destroy = function() {
    }, FootageElement.prototype.initExpressions = function() {
      var t = getExpressionInterfaces();
      if (t) {
        var e = t("footage");
        this.layerInterface = e(this);
      }
    }, FootageElement.prototype.getFootageData = function() {
      return this.footageData;
    };
    function AudioElement(t, e, r) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, r), this._isPlaying = !1, this._canPlay = !1;
      var i = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {
        k: [100]
      }, 1, 0.01, this);
    }
    AudioElement.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder)
        this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e;
      }
      this._volume = this.lv.v[0];
      var r = this._volume * this._volumeMultiplier;
      this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r));
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
    }, AudioElement.prototype.show = function() {
    }, AudioElement.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = !1;
    }, AudioElement.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
    }, AudioElement.prototype.resume = function() {
      this._canPlay = !0;
    }, AudioElement.prototype.setRate = function(t) {
      this.audio.rate(t);
    }, AudioElement.prototype.volume = function(t) {
      this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
    }, AudioElement.prototype.getBaseElement = function() {
      return null;
    }, AudioElement.prototype.destroy = function() {
    }, AudioElement.prototype.sourceRectAtTime = function() {
    }, AudioElement.prototype.initExpressions = function() {
    };
    function BaseRenderer() {
    }
    BaseRenderer.prototype.checkLayers = function(t) {
      var e, r = this.layers.length, i;
      for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1)
        this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = this.elements[e] ? this.completeLayers : !1;
      this.checkPendingElements();
    }, BaseRenderer.prototype.createItem = function(t) {
      switch (t.ty) {
        case 2:
          return this.createImage(t);
        case 0:
          return this.createComp(t);
        case 1:
          return this.createSolid(t);
        case 3:
          return this.createNull(t);
        case 4:
          return this.createShape(t);
        case 5:
          return this.createText(t);
        case 6:
          return this.createAudio(t);
        case 13:
          return this.createCamera(t);
        case 15:
          return this.createFootage(t);
        default:
          return this.createNull(t);
      }
    }, BaseRenderer.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, BaseRenderer.prototype.createAudio = function(t) {
      return new AudioElement(t, this.globalData, this);
    }, BaseRenderer.prototype.createFootage = function(t) {
      return new FootageElement(t, this.globalData, this);
    }, BaseRenderer.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        this.buildItem(t);
      this.checkPendingElements();
    }, BaseRenderer.prototype.includeLayers = function(t) {
      this.completeLayers = !1;
      var e, r = t.length, i, s = this.layers.length;
      for (e = 0; e < r; e += 1)
        for (i = 0; i < s; ) {
          if (this.layers[i].id === t[e].id) {
            this.layers[i] = t[e];
            break;
          }
          i += 1;
        }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t;
    }, BaseRenderer.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
      for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n; )
        s[a].ind == e && (!i[a] || i[a] === !0 ? (this.buildItem(a), this.addPendingElement(t)) : (r.push(i[a]), i[a].setAsParent(), s[a].parent !== void 0 ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r))), a += 1;
    }, BaseRenderer.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t);
    }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        if (t[e].xt) {
          var i = this.createComp(t[e]);
          i.initExpressions(), this.globalData.projectInterface.registerComposition(i);
        }
    }, BaseRenderer.prototype.getElementById = function(t) {
      var e, r = this.elements.length;
      for (e = 0; e < r; e += 1)
        if (this.elements[e].data.ind === t)
          return this.elements[e];
      return null;
    }, BaseRenderer.prototype.getElementByPath = function(t) {
      var e = t.shift(), r;
      if (typeof e == "number")
        r = this.elements[e];
      else {
        var i, s = this.elements.length;
        for (i = 0; i < s; i += 1)
          if (this.elements[i].data.nm === e) {
            r = this.elements[i];
            break;
          }
      }
      return t.length === 0 ? r : r.getElementByPath(t);
    }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new FontManager(), this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
        w: t.w,
        h: t.h
      };
    };
    var effectTypes = {
      TRANSFORM_EFFECT: "transformEFfect"
    };
    function TransformElement() {
    }
    TransformElement.prototype = {
      initTransform: function() {
        var e = new Matrix();
        this.finalTransform = {
          mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
            o: 0
          },
          _matMdf: !1,
          _localMatMdf: !1,
          _opMdf: !1,
          mat: e,
          localMat: e,
          localOpacity: 1
        }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
      },
      renderTransform: function() {
        if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
          var e, r = this.finalTransform.mat, i = 0, s = this.hierarchy.length;
          if (!this.finalTransform._matMdf)
            for (; i < s; ) {
              if (this.hierarchy[i].finalTransform.mProp._mdf) {
                this.finalTransform._matMdf = !0;
                break;
              }
              i += 1;
            }
          if (this.finalTransform._matMdf)
            for (e = this.finalTransform.mProp.v.props, r.cloneFromProps(e), i = 0; i < s; i += 1)
              r.multiply(this.hierarchy[i].finalTransform.mProp.v);
        }
        this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
      },
      renderLocalTransform: function() {
        if (this.localTransforms) {
          var e = 0, r = this.localTransforms.length;
          if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
            for (; e < r; )
              this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
          if (this.finalTransform._localMatMdf) {
            var i = this.finalTransform.localMat;
            for (this.localTransforms[0].matrix.clone(i), e = 1; e < r; e += 1) {
              var s = this.localTransforms[e].matrix;
              i.multiply(s);
            }
            i.multiply(this.finalTransform.mat);
          }
          if (this.finalTransform._opMdf) {
            var a = this.finalTransform.localOpacity;
            for (e = 0; e < r; e += 1)
              a *= this.localTransforms[e].opacity * 0.01;
            this.finalTransform.localOpacity = a;
          }
        }
      },
      searchEffectTransforms: function() {
        if (this.renderableEffectsManager) {
          var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
          if (e.length) {
            this.localTransforms = [], this.finalTransform.localMat = new Matrix();
            var r = 0, i = e.length;
            for (r = 0; r < i; r += 1)
              this.localTransforms.push(e[r]);
          }
        }
      },
      globalToLocal: function(e) {
        var r = [];
        r.push(this.finalTransform);
        for (var i = !0, s = this.comp; i; )
          s.finalTransform ? (s.data.hasMask && r.splice(0, 0, s.finalTransform), s = s.comp) : i = !1;
        var a, n = r.length, l;
        for (a = 0; a < n; a += 1)
          l = r[a].mat.applyToPointArray(0, 0, 0), e = [e[0] - l[0], e[1] - l[1], 0];
        return e;
      },
      mHelper: new Matrix()
    };
    function MaskElement(t, e, r) {
      this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var i = this.globalData.defs, s, a = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(a), this.solidPath = "";
      var n, l = this.masksProperties, o = 0, f = [], d, C, c = createElementID(), S, y, g, _, u = "clipPath", m = "clip-path";
      for (s = 0; s < a; s += 1)
        if ((l[s].mode !== "a" && l[s].mode !== "n" || l[s].inv || l[s].o.k !== 100 || l[s].o.x) && (u = "mask", m = "mask"), (l[s].mode === "s" || l[s].mode === "i") && o === 0 ? (S = createNS("rect"), S.setAttribute("fill", "#ffffff"), S.setAttribute("width", this.element.comp.data.w || 0), S.setAttribute("height", this.element.comp.data.h || 0), f.push(S)) : S = null, n = createNS("path"), l[s].mode === "n")
          this.viewData[s] = {
            op: PropertyFactory.getProp(this.element, l[s].o, 0, 0.01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
            elem: n,
            lastPath: ""
          }, i.appendChild(n);
        else {
          o += 1, n.setAttribute("fill", l[s].mode === "s" ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero");
          var p;
          if (l[s].x.k !== 0 ? (u = "mask", m = "mask", _ = PropertyFactory.getProp(this.element, l[s].x, 0, null, this.element), p = createElementID(), y = createNS("filter"), y.setAttribute("id", p), g = createNS("feMorphology"), g.setAttribute("operator", "erode"), g.setAttribute("in", "SourceGraphic"), g.setAttribute("radius", "0"), y.appendChild(g), i.appendChild(y), n.setAttribute("stroke", l[s].mode === "s" ? "#000000" : "#ffffff")) : (g = null, _ = null), this.storedData[s] = {
            elem: n,
            x: _,
            expan: g,
            lastPath: "",
            lastOperator: "",
            filterId: p,
            lastRadius: 0
          }, l[s].mode === "i") {
            C = f.length;
            var x = createNS("g");
            for (d = 0; d < C; d += 1)
              x.appendChild(f[d]);
            var P = createNS("mask");
            P.setAttribute("mask-type", "alpha"), P.setAttribute("id", c + "_" + o), P.appendChild(n), i.appendChild(P), x.setAttribute("mask", "url(" + getLocationHref() + "#" + c + "_" + o + ")"), f.length = 0, f.push(x);
          } else
            f.push(n);
          l[s].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[s] = {
            elem: n,
            lastPath: "",
            op: PropertyFactory.getProp(this.element, l[s].o, 0, 0.01, this.element),
            prop: ShapePropertyFactory.getShapeProp(this.element, l[s], 3),
            invRect: S
          }, this.viewData[s].prop.k || this.drawPath(l[s], this.viewData[s].prop.v, this.viewData[s]);
        }
      for (this.maskElement = createNS(u), a = f.length, s = 0; s < a; s += 1)
        this.maskElement.appendChild(f[s]);
      o > 0 && (this.maskElement.setAttribute("id", c), this.element.maskedElement.setAttribute(m, "url(" + getLocationHref() + "#" + c + ")"), i.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    MaskElement.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop;
    }, MaskElement.prototype.renderFrame = function(t) {
      var e = this.element.finalTransform.mat, r, i = this.masksProperties.length;
      for (r = 0; r < i; r += 1)
        if ((this.viewData[r].prop._mdf || t) && this.drawPath(this.masksProperties[r], this.viewData[r].prop.v, this.viewData[r]), (this.viewData[r].op._mdf || t) && this.viewData[r].elem.setAttribute("fill-opacity", this.viewData[r].op.v), this.masksProperties[r].mode !== "n" && (this.viewData[r].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[r].invRect.setAttribute("transform", e.getInverseMatrix().to2dCSS()), this.storedData[r].x && (this.storedData[r].x._mdf || t))) {
          var s = this.storedData[r].expan;
          this.storedData[r].x.v < 0 ? (this.storedData[r].lastOperator !== "erode" && (this.storedData[r].lastOperator = "erode", this.storedData[r].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[r].filterId + ")")), s.setAttribute("radius", -this.storedData[r].x.v)) : (this.storedData[r].lastOperator !== "dilate" && (this.storedData[r].lastOperator = "dilate", this.storedData[r].elem.setAttribute("filter", null)), this.storedData[r].elem.setAttribute("stroke-width", this.storedData[r].x.v * 2));
        }
    }, MaskElement.prototype.getMaskelement = function() {
      return this.maskElement;
    }, MaskElement.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ", t;
    }, MaskElement.prototype.drawPath = function(t, e, r) {
      var i = " M" + e.v[0][0] + "," + e.v[0][1], s, a;
      for (a = e._length, s = 1; s < a; s += 1)
        i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[s][0] + "," + e.i[s][1] + " " + e.v[s][0] + "," + e.v[s][1];
      if (e.c && a > 1 && (i += " C" + e.o[s - 1][0] + "," + e.o[s - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== i) {
        var n = "";
        r.elem && (e.c && (n = t.inv ? this.solidPath + i : i), r.elem.setAttribute("d", n)), r.lastPath = i;
      }
    }, MaskElement.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var filtersFactory = function() {
      var t = {};
      t.createFilter = e, t.createAlphaToLuminanceFilter = r;
      function e(i, s) {
        var a = createNS("filter");
        return a.setAttribute("id", i), s !== !0 && (a.setAttribute("filterUnits", "objectBoundingBox"), a.setAttribute("x", "0%"), a.setAttribute("y", "0%"), a.setAttribute("width", "100%"), a.setAttribute("height", "100%")), a;
      }
      function r() {
        var i = createNS("feColorMatrix");
        return i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), i;
      }
      return t;
    }(), featureSupport = function() {
      var t = {
        maskType: !0,
        svgLumaHidden: !0,
        offscreenCanvas: typeof OffscreenCanvas < "u"
      };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t;
    }(), registeredEffects$1 = {}, idPrefix = "filter_result_";
    function SVGEffects(t) {
      var e, r = "SourceGraphic", i = t.data.ef ? t.data.ef.length : 0, s = createElementID(), a = filtersFactory.createFilter(s, !0), n = 0;
      this.filters = [];
      var l;
      for (e = 0; e < i; e += 1) {
        l = null;
        var o = t.data.ef[e].ty;
        if (registeredEffects$1[o]) {
          var f = registeredEffects$1[o].effect;
          l = new f(a, t.effectsManager.effectElements[e], t, idPrefix + n, r), r = idPrefix + n, registeredEffects$1[o].countsAsEffect && (n += 1);
        }
        l && this.filters.push(l);
      }
      n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this);
    }
    SVGEffects.prototype.renderFrame = function(t) {
      var e, r = this.filters.length;
      for (e = 0; e < r; e += 1)
        this.filters[e].renderFrame(t);
    }, SVGEffects.prototype.getEffects = function(t) {
      var e, r = this.filters.length, i = [];
      for (e = 0; e < r; e += 1)
        this.filters[e].type === t && i.push(this.filters[e]);
      return i;
    };
    function registerEffect$1(t, e, r) {
      registeredEffects$1[t] = {
        effect: e,
        countsAsEffect: r
      };
    }
    function SVGBaseElement() {
    }
    SVGBaseElement.prototype = {
      initRendererElement: function() {
        this.layerElement = createNS("g");
      },
      createContainerElements: function() {
        this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
        var e = null;
        if (this.data.td) {
          this.matteMasks = {};
          var r = createNS("g");
          r.setAttribute("id", this.layerId), r.appendChild(this.layerElement), e = r, this.globalData.defs.appendChild(r);
        } else
          this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
        if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
          var i = createNS("clipPath"), s = createNS("path");
          s.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
          var a = createElementID();
          if (i.setAttribute("id", a), i.appendChild(s), this.globalData.defs.appendChild(i), this.checkMasks()) {
            var n = createNS("g");
            n.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), n.appendChild(this.layerElement), this.transformedElement = n, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
          } else
            this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")");
        }
        this.data.bm !== 0 && this.setBlendMode();
      },
      renderElement: function() {
        this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
      },
      destroyBaseElement: function() {
        this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
      },
      getBaseElement: function() {
        return this.data.hd ? null : this.baseElement;
      },
      createRenderableComponents: function() {
        this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms();
      },
      getMatte: function(e) {
        if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
          var r = this.layerId + "_" + e, i, s, a, n;
          if (e === 1 || e === 3) {
            var l = createNS("mask");
            l.setAttribute("id", r), l.setAttribute("mask-type", e === 3 ? "luminance" : "alpha"), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(a), this.globalData.defs.appendChild(l), !featureSupport.maskType && e === 1 && (l.setAttribute("mask-type", "luminance"), i = createElementID(), s = filtersFactory.createFilter(i), this.globalData.defs.appendChild(s), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), n.appendChild(a), l.appendChild(n), n.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"));
          } else if (e === 2) {
            var o = createNS("mask");
            o.setAttribute("id", r), o.setAttribute("mask-type", "alpha");
            var f = createNS("g");
            o.appendChild(f), i = createElementID(), s = filtersFactory.createFilter(i);
            var d = createNS("feComponentTransfer");
            d.setAttribute("in", "SourceGraphic"), s.appendChild(d);
            var C = createNS("feFuncA");
            C.setAttribute("type", "table"), C.setAttribute("tableValues", "1.0 0.0"), d.appendChild(C), this.globalData.defs.appendChild(s);
            var c = createNS("rect");
            c.setAttribute("width", this.comp.data.w), c.setAttribute("height", this.comp.data.h), c.setAttribute("x", "0"), c.setAttribute("y", "0"), c.setAttribute("fill", "#ffffff"), c.setAttribute("opacity", "0"), f.setAttribute("filter", "url(" + getLocationHref() + "#" + i + ")"), f.appendChild(c), a = createNS("use"), a.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), f.appendChild(a), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), s.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), f.appendChild(c), n.appendChild(this.layerElement), f.appendChild(n)), this.globalData.defs.appendChild(o);
          }
          this.matteMasks[e] = r;
        }
        return this.matteMasks[e];
      },
      setMatte: function(e) {
        this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")");
      }
    };
    function HierarchyElement() {
    }
    HierarchyElement.prototype = {
      /**
         * @function
         * Initializes hierarchy properties
         *
         */
      initHierarchy: function() {
        this.hierarchy = [], this._isParent = !1, this.checkParenting();
      },
      /**
         * @function
         * Sets layer's hierarchy.
         * @param {array} hierarch
         * layer's parent list
         *
         */
      setHierarchy: function(e) {
        this.hierarchy = e;
      },
      /**
         * @function
         * Sets layer as parent.
         *
         */
      setAsParent: function() {
        this._isParent = !0;
      },
      /**
         * @function
         * Searches layer's parenting chain
         *
         */
      checkParenting: function() {
        this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
      }
    };
    function RenderableDOMElement() {
    }
    (function() {
      var t = {
        initElement: function(r, i, s) {
          this.initFrame(), this.initBaseData(r, i, s), this.initTransform(r, i, s), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
        },
        hide: function() {
          if (!this.hidden && (!this.isInRange || this.isTransparent)) {
            var r = this.baseElement || this.layerElement;
            r.style.display = "none", this.hidden = !0;
          }
        },
        show: function() {
          if (this.isInRange && !this.isTransparent) {
            if (!this.data.hd) {
              var r = this.baseElement || this.layerElement;
              r.style.display = "block";
            }
            this.hidden = !1, this._isFirstFrame = !0;
          }
        },
        renderFrame: function() {
          this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
        },
        renderInnerContent: function() {
        },
        prepareFrame: function(r) {
          this._mdf = !1, this.prepareRenderableFrame(r), this.prepareProperties(r, this.isInRange), this.checkTransparency();
        },
        destroy: function() {
          this.innerElem = null, this.destroyBaseElement();
        }
      };
      extendPrototype([RenderableElement, createProxyFunction(t)], RenderableDOMElement);
    })();
    function IImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, r), this.sourceRect = {
        top: 0,
        left: 0,
        width: this.assetData.w,
        height: this.assetData.h
      };
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
    }, IImageElement.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    };
    function ProcessedElement(t, e) {
      this.elem = t, this.pos = e;
    }
    function IShapeElement() {
    }
    IShapeElement.prototype = {
      addShapeToModifiers: function(e) {
        var r, i = this.shapeModifiers.length;
        for (r = 0; r < i; r += 1)
          this.shapeModifiers[r].addShape(e);
      },
      isShapeInAnimatedModifiers: function(e) {
        for (var r = 0, i = this.shapeModifiers.length; r < i; )
          if (this.shapeModifiers[r].isAnimatedWithShape(e))
            return !0;
        return !1;
      },
      renderModifiers: function() {
        if (this.shapeModifiers.length) {
          var e, r = this.shapes.length;
          for (e = 0; e < r; e += 1)
            this.shapes[e].sh.reset();
          r = this.shapeModifiers.length;
          var i;
          for (e = r - 1; e >= 0 && (i = this.shapeModifiers[e].processShapes(this._isFirstFrame), !i); e -= 1)
            ;
        }
      },
      searchProcessedElement: function(e) {
        for (var r = this.processedElements, i = 0, s = r.length; i < s; ) {
          if (r[i].elem === e)
            return r[i].pos;
          i += 1;
        }
        return 0;
      },
      addProcessedElement: function(e, r) {
        for (var i = this.processedElements, s = i.length; s; )
          if (s -= 1, i[s].elem === e) {
            i[s].pos = r;
            return;
          }
        i.push(new ProcessedElement(e, r));
      },
      prepareFrame: function(e) {
        this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange);
      }
    };
    var lineCapEnum = {
      1: "butt",
      2: "round",
      3: "square"
    }, lineJoinEnum = {
      1: "miter",
      2: "round",
      3: "bevel"
    };
    function SVGShapeData(t, e, r) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
      for (var i = 0, s = t.length; i < s; ) {
        if (t[i].mProps.dynamicProperties.length) {
          this._isAnimated = !0;
          break;
        }
        i += 1;
      }
    }
    SVGShapeData.prototype.setAsAnimated = function() {
      this._isAnimated = !0;
    };
    function SVGStyleData(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = createNS("path"), this.msElem = null;
    }
    SVGStyleData.prototype.reset = function() {
      this.d = "", this._mdf = !1;
    };
    function DashProperty(t, e, r, i) {
      this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
      var s, a = e.length || 0, n;
      for (s = 0; s < a; s += 1)
        n = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[s] = {
          n: e[s].n,
          p: n
        };
      this.k || this.getValue(!0), this._isAnimated = this.k;
    }
    DashProperty.prototype.getValue = function(t) {
      if (!(this.elem.globalData.frameId === this.frameId && !t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0, r = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < r; e += 1)
          this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty);
    function SVGStrokeStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated;
    }
    extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData);
    function SVGFillStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r;
    }
    extendPrototype([DynamicPropertyContainer], SVGFillStyleData);
    function SVGNoStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = r;
    }
    extendPrototype([DynamicPropertyContainer], SVGNoStyleData);
    function GradientProperty(t, e, r) {
      this.data = e, this.c = createTypedArray("uint8c", e.p * 4);
      var i = e.k.k[0].s ? e.k.k[0].s.length - e.p * 4 : e.k.k.length - e.p * 4;
      this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
    }
    GradientProperty.prototype.comparePoints = function(t, e) {
      for (var r = 0, i = this.o.length / 2, s; r < i; ) {
        if (s = Math.abs(t[r * 4] - t[e * 4 + r * 2]), s > 0.01)
          return !1;
        r += 1;
      }
      return !0;
    }, GradientProperty.prototype.checkCollapsable = function() {
      if (this.o.length / 2 !== this.c.length / 4)
        return !1;
      if (this.data.k.k[0].s)
        for (var t = 0, e = this.data.k.k.length; t < e; ) {
          if (!this.comparePoints(this.data.k.k[t].s, this.data.p))
            return !1;
          t += 1;
        }
      else if (!this.comparePoints(this.data.k.k, this.data.p))
        return !1;
      return !0;
    }, GradientProperty.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
        var e, r = this.data.p * 4, i, s;
        for (e = 0; e < r; e += 1)
          i = e % 4 === 0 ? 100 : 255, s = Math.round(this.prop.v[e] * i), this.c[e] !== s && (this.c[e] = s, this._cmdf = !t);
        if (this.o.length)
          for (r = this.prop.v.length, e = this.data.p * 4; e < r; e += 1)
            i = e % 2 === 0 ? 100 : 1, s = e % 2 === 0 ? Math.round(this.prop.v[e] * 100) : this.prop.v[e], this.o[e - this.data.p * 4] !== s && (this.o[e - this.data.p * 4] = s, this._omdf = !t);
        this._mdf = !t;
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty);
    function SVGGradientFillStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r);
    }
    SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
      this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
        k: 0
      }, 0, 0.01, this), this.a = PropertyFactory.getProp(t, e.a || {
        k: 0
      }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated;
    }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
      var r = createElementID(), i = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
      i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
      var s = [], a, n, l;
      for (l = e.g.p * 4, n = 0; n < l; n += 4)
        a = createNS("stop"), i.appendChild(a), s.push(a);
      t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = s;
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var r, i, s, a = createNS("mask"), n = createNS("path");
        a.appendChild(n);
        var l = createElementID(), o = createElementID();
        a.setAttribute("id", o);
        var f = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
        f.setAttribute("id", l), f.setAttribute("spreadMethod", "pad"), f.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var d = this.stops;
        for (i = t.g.p * 4; i < s; i += 2)
          r = createNS("stop"), r.setAttribute("stop-color", "rgb(255,255,255)"), f.appendChild(r), d.push(r);
        n.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + l + ")"), t.ty === "gs" && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && n.setAttribute("stroke-miterlimit", t.ml)), this.of = f, this.ms = a, this.ost = d, this.maskId = o, e.msElem = n;
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData);
    function SVGGradientStrokeStyleData(t, e, r) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated;
    }
    extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g");
    }
    function SVGTransformData(t, e, r) {
      this.transform = {
        mProps: t,
        op: e,
        container: r
      }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    var buildShapeString = function(e, r, i, s) {
      if (r === 0)
        return "";
      var a = e.o, n = e.i, l = e.v, o, f = " M" + s.applyToPointStringified(l[0][0], l[0][1]);
      for (o = 1; o < r; o += 1)
        f += " C" + s.applyToPointStringified(a[o - 1][0], a[o - 1][1]) + " " + s.applyToPointStringified(n[o][0], n[o][1]) + " " + s.applyToPointStringified(l[o][0], l[o][1]);
      return i && r && (f += " C" + s.applyToPointStringified(a[o - 1][0], a[o - 1][1]) + " " + s.applyToPointStringified(n[0][0], n[0][1]) + " " + s.applyToPointStringified(l[0][0], l[0][1]), f += "z"), f;
    }, SVGElementsRenderer = function() {
      var t = new Matrix(), e = new Matrix(), r = {
        createRenderFunction: i
      };
      function i(C) {
        switch (C.ty) {
          case "fl":
            return l;
          case "gf":
            return f;
          case "gs":
            return o;
          case "st":
            return d;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return n;
          case "tr":
            return s;
          case "no":
            return a;
          default:
            return null;
        }
      }
      function s(C, c, S) {
        (S || c.transform.op._mdf) && c.transform.container.setAttribute("opacity", c.transform.op.v), (S || c.transform.mProps._mdf) && c.transform.container.setAttribute("transform", c.transform.mProps.v.to2dCSS());
      }
      function a() {
      }
      function n(C, c, S) {
        var y, g, _, u, m, p, x = c.styles.length, P = c.lvl, E, k, I, V;
        for (p = 0; p < x; p += 1) {
          if (u = c.sh._mdf || S, c.styles[p].lvl < P) {
            for (k = e.reset(), I = P - c.styles[p].lvl, V = c.transformers.length - 1; !u && I > 0; )
              u = c.transformers[V].mProps._mdf || u, I -= 1, V -= 1;
            if (u)
              for (I = P - c.styles[p].lvl, V = c.transformers.length - 1; I > 0; )
                k.multiply(c.transformers[V].mProps.v), I -= 1, V -= 1;
          } else
            k = t;
          if (E = c.sh.paths, g = E._length, u) {
            for (_ = "", y = 0; y < g; y += 1)
              m = E.shapes[y], m && m._length && (_ += buildShapeString(m, m._length, m.c, k));
            c.caches[p] = _;
          } else
            _ = c.caches[p];
          c.styles[p].d += C.hd === !0 ? "" : _, c.styles[p]._mdf = u || c.styles[p]._mdf;
        }
      }
      function l(C, c, S) {
        var y = c.style;
        (c.c._mdf || S) && y.pElem.setAttribute("fill", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || S) && y.pElem.setAttribute("fill-opacity", c.o.v);
      }
      function o(C, c, S) {
        f(C, c, S), d(C, c, S);
      }
      function f(C, c, S) {
        var y = c.gf, g = c.g._hasOpacity, _ = c.s.v, u = c.e.v;
        if (c.o._mdf || S) {
          var m = C.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          c.style.pElem.setAttribute(m, c.o.v);
        }
        if (c.s._mdf || S) {
          var p = C.t === 1 ? "x1" : "cx", x = p === "x1" ? "y1" : "cy";
          y.setAttribute(p, _[0]), y.setAttribute(x, _[1]), g && !c.g._collapsable && (c.of.setAttribute(p, _[0]), c.of.setAttribute(x, _[1]));
        }
        var P, E, k, I;
        if (c.g._cmdf || S) {
          P = c.cst;
          var V = c.g.c;
          for (k = P.length, E = 0; E < k; E += 1)
            I = P[E], I.setAttribute("offset", V[E * 4] + "%"), I.setAttribute("stop-color", "rgb(" + V[E * 4 + 1] + "," + V[E * 4 + 2] + "," + V[E * 4 + 3] + ")");
        }
        if (g && (c.g._omdf || S)) {
          var H = c.g.o;
          for (c.g._collapsable ? P = c.cst : P = c.ost, k = P.length, E = 0; E < k; E += 1)
            I = P[E], c.g._collapsable || I.setAttribute("offset", H[E * 2] + "%"), I.setAttribute("stop-opacity", H[E * 2 + 1]);
        }
        if (C.t === 1)
          (c.e._mdf || S) && (y.setAttribute("x2", u[0]), y.setAttribute("y2", u[1]), g && !c.g._collapsable && (c.of.setAttribute("x2", u[0]), c.of.setAttribute("y2", u[1])));
        else {
          var O;
          if ((c.s._mdf || c.e._mdf || S) && (O = Math.sqrt(Math.pow(_[0] - u[0], 2) + Math.pow(_[1] - u[1], 2)), y.setAttribute("r", O), g && !c.g._collapsable && c.of.setAttribute("r", O)), c.e._mdf || c.h._mdf || c.a._mdf || S) {
            O || (O = Math.sqrt(Math.pow(_[0] - u[0], 2) + Math.pow(_[1] - u[1], 2)));
            var D = Math.atan2(u[1] - _[1], u[0] - _[0]), z = c.h.v;
            z >= 1 ? z = 0.99 : z <= -1 && (z = -0.99);
            var j = O * z, R = Math.cos(D + c.a.v) * j + _[0], T = Math.sin(D + c.a.v) * j + _[1];
            y.setAttribute("fx", R), y.setAttribute("fy", T), g && !c.g._collapsable && (c.of.setAttribute("fx", R), c.of.setAttribute("fy", T));
          }
        }
      }
      function d(C, c, S) {
        var y = c.style, g = c.d;
        g && (g._mdf || S) && g.dashStr && (y.pElem.setAttribute("stroke-dasharray", g.dashStr), y.pElem.setAttribute("stroke-dashoffset", g.dashoffset[0])), c.c && (c.c._mdf || S) && y.pElem.setAttribute("stroke", "rgb(" + bmFloor(c.c.v[0]) + "," + bmFloor(c.c.v[1]) + "," + bmFloor(c.c.v[2]) + ")"), (c.o._mdf || S) && y.pElem.setAttribute("stroke-opacity", c.o.v), (c.w._mdf || S) && (y.pElem.setAttribute("stroke-width", c.w.v), y.msElem && y.msElem.setAttribute("stroke-width", c.w.v));
      }
      return r;
    }();
    function SVGShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = [];
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
    }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
    }, SVGShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
      var t, e = this.shapes.length, r, i, s = this.stylesList.length, a, n = [], l = !1;
      for (i = 0; i < s; i += 1) {
        for (a = this.stylesList[i], l = !1, n.length = 0, t = 0; t < e; t += 1)
          r = this.shapes[t], r.styles.indexOf(a) !== -1 && (n.push(r), l = r._isAnimated || l);
        n.length > 1 && l && this.setShapesAsAnimated(n);
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        t[e].setAsAnimated();
    }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
      var r, i = new SVGStyleData(t, e), s = i.pElem;
      if (t.ty === "st")
        r = new SVGStrokeStyleData(this, t, i);
      else if (t.ty === "fl")
        r = new SVGFillStyleData(this, t, i);
      else if (t.ty === "gf" || t.ty === "gs") {
        var a = t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData;
        r = new a(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"));
      } else
        t.ty === "no" && (r = new SVGNoStyleData(this, t, i));
      return (t.ty === "st" || t.ty === "gs") && (s.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), s.setAttribute("fill-opacity", "0"), t.lj === 1 && s.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r;
    }, SVGShapeElement.prototype.createGroupElement = function(t) {
      var e = new ShapeGroupData();
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
    }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
      var r = TransformPropertyFactory.getTransformProperty(this, t, this), i = new SVGTransformData(r, r.o, e);
      return this.addToAnimatedContents(t, i), i;
    }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
      var i = 4;
      t.ty === "rc" ? i = 5 : t.ty === "el" ? i = 6 : t.ty === "sr" && (i = 7);
      var s = ShapePropertyFactory.getShapeProp(this, t, i, this), a = new SVGShapeData(e, r, s);
      return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a;
    }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
      for (var r = 0, i = this.animatedContents.length; r < i; ) {
        if (this.animatedContents[r].element === e)
          return;
        r += 1;
      }
      this.animatedContents.push({
        fn: SVGElementsRenderer.createRenderFunction(t),
        element: e,
        data: t
      });
    }, SVGShapeElement.prototype.setElementStyles = function(t) {
      var e = t.styles, r, i = this.stylesList.length;
      for (r = 0; r < i; r += 1)
        this.stylesList[r].closed || e.push(this.stylesList[r]);
    }, SVGShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = !0;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1)
        this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
        this.dynamicProperties[t].getValue();
      this.renderModifiers();
    }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, a, n) {
      var l = [].concat(a), o, f = t.length - 1, d, C, c = [], S = [], y, g, _;
      for (o = f; o >= 0; o -= 1) {
        if (_ = this.searchProcessedElement(t[o]), _ ? e[o] = r[_ - 1] : t[o]._render = n, t[o].ty === "fl" || t[o].ty === "st" || t[o].ty === "gf" || t[o].ty === "gs" || t[o].ty === "no")
          _ ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && e[o].style.pElem.parentNode !== i && i.appendChild(e[o].style.pElem), c.push(e[o].style);
        else if (t[o].ty === "gr") {
          if (!_)
            e[o] = this.createGroupElement(t[o]);
          else
            for (C = e[o].it.length, d = 0; d < C; d += 1)
              e[o].prevViewData[d] = e[o].it[d];
          this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, l, n), t[o]._render && e[o].gr.parentNode !== i && i.appendChild(e[o].gr);
        } else
          t[o].ty === "tr" ? (_ || (e[o] = this.createTransformElement(t[o], i)), y = e[o].transform, l.push(y)) : t[o].ty === "sh" || t[o].ty === "rc" || t[o].ty === "el" || t[o].ty === "sr" ? (_ || (e[o] = this.createShapeElement(t[o], l, s)), this.setElementStyles(e[o])) : t[o].ty === "tm" || t[o].ty === "rd" || t[o].ty === "ms" || t[o].ty === "pb" || t[o].ty === "zz" || t[o].ty === "op" ? (_ ? (g = e[o], g.closed = !1) : (g = ShapeModifiers.getModifier(t[o].ty), g.init(this, t[o]), e[o] = g, this.shapeModifiers.push(g)), S.push(g)) : t[o].ty === "rp" && (_ ? (g = e[o], g.closed = !0) : (g = ShapeModifiers.getModifier(t[o].ty), e[o] = g, g.init(this, t, o, e), this.shapeModifiers.push(g), n = !1), S.push(g));
        this.addProcessedElement(t[o], o + 1);
      }
      for (f = c.length, o = 0; o < f; o += 1)
        c[o].closed = !0;
      for (f = S.length, o = 0; o < f; o += 1)
        S[o].closed = !0;
    }, SVGShapeElement.prototype.renderInnerContent = function() {
      this.renderModifiers();
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1)
        this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1)
        (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
    }, SVGShapeElement.prototype.renderShape = function() {
      var t, e = this.animatedContents.length, r;
      for (t = 0; t < e; t += 1)
        r = this.animatedContents[t], (this._isFirstFrame || r.element._isAnimated) && r.data !== !0 && r.fn(r.data, r.element, this._isFirstFrame);
    }, SVGShapeElement.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    };
    function LetterProps(t, e, r, i, s, a) {
      this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = {
        o: !0,
        sw: !!e,
        sc: !!r,
        fc: !!i,
        m: !0,
        p: !0
      };
    }
    LetterProps.prototype.update = function(t, e, r, i, s, a) {
      this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
      var n = !1;
      return this.o !== t && (this.o = t, this._mdf.o = !0, n = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, n = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, n = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, n = !0), this.m !== s && (this.m = s, this._mdf.m = !0, n = !0), a.length && (this.p[0] !== a[0] || this.p[1] !== a[1] || this.p[4] !== a[4] || this.p[5] !== a[5] || this.p[12] !== a[12] || this.p[13] !== a[13]) && (this.p = a, this._mdf.p = !0, n = !0), n;
    };
    function TextProperty(t, e) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
        ascent: 0,
        boxWidth: this.defaultBoxWidth,
        f: "",
        fStyle: "",
        fWeight: "",
        fc: "",
        j: "",
        justifyOffset: "",
        l: [],
        lh: 0,
        lineWidths: [],
        ls: "",
        of: "",
        s: "",
        sc: "",
        sw: 0,
        t: 0,
        tr: 0,
        sz: 0,
        ps: null,
        fillColorAnim: !1,
        strokeColorAnim: !1,
        strokeWidthAnim: !1,
        yOffset: 0,
        finalSize: 0,
        finalText: [],
        finalLineHeight: 0,
        __complete: !1
      }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
      for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
      return t;
    }, TextProperty.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
    }, TextProperty.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, TextProperty.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, TextProperty.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.getValue = function(t) {
      if (!((this.elem.globalData.frameId === this.frameId || !this.effectsSequence.length) && !t)) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData, r = this.keysIndex;
        if (this.lock) {
          this.setCurrentData(this.currentData);
          return;
        }
        this.lock = !0, this._mdf = !1;
        var i, s = this.effectsSequence.length, a = t || this.data.d.k[this.keysIndex].s;
        for (i = 0; i < s; i += 1)
          r !== this.keysIndex ? a = this.effectsSequence[i](a, a.t) : a = this.effectsSequence[i](this.currentData, a.t);
        e !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }, TextProperty.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && !(r === i - 1 || t[r + 1].t > e); )
        r += 1;
      return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s;
    }, TextProperty.prototype.buildFinalText = function(t) {
      for (var e = [], r = 0, i = t.length, s, a, n = !1, l = !1, o = ""; r < i; )
        n = l, l = !1, s = t.charCodeAt(r), o = t.charAt(r), FontManager.isCombinedCharacter(s) ? n = !0 : s >= 55296 && s <= 56319 ? FontManager.isRegionalFlag(t, r) ? o = t.substr(r, 14) : (a = t.charCodeAt(r + 1), a >= 56320 && a <= 57343 && (FontManager.isModifier(s, a) ? (o = t.substr(r, 2), n = !0) : FontManager.isFlagEmoji(t.substr(r, 4)) ? o = t.substr(r, 4) : o = t.substr(r, 2))) : s > 56319 ? (a = t.charCodeAt(r + 1), FontManager.isVariationSelector(s) && (n = !0)) : FontManager.isZeroWidthJoiner(s) && (n = !0, l = !0), n ? (e[e.length - 1] += o, n = !1) : e.push(o), r += o.length;
      return e;
    }, TextProperty.prototype.completeTextData = function(t) {
      t.__complete = !0;
      var e = this.elem.globalData.fontManager, r = this.data, i = [], s, a, n, l = 0, o, f = r.m.g, d = 0, C = 0, c = 0, S = [], y = 0, g = 0, _, u, m = e.getFontByName(t.f), p, x = 0, P = getFontProperties(m);
      t.fWeight = P.weight, t.fStyle = P.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), a = t.finalText.length, t.finalLineHeight = t.lh;
      var E = t.tr / 1e3 * t.finalSize, k;
      if (t.sz)
        for (var I = !0, V = t.sz[0], H = t.sz[1], O, D; I; ) {
          D = this.buildFinalText(t.t), O = 0, y = 0, a = D.length, E = t.tr / 1e3 * t.finalSize;
          var z = -1;
          for (s = 0; s < a; s += 1)
            k = D[s].charCodeAt(0), n = !1, D[s] === " " ? z = s : (k === 13 || k === 3) && (y = 0, n = !0, O += t.finalLineHeight || t.finalSize * 1.2), e.chars ? (p = e.getCharData(D[s], m.fStyle, m.fFamily), x = n ? 0 : p.w * t.finalSize / 100) : x = e.measureText(D[s], t.f, t.finalSize), y + x > V && D[s] !== " " ? (z === -1 ? a += 1 : s = z, O += t.finalLineHeight || t.finalSize * 1.2, D.splice(s, z === s ? 1 : 0, "\r"), z = -1, y = 0) : (y += x, y += E);
          O += m.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && H < O ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = D, a = t.finalText.length, I = !1);
        }
      y = -E, x = 0;
      var j = 0, R;
      for (s = 0; s < a; s += 1)
        if (n = !1, R = t.finalText[s], k = R.charCodeAt(0), k === 13 || k === 3 ? (j = 0, S.push(y), g = y > g ? y : g, y = -2 * E, o = "", n = !0, c += 1) : o = R, e.chars ? (p = e.getCharData(R, m.fStyle, e.getFontByName(t.f).fFamily), x = n ? 0 : p.w * t.finalSize / 100) : x = e.measureText(o, t.f, t.finalSize), R === " " ? j += x + E : (y += x + E + j, j = 0), i.push({
          l: x,
          an: x,
          add: d,
          n,
          anIndexes: [],
          val: o,
          line: c,
          animatorJustifyOffset: 0
        }), f == 2) {
          if (d += x, o === "" || o === " " || s === a - 1) {
            for ((o === "" || o === " ") && (d -= x); C <= s; )
              i[C].an = d, i[C].ind = l, i[C].extra = x, C += 1;
            l += 1, d = 0;
          }
        } else if (f == 3) {
          if (d += x, o === "" || s === a - 1) {
            for (o === "" && (d -= x); C <= s; )
              i[C].an = d, i[C].ind = l, i[C].extra = x, C += 1;
            d = 0, l += 1;
          }
        } else
          i[l].ind = l, i[l].extra = 0, l += 1;
      if (t.l = i, g = y > g ? y : g, S.push(y), t.sz)
        t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else
        switch (t.boxWidth = g, t.j) {
          case 1:
            t.justifyOffset = -t.boxWidth;
            break;
          case 2:
            t.justifyOffset = -t.boxWidth / 2;
            break;
          default:
            t.justifyOffset = 0;
        }
      t.lineWidths = S;
      var T = r.a, M, b;
      u = T.length;
      var A, L, F = [];
      for (_ = 0; _ < u; _ += 1) {
        for (M = T[_], M.a.sc && (t.strokeColorAnim = !0), M.a.sw && (t.strokeWidthAnim = !0), (M.a.fc || M.a.fh || M.a.fs || M.a.fb) && (t.fillColorAnim = !0), L = 0, A = M.s.b, s = 0; s < a; s += 1)
          b = i[s], b.anIndexes[_] = L, (A == 1 && b.val !== "" || A == 2 && b.val !== "" && b.val !== " " || A == 3 && (b.n || b.val == " " || s == a - 1) || A == 4 && (b.n || s == a - 1)) && (M.s.rn === 1 && F.push(L), L += 1);
        r.a[_].s.totalChars = L;
        var B = -1, G;
        if (M.s.rn === 1)
          for (s = 0; s < a; s += 1)
            b = i[s], B != b.anIndexes[_] && (B = b.anIndexes[_], G = F.splice(Math.floor(Math.random() * F.length), 1)[0]), b.anIndexes[_] = G;
      }
      t.yOffset = t.finalLineHeight || t.finalSize * 1.2, t.ls = t.ls || 0, t.ascent = m.ascent * t.finalSize / 100;
    }, TextProperty.prototype.updateDocumentData = function(t, e) {
      e = e === void 0 ? this.keysIndex : e;
      var r = this.copyData({}, this.data.d.k[e].s);
      r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.setCurrentData(r), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
    }, TextProperty.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var TextSelectorProp = function() {
      var t = Math.max, e = Math.min, r = Math.floor;
      function i(a, n) {
        this._currentTextLength = -1, this.k = !1, this.data = n, this.elem = a, this.comp = a.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a), this.s = PropertyFactory.getProp(a, n.s || {
          k: 0
        }, 0, 0, this), "e" in n ? this.e = PropertyFactory.getProp(a, n.e, 0, 0, this) : this.e = {
          v: 100
        }, this.o = PropertyFactory.getProp(a, n.o || {
          k: 0
        }, 0, 0, this), this.xe = PropertyFactory.getProp(a, n.xe || {
          k: 0
        }, 0, 0, this), this.ne = PropertyFactory.getProp(a, n.ne || {
          k: 0
        }, 0, 0, this), this.sm = PropertyFactory.getProp(a, n.sm || {
          k: 100
        }, 0, 0, this), this.a = PropertyFactory.getProp(a, n.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      i.prototype = {
        getMult: function(n) {
          this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
          var l = 0, o = 0, f = 1, d = 1;
          this.ne.v > 0 ? l = this.ne.v / 100 : o = -this.ne.v / 100, this.xe.v > 0 ? f = 1 - this.xe.v / 100 : d = 1 + this.xe.v / 100;
          var C = BezierFactory.getBezierEasing(l, o, f, d).get, c = 0, S = this.finalS, y = this.finalE, g = this.data.sh;
          if (g === 2)
            y === S ? c = n >= y ? 1 : 0 : c = t(0, e(0.5 / (y - S) + (n - S) / (y - S), 1)), c = C(c);
          else if (g === 3)
            y === S ? c = n >= y ? 0 : 1 : c = 1 - t(0, e(0.5 / (y - S) + (n - S) / (y - S), 1)), c = C(c);
          else if (g === 4)
            y === S ? c = 0 : (c = t(0, e(0.5 / (y - S) + (n - S) / (y - S), 1)), c < 0.5 ? c *= 2 : c = 1 - 2 * (c - 0.5)), c = C(c);
          else if (g === 5) {
            if (y === S)
              c = 0;
            else {
              var _ = y - S;
              n = e(t(0, n + 0.5 - S), y - S);
              var u = -_ / 2 + n, m = _ / 2;
              c = Math.sqrt(1 - u * u / (m * m));
            }
            c = C(c);
          } else
            g === 6 ? (y === S ? c = 0 : (n = e(t(0, n + 0.5 - S), y - S), c = (1 + Math.cos(Math.PI + Math.PI * 2 * n / (y - S))) / 2), c = C(c)) : (n >= r(S) && (n - S < 0 ? c = t(0, e(e(y, 1) - (S - n), 1)) : c = t(0, e(y - n, 1))), c = C(c));
          if (this.sm.v !== 100) {
            var p = this.sm.v * 0.01;
            p === 0 && (p = 1e-8);
            var x = 0.5 - p * 0.5;
            c < x ? c = 0 : (c = (c - x) / p, c > 1 && (c = 1));
          }
          return c * this.a.v;
        },
        getValue: function(n) {
          this.iterateDynamicProperties(), this._mdf = n || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, n && this.data.r === 2 && (this.e.v = this._currentTextLength);
          var l = this.data.r === 2 ? 1 : 100 / this.data.totalChars, o = this.o.v / l, f = this.s.v / l + o, d = this.e.v / l + o;
          if (f > d) {
            var C = f;
            f = d, d = C;
          }
          this.finalS = f, this.finalE = d;
        }
      }, extendPrototype([DynamicPropertyContainer], i);
      function s(a, n, l) {
        return new i(a, n);
      }
      return {
        getTextSelectorProp: s
      };
    }();
    function TextAnimatorDataProperty(t, e, r) {
      var i = {
        propType: !1
      }, s = PropertyFactory.getProp, a = e.a;
      this.a = {
        r: a.r ? s(t, a.r, 0, degToRads, r) : i,
        rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
        ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
        sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
        sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
        s: a.s ? s(t, a.s, 1, 0.01, r) : i,
        a: a.a ? s(t, a.a, 1, 0, r) : i,
        o: a.o ? s(t, a.o, 0, 0.01, r) : i,
        p: a.p ? s(t, a.p, 1, 0, r) : i,
        sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
        sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
        fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
        fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
        fs: a.fs ? s(t, a.fs, 0, 0.01, r) : i,
        fb: a.fb ? s(t, a.fb, 0, 0.01, r) : i,
        t: a.t ? s(t, a.t, 0, 0, r) : i
      }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t;
    }
    function TextAnimatorProperty(t, e, r) {
      this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
        alignment: {}
      }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r);
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
      var t, e = this._textData.a.length, r, i = PropertyFactory.getProp;
      for (t = 0; t < e; t += 1)
        r = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, r, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = {
        a: i(this._elem, this._textData.p.a, 0, 0, this),
        f: i(this._elem, this._textData.p.f, 0, 0, this),
        l: i(this._elem, this._textData.p.l, 0, 0, this),
        r: i(this._elem, this._textData.p.r, 0, 0, this),
        p: i(this._elem, this._textData.p.p, 0, 0, this),
        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
      }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this);
    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, !(!this._mdf && !this._isFirstFrame && !e && (!this._hasMaskedPath || !this._pathData.m._mdf))) {
        this._isFirstFrame = !1;
        var r = this._moreOptions.alignment.v, i = this._animatorsData, s = this._textData, a = this.mHelper, n = this._renderType, l = this.renderedLetters.length, o, f, d, C, c = t.l, S, y, g, _, u, m, p, x, P, E, k, I, V, H, O;
        if (this._hasMaskedPath) {
          if (O = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var D = O.v;
            this._pathData.r.v && (D = D.reverse()), S = {
              tLength: 0,
              segments: []
            }, C = D._length - 1;
            var z;
            for (I = 0, d = 0; d < C; d += 1)
              z = bez.buildBezierData(D.v[d], D.v[d + 1], [D.o[d][0] - D.v[d][0], D.o[d][1] - D.v[d][1]], [D.i[d + 1][0] - D.v[d + 1][0], D.i[d + 1][1] - D.v[d + 1][1]]), S.tLength += z.segmentLength, S.segments.push(z), I += z.segmentLength;
            d = C, O.v.c && (z = bez.buildBezierData(D.v[d], D.v[0], [D.o[d][0] - D.v[d][0], D.o[d][1] - D.v[d][1]], [D.i[0][0] - D.v[0][0], D.i[0][1] - D.v[0][1]]), S.tLength += z.segmentLength, S.segments.push(z), I += z.segmentLength), this._pathData.pi = S;
          }
          if (S = this._pathData.pi, y = this._pathData.f.v, p = 0, m = 1, _ = 0, u = !0, E = S.segments, y < 0 && O.v.c)
            for (S.tLength < Math.abs(y) && (y = -Math.abs(y) % S.tLength), p = E.length - 1, P = E[p].points, m = P.length - 1; y < 0; )
              y += P[m].partialLength, m -= 1, m < 0 && (p -= 1, P = E[p].points, m = P.length - 1);
          P = E[p].points, x = P[m - 1], g = P[m], k = g.partialLength;
        }
        C = c.length, o = 0, f = 0;
        var j = t.finalSize * 1.2 * 0.714, R = !0, T, M, b, A, L;
        A = i.length;
        var F, B = -1, G, N, q, Y = y, Z = p, K = m, rt = -1, J, $, Q, X, W, st, lt, at, it = "", nt = this.defaultPropsArray, ot;
        if (t.j === 2 || t.j === 1) {
          var U = 0, ht = 0, ft = t.j === 2 ? -0.5 : -1, tt = 0, pt = !0;
          for (d = 0; d < C; d += 1)
            if (c[d].n) {
              for (U && (U += ht); tt < d; )
                c[tt].animatorJustifyOffset = U, tt += 1;
              U = 0, pt = !0;
            } else {
              for (b = 0; b < A; b += 1)
                T = i[b].a, T.t.propType && (pt && t.j === 2 && (ht += T.t.v * ft), M = i[b].s, F = M.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), F.length ? U += T.t.v * F[0] * ft : U += T.t.v * F * ft);
              pt = !1;
            }
          for (U && (U += ht); tt < d; )
            c[tt].animatorJustifyOffset = U, tt += 1;
        }
        for (d = 0; d < C; d += 1) {
          if (a.reset(), J = 1, c[d].n)
            o = 0, f += t.yOffset, f += R ? 1 : 0, y = Y, R = !1, this._hasMaskedPath && (p = Z, m = K, P = E[p].points, x = P[m - 1], g = P[m], k = g.partialLength, _ = 0), it = "", at = "", st = "", ot = "", nt = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (rt !== c[d].line) {
                switch (t.j) {
                  case 1:
                    y += I - t.lineWidths[c[d].line];
                    break;
                  case 2:
                    y += (I - t.lineWidths[c[d].line]) / 2;
                    break;
                }
                rt = c[d].line;
              }
              B !== c[d].ind && (c[B] && (y += c[B].extra), y += c[d].an / 2, B = c[d].ind), y += r[0] * c[d].an * 5e-3;
              var et = 0;
              for (b = 0; b < A; b += 1)
                T = i[b].a, T.p.propType && (M = i[b].s, F = M.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), F.length ? et += T.p.v[0] * F[0] : et += T.p.v[0] * F), T.a.propType && (M = i[b].s, F = M.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), F.length ? et += T.a.v[0] * F[0] : et += T.a.v[0] * F);
              for (u = !0, this._pathData.a.v && (y = c[0].an * 0.5 + (I - this._pathData.f.v - c[0].an * 0.5 - c[c.length - 1].an * 0.5) * B / (C - 1), y += this._pathData.f.v); u; )
                _ + k >= y + et || !P ? (V = (y + et - _) / g.partialLength, N = x.point[0] + (g.point[0] - x.point[0]) * V, q = x.point[1] + (g.point[1] - x.point[1]) * V, a.translate(-r[0] * c[d].an * 5e-3, -(r[1] * j) * 0.01), u = !1) : P && (_ += g.partialLength, m += 1, m >= P.length && (m = 0, p += 1, E[p] ? P = E[p].points : O.v.c ? (m = 0, p = 0, P = E[p].points) : (_ -= g.partialLength, P = null)), P && (x = g, g = P[m], k = g.partialLength));
              G = c[d].an / 2 - c[d].add, a.translate(-G, 0, 0);
            } else
              G = c[d].an / 2 - c[d].add, a.translate(-G, 0, 0), a.translate(-r[0] * c[d].an * 5e-3, -r[1] * j * 0.01, 0);
            for (b = 0; b < A; b += 1)
              T = i[b].a, T.t.propType && (M = i[b].s, F = M.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), (o !== 0 || t.j !== 0) && (this._hasMaskedPath ? F.length ? y += T.t.v * F[0] : y += T.t.v * F : F.length ? o += T.t.v * F[0] : o += T.t.v * F));
            for (t.strokeWidthAnim && (Q = t.sw || 0), t.strokeColorAnim && (t.sc ? $ = [t.sc[0], t.sc[1], t.sc[2]] : $ = [0, 0, 0]), t.fillColorAnim && t.fc && (X = [t.fc[0], t.fc[1], t.fc[2]]), b = 0; b < A; b += 1)
              T = i[b].a, T.a.propType && (M = i[b].s, F = M.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), F.length ? a.translate(-T.a.v[0] * F[0], -T.a.v[1] * F[1], T.a.v[2] * F[2]) : a.translate(-T.a.v[0] * F, -T.a.v[1] * F, T.a.v[2] * F));
            for (b = 0; b < A; b += 1)
              T = i[b].a, T.s.propType && (M = i[b].s, F = M.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), F.length ? a.scale(1 + (T.s.v[0] - 1) * F[0], 1 + (T.s.v[1] - 1) * F[1], 1) : a.scale(1 + (T.s.v[0] - 1) * F, 1 + (T.s.v[1] - 1) * F, 1));
            for (b = 0; b < A; b += 1) {
              if (T = i[b].a, M = i[b].s, F = M.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), T.sk.propType && (F.length ? a.skewFromAxis(-T.sk.v * F[0], T.sa.v * F[1]) : a.skewFromAxis(-T.sk.v * F, T.sa.v * F)), T.r.propType && (F.length ? a.rotateZ(-T.r.v * F[2]) : a.rotateZ(-T.r.v * F)), T.ry.propType && (F.length ? a.rotateY(T.ry.v * F[1]) : a.rotateY(T.ry.v * F)), T.rx.propType && (F.length ? a.rotateX(T.rx.v * F[0]) : a.rotateX(T.rx.v * F)), T.o.propType && (F.length ? J += (T.o.v * F[0] - J) * F[0] : J += (T.o.v * F - J) * F), t.strokeWidthAnim && T.sw.propType && (F.length ? Q += T.sw.v * F[0] : Q += T.sw.v * F), t.strokeColorAnim && T.sc.propType)
                for (W = 0; W < 3; W += 1)
                  F.length ? $[W] += (T.sc.v[W] - $[W]) * F[0] : $[W] += (T.sc.v[W] - $[W]) * F;
              if (t.fillColorAnim && t.fc) {
                if (T.fc.propType)
                  for (W = 0; W < 3; W += 1)
                    F.length ? X[W] += (T.fc.v[W] - X[W]) * F[0] : X[W] += (T.fc.v[W] - X[W]) * F;
                T.fh.propType && (F.length ? X = addHueToRGB(X, T.fh.v * F[0]) : X = addHueToRGB(X, T.fh.v * F)), T.fs.propType && (F.length ? X = addSaturationToRGB(X, T.fs.v * F[0]) : X = addSaturationToRGB(X, T.fs.v * F)), T.fb.propType && (F.length ? X = addBrightnessToRGB(X, T.fb.v * F[0]) : X = addBrightnessToRGB(X, T.fb.v * F));
              }
            }
            for (b = 0; b < A; b += 1)
              T = i[b].a, T.p.propType && (M = i[b].s, F = M.getMult(c[d].anIndexes[b], s.a[b].s.totalChars), this._hasMaskedPath ? F.length ? a.translate(0, T.p.v[1] * F[0], -T.p.v[2] * F[1]) : a.translate(0, T.p.v[1] * F, -T.p.v[2] * F) : F.length ? a.translate(T.p.v[0] * F[0], T.p.v[1] * F[1], -T.p.v[2] * F[2]) : a.translate(T.p.v[0] * F, T.p.v[1] * F, -T.p.v[2] * F));
            if (t.strokeWidthAnim && (st = Q < 0 ? 0 : Q), t.strokeColorAnim && (lt = "rgb(" + Math.round($[0] * 255) + "," + Math.round($[1] * 255) + "," + Math.round($[2] * 255) + ")"), t.fillColorAnim && t.fc && (at = "rgb(" + Math.round(X[0] * 255) + "," + Math.round(X[1] * 255) + "," + Math.round(X[2] * 255) + ")"), this._hasMaskedPath) {
              if (a.translate(0, -t.ls), a.translate(0, r[1] * j * 0.01 + f, 0), this._pathData.p.v) {
                H = (g.point[1] - x.point[1]) / (g.point[0] - x.point[0]);
                var ct = Math.atan(H) * 180 / Math.PI;
                g.point[0] < x.point[0] && (ct += 180), a.rotate(-ct * Math.PI / 180);
              }
              a.translate(N, q, 0), y -= r[0] * c[d].an * 5e-3, c[d + 1] && B !== c[d + 1].ind && (y += c[d].an / 2, y += t.tr * 1e-3 * t.finalSize);
            } else {
              switch (a.translate(o, f, 0), t.ps && a.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  a.translate(c[d].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[c[d].line]), 0, 0);
                  break;
                case 2:
                  a.translate(c[d].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[c[d].line]) / 2, 0, 0);
                  break;
              }
              a.translate(0, -t.ls), a.translate(G, 0, 0), a.translate(r[0] * c[d].an * 5e-3, r[1] * j * 0.01, 0), o += c[d].l + t.tr * 1e-3 * t.finalSize;
            }
            n === "html" ? it = a.toCSS() : n === "svg" ? it = a.to2dCSS() : nt = [a.props[0], a.props[1], a.props[2], a.props[3], a.props[4], a.props[5], a.props[6], a.props[7], a.props[8], a.props[9], a.props[10], a.props[11], a.props[12], a.props[13], a.props[14], a.props[15]], ot = J;
          }
          l <= d ? (L = new LetterProps(ot, st, lt, at, it, nt), this.renderedLetters.push(L), l += 1, this.lettersChangedFlag = !0) : (L = this.renderedLetters[d], this.lettersChangedFlag = L.update(ot, st, lt, at, it, nt) || this.lettersChangedFlag);
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty);
    function ITextElement() {
    }
    ITextElement.prototype.initElement = function(t, e, r) {
      this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, ITextElement.prototype.prepareFrame = function(t) {
      this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    }, ITextElement.prototype.createPathShape = function(t, e) {
      var r, i = e.length, s, a = "";
      for (r = 0; r < i; r += 1)
        e[r].ty === "sh" && (s = e[r].ks.k, a += buildShapeString(s, s.i.length, !0, t));
      return a;
    }, ITextElement.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e);
    }, ITextElement.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t);
    }, ITextElement.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t);
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0);
          break;
      }
      e.translate(i, s, 0);
    }, ITextElement.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + ")";
    }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
    }, ITextElement.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
    };
    var emptyShapeData = {
      shapes: []
    };
    function SVGTextLottieElement(t, e, r) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
    }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
      for (var e = 0, r = t.length, i = [], s = ""; e < r; )
        t[e] === "\r" || t[e] === "" ? (i.push(s), s = "") : s += t[e], e += 1;
      return i.push(s), i;
    }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
      if (t.shapes && t.shapes.length) {
        var r = t.shapes[0];
        if (r.it) {
          var i = r.it[r.it.length - 1];
          i.s && (i.s.k[0] = e, i.s.k[1] = e);
        }
      }
      return t;
    }, SVGTextLottieElement.prototype.buildNewText = function() {
      this.addDynamicProperty(this);
      var t, e, r = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
      var i = this.globalData.fontManager.getFontByName(r.f);
      if (i.fClass)
        this.layerElement.setAttribute("class", i.fClass);
      else {
        this.layerElement.setAttribute("font-family", i.fFamily);
        var s = r.fWeight, a = r.fStyle;
        this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s);
      }
      this.layerElement.setAttribute("aria-label", r.t);
      var n = r.l || [], l = !!this.globalData.fontManager.chars;
      e = n.length;
      var o, f = this.mHelper, d = "", C = this.data.singleShape, c = 0, S = 0, y = !0, g = r.tr * 1e-3 * r.finalSize;
      if (C && !l && !r.sz) {
        var _ = this.textContainer, u = "start";
        switch (r.j) {
          case 1:
            u = "end";
            break;
          case 2:
            u = "middle";
            break;
          default:
            u = "start";
            break;
        }
        _.setAttribute("text-anchor", u), _.setAttribute("letter-spacing", g);
        var m = this.buildTextContents(r.finalText);
        for (e = m.length, S = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)
          o = this.textSpans[t].span || createNS("tspan"), o.textContent = m[t], o.setAttribute("x", 0), o.setAttribute("y", S), o.style.display = "inherit", _.appendChild(o), this.textSpans[t] || (this.textSpans[t] = {
            span: null,
            glyph: null
          }), this.textSpans[t].span = o, S += r.finalLineHeight;
        this.layerElement.appendChild(_);
      } else {
        var p = this.textSpans.length, x;
        for (t = 0; t < e; t += 1) {
          if (this.textSpans[t] || (this.textSpans[t] = {
            span: null,
            childSpan: null,
            glyph: null
          }), !l || !C || t === 0) {
            if (o = p > t ? this.textSpans[t].span : createNS(l ? "g" : "text"), p <= t) {
              if (o.setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = o, l) {
                var P = createNS("g");
                o.appendChild(P), this.textSpans[t].childSpan = P;
              }
              this.textSpans[t].span = o, this.layerElement.appendChild(o);
            }
            o.style.display = "inherit";
          }
          if (f.reset(), C && (n[t].n && (c = -g, S += r.yOffset, S += y ? 1 : 0, y = !1), this.applyTextPropertiesToMatrix(r, f, n[t].line, c, S), c += n[t].l || 0, c += g), l) {
            x = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily);
            var E;
            if (x.t === 1)
              E = new SVGCompElement(x.data, this.globalData, this);
            else {
              var k = emptyShapeData;
              x.data && x.data.shapes && (k = this.buildShapeData(x.data, r.finalSize)), E = new SVGShapeElement(k, this.globalData, this);
            }
            if (this.textSpans[t].glyph) {
              var I = this.textSpans[t].glyph;
              this.textSpans[t].childSpan.removeChild(I.layerElement), I.destroy();
            }
            this.textSpans[t].glyph = E, E._debug = !0, E.prepareFrame(0), E.renderFrame(), this.textSpans[t].childSpan.appendChild(E.layerElement), x.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")");
          } else
            C && o.setAttribute("transform", "translate(" + f.props[12] + "," + f.props[13] + ")"), o.textContent = n[t].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        C && o && o.setAttribute("d", d);
      }
      for (; t < this.textSpans.length; )
        this.textSpans[t].span.style.display = "none", t += 1;
      this._sizeChanged = !0;
    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = !1;
        var t = this.layerElement.getBBox();
        this.bbox = {
          top: t.y,
          left: t.x,
          width: t.width,
          height: t.height
        };
      }
      return this.bbox;
    }, SVGTextLottieElement.prototype.getValue = function() {
      var t, e = this.textSpans.length, r;
      for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < e; t += 1)
        r = this.textSpans[t].glyph, r && (r.prepareFrame(this.comp.renderedFrame - this.data.st), r._mdf && (this._mdf = !0));
    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = !0;
        var t, e, r = this.textAnimator.renderedLetters, i = this.textProperty.currentData.l;
        e = i.length;
        var s, a, n;
        for (t = 0; t < e; t += 1)
          i[t].n || (s = r[t], a = this.textSpans[t].span, n = this.textSpans[t].glyph, n && n.renderFrame(), s._mdf.m && a.setAttribute("transform", s.m), s._mdf.o && a.setAttribute("opacity", s.o), s._mdf.sw && a.setAttribute("stroke-width", s.sw), s._mdf.sc && a.setAttribute("stroke", s.sc), s._mdf.fc && a.setAttribute("fill", s.fc));
      }
    };
    function ISolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
      var t = createNS("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
    };
    function NullElement(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy();
    }
    NullElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, !0);
    }, NullElement.prototype.renderFrame = function() {
    }, NullElement.prototype.getBaseElement = function() {
      return null;
    }, NullElement.prototype.destroy = function() {
    }, NullElement.prototype.sourceRectAtTime = function() {
    }, NullElement.prototype.hide = function() {
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement);
    function SVGRendererBase() {
    }
    extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
      return new NullElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createShape = function(t) {
      return new SVGShapeElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createText = function(t) {
      return new SVGTextLottieElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createImage = function(t) {
      return new IImageElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createSolid = function(t) {
      return new ISolidElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var r = createNS("clipPath"), i = createNS("rect");
      i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
      var s = createElementID();
      r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
    }, SVGRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, SVGRendererBase.prototype.updateContainerSize = function() {
    }, SVGRendererBase.prototype.findIndexByInd = function(t) {
      var e = 0, r = this.layers.length;
      for (e = 0; e < r; e += 1)
        if (this.layers[e].ind === t)
          return e;
      return -1;
    }, SVGRendererBase.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        e[t] = !0;
        var r = this.createItem(this.layers[t]);
        if (e[t] = r, getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt) {
          var i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
          if (i === -1)
            return;
          if (!this.elements[i] || this.elements[i] === !0)
            this.buildItem(i), this.addPendingElement(r);
          else {
            var s = e[i], a = s.getMatte(this.layers[t].tt);
            r.setMatte(a);
          }
        }
      }
    }, SVGRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt)
          for (var e = 0, r = this.elements.length; e < r; ) {
            if (this.elements[e] === t) {
              var i = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, s = this.elements[i], a = s.getMatte(this.layers[e].tt);
              t.setMatte(a);
              break;
            }
            e += 1;
          }
      }
    }, SVGRendererBase.prototype.renderFrame = function(t) {
      if (!(this.renderedFrame === t || this.destroyed)) {
        t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
        var e, r = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = r - 1; e >= 0; e -= 1)
          (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf)
          for (e = 0; e < r; e += 1)
            (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
      var r = t.getBaseElement();
      if (r) {
        for (var i = 0, s; i < e; )
          this.elements[i] && this.elements[i] !== !0 && this.elements[i].getBaseElement() && (s = this.elements[i].getBaseElement()), i += 1;
        s ? this.layerElement.insertBefore(r, s) : this.layerElement.appendChild(r);
      }
    }, SVGRendererBase.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, SVGRendererBase.prototype.show = function() {
      this.layerElement.style.display = "block";
    };
    function ICompElement() {
    }
    extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), (this.data.xt || !e.progressiveLoad) && this.buildAllItems(), this.hide();
    }, ICompElement.prototype.prepareFrame = function(t) {
      if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), !(!this.isInRange && !this.data.xt)) {
        if (this.tm._placeholder)
          this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
        }
        var r, i = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)
          (this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0));
      }
    }, ICompElement.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, ICompElement.prototype.setElements = function(t) {
      this.elements = t;
    }, ICompElement.prototype.getElements = function() {
      return this.elements;
    }, ICompElement.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy();
    }, ICompElement.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    };
    function SVGCompElement(t, e, r) {
      this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      };
    }
    extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    };
    function SVGRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var r = "";
      if (e && e.title) {
        var i = createNS("title"), s = createElementID();
        i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s;
      }
      if (e && e.description) {
        var a = createNS("desc"), n = createElementID();
        a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + n;
      }
      r && this.svgElement.setAttribute("aria-labelledby", r);
      var l = createNS("defs");
      this.svgElement.appendChild(l);
      var o = createNS("g");
      this.svgElement.appendChild(o), this.layerElement = o, this.renderConfig = {
        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        contentVisibility: e && e.contentVisibility || "visible",
        progressiveLoad: e && e.progressiveLoad || !1,
        hideOnTransparent: !(e && e.hideOnTransparent === !1),
        viewBoxOnly: e && e.viewBoxOnly || !1,
        viewBoxSize: e && e.viewBoxSize || !1,
        className: e && e.className || "",
        id: e && e.id || "",
        focusable: e && e.focusable,
        filterSize: {
          width: e && e.filterSize && e.filterSize.width || "100%",
          height: e && e.filterSize && e.filterSize.height || "100%",
          x: e && e.filterSize && e.filterSize.x || "0%",
          y: e && e.filterSize && e.filterSize.y || "0%"
        },
        width: e && e.width,
        height: e && e.height,
        runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        defs: l,
        renderConfig: this.renderConfig
      }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
    }
    extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    };
    function ShapeTransformManager() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
    }
    ShapeTransformManager.prototype = {
      addTransformSequence: function(e) {
        var r, i = e.length, s = "_";
        for (r = 0; r < i; r += 1)
          s += e[r].transform.key + "_";
        var a = this.sequences[s];
        return a || (a = {
          transforms: [].concat(e),
          finalTransform: new Matrix(),
          _mdf: !1
        }, this.sequences[s] = a, this.sequenceList.push(a)), a;
      },
      processSequence: function(e, r) {
        for (var i = 0, s = e.transforms.length, a = r; i < s && !r; ) {
          if (e.transforms[i].transform.mProps._mdf) {
            a = !0;
            break;
          }
          i += 1;
        }
        if (a)
          for (e.finalTransform.reset(), i = s - 1; i >= 0; i -= 1)
            e.finalTransform.multiply(e.transforms[i].transform.mProps.v);
        e._mdf = a;
      },
      processSequences: function(e) {
        var r, i = this.sequenceList.length;
        for (r = 0; r < i; r += 1)
          this.processSequence(this.sequenceList[r], e);
      },
      getNewKey: function() {
        return this.transform_key_count += 1, "_" + this.transform_key_count;
      }
    };
    var lumaLoader = function() {
      var e = "__lottie_element_luma_buffer", r = null, i = null, s = null;
      function a() {
        var o = createNS("svg"), f = createNS("filter"), d = createNS("feColorMatrix");
        return f.setAttribute("id", e), d.setAttribute("type", "matrix"), d.setAttribute("color-interpolation-filters", "sRGB"), d.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), f.appendChild(d), o.appendChild(f), o.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (o.style.display = "none"), o;
      }
      function n() {
        r || (s = a(), document.body.appendChild(s), r = createTag("canvas"), i = r.getContext("2d"), i.filter = "url(#" + e + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1));
      }
      function l(o) {
        return r || n(), r.width = o.width, r.height = o.height, i.filter = "url(#" + e + ")", r;
      }
      return {
        load: n,
        get: l
      };
    };
    function createCanvas(t, e) {
      if (featureSupport.offscreenCanvas)
        return new OffscreenCanvas(t, e);
      var r = createTag("canvas");
      return r.width = t, r.height = e, r;
    }
    var assetLoader = function() {
      return {
        loadLumaCanvas: lumaLoader.load,
        getLumaCanvas: lumaLoader.get,
        createCanvas
      };
    }(), registeredEffects = {};
    function CVEffects(t) {
      var e, r = t.data.ef ? t.data.ef.length : 0;
      this.filters = [];
      var i;
      for (e = 0; e < r; e += 1) {
        i = null;
        var s = t.data.ef[e].ty;
        if (registeredEffects[s]) {
          var a = registeredEffects[s].effect;
          i = new a(t.effectsManager.effectElements[e], t);
        }
        i && this.filters.push(i);
      }
      this.filters.length && t.addRenderableComponent(this);
    }
    CVEffects.prototype.renderFrame = function(t) {
      var e, r = this.filters.length;
      for (e = 0; e < r; e += 1)
        this.filters[e].renderFrame(t);
    }, CVEffects.prototype.getEffects = function(t) {
      var e, r = this.filters.length, i = [];
      for (e = 0; e < r; e += 1)
        this.filters[e].type === t && i.push(this.filters[e]);
      return i;
    };
    function registerEffect(t, e) {
      registeredEffects[t] = {
        effect: e
      };
    }
    function CVMaskElement(t, e) {
      this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
      var r, i = this.masksProperties.length, s = !1;
      for (r = 0; r < i; r += 1)
        this.masksProperties[r].mode !== "n" && (s = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
      this.hasMasks = s, s && this.element.addRenderableComponent(this);
    }
    CVMaskElement.prototype.renderFrame = function() {
      if (this.hasMasks) {
        var t = this.element.finalTransform.mat, e = this.element.canvasContext, r, i = this.masksProperties.length, s, a, n;
        for (e.beginPath(), r = 0; r < i; r += 1)
          if (this.masksProperties[r].mode !== "n") {
            this.masksProperties[r].inv && (e.moveTo(0, 0), e.lineTo(this.element.globalData.compSize.w, 0), e.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), e.lineTo(0, this.element.globalData.compSize.h), e.lineTo(0, 0)), n = this.viewData[r].v, s = t.applyToPointArray(n.v[0][0], n.v[0][1], 0), e.moveTo(s[0], s[1]);
            var l, o = n._length;
            for (l = 1; l < o; l += 1)
              a = t.applyToTriplePoints(n.o[l - 1], n.i[l], n.v[l]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
            a = t.applyToTriplePoints(n.o[l - 1], n.i[0], n.v[0]), e.bezierCurveTo(a[0], a[1], a[2], a[3], a[4], a[5]);
          }
        this.element.globalData.renderer.save(!0), e.clip();
      }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
      this.element = null;
    };
    function CVBaseElement() {
    }
    var operationsMap = {
      1: "source-in",
      2: "source-out",
      3: "source-in",
      4: "source-out"
    };
    CVBaseElement.prototype = {
      createElements: function() {
      },
      initRendererElement: function() {
      },
      createContainerElements: function() {
        if (this.data.tt >= 1) {
          this.buffers = [];
          var e = this.globalData.canvasContext, r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
          this.buffers.push(r);
          var i = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
          this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
        }
        this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms();
      },
      createContent: function() {
      },
      setBlendMode: function() {
        var e = this.globalData;
        if (e.blendMode !== this.data.bm) {
          e.blendMode = this.data.bm;
          var r = getBlendMode(this.data.bm);
          e.canvasContext.globalCompositeOperation = r;
        }
      },
      createRenderableComponents: function() {
        this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
      },
      hideElement: function() {
        !this.hidden && (!this.isInRange || this.isTransparent) && (this.hidden = !0);
      },
      showElement: function() {
        this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
      },
      clearCanvas: function(e) {
        e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
      },
      prepareLayer: function() {
        if (this.data.tt >= 1) {
          var e = this.buffers[0], r = e.getContext("2d");
          this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
        }
      },
      exitLayer: function() {
        if (this.data.tt >= 1) {
          var e = this.buffers[1], r = e.getContext("2d");
          this.clearCanvas(r), r.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
          var i = this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1);
          if (i.renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
            var s = assetLoader.getLumaCanvas(this.canvasContext.canvas), a = s.getContext("2d");
            a.drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(s, 0, 0);
          }
          this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
        }
      },
      renderFrame: function(e) {
        if (!(this.hidden || this.data.hd) && !(this.data.td === 1 && !e)) {
          this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
          var r = this.data.ty === 0;
          this.prepareLayer(), this.globalData.renderer.save(r), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(r), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
        }
      },
      destroy: function() {
        this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
      },
      mHelper: new Matrix()
    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement;
    function CVShapeData(t, e, r, i) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var s = 4;
      e.ty === "rc" ? s = 5 : e.ty === "el" ? s = 6 : e.ty === "sr" && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
      var a, n = r.length, l;
      for (a = 0; a < n; a += 1)
        r[a].closed || (l = {
          transforms: i.addTransformSequence(r[a].transforms),
          trNodes: []
        }, this.styledShapes.push(l), r[a].elements.push(l));
    }
    CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated;
    function CVShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
      opacity: 1,
      _opMdf: !1
    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
    }, CVShapeElement.prototype.createStyleElement = function(t, e) {
      var r = {
        data: t,
        type: t.ty,
        preTransforms: this.transformsManager.addTransformSequence(e),
        transforms: [],
        elements: [],
        closed: t.hd === !0
      }, i = {};
      if (t.ty === "fl" || t.ty === "st" ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : (t.ty === "gf" || t.ty === "gs") && (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
        k: 0
      }, 0, 0.01, this), i.a = PropertyFactory.getProp(this, t.a || {
        k: 0
      }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this), t.ty === "st" || t.ty === "gs") {
        if (r.lc = lineCapEnum[t.lc || 2], r.lj = lineJoinEnum[t.lj || 2], t.lj == 1 && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
          var s = new DashProperty(this, t.d, "canvas", this);
          i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0]);
        }
      } else
        r.r = t.r === 2 ? "evenodd" : "nonzero";
      return this.stylesList.push(r), i.style = r, i;
    }, CVShapeElement.prototype.createGroupElement = function() {
      var t = {
        it: [],
        prevViewData: []
      };
      return t;
    }, CVShapeElement.prototype.createTransformElement = function(t) {
      var e = {
        transform: {
          opacity: 1,
          _opMdf: !1,
          key: this.transformsManager.getNewKey(),
          op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
          mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
        }
      };
      return e;
    }, CVShapeElement.prototype.createShapeElement = function(t) {
      var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
      return this.shapes.push(e), this.addShapeToModifiers(e), e;
    }, CVShapeElement.prototype.reloadShapes = function() {
      this._isFirstFrame = !0;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1)
        this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1)
        this.dynamicProperties[t].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
    }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
      var e, r = this.stylesList.length;
      for (e = 0; e < r; e += 1)
        this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1)
        this.stylesList[t].closed || this.stylesList[t].transforms.pop();
    }, CVShapeElement.prototype.closeStyles = function(t) {
      var e, r = t.length;
      for (e = 0; e < r; e += 1)
        t[e].closed = !0;
    }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
      var a, n = t.length - 1, l, o, f = [], d = [], C, c, S, y = [].concat(s);
      for (a = n; a >= 0; a -= 1) {
        if (C = this.searchProcessedElement(t[a]), C ? e[a] = r[C - 1] : t[a]._shouldRender = i, t[a].ty === "fl" || t[a].ty === "st" || t[a].ty === "gf" || t[a].ty === "gs")
          C ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], y), f.push(e[a].style);
        else if (t[a].ty === "gr") {
          if (!C)
            e[a] = this.createGroupElement(t[a]);
          else
            for (o = e[a].it.length, l = 0; l < o; l += 1)
              e[a].prevViewData[l] = e[a].it[l];
          this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, y);
        } else
          t[a].ty === "tr" ? (C || (S = this.createTransformElement(t[a]), e[a] = S), y.push(e[a]), this.addTransformToStyleList(e[a])) : t[a].ty === "sh" || t[a].ty === "rc" || t[a].ty === "el" || t[a].ty === "sr" ? C || (e[a] = this.createShapeElement(t[a])) : t[a].ty === "tm" || t[a].ty === "rd" || t[a].ty === "pb" || t[a].ty === "zz" || t[a].ty === "op" ? (C ? (c = e[a], c.closed = !1) : (c = ShapeModifiers.getModifier(t[a].ty), c.init(this, t[a]), e[a] = c, this.shapeModifiers.push(c)), d.push(c)) : t[a].ty === "rp" && (C ? (c = e[a], c.closed = !0) : (c = ShapeModifiers.getModifier(t[a].ty), e[a] = c, c.init(this, t, a, e), this.shapeModifiers.push(c), i = !1), d.push(c));
        this.addProcessedElement(t[a], a + 1);
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(f), n = d.length, a = 0; a < n; a += 1)
        d[a].closed = !0;
    }, CVShapeElement.prototype.renderInnerContent = function() {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
    }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
      (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0);
    }, CVShapeElement.prototype.drawLayer = function() {
      var t, e = this.stylesList.length, r, i, s, a, n, l, o = this.globalData.renderer, f = this.globalData.canvasContext, d, C;
      for (t = 0; t < e; t += 1)
        if (C = this.stylesList[t], d = C.type, !((d === "st" || d === "gs") && C.wi === 0 || !C.data._shouldRender || C.coOp === 0 || this.globalData.currentGlobalAlpha === 0)) {
          for (o.save(), n = C.elements, d === "st" || d === "gs" ? (o.ctxStrokeStyle(d === "st" ? C.co : C.grd), o.ctxLineWidth(C.wi), o.ctxLineCap(C.lc), o.ctxLineJoin(C.lj), o.ctxMiterLimit(C.ml || 0)) : o.ctxFillStyle(d === "fl" ? C.co : C.grd), o.ctxOpacity(C.coOp), d !== "st" && d !== "gs" && f.beginPath(), o.ctxTransform(C.preTransforms.finalTransform.props), i = n.length, r = 0; r < i; r += 1) {
            for ((d === "st" || d === "gs") && (f.beginPath(), C.da && (f.setLineDash(C.da), f.lineDashOffset = C.do)), l = n[r].trNodes, a = l.length, s = 0; s < a; s += 1)
              l[s].t === "m" ? f.moveTo(l[s].p[0], l[s].p[1]) : l[s].t === "c" ? f.bezierCurveTo(l[s].pts[0], l[s].pts[1], l[s].pts[2], l[s].pts[3], l[s].pts[4], l[s].pts[5]) : f.closePath();
            (d === "st" || d === "gs") && (o.ctxStroke(), C.da && f.setLineDash(this.dashResetter));
          }
          d !== "st" && d !== "gs" && this.globalData.renderer.ctxFill(C.r), o.restore();
        }
    }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
      var s, a = e.length - 1, n;
      for (n = t, s = a; s >= 0; s -= 1)
        e[s].ty === "tr" ? (n = r[s].transform, this.renderShapeTransform(t, n)) : e[s].ty === "sh" || e[s].ty === "el" || e[s].ty === "rc" || e[s].ty === "sr" ? this.renderPath(e[s], r[s]) : e[s].ty === "fl" ? this.renderFill(e[s], r[s], n) : e[s].ty === "st" ? this.renderStroke(e[s], r[s], n) : e[s].ty === "gf" || e[s].ty === "gs" ? this.renderGradientFill(e[s], r[s], n) : e[s].ty === "gr" ? this.renderShape(n, e[s].it, r[s].it) : e[s].ty;
      i && this.drawLayer();
    }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
      if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
        var r = t.trNodes, i = e.paths, s, a, n, l = i._length;
        r.length = 0;
        var o = t.transforms.finalTransform;
        for (n = 0; n < l; n += 1) {
          var f = i.shapes[n];
          if (f && f.v) {
            for (a = f._length, s = 1; s < a; s += 1)
              s === 1 && r.push({
                t: "m",
                p: o.applyToPointArray(f.v[0][0], f.v[0][1], 0)
              }), r.push({
                t: "c",
                pts: o.applyToTriplePoints(f.o[s - 1], f.i[s], f.v[s])
              });
            a === 1 && r.push({
              t: "m",
              p: o.applyToPointArray(f.v[0][0], f.v[0][1], 0)
            }), f.c && a && (r.push({
              t: "c",
              pts: o.applyToTriplePoints(f.o[s - 1], f.i[0], f.v[0])
            }), r.push({
              t: "z"
            }));
          }
        }
        t.trNodes = r;
      }
    }, CVShapeElement.prototype.renderPath = function(t, e) {
      if (t.hd !== !0 && t._shouldRender) {
        var r, i = e.styledShapes.length;
        for (r = 0; r < i; r += 1)
          this.renderStyledShape(e.styledShapes[r], e.sh);
      }
    }, CVShapeElement.prototype.renderFill = function(t, e, r) {
      var i = e.style;
      (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity);
    }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
      var i = e.style, s;
      if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
        var a = this.globalData.canvasContext, n = e.s.v, l = e.e.v;
        if (t.t === 1)
          s = a.createLinearGradient(n[0], n[1], l[0], l[1]);
        else {
          var o = Math.sqrt(Math.pow(n[0] - l[0], 2) + Math.pow(n[1] - l[1], 2)), f = Math.atan2(l[1] - n[1], l[0] - n[0]), d = e.h.v;
          d >= 1 ? d = 0.99 : d <= -1 && (d = -0.99);
          var C = o * d, c = Math.cos(f + e.a.v) * C + n[0], S = Math.sin(f + e.a.v) * C + n[1];
          s = a.createRadialGradient(c, S, 0, n[0], n[1], o);
        }
        var y, g = t.g.p, _ = e.g.c, u = 1;
        for (y = 0; y < g; y += 1)
          e.g._hasOpacity && e.g._collapsable && (u = e.g.o[y * 2 + 1]), s.addColorStop(_[y * 4] / 100, "rgba(" + _[y * 4 + 1] + "," + _[y * 4 + 2] + "," + _[y * 4 + 3] + "," + u + ")");
        i.grd = s;
      }
      i.coOp = e.o.v * r.opacity;
    }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
      var i = e.style, s = e.d;
      s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v);
    }, CVShapeElement.prototype.destroy = function() {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
    };
    function CVTextElement(t, e, r) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
        fill: "rgba(0,0,0,0)",
        stroke: "rgba(0,0,0,0)",
        sWidth: 0,
        fValue: ""
      }, this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = !1;
      t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
      var r = !1;
      t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
      var i = this.globalData.fontManager.getFontByName(t.f), s, a, n = t.l, l = this.mHelper;
      this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
      var o, f, d, C, c, S, y, g, _, u, m = this.data.singleShape, p = t.tr * 1e-3 * t.finalSize, x = 0, P = 0, E = !0, k = 0;
      for (s = 0; s < a; s += 1) {
        o = this.globalData.fontManager.getCharData(t.finalText[s], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), f = o && o.data || {}, l.reset(), m && n[s].n && (x = -p, P += t.yOffset, P += E ? 1 : 0, E = !1), c = f.shapes ? f.shapes[0].it : [], y = c.length, l.scale(t.finalSize / 100, t.finalSize / 100), m && this.applyTextPropertiesToMatrix(t, l, n[s].line, x, P), _ = createSizedArray(y - 1);
        var I = 0;
        for (S = 0; S < y; S += 1)
          if (c[S].ty === "sh") {
            for (C = c[S].ks.k.i.length, g = c[S].ks.k, u = [], d = 1; d < C; d += 1)
              d === 1 && u.push(l.applyToX(g.v[0][0], g.v[0][1], 0), l.applyToY(g.v[0][0], g.v[0][1], 0)), u.push(l.applyToX(g.o[d - 1][0], g.o[d - 1][1], 0), l.applyToY(g.o[d - 1][0], g.o[d - 1][1], 0), l.applyToX(g.i[d][0], g.i[d][1], 0), l.applyToY(g.i[d][0], g.i[d][1], 0), l.applyToX(g.v[d][0], g.v[d][1], 0), l.applyToY(g.v[d][0], g.v[d][1], 0));
            u.push(l.applyToX(g.o[d - 1][0], g.o[d - 1][1], 0), l.applyToY(g.o[d - 1][0], g.o[d - 1][1], 0), l.applyToX(g.i[0][0], g.i[0][1], 0), l.applyToY(g.i[0][0], g.i[0][1], 0), l.applyToX(g.v[0][0], g.v[0][1], 0), l.applyToY(g.v[0][0], g.v[0][1], 0)), _[I] = u, I += 1;
          }
        m && (x += n[s].l, x += p), this.textSpans[k] ? this.textSpans[k].elem = _ : this.textSpans[k] = {
          elem: _
        }, k += 1;
      }
    }, CVTextElement.prototype.renderInnerContent = function() {
      this.validateText();
      var t = this.canvasContext;
      t.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var e, r, i, s, a, n, l = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l;
      r = o.length;
      var f, d = null, C = null, c = null, S, y, g = this.globalData.renderer;
      for (e = 0; e < r; e += 1)
        if (!o[e].n) {
          if (f = l[e], f && (g.save(), g.ctxTransform(f.p), g.ctxOpacity(f.o)), this.fill) {
            for (f && f.fc ? d !== f.fc && (g.ctxFillStyle(f.fc), d = f.fc) : d !== this.values.fill && (d = this.values.fill, g.ctxFillStyle(this.values.fill)), S = this.textSpans[e].elem, s = S.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
              for (y = S[i], n = y.length, this.globalData.canvasContext.moveTo(y[0], y[1]), a = 2; a < n; a += 6)
                this.globalData.canvasContext.bezierCurveTo(y[a], y[a + 1], y[a + 2], y[a + 3], y[a + 4], y[a + 5]);
            this.globalData.canvasContext.closePath(), g.ctxFill();
          }
          if (this.stroke) {
            for (f && f.sw ? c !== f.sw && (c = f.sw, g.ctxLineWidth(f.sw)) : c !== this.values.sWidth && (c = this.values.sWidth, g.ctxLineWidth(this.values.sWidth)), f && f.sc ? C !== f.sc && (C = f.sc, g.ctxStrokeStyle(f.sc)) : C !== this.values.stroke && (C = this.values.stroke, g.ctxStrokeStyle(this.values.stroke)), S = this.textSpans[e].elem, s = S.length, this.globalData.canvasContext.beginPath(), i = 0; i < s; i += 1)
              for (y = S[i], n = y.length, this.globalData.canvasContext.moveTo(y[0], y[1]), a = 2; a < n; a += 6)
                this.globalData.canvasContext.bezierCurveTo(y[a], y[a + 1], y[a + 2], y[a + 3], y[a + 4], y[a + 5]);
            this.globalData.canvasContext.closePath(), g.ctxStroke();
          }
          f && this.globalData.renderer.restore();
        }
    };
    function CVImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var t = createTag("canvas");
        t.width = this.assetData.w, t.height = this.assetData.h;
        var e = t.getContext("2d"), r = this.img.width, i = this.img.height, s = r / i, a = this.assetData.w / this.assetData.h, n, l, o = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        s > a && o === "xMidYMid slice" || s < a && o !== "xMidYMid slice" ? (l = i, n = l * a) : (n = r, l = n / a), e.drawImage(this.img, (r - n) / 2, (i - l) / 2, n, l, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
      }
    }, CVImageElement.prototype.renderInnerContent = function() {
      this.canvasContext.drawImage(this.img, 0, 0);
    }, CVImageElement.prototype.destroy = function() {
      this.img = null;
    };
    function CVSolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
      this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
    };
    function CanvasRendererBase() {
    }
    extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
      return new CVShapeElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createText = function(t) {
      return new CVTextElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createImage = function(t) {
      return new CVImageElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createSolid = function(t) {
      return new CVSolidElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
      t[0] === 1 && t[1] === 0 && t[4] === 0 && t[5] === 1 && t[12] === 0 && t[13] === 0 || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
    }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
      this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
    }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
      this.canvasContext.fillStyle = t;
    }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
      this.canvasContext.strokeStyle = t;
    }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
      this.canvasContext.lineWidth = t;
    }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
      this.canvasContext.lineCap = t;
    }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
      this.canvasContext.lineJoin = t;
    }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
      this.canvasContext.miterLimit = t;
    }, CanvasRendererBase.prototype.ctxFill = function(t) {
      this.canvasContext.fill(t);
    }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, r, i) {
      this.canvasContext.fillRect(t, e, r, i);
    }, CanvasRendererBase.prototype.ctxStroke = function() {
      this.canvasContext.stroke();
    }, CanvasRendererBase.prototype.reset = function() {
      if (!this.renderConfig.clearCanvas) {
        this.canvasContext.restore();
        return;
      }
      this.contextData.reset();
    }, CanvasRendererBase.prototype.save = function() {
      this.canvasContext.save();
    }, CanvasRendererBase.prototype.restore = function(t) {
      if (!this.renderConfig.clearCanvas) {
        this.canvasContext.restore();
        return;
      }
      t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t);
    }, CanvasRendererBase.prototype.configAnimation = function(t) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = createTag("canvas");
        var e = this.animationItem.container.style;
        e.width = "100%", e.height = "100%";
        var r = "0px 0px 0px";
        e.transformOrigin = r, e.mozTransformOrigin = r, e.webkitTransformOrigin = r, e["-webkit-transform"] = r, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
      } else
        this.canvasContext = this.renderConfig.context;
      this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = {
        w: t.w,
        h: t.h,
        sx: 0,
        sy: 0,
        tx: 0,
        ty: 0
      }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
    }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
      this.reset();
      var r, i;
      t ? (r = t, i = e, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr);
      var s, a;
      if (this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
        var n = this.renderConfig.preserveAspectRatio.split(" "), l = n[1] || "meet", o = n[0] || "xMidYMid", f = o.substr(0, 4), d = o.substr(4);
        s = r / i, a = this.transformCanvas.w / this.transformCanvas.h, a > s && l === "meet" || a < s && l === "slice" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), f === "xMid" && (a < s && l === "meet" || a > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : f === "xMax" && (a < s && l === "meet" || a > s && l === "slice") ? this.transformCanvas.tx = (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : this.transformCanvas.tx = 0, d === "YMid" && (a > s && l === "meet" || a < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : d === "YMax" && (a > s && l === "meet" || a < s && l === "slice") ? this.transformCanvas.ty = (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : this.transformCanvas.ty = 0;
      } else
        this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
    }, CanvasRendererBase.prototype.destroy = function() {
      this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = "");
      var t, e = this.layers ? this.layers.length : 0;
      for (t = e - 1; t >= 0; t -= 1)
        this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
    }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
      if (!(this.renderedFrame === t && this.renderConfig.clearCanvas === !0 && !e || this.destroyed || t === -1)) {
        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
        var r, i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), r = i - 1; r >= 0; r -= 1)
          (this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
        if (this.globalData._mdf) {
          for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)
            (this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
          this.renderConfig.clearCanvas !== !0 && this.restore();
        }
      }
    }, CanvasRendererBase.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!(e[t] || this.layers[t].ty === 99)) {
        var r = this.createItem(this.layers[t], this, this.globalData);
        e[t] = r, r.initExpressions();
      }
    }, CanvasRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        t.checkParenting();
      }
    }, CanvasRendererBase.prototype.hide = function() {
      this.animationItem.container.style.display = "none";
    }, CanvasRendererBase.prototype.show = function() {
      this.animationItem.container.style.display = "block";
    };
    function CanvasContext() {
      this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
    }
    function CVContextData() {
      this.stack = [], this.cArrPos = 0, this.cTr = new Matrix();
      var t, e = 15;
      for (t = 0; t < e; t += 1) {
        var r = new CanvasContext();
        this.stack[t] = r;
      }
      this._length = e, this.nativeContext = null, this.transformMat = new Matrix(), this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
    }
    CVContextData.prototype.duplicate = function() {
      var t = this._length * 2, e = 0;
      for (e = this._length; e < t; e += 1)
        this.stack[e] = new CanvasContext();
      this._length = t;
    }, CVContextData.prototype.reset = function() {
      this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
    }, CVContextData.prototype.restore = function(t) {
      this.cArrPos -= 1;
      var e = this.stack[this.cArrPos], r = e.transform, i, s = this.cTr.props;
      for (i = 0; i < 16; i += 1)
        s[i] = r[i];
      if (t) {
        this.nativeContext.restore();
        var a = this.stack[this.cArrPos + 1];
        this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit;
      }
      this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (t || e.opacity !== -1 && this.currentOpacity !== e.opacity) && (this.nativeContext.globalAlpha = e.opacity, this.currentOpacity = e.opacity), this.currentFillStyle = e.fillStyle, this.currentStrokeStyle = e.strokeStyle, this.currentLineWidth = e.lineWidth, this.currentLineCap = e.lineCap, this.currentLineJoin = e.lineJoin, this.currentMiterLimit = e.miterLimit;
    }, CVContextData.prototype.save = function(t) {
      t && this.nativeContext.save();
      var e = this.cTr.props;
      this._length <= this.cArrPos && this.duplicate();
      var r = this.stack[this.cArrPos], i;
      for (i = 0; i < 16; i += 1)
        r.transform[i] = e[i];
      this.cArrPos += 1;
      var s = this.stack[this.cArrPos];
      s.opacity = r.opacity, s.fillStyle = r.fillStyle, s.strokeStyle = r.strokeStyle, s.lineWidth = r.lineWidth, s.lineCap = r.lineCap, s.lineJoin = r.lineJoin, s.miterLimit = r.miterLimit;
    }, CVContextData.prototype.setOpacity = function(t) {
      this.stack[this.cArrPos].opacity = t;
    }, CVContextData.prototype.setContext = function(t) {
      this.nativeContext = t;
    }, CVContextData.prototype.fillStyle = function(t) {
      this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t);
    }, CVContextData.prototype.strokeStyle = function(t) {
      this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t);
    }, CVContextData.prototype.lineWidth = function(t) {
      this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t);
    }, CVContextData.prototype.lineCap = function(t) {
      this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t);
    }, CVContextData.prototype.lineJoin = function(t) {
      this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t);
    }, CVContextData.prototype.miterLimit = function(t) {
      this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t);
    }, CVContextData.prototype.transform = function(t) {
      this.transformMat.cloneFromProps(t);
      var e = this.cTr;
      this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
      var r = e.props;
      this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]);
    }, CVContextData.prototype.opacity = function(t) {
      var e = this.stack[this.cArrPos].opacity;
      e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e);
    }, CVContextData.prototype.fill = function(t) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t);
    }, CVContextData.prototype.fillRect = function(t, e, r, i) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, r, i);
    }, CVContextData.prototype.stroke = function() {
      this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
    };
    function CVCompElement(t, e, r) {
      this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      };
    }
    extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
      var t = this.canvasContext;
      t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip();
      var e, r = this.layers.length;
      for (e = r - 1; e >= 0; e -= 1)
        (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
    }, CVCompElement.prototype.destroy = function() {
      var t, e = this.layers.length;
      for (t = e - 1; t >= 0; t -= 1)
        this.elements[t] && this.elements[t].destroy();
      this.layers = null, this.elements = null;
    }, CVCompElement.prototype.createComp = function(t) {
      return new CVCompElement(t, this.globalData, this);
    };
    function CanvasRenderer(t, e) {
      this.animationItem = t, this.renderConfig = {
        clearCanvas: e && e.clearCanvas !== void 0 ? e.clearCanvas : !0,
        context: e && e.context || null,
        progressiveLoad: e && e.progressiveLoad || !1,
        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        contentVisibility: e && e.contentVisibility || "visible",
        className: e && e.className || "",
        id: e && e.id || "",
        runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
      }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
        frameNum: -1,
        _mdf: !1,
        renderConfig: this.renderConfig,
        currentGlobalAlpha: -1
      }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
    }
    extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
      return new CVCompElement(t, this.globalData, this);
    };
    function HBaseElement() {
    }
    HBaseElement.prototype = {
      checkBlendMode: function() {
      },
      initRendererElement: function() {
        this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
      },
      createContainerElements: function() {
        this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode();
      },
      renderElement: function() {
        var e = this.transformedElement ? this.transformedElement.style : {};
        if (this.finalTransform._matMdf) {
          var r = this.finalTransform.mat.toCSS();
          e.transform = r, e.webkitTransform = r;
        }
        this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v);
      },
      renderFrame: function() {
        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
      },
      destroy: function() {
        this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
      },
      createRenderableComponents: function() {
        this.maskManager = new MaskElement(this.data, this, this.globalData);
      },
      addEffects: function() {
      },
      setMatte: function() {
      }
    }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting;
    function HSolidElement(t, e, r) {
      this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
      var t;
      this.data.hasMask ? (t = createNS("rect"), t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : (t = createTag("div"), t.style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
    };
    function HShapeElement(t, e, r) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      };
    }
    extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
      var t;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask)
        this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
      else {
        t = createNS("svg");
        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t;
    }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1)
        e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
      return e;
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
      var r = t.sh.v, i = t.transformers, s, a = r._length, n, l, o, f;
      if (!(a <= 1)) {
        for (s = 0; s < a - 1; s += 1)
          n = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[s + 1]), f = this.getTransformedPoint(i, r.v[s + 1]), this.checkBounds(n, l, o, f, e);
        r.c && (n = this.getTransformedPoint(i, r.v[s]), l = this.getTransformedPoint(i, r.o[s]), o = this.getTransformedPoint(i, r.i[0]), f = this.getTransformedPoint(i, r.v[0]), this.checkBounds(n, l, o, f, e));
      }
    }, HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
      this.getBoundsOfCurve(t, e, r, i);
      var a = this.shapeBoundingBox;
      s.x = bmMin(a.left, s.x), s.xMax = bmMax(a.right, s.xMax), s.y = bmMin(a.top, s.y), s.yMax = bmMax(a.bottom, s.yMax);
    }, HShapeElement.prototype.shapeBoundingBox = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, HShapeElement.prototype.tempBoundingBox = {
      x: 0,
      xMax: 0,
      y: 0,
      yMax: 0,
      width: 0,
      height: 0
    }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
      for (var s = [[t[0], i[0]], [t[1], i[1]]], a, n, l, o, f, d, C, c = 0; c < 2; ++c)
        n = 6 * t[c] - 12 * e[c] + 6 * r[c], a = -3 * t[c] + 9 * e[c] - 9 * r[c] + 3 * i[c], l = 3 * e[c] - 3 * t[c], n |= 0, a |= 0, l |= 0, a === 0 && n === 0 || (a === 0 ? (o = -l / n, o > 0 && o < 1 && s[c].push(this.calculateF(o, t, e, r, i, c))) : (f = n * n - 4 * l * a, f >= 0 && (d = (-n + bmSqrt(f)) / (2 * a), d > 0 && d < 1 && s[c].push(this.calculateF(d, t, e, r, i, c)), C = (-n - bmSqrt(f)) / (2 * a), C > 0 && C < 1 && s[c].push(this.calculateF(C, t, e, r, i, c)))));
      this.shapeBoundingBox.left = bmMin.apply(null, s[0]), this.shapeBoundingBox.top = bmMin.apply(null, s[1]), this.shapeBoundingBox.right = bmMax.apply(null, s[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, s[1]);
    }, HShapeElement.prototype.calculateF = function(t, e, r, i, s, a) {
      return bmPow(1 - t, 3) * e[a] + 3 * bmPow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bmPow(t, 2) * i[a] + bmPow(t, 3) * s[a];
    }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
      var r, i = t.length;
      for (r = 0; r < i; r += 1)
        t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e);
    }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
      var r = 0;
      if (t.keyframes) {
        for (var i = 0; i < t.keyframes.length; i += 1) {
          var s = t.keyframes[i].s;
          s > r && (r = s);
        }
        r *= t.mult;
      } else
        r = t.v * t.mult;
      e.x -= r, e.xMax += r, e.y -= r, e.yMax += r;
    }, HShapeElement.prototype.currentBoxContains = function(t) {
      return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
    }, HShapeElement.prototype.renderInnerContent = function() {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var t = this.tempBoundingBox, e = 999999;
        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t))
          return;
        var r = !1;
        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
          this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
          var i = this.shapeCont.style, s = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
          i.transform = s, i.webkitTransform = s;
        }
      }
    };
    function HTextElement(t, e, r) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var t = createNS("g");
        this.maskedElement.appendChild(t), this.innerElem = t;
      } else
        this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting();
    }, HTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = this.innerElem.style, r = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
      e.fill = r, e.color = r, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
      var i = this.globalData.fontManager.getFontByName(t.f);
      if (!this.globalData.fontManager.chars)
        if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", i.fClass)
          this.innerElem.className = i.fClass;
        else {
          e.fontFamily = i.fFamily;
          var s = t.fWeight, a = t.fStyle;
          e.fontStyle = a, e.fontWeight = s;
        }
      var n, l, o = t.l;
      l = o.length;
      var f, d, C, c = this.mHelper, S, y = "", g = 0;
      for (n = 0; n < l; n += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[g] ? f = this.textPaths[g] : (f = createNS("path"), f.setAttribute("stroke-linecap", lineCapEnum[1]), f.setAttribute("stroke-linejoin", lineJoinEnum[2]), f.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[g] ? (d = this.textSpans[g], C = d.children[0]) : (d = createTag("div"), d.style.lineHeight = 0, C = createNS("svg"), C.appendChild(f), styleDiv(d)))) : this.isMasked ? f = this.textPaths[g] ? this.textPaths[g] : createNS("text") : this.textSpans[g] ? (d = this.textSpans[g], f = this.textPaths[g]) : (d = createTag("span"), styleDiv(d), f = createTag("span"), styleDiv(f), d.appendChild(f)), this.globalData.fontManager.chars) {
          var _ = this.globalData.fontManager.getCharData(t.finalText[n], i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), u;
          if (_ ? u = _.data : u = null, c.reset(), u && u.shapes && u.shapes.length && (S = u.shapes[0].it, c.scale(t.finalSize / 100, t.finalSize / 100), y = this.createPathShape(c, S), f.setAttribute("d", y)), this.isMasked)
            this.innerElem.appendChild(f);
          else {
            if (this.innerElem.appendChild(d), u && u.shapes) {
              document.body.appendChild(C);
              var m = C.getBBox();
              C.setAttribute("width", m.width + 2), C.setAttribute("height", m.height + 2), C.setAttribute("viewBox", m.x - 1 + " " + (m.y - 1) + " " + (m.width + 2) + " " + (m.height + 2));
              var p = C.style, x = "translate(" + (m.x - 1) + "px," + (m.y - 1) + "px)";
              p.transform = x, p.webkitTransform = x, o[n].yOffset = m.y - 1;
            } else
              C.setAttribute("width", 1), C.setAttribute("height", 1);
            d.appendChild(C);
          }
        } else if (f.textContent = o[n].val, f.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked)
          this.innerElem.appendChild(f);
        else {
          this.innerElem.appendChild(d);
          var P = f.style, E = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
          P.transform = E, P.webkitTransform = E;
        }
        this.isMasked ? this.textSpans[g] = f : this.textSpans[g] = d, this.textSpans[g].style.display = "block", this.textPaths[g] = f, g += 1;
      }
      for (; g < this.textSpans.length; )
        this.textSpans[g].style.display = "none", g += 1;
    }, HTextElement.prototype.renderInnerContent = function() {
      this.validateText();
      var t;
      if (this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag)
          return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
          var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          t.transform = e, t.webkitTransform = e;
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), !(!this.lettersChangedFlag && !this.textAnimator.lettersChangedFlag)) {
        var r, i, s = 0, a = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l;
        i = n.length;
        var l, o, f;
        for (r = 0; r < i; r += 1)
          n[r].n ? s += 1 : (o = this.textSpans[r], f = this.textPaths[r], l = a[s], s += 1, l._mdf.m && (this.isMasked ? o.setAttribute("transform", l.m) : (o.style.webkitTransform = l.m, o.style.transform = l.m)), o.style.opacity = l.o, l.sw && l._mdf.sw && f.setAttribute("stroke-width", l.sw), l.sc && l._mdf.sc && f.setAttribute("stroke", l.sc), l.fc && l._mdf.fc && (f.setAttribute("fill", l.fc), f.style.color = l.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var d = this.innerElem.getBBox();
          this.currentBBox.w !== d.width && (this.currentBBox.w = d.width, this.svgElement.setAttribute("width", d.width)), this.currentBBox.h !== d.height && (this.currentBBox.h = d.height, this.svgElement.setAttribute("height", d.height));
          var C = 1;
          if (this.currentBBox.w !== d.width + C * 2 || this.currentBBox.h !== d.height + C * 2 || this.currentBBox.x !== d.x - C || this.currentBBox.y !== d.y - C) {
            this.currentBBox.w = d.width + C * 2, this.currentBBox.h = d.height + C * 2, this.currentBBox.x = d.x - C, this.currentBBox.y = d.y - C, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
            var c = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            t.transform = c, t.webkitTransform = c;
          }
        }
      }
    };
    function HCameraElement(t, e, r) {
      this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
      var i = PropertyFactory.getProp;
      if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
        var s, a = t.ks.or.k.length;
        for (s = 0; s < a; s += 1)
          t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null;
      }
      this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = !0, this.finalTransform = {
        mProp: this
      };
    }
    extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
      var t, e = this.comp.threeDElements.length, r, i, s;
      for (t = 0; t < e; t += 1)
        if (r = this.comp.threeDElements[t], r.type === "3d") {
          i = r.perspectiveElem.style, s = r.container.style;
          var a = this.pe.v + "px", n = "0px 0px 0px", l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
          i.perspective = a, i.webkitPerspective = a, s.transformOrigin = n, s.mozTransformOrigin = n, s.webkitTransformOrigin = n, i.transform = l, i.webkitTransform = l;
        }
    }, HCameraElement.prototype.createElements = function() {
    }, HCameraElement.prototype.hide = function() {
    }, HCameraElement.prototype.renderFrame = function() {
      var t = this._isFirstFrame, e, r;
      if (this.hierarchy)
        for (r = this.hierarchy.length, e = 0; e < r; e += 1)
          t = this.hierarchy[e].finalTransform.mProp._mdf || t;
      if (t || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy)
          for (r = this.hierarchy.length - 1, e = r; e >= 0; e -= 1) {
            var i = this.hierarchy[e].finalTransform.mProp;
            this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2]);
          }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var s;
          this.p ? s = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : s = [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)), n = [s[0] / a, s[1] / a, s[2] / a], l = Math.sqrt(n[2] * n[2] + n[0] * n[0]), o = Math.atan2(n[1], l), f = Math.atan2(n[0], -n[2]);
          this.mat.rotateY(f).rotateX(-o);
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var d = !this._prevMat.equals(this.mat);
        if ((d || this.pe._mdf) && this.comp.threeDElements) {
          r = this.comp.threeDElements.length;
          var C, c, S;
          for (e = 0; e < r; e += 1)
            if (C = this.comp.threeDElements[e], C.type === "3d") {
              if (d) {
                var y = this.mat.toCSS();
                S = C.container.style, S.transform = y, S.webkitTransform = y;
              }
              this.pe._mdf && (c = C.perspectiveElem.style, c.perspective = this.pe.v + "px", c.webkitPerspective = this.pe.v + "px");
            }
          this.mat.clone(this._prevMat);
        }
      }
      this._isFirstFrame = !1;
    }, HCameraElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, !0);
    }, HCameraElement.prototype.destroy = function() {
    }, HCameraElement.prototype.getBaseElement = function() {
      return null;
    };
    function HImageElement(t, e, r) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r);
    }
    extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData), e = new Image();
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    };
    function HybridRendererBase(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
        className: e && e.className || "",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        hideOnTransparent: !(e && e.hideOnTransparent === !1),
        filterSize: {
          width: e && e.filterSize && e.filterSize.width || "400%",
          height: e && e.filterSize && e.filterSize.height || "400%",
          x: e && e.filterSize && e.filterSize.x || "-100%",
          y: e && e.filterSize && e.filterSize.y || "-100%"
        }
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        renderConfig: this.renderConfig
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        t.checkParenting();
      }
    }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
      var r = t.getBaseElement();
      if (r) {
        var i = this.layers[e];
        if (!i.ddd || !this.supports3d)
          if (this.threeDElements)
            this.addTo3dContainer(r, e);
          else {
            for (var s = 0, a, n, l; s < e; )
              this.elements[s] && this.elements[s] !== !0 && this.elements[s].getBaseElement && (n = this.elements[s], l = this.layers[s].ddd ? this.getThreeDContainerByPos(s) : n.getBaseElement(), a = l || a), s += 1;
            a ? (!i.ddd || !this.supports3d) && this.layerElement.insertBefore(r, a) : (!i.ddd || !this.supports3d) && this.layerElement.appendChild(r);
          }
        else
          this.addTo3dContainer(r, e);
      }
    }, HybridRendererBase.prototype.createShape = function(t) {
      return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createText = function(t) {
      return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createCamera = function(t) {
      return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
    }, HybridRendererBase.prototype.createImage = function(t) {
      return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createSolid = function(t) {
      return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
      for (var e = 0, r = this.threeDElements.length; e < r; ) {
        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t)
          return this.threeDElements[e].perspectiveElem;
        e += 1;
      }
      return null;
    }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
      var r = createTag("div"), i, s;
      styleDiv(r);
      var a = createTag("div");
      if (styleDiv(a), e === "3d") {
        i = r.style, i.width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px";
        var n = "50% 50%";
        i.webkitTransformOrigin = n, i.mozTransformOrigin = n, i.transformOrigin = n, s = a.style;
        var l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        s.transform = l, s.webkitTransform = l;
      }
      r.appendChild(a);
      var o = {
        container: a,
        perspectiveElem: r,
        startPos: t,
        endPos: t,
        type: e
      };
      return this.threeDElements.push(o), o;
    }, HybridRendererBase.prototype.build3dContainers = function() {
      var t, e = this.layers.length, r, i = "";
      for (t = 0; t < e; t += 1)
        this.layers[t].ddd && this.layers[t].ty !== 3 ? (i !== "3d" && (i = "3d", r = this.createThreeDContainer(t, "3d")), r.endPos = Math.max(r.endPos, t)) : (i !== "2d" && (i = "2d", r = this.createThreeDContainer(t, "2d")), r.endPos = Math.max(r.endPos, t));
      for (e = this.threeDElements.length, t = e - 1; t >= 0; t -= 1)
        this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
    }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
      for (var r = 0, i = this.threeDElements.length; r < i; ) {
        if (e <= this.threeDElements[r].endPos) {
          for (var s = this.threeDElements[r].startPos, a; s < e; )
            this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s].getBaseElement()), s += 1;
          a ? this.threeDElements[r].container.insertBefore(t, a) : this.threeDElements[r].container.appendChild(t);
          break;
        }
        r += 1;
      }
    }, HybridRendererBase.prototype.configAnimation = function(t) {
      var e = createTag("div"), r = this.animationItem.wrapper, i = e.style;
      i.width = t.w + "px", i.height = t.h + "px", this.resizerElem = e, styleDiv(e), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), i.overflow = "hidden";
      var s = createNS("svg");
      s.setAttribute("width", "1"), s.setAttribute("height", "1"), styleDiv(s), this.resizerElem.appendChild(s);
      var a = createNS("defs");
      s.appendChild(a), this.data = t, this.setupGlobalData(t, s), this.globalData.defs = a, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, HybridRendererBase.prototype.destroy = function() {
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1)
        this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, HybridRendererBase.prototype.updateContainerSize = function() {
      var t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, r = t / e, i = this.globalData.compSize.w / this.globalData.compSize.h, s, a, n, l;
      i > r ? (s = t / this.globalData.compSize.w, a = t / this.globalData.compSize.w, n = 0, l = (e - this.globalData.compSize.h * (t / this.globalData.compSize.w)) / 2) : (s = e / this.globalData.compSize.h, a = e / this.globalData.compSize.h, n = (t - this.globalData.compSize.w * (e / this.globalData.compSize.h)) / 2, l = 0);
      var o = this.resizerElem.style;
      o.webkitTransform = "matrix3d(" + s + ",0,0,0,0," + a + ",0,0,0,0,1,0," + n + "," + l + ",0,1)", o.transform = o.webkitTransform;
    }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
      this.resizerElem.style.display = "none";
    }, HybridRendererBase.prototype.show = function() {
      this.resizerElem.style.display = "block";
    }, HybridRendererBase.prototype.initItems = function() {
      if (this.buildAllItems(), this.camera)
        this.camera.setup();
      else {
        var t = this.globalData.compSize.w, e = this.globalData.compSize.h, r, i = this.threeDElements.length;
        for (r = 0; r < i; r += 1) {
          var s = this.threeDElements[r].perspectiveElem.style;
          s.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px", s.perspective = s.webkitPerspective;
        }
      }
    }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
      var e, r = t.length, i = createTag("div");
      for (e = 0; e < r; e += 1)
        if (t[e].xt) {
          var s = this.createComp(t[e], i, this.globalData.comp, null);
          s.initExpressions(), this.globalData.projectInterface.registerComposition(s);
        }
    };
    function HCompElement(t, e, r) {
      this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
        _placeholder: !0
      };
    }
    extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
    }, HCompElement.prototype.addTo3dContainer = function(t, e) {
      for (var r = 0, i; r < e; )
        this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
      i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t);
    }, HCompElement.prototype.createComp = function(t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
    };
    function HybridRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
        className: e && e.className || "",
        imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
        hideOnTransparent: !(e && e.hideOnTransparent === !1),
        filterSize: {
          width: e && e.filterSize && e.filterSize.width || "400%",
          height: e && e.filterSize && e.filterSize.height || "400%",
          x: e && e.filterSize && e.filterSize.x || "-100%",
          y: e && e.filterSize && e.filterSize.y || "-100%"
        },
        runExpressions: !e || e.runExpressions === void 0 || e.runExpressions
      }, this.globalData = {
        _mdf: !1,
        frameNum: -1,
        renderConfig: this.renderConfig
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
    };
    var CompExpressionInterface = /* @__PURE__ */ function() {
      return function(t) {
        function e(r) {
          for (var i = 0, s = t.layers.length; i < s; ) {
            if (t.layers[i].nm === r || t.layers[i].ind === r)
              return t.elements[i].layerInterface;
            i += 1;
          }
          return null;
        }
        return Object.defineProperty(e, "_name", {
          value: t.data.nm
        }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e;
      };
    }();
    function _typeof$2(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$2 = function(r) {
        return typeof r;
      } : _typeof$2 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$2(t);
    }
    function seedRandom(t, e) {
      var r = this, i = 256, s = 6, a = 52, n = "random", l = e.pow(i, s), o = e.pow(2, a), f = o * 2, d = i - 1, C;
      function c(p, x, P) {
        var E = [];
        x = x === !0 ? {
          entropy: !0
        } : x || {};
        var k = _(g(x.entropy ? [p, m(t)] : p === null ? u() : p, 3), E), I = new S(E), V = function() {
          for (var O = I.g(s), D = l, z = 0; O < o; )
            O = (O + z) * i, D *= i, z = I.g(1);
          for (; O >= f; )
            O /= 2, D /= 2, z >>>= 1;
          return (O + z) / D;
        };
        return V.int32 = function() {
          return I.g(4) | 0;
        }, V.quick = function() {
          return I.g(4) / 4294967296;
        }, V.double = V, _(m(I.S), t), (x.pass || P || function(H, O, D, z) {
          return z && (z.S && y(z, I), H.state = function() {
            return y(I, {});
          }), D ? (e[n] = H, O) : H;
        })(V, k, "global" in x ? x.global : this == e, x.state);
      }
      e["seed" + n] = c;
      function S(p) {
        var x, P = p.length, E = this, k = 0, I = E.i = E.j = 0, V = E.S = [];
        for (P || (p = [P++]); k < i; )
          V[k] = k++;
        for (k = 0; k < i; k++)
          V[k] = V[I = d & I + p[k % P] + (x = V[k])], V[I] = x;
        E.g = function(H) {
          for (var O, D = 0, z = E.i, j = E.j, R = E.S; H--; )
            O = R[z = d & z + 1], D = D * i + R[d & (R[z] = R[j = d & j + O]) + (R[j] = O)];
          return E.i = z, E.j = j, D;
        };
      }
      function y(p, x) {
        return x.i = p.i, x.j = p.j, x.S = p.S.slice(), x;
      }
      function g(p, x) {
        var P = [], E = _typeof$2(p), k;
        if (x && E == "object")
          for (k in p)
            try {
              P.push(g(p[k], x - 1));
            } catch {
            }
        return P.length ? P : E == "string" ? p : p + "\0";
      }
      function _(p, x) {
        for (var P = p + "", E, k = 0; k < P.length; )
          x[d & k] = d & (E ^= x[d & k] * 19) + P.charCodeAt(k++);
        return m(x);
      }
      function u() {
        try {
          var p = new Uint8Array(i);
          return (r.crypto || r.msCrypto).getRandomValues(p), m(p);
        } catch {
          var x = r.navigator, P = x && x.plugins;
          return [+/* @__PURE__ */ new Date(), r, P, r.screen, m(t)];
        }
      }
      function m(p) {
        return String.fromCharCode.apply(0, p);
      }
      _(e.random(), t);
    }
    function initialize$2(t) {
      seedRandom([], t);
    }
    var propTypes = {
      SHAPE: "shape"
    };
    function _typeof$1(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof$1 = function(r) {
        return typeof r;
      } : _typeof$1 = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof$1(t);
    }
    var ExpressionManager = function() {
      var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null, _lottieGlobal = {};
      initialize$2(BMMath);
      function resetFrame() {
        _lottieGlobal = {};
      }
      function $bm_isInstanceOfArray(t) {
        return t.constructor === Array || t.constructor === Float32Array;
      }
      function isNumerable(t, e) {
        return t === "number" || e instanceof Number || t === "boolean" || t === "string";
      }
      function $bm_neg(t) {
        var e = _typeof$1(t);
        if (e === "number" || t instanceof Number || e === "boolean")
          return -t;
        if ($bm_isInstanceOfArray(t)) {
          var r, i = t.length, s = [];
          for (r = 0; r < i; r += 1)
            s[r] = -t[r];
          return s;
        }
        return t.propType ? t.v : -t;
      }
      var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
      function sum(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e);
        if (isNumerable(r, t) && isNumerable(i, e) || r === "string" || i === "string")
          return t + e;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
          return t = t.slice(0), t[0] += e, t;
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
          return e = e.slice(0), e[0] = t + e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var s = 0, a = t.length, n = e.length, l = []; s < a || s < n; )
            (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? l[s] = t[s] + e[s] : l[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
          return l;
        }
        return 0;
      }
      var add = sum;
      function sub(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e);
        if (isNumerable(r, t) && isNumerable(i, e))
          return r === "string" && (t = parseInt(t, 10)), i === "string" && (e = parseInt(e, 10)), t - e;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e))
          return t = t.slice(0), t[0] -= e, t;
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e))
          return e = e.slice(0), e[0] = t - e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var s = 0, a = t.length, n = e.length, l = []; s < a || s < n; )
            (typeof t[s] == "number" || t[s] instanceof Number) && (typeof e[s] == "number" || e[s] instanceof Number) ? l[s] = t[s] - e[s] : l[s] = e[s] === void 0 ? t[s] : t[s] || e[s], s += 1;
          return l;
        }
        return 0;
      }
      function mul(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e), s;
        if (isNumerable(r, t) && isNumerable(i, e))
          return t * e;
        var a, n;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
          for (n = t.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1)
            s[a] = t[a] * e;
          return s;
        }
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
          for (n = e.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1)
            s[a] = t * e[a];
          return s;
        }
        return 0;
      }
      function div(t, e) {
        var r = _typeof$1(t), i = _typeof$1(e), s;
        if (isNumerable(r, t) && isNumerable(i, e))
          return t / e;
        var a, n;
        if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) {
          for (n = t.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1)
            s[a] = t[a] / e;
          return s;
        }
        if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) {
          for (n = e.length, s = createTypedArray("float32", n), a = 0; a < n; a += 1)
            s[a] = t / e[a];
          return s;
        }
        return 0;
      }
      function mod(t, e) {
        return typeof t == "string" && (t = parseInt(t, 10)), typeof e == "string" && (e = parseInt(e, 10)), t % e;
      }
      var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
      function clamp(t, e, r) {
        if (e > r) {
          var i = r;
          r = e, e = i;
        }
        return Math.min(Math.max(t, e), r);
      }
      function radiansToDegrees(t) {
        return t / degToRads;
      }
      var radians_to_degrees = radiansToDegrees;
      function degreesToRadians(t) {
        return t * degToRads;
      }
      var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];
      function length(t, e) {
        if (typeof t == "number" || t instanceof Number)
          return e = e || 0, Math.abs(t - e);
        e || (e = helperLengthArray);
        var r, i = Math.min(t.length, e.length), s = 0;
        for (r = 0; r < i; r += 1)
          s += Math.pow(e[r] - t[r], 2);
        return Math.sqrt(s);
      }
      function normalize(t) {
        return div(t, length(t));
      }
      function rgbToHsl(t) {
        var e = t[0], r = t[1], i = t[2], s = Math.max(e, r, i), a = Math.min(e, r, i), n, l, o = (s + a) / 2;
        if (s === a)
          n = 0, l = 0;
        else {
          var f = s - a;
          switch (l = o > 0.5 ? f / (2 - s - a) : f / (s + a), s) {
            case e:
              n = (r - i) / f + (r < i ? 6 : 0);
              break;
            case r:
              n = (i - e) / f + 2;
              break;
            case i:
              n = (e - r) / f + 4;
              break;
          }
          n /= 6;
        }
        return [n, l, o, t[3]];
      }
      function hue2rgb(t, e, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + (e - t) * 6 * r : r < 1 / 2 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t;
      }
      function hslToRgb(t) {
        var e = t[0], r = t[1], i = t[2], s, a, n;
        if (r === 0)
          s = i, n = i, a = i;
        else {
          var l = i < 0.5 ? i * (1 + r) : i + r - i * r, o = 2 * i - l;
          s = hue2rgb(o, l, e + 1 / 3), a = hue2rgb(o, l, e), n = hue2rgb(o, l, e - 1 / 3);
        }
        return [s, a, n, t[3]];
      }
      function linear(t, e, r, i, s) {
        if ((i === void 0 || s === void 0) && (i = e, s = r, e = 0, r = 1), r < e) {
          var a = r;
          r = e, e = a;
        }
        if (t <= e)
          return i;
        if (t >= r)
          return s;
        var n = r === e ? 0 : (t - e) / (r - e);
        if (!i.length)
          return i + (s - i) * n;
        var l, o = i.length, f = createTypedArray("float32", o);
        for (l = 0; l < o; l += 1)
          f[l] = i[l] + (s[l] - i[l]) * n;
        return f;
      }
      function random(t, e) {
        if (e === void 0 && (t === void 0 ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
          var r, i = e.length;
          t || (t = createTypedArray("float32", i));
          var s = createTypedArray("float32", i), a = BMMath.random();
          for (r = 0; r < i; r += 1)
            s[r] = t[r] + a * (e[r] - t[r]);
          return s;
        }
        t === void 0 && (t = 0);
        var n = BMMath.random();
        return t + n * (e - t);
      }
      function createPath(t, e, r, i) {
        var s, a = t.length, n = shapePool.newElement();
        n.setPathData(!!i, a);
        var l = [0, 0], o, f;
        for (s = 0; s < a; s += 1)
          o = e && e[s] ? e[s] : l, f = r && r[s] ? r[s] : l, n.setTripleAt(t[s][0], t[s][1], f[0] + t[s][0], f[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
        return n;
      }
      function initiateExpression(elem, data, property) {
        function noOp(t) {
          return t;
        }
        if (!elem.globalData.renderConfig.runExpressions)
          return noOp;
        var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
          get: function() {
            return thisProperty.v;
          }
        }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
        var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = (function t(e, r) {
          var i, s, a = this.pv.length ? this.pv.length : 1, n = createTypedArray("float32", a);
          e = 5;
          var l = Math.floor(time * e);
          for (i = 0, s = 0; i < l; ) {
            for (s = 0; s < a; s += 1)
              n[s] += -r + r * 2 * BMMath.random();
            i += 1;
          }
          var o = time * e, f = o - Math.floor(o), d = createTypedArray("float32", a);
          if (a > 1) {
            for (s = 0; s < a; s += 1)
              d[s] = this.pv[s] + n[s] + (-r + r * 2 * BMMath.random()) * f;
            return d;
          }
          return this.pv + n[0] + (-r + r * 2 * BMMath.random()) * f;
        }).bind(this);
        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty));
        function loopInDuration(t, e) {
          return loopIn(t, e, !0);
        }
        function loopOutDuration(t, e) {
          return loopOut(t, e, !0);
        }
        this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface);
        function lookAt(t, e) {
          var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]], i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads, s = -Math.atan2(r[1], r[2]) / degToRads;
          return [s, i, 0];
        }
        function easeOut(t, e, r, i, s) {
          return applyEase(easeOutBez, t, e, r, i, s);
        }
        function easeIn(t, e, r, i, s) {
          return applyEase(easeInBez, t, e, r, i, s);
        }
        function ease(t, e, r, i, s) {
          return applyEase(easeInOutBez, t, e, r, i, s);
        }
        function applyEase(t, e, r, i, s, a) {
          s === void 0 ? (s = r, a = i) : e = (e - r) / (i - r), e > 1 ? e = 1 : e < 0 && (e = 0);
          var n = t(e);
          if ($bm_isInstanceOfArray(s)) {
            var l, o = s.length, f = createTypedArray("float32", o);
            for (l = 0; l < o; l += 1)
              f[l] = (a[l] - s[l]) * n + s[l];
            return f;
          }
          return (a - s) * n + s;
        }
        function nearestKey(t) {
          var e, r = data.k.length, i, s;
          if (!data.k.length || typeof data.k[0] == "number")
            i = 0, s = 0;
          else if (i = -1, t *= elem.comp.globalData.frameRate, t < data.k[0].t)
            i = 1, s = data.k[0].t;
          else {
            for (e = 0; e < r - 1; e += 1)
              if (t === data.k[e].t) {
                i = e + 1, s = data.k[e].t;
                break;
              } else if (t > data.k[e].t && t < data.k[e + 1].t) {
                t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, s = data.k[e + 1].t) : (i = e + 1, s = data.k[e].t);
                break;
              }
            i === -1 && (i = e + 1, s = data.k[e].t);
          }
          var a = {};
          return a.index = i, a.time = s / elem.comp.globalData.frameRate, a;
        }
        function key(t) {
          var e, r, i;
          if (!data.k.length || typeof data.k[0] == "number")
            throw new Error("The property has no keyframe at index " + t);
          t -= 1, e = {
            time: data.k[t].t / elem.comp.globalData.frameRate,
            value: []
          };
          var s = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
          for (i = s.length, r = 0; r < i; r += 1)
            e[r] = s[r], e.value[r] = s[r];
          return e;
        }
        function framesToTime(t, e) {
          return e || (e = elem.comp.globalData.frameRate), t / e;
        }
        function timeToFrames(t, e) {
          return !t && t !== 0 && (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
        }
        function seedRandom(t) {
          BMMath.seedrandom(randSeed + t);
        }
        function sourceRectAtTime() {
          return elem.sourceRectAtTime();
        }
        function substring(t, e) {
          return typeof value == "string" ? e === void 0 ? value.substring(t) : value.substring(t, e) : "";
        }
        function substr(t, e) {
          return typeof value == "string" ? e === void 0 ? value.substr(t) : value.substr(t, e) : "";
        }
        function posterizeTime(t) {
          time = t === 0 ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
        }
        var time, velocity, value, text, textIndex, textTotal, selectorValue, index = elem.data.ind, hasParent = !!(elem.hierarchy && elem.hierarchy.length), parent, randSeed = Math.floor(Math.random() * 1e6), globalData = elem.globalData;
        function executeExpression(t) {
          return value = t, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType === 4 && !content && (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !!(elem.hierarchy && elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt, scoped_bm_rt);
        }
        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression;
      }
      return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob;
    }(), Expressions = function() {
      var t = {};
      t.initExpressions = e, t.resetFrame = ExpressionManager.resetFrame;
      function e(r) {
        var i = 0, s = [];
        function a() {
          i += 1;
        }
        function n() {
          i -= 1, i === 0 && o();
        }
        function l(f) {
          s.indexOf(f) === -1 && s.push(f);
        }
        function o() {
          var f, d = s.length;
          for (f = 0; f < d; f += 1)
            s[f].release();
          s.length = 0;
        }
        r.renderer.compInterface = CompExpressionInterface(r.renderer), r.renderer.globalData.projectInterface.registerComposition(r.renderer), r.renderer.globalData.pushExpression = a, r.renderer.globalData.popExpression = n, r.renderer.globalData.registerExpressionProperty = l;
      }
      return t;
    }(), MaskManagerInterface = function() {
      function t(r, i) {
        this._mask = r, this._data = i;
      }
      Object.defineProperty(t.prototype, "maskPath", {
        get: function() {
          return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
        }
      }), Object.defineProperty(t.prototype, "maskOpacity", {
        get: function() {
          return this._mask.op.k && this._mask.op.getValue(), this._mask.op.v * 100;
        }
      });
      var e = function(i) {
        var s = createSizedArray(i.viewData.length), a, n = i.viewData.length;
        for (a = 0; a < n; a += 1)
          s[a] = new t(i.viewData[a], i.masksProperties[a]);
        var l = function(f) {
          for (a = 0; a < n; ) {
            if (i.masksProperties[a].nm === f)
              return s[a];
            a += 1;
          }
          return null;
        };
        return l;
      };
      return e;
    }(), ExpressionPropertyInterface = /* @__PURE__ */ function() {
      var t = {
        pv: 0,
        v: 0,
        mult: 1
      }, e = {
        pv: [0, 0, 0],
        v: [0, 0, 0],
        mult: 1
      };
      function r(n, l, o) {
        Object.defineProperty(n, "velocity", {
          get: function() {
            return l.getVelocityAtTime(l.comp.currentFrame);
          }
        }), n.numKeys = l.keyframes ? l.keyframes.length : 0, n.key = function(f) {
          if (!n.numKeys)
            return 0;
          var d = "";
          "s" in l.keyframes[f - 1] ? d = l.keyframes[f - 1].s : "e" in l.keyframes[f - 2] ? d = l.keyframes[f - 2].e : d = l.keyframes[f - 2].s;
          var C = o === "unidimensional" ? new Number(d) : Object.assign({}, d);
          return C.time = l.keyframes[f - 1].t / l.elem.comp.globalData.frameRate, C.value = o === "unidimensional" ? d[0] : d, C;
        }, n.valueAtTime = l.getValueAtTime, n.speedAtTime = l.getSpeedAtTime, n.velocityAtTime = l.getVelocityAtTime, n.propertyGroup = l.propertyGroup;
      }
      function i(n) {
        (!n || !("pv" in n)) && (n = t);
        var l = 1 / n.mult, o = n.pv * l, f = new Number(o);
        return f.value = o, r(f, n, "unidimensional"), function() {
          return n.k && n.getValue(), o = n.v * l, f.value !== o && (f = new Number(o), f.value = o, r(f, n, "unidimensional")), f;
        };
      }
      function s(n) {
        (!n || !("pv" in n)) && (n = e);
        var l = 1 / n.mult, o = n.data && n.data.l || n.pv.length, f = createTypedArray("float32", o), d = createTypedArray("float32", o);
        return f.value = d, r(f, n, "multidimensional"), function() {
          n.k && n.getValue();
          for (var C = 0; C < o; C += 1)
            d[C] = n.v[C] * l, f[C] = d[C];
          return f;
        };
      }
      function a() {
        return t;
      }
      return function(n) {
        return n ? n.propType === "unidimensional" ? i(n) : s(n) : a;
      };
    }(), TransformExpressionInterface = /* @__PURE__ */ function() {
      return function(t) {
        function e(n) {
          switch (n) {
            case "scale":
            case "Scale":
            case "ADBE Scale":
            case 6:
              return e.scale;
            case "rotation":
            case "Rotation":
            case "ADBE Rotation":
            case "ADBE Rotate Z":
            case 10:
              return e.rotation;
            case "ADBE Rotate X":
              return e.xRotation;
            case "ADBE Rotate Y":
              return e.yRotation;
            case "position":
            case "Position":
            case "ADBE Position":
            case 2:
              return e.position;
            case "ADBE Position_0":
              return e.xPosition;
            case "ADBE Position_1":
              return e.yPosition;
            case "ADBE Position_2":
              return e.zPosition;
            case "anchorPoint":
            case "AnchorPoint":
            case "Anchor Point":
            case "ADBE AnchorPoint":
            case 1:
              return e.anchorPoint;
            case "opacity":
            case "Opacity":
            case 11:
              return e.opacity;
            default:
              return null;
          }
        }
        Object.defineProperty(e, "rotation", {
          get: ExpressionPropertyInterface(t.r || t.rz)
        }), Object.defineProperty(e, "zRotation", {
          get: ExpressionPropertyInterface(t.rz || t.r)
        }), Object.defineProperty(e, "xRotation", {
          get: ExpressionPropertyInterface(t.rx)
        }), Object.defineProperty(e, "yRotation", {
          get: ExpressionPropertyInterface(t.ry)
        }), Object.defineProperty(e, "scale", {
          get: ExpressionPropertyInterface(t.s)
        });
        var r, i, s, a;
        return t.p ? a = ExpressionPropertyInterface(t.p) : (r = ExpressionPropertyInterface(t.px), i = ExpressionPropertyInterface(t.py), t.pz && (s = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", {
          get: function() {
            return t.p ? a() : [r(), i(), s ? s() : 0];
          }
        }), Object.defineProperty(e, "xPosition", {
          get: ExpressionPropertyInterface(t.px)
        }), Object.defineProperty(e, "yPosition", {
          get: ExpressionPropertyInterface(t.py)
        }), Object.defineProperty(e, "zPosition", {
          get: ExpressionPropertyInterface(t.pz)
        }), Object.defineProperty(e, "anchorPoint", {
          get: ExpressionPropertyInterface(t.a)
        }), Object.defineProperty(e, "opacity", {
          get: ExpressionPropertyInterface(t.o)
        }), Object.defineProperty(e, "skew", {
          get: ExpressionPropertyInterface(t.sk)
        }), Object.defineProperty(e, "skewAxis", {
          get: ExpressionPropertyInterface(t.sa)
        }), Object.defineProperty(e, "orientation", {
          get: ExpressionPropertyInterface(t.or)
        }), e;
      };
    }(), LayerExpressionInterface = /* @__PURE__ */ function() {
      function t(f) {
        var d = new Matrix();
        if (f !== void 0) {
          var C = this._elem.finalTransform.mProp.getValueAtTime(f);
          C.clone(d);
        } else {
          var c = this._elem.finalTransform.mProp;
          c.applyToMatrix(d);
        }
        return d;
      }
      function e(f, d) {
        var C = this.getMatrix(d);
        return C.props[12] = 0, C.props[13] = 0, C.props[14] = 0, this.applyPoint(C, f);
      }
      function r(f, d) {
        var C = this.getMatrix(d);
        return this.applyPoint(C, f);
      }
      function i(f, d) {
        var C = this.getMatrix(d);
        return C.props[12] = 0, C.props[13] = 0, C.props[14] = 0, this.invertPoint(C, f);
      }
      function s(f, d) {
        var C = this.getMatrix(d);
        return this.invertPoint(C, f);
      }
      function a(f, d) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var C, c = this._elem.hierarchy.length;
          for (C = 0; C < c; C += 1)
            this._elem.hierarchy[C].finalTransform.mProp.applyToMatrix(f);
        }
        return f.applyToPointArray(d[0], d[1], d[2] || 0);
      }
      function n(f, d) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var C, c = this._elem.hierarchy.length;
          for (C = 0; C < c; C += 1)
            this._elem.hierarchy[C].finalTransform.mProp.applyToMatrix(f);
        }
        return f.inversePoint(d);
      }
      function l(f) {
        var d = new Matrix();
        if (d.reset(), this._elem.finalTransform.mProp.applyToMatrix(d), this._elem.hierarchy && this._elem.hierarchy.length) {
          var C, c = this._elem.hierarchy.length;
          for (C = 0; C < c; C += 1)
            this._elem.hierarchy[C].finalTransform.mProp.applyToMatrix(d);
          return d.inversePoint(f);
        }
        return d.inversePoint(f);
      }
      function o() {
        return [1, 1, 1, 1];
      }
      return function(f) {
        var d;
        function C(g) {
          S.mask = new MaskManagerInterface(g, f);
        }
        function c(g) {
          S.effect = g;
        }
        function S(g) {
          switch (g) {
            case "ADBE Root Vectors Group":
            case "Contents":
            case 2:
              return S.shapeInterface;
            case 1:
            case 6:
            case "Transform":
            case "transform":
            case "ADBE Transform Group":
              return d;
            case 4:
            case "ADBE Effect Parade":
            case "effects":
            case "Effects":
              return S.effect;
            case "ADBE Text Properties":
              return S.textInterface;
            default:
              return null;
          }
        }
        S.getMatrix = t, S.invertPoint = n, S.applyPoint = a, S.toWorld = r, S.toWorldVec = e, S.fromWorld = s, S.fromWorldVec = i, S.toComp = r, S.fromComp = l, S.sampleImage = o, S.sourceRectAtTime = f.sourceRectAtTime.bind(f), S._elem = f, d = TransformExpressionInterface(f.finalTransform.mProp);
        var y = getDescriptor(d, "anchorPoint");
        return Object.defineProperties(S, {
          hasParent: {
            get: function() {
              return f.hierarchy.length;
            }
          },
          parent: {
            get: function() {
              return f.hierarchy[0].layerInterface;
            }
          },
          rotation: getDescriptor(d, "rotation"),
          scale: getDescriptor(d, "scale"),
          position: getDescriptor(d, "position"),
          opacity: getDescriptor(d, "opacity"),
          anchorPoint: y,
          anchor_point: y,
          transform: {
            get: function() {
              return d;
            }
          },
          active: {
            get: function() {
              return f.isInRange;
            }
          }
        }), S.startTime = f.data.st, S.index = f.data.ind, S.source = f.data.refId, S.height = f.data.ty === 0 ? f.data.h : 100, S.width = f.data.ty === 0 ? f.data.w : 100, S.inPoint = f.data.ip / f.comp.globalData.frameRate, S.outPoint = f.data.op / f.comp.globalData.frameRate, S._name = f.data.nm, S.registerMaskInterface = C, S.registerEffectsInterface = c, S;
      };
    }(), propertyGroupFactory = /* @__PURE__ */ function() {
      return function(t, e) {
        return function(r) {
          return r = r === void 0 ? 1 : r, r <= 0 ? t : e(r - 1);
        };
      };
    }(), PropertyInterface = /* @__PURE__ */ function() {
      return function(t, e) {
        var r = {
          _name: t
        };
        function i(s) {
          return s = s === void 0 ? 1 : s, s <= 0 ? r : e(s - 1);
        }
        return i;
      };
    }(), EffectsExpressionInterface = /* @__PURE__ */ function() {
      var t = {
        createEffectsInterface: e
      };
      function e(s, a) {
        if (s.effectsManager) {
          var n = [], l = s.data.ef, o, f = s.effectsManager.effectElements.length;
          for (o = 0; o < f; o += 1)
            n.push(r(l[o], s.effectsManager.effectElements[o], a, s));
          var d = s.data.ef || [], C = function(S) {
            for (o = 0, f = d.length; o < f; ) {
              if (S === d[o].nm || S === d[o].mn || S === d[o].ix)
                return n[o];
              o += 1;
            }
            return null;
          };
          return Object.defineProperty(C, "numProperties", {
            get: function() {
              return d.length;
            }
          }), C;
        }
        return null;
      }
      function r(s, a, n, l) {
        function o(S) {
          for (var y = s.ef, g = 0, _ = y.length; g < _; ) {
            if (S === y[g].nm || S === y[g].mn || S === y[g].ix)
              return y[g].ty === 5 ? d[g] : d[g]();
            g += 1;
          }
          throw new Error();
        }
        var f = propertyGroupFactory(o, n), d = [], C, c = s.ef.length;
        for (C = 0; C < c; C += 1)
          s.ef[C].ty === 5 ? d.push(r(s.ef[C], a.effectElements[C], a.effectElements[C].propertyGroup, l)) : d.push(i(a.effectElements[C], s.ef[C].ty, l, f));
        return s.mn === "ADBE Color Control" && Object.defineProperty(o, "color", {
          get: function() {
            return d[0]();
          }
        }), Object.defineProperties(o, {
          numProperties: {
            get: function() {
              return s.np;
            }
          },
          _name: {
            value: s.nm
          },
          propertyGroup: {
            value: f
          }
        }), o.enabled = s.en !== 0, o.active = o.enabled, o;
      }
      function i(s, a, n, l) {
        var o = ExpressionPropertyInterface(s.p);
        function f() {
          return a === 10 ? n.comp.compInterface(s.p.v) : o();
        }
        return s.p.setGroupProperty && s.p.setGroupProperty(PropertyInterface("", l)), f;
      }
      return t;
    }(), ShapePathInterface = /* @__PURE__ */ function() {
      return function(e, r, i) {
        var s = r.sh;
        function a(l) {
          return l === "Shape" || l === "shape" || l === "Path" || l === "path" || l === "ADBE Vector Shape" || l === 2 ? a.path : null;
        }
        var n = propertyGroupFactory(a, i);
        return s.setGroupProperty(PropertyInterface("Path", n)), Object.defineProperties(a, {
          path: {
            get: function() {
              return s.k && s.getValue(), s;
            }
          },
          shape: {
            get: function() {
              return s.k && s.getValue(), s;
            }
          },
          _name: {
            value: e.nm
          },
          ix: {
            value: e.ix
          },
          propertyIndex: {
            value: e.ix
          },
          mn: {
            value: e.mn
          },
          propertyGroup: {
            value: i
          }
        }), a;
      };
    }(), ShapeExpressionInterface = /* @__PURE__ */ function() {
      function t(y, g, _) {
        var u = [], m, p = y ? y.length : 0;
        for (m = 0; m < p; m += 1)
          y[m].ty === "gr" ? u.push(r(y[m], g[m], _)) : y[m].ty === "fl" ? u.push(i(y[m], g[m], _)) : y[m].ty === "st" ? u.push(n(y[m], g[m], _)) : y[m].ty === "tm" ? u.push(l(y[m], g[m], _)) : y[m].ty === "tr" || (y[m].ty === "el" ? u.push(f(y[m], g[m], _)) : y[m].ty === "sr" ? u.push(d(y[m], g[m], _)) : y[m].ty === "sh" ? u.push(ShapePathInterface(y[m], g[m], _)) : y[m].ty === "rc" ? u.push(C(y[m], g[m], _)) : y[m].ty === "rd" ? u.push(c(y[m], g[m], _)) : y[m].ty === "rp" ? u.push(S(y[m], g[m], _)) : y[m].ty === "gf" ? u.push(s(y[m], g[m], _)) : u.push(a(y[m], g[m])));
        return u;
      }
      function e(y, g, _) {
        var u, m = function(P) {
          for (var E = 0, k = u.length; E < k; ) {
            if (u[E]._name === P || u[E].mn === P || u[E].propertyIndex === P || u[E].ix === P || u[E].ind === P)
              return u[E];
            E += 1;
          }
          return typeof P == "number" ? u[P - 1] : null;
        };
        m.propertyGroup = propertyGroupFactory(m, _), u = t(y.it, g.it, m.propertyGroup), m.numProperties = u.length;
        var p = o(y.it[y.it.length - 1], g.it[g.it.length - 1], m.propertyGroup);
        return m.transform = p, m.propertyIndex = y.cix, m._name = y.nm, m;
      }
      function r(y, g, _) {
        var u = function(P) {
          switch (P) {
            case "ADBE Vectors Group":
            case "Contents":
            case 2:
              return u.content;
            default:
              return u.transform;
          }
        };
        u.propertyGroup = propertyGroupFactory(u, _);
        var m = e(y, g, u.propertyGroup), p = o(y.it[y.it.length - 1], g.it[g.it.length - 1], u.propertyGroup);
        return u.content = m, u.transform = p, Object.defineProperty(u, "_name", {
          get: function() {
            return y.nm;
          }
        }), u.numProperties = y.np, u.propertyIndex = y.ix, u.nm = y.nm, u.mn = y.mn, u;
      }
      function i(y, g, _) {
        function u(m) {
          return m === "Color" || m === "color" ? u.color : m === "Opacity" || m === "opacity" ? u.opacity : null;
        }
        return Object.defineProperties(u, {
          color: {
            get: ExpressionPropertyInterface(g.c)
          },
          opacity: {
            get: ExpressionPropertyInterface(g.o)
          },
          _name: {
            value: y.nm
          },
          mn: {
            value: y.mn
          }
        }), g.c.setGroupProperty(PropertyInterface("Color", _)), g.o.setGroupProperty(PropertyInterface("Opacity", _)), u;
      }
      function s(y, g, _) {
        function u(m) {
          return m === "Start Point" || m === "start point" ? u.startPoint : m === "End Point" || m === "end point" ? u.endPoint : m === "Opacity" || m === "opacity" ? u.opacity : null;
        }
        return Object.defineProperties(u, {
          startPoint: {
            get: ExpressionPropertyInterface(g.s)
          },
          endPoint: {
            get: ExpressionPropertyInterface(g.e)
          },
          opacity: {
            get: ExpressionPropertyInterface(g.o)
          },
          type: {
            get: function() {
              return "a";
            }
          },
          _name: {
            value: y.nm
          },
          mn: {
            value: y.mn
          }
        }), g.s.setGroupProperty(PropertyInterface("Start Point", _)), g.e.setGroupProperty(PropertyInterface("End Point", _)), g.o.setGroupProperty(PropertyInterface("Opacity", _)), u;
      }
      function a() {
        function y() {
          return null;
        }
        return y;
      }
      function n(y, g, _) {
        var u = propertyGroupFactory(k, _), m = propertyGroupFactory(E, u);
        function p(I) {
          Object.defineProperty(E, y.d[I].nm, {
            get: ExpressionPropertyInterface(g.d.dataProps[I].p)
          });
        }
        var x, P = y.d ? y.d.length : 0, E = {};
        for (x = 0; x < P; x += 1)
          p(x), g.d.dataProps[x].p.setGroupProperty(m);
        function k(I) {
          return I === "Color" || I === "color" ? k.color : I === "Opacity" || I === "opacity" ? k.opacity : I === "Stroke Width" || I === "stroke width" ? k.strokeWidth : null;
        }
        return Object.defineProperties(k, {
          color: {
            get: ExpressionPropertyInterface(g.c)
          },
          opacity: {
            get: ExpressionPropertyInterface(g.o)
          },
          strokeWidth: {
            get: ExpressionPropertyInterface(g.w)
          },
          dash: {
            get: function() {
              return E;
            }
          },
          _name: {
            value: y.nm
          },
          mn: {
            value: y.mn
          }
        }), g.c.setGroupProperty(PropertyInterface("Color", u)), g.o.setGroupProperty(PropertyInterface("Opacity", u)), g.w.setGroupProperty(PropertyInterface("Stroke Width", u)), k;
      }
      function l(y, g, _) {
        function u(p) {
          return p === y.e.ix || p === "End" || p === "end" ? u.end : p === y.s.ix ? u.start : p === y.o.ix ? u.offset : null;
        }
        var m = propertyGroupFactory(u, _);
        return u.propertyIndex = y.ix, g.s.setGroupProperty(PropertyInterface("Start", m)), g.e.setGroupProperty(PropertyInterface("End", m)), g.o.setGroupProperty(PropertyInterface("Offset", m)), u.propertyIndex = y.ix, u.propertyGroup = _, Object.defineProperties(u, {
          start: {
            get: ExpressionPropertyInterface(g.s)
          },
          end: {
            get: ExpressionPropertyInterface(g.e)
          },
          offset: {
            get: ExpressionPropertyInterface(g.o)
          },
          _name: {
            value: y.nm
          }
        }), u.mn = y.mn, u;
      }
      function o(y, g, _) {
        function u(p) {
          return y.a.ix === p || p === "Anchor Point" ? u.anchorPoint : y.o.ix === p || p === "Opacity" ? u.opacity : y.p.ix === p || p === "Position" ? u.position : y.r.ix === p || p === "Rotation" || p === "ADBE Vector Rotation" ? u.rotation : y.s.ix === p || p === "Scale" ? u.scale : y.sk && y.sk.ix === p || p === "Skew" ? u.skew : y.sa && y.sa.ix === p || p === "Skew Axis" ? u.skewAxis : null;
        }
        var m = propertyGroupFactory(u, _);
        return g.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", m)), g.transform.mProps.p.setGroupProperty(PropertyInterface("Position", m)), g.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", m)), g.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", m)), g.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", m)), g.transform.mProps.sk && (g.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", m)), g.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", m))), g.transform.op.setGroupProperty(PropertyInterface("Opacity", m)), Object.defineProperties(u, {
          opacity: {
            get: ExpressionPropertyInterface(g.transform.mProps.o)
          },
          position: {
            get: ExpressionPropertyInterface(g.transform.mProps.p)
          },
          anchorPoint: {
            get: ExpressionPropertyInterface(g.transform.mProps.a)
          },
          scale: {
            get: ExpressionPropertyInterface(g.transform.mProps.s)
          },
          rotation: {
            get: ExpressionPropertyInterface(g.transform.mProps.r)
          },
          skew: {
            get: ExpressionPropertyInterface(g.transform.mProps.sk)
          },
          skewAxis: {
            get: ExpressionPropertyInterface(g.transform.mProps.sa)
          },
          _name: {
            value: y.nm
          }
        }), u.ty = "tr", u.mn = y.mn, u.propertyGroup = _, u;
      }
      function f(y, g, _) {
        function u(x) {
          return y.p.ix === x ? u.position : y.s.ix === x ? u.size : null;
        }
        var m = propertyGroupFactory(u, _);
        u.propertyIndex = y.ix;
        var p = g.sh.ty === "tm" ? g.sh.prop : g.sh;
        return p.s.setGroupProperty(PropertyInterface("Size", m)), p.p.setGroupProperty(PropertyInterface("Position", m)), Object.defineProperties(u, {
          size: {
            get: ExpressionPropertyInterface(p.s)
          },
          position: {
            get: ExpressionPropertyInterface(p.p)
          },
          _name: {
            value: y.nm
          }
        }), u.mn = y.mn, u;
      }
      function d(y, g, _) {
        function u(x) {
          return y.p.ix === x ? u.position : y.r.ix === x ? u.rotation : y.pt.ix === x ? u.points : y.or.ix === x || x === "ADBE Vector Star Outer Radius" ? u.outerRadius : y.os.ix === x ? u.outerRoundness : y.ir && (y.ir.ix === x || x === "ADBE Vector Star Inner Radius") ? u.innerRadius : y.is && y.is.ix === x ? u.innerRoundness : null;
        }
        var m = propertyGroupFactory(u, _), p = g.sh.ty === "tm" ? g.sh.prop : g.sh;
        return u.propertyIndex = y.ix, p.or.setGroupProperty(PropertyInterface("Outer Radius", m)), p.os.setGroupProperty(PropertyInterface("Outer Roundness", m)), p.pt.setGroupProperty(PropertyInterface("Points", m)), p.p.setGroupProperty(PropertyInterface("Position", m)), p.r.setGroupProperty(PropertyInterface("Rotation", m)), y.ir && (p.ir.setGroupProperty(PropertyInterface("Inner Radius", m)), p.is.setGroupProperty(PropertyInterface("Inner Roundness", m))), Object.defineProperties(u, {
          position: {
            get: ExpressionPropertyInterface(p.p)
          },
          rotation: {
            get: ExpressionPropertyInterface(p.r)
          },
          points: {
            get: ExpressionPropertyInterface(p.pt)
          },
          outerRadius: {
            get: ExpressionPropertyInterface(p.or)
          },
          outerRoundness: {
            get: ExpressionPropertyInterface(p.os)
          },
          innerRadius: {
            get: ExpressionPropertyInterface(p.ir)
          },
          innerRoundness: {
            get: ExpressionPropertyInterface(p.is)
          },
          _name: {
            value: y.nm
          }
        }), u.mn = y.mn, u;
      }
      function C(y, g, _) {
        function u(x) {
          return y.p.ix === x ? u.position : y.r.ix === x ? u.roundness : y.s.ix === x || x === "Size" || x === "ADBE Vector Rect Size" ? u.size : null;
        }
        var m = propertyGroupFactory(u, _), p = g.sh.ty === "tm" ? g.sh.prop : g.sh;
        return u.propertyIndex = y.ix, p.p.setGroupProperty(PropertyInterface("Position", m)), p.s.setGroupProperty(PropertyInterface("Size", m)), p.r.setGroupProperty(PropertyInterface("Rotation", m)), Object.defineProperties(u, {
          position: {
            get: ExpressionPropertyInterface(p.p)
          },
          roundness: {
            get: ExpressionPropertyInterface(p.r)
          },
          size: {
            get: ExpressionPropertyInterface(p.s)
          },
          _name: {
            value: y.nm
          }
        }), u.mn = y.mn, u;
      }
      function c(y, g, _) {
        function u(x) {
          return y.r.ix === x || x === "Round Corners 1" ? u.radius : null;
        }
        var m = propertyGroupFactory(u, _), p = g;
        return u.propertyIndex = y.ix, p.rd.setGroupProperty(PropertyInterface("Radius", m)), Object.defineProperties(u, {
          radius: {
            get: ExpressionPropertyInterface(p.rd)
          },
          _name: {
            value: y.nm
          }
        }), u.mn = y.mn, u;
      }
      function S(y, g, _) {
        function u(x) {
          return y.c.ix === x || x === "Copies" ? u.copies : y.o.ix === x || x === "Offset" ? u.offset : null;
        }
        var m = propertyGroupFactory(u, _), p = g;
        return u.propertyIndex = y.ix, p.c.setGroupProperty(PropertyInterface("Copies", m)), p.o.setGroupProperty(PropertyInterface("Offset", m)), Object.defineProperties(u, {
          copies: {
            get: ExpressionPropertyInterface(p.c)
          },
          offset: {
            get: ExpressionPropertyInterface(p.o)
          },
          _name: {
            value: y.nm
          }
        }), u.mn = y.mn, u;
      }
      return function(y, g, _) {
        var u;
        function m(x) {
          if (typeof x == "number")
            return x = x === void 0 ? 1 : x, x === 0 ? _ : u[x - 1];
          for (var P = 0, E = u.length; P < E; ) {
            if (u[P]._name === x)
              return u[P];
            P += 1;
          }
          return null;
        }
        function p() {
          return _;
        }
        return m.propertyGroup = propertyGroupFactory(m, p), u = t(y, g, m.propertyGroup), m.numProperties = u.length, m._name = "Contents", m;
      };
    }(), TextExpressionInterface = /* @__PURE__ */ function() {
      return function(t) {
        var e;
        function r(i) {
          switch (i) {
            case "ADBE Text Document":
              return r.sourceText;
            default:
              return null;
          }
        }
        return Object.defineProperty(r, "sourceText", {
          get: function() {
            t.textProperty.getValue();
            var s = t.textProperty.currentData.t;
            return (!e || s !== e.value) && (e = new String(s), e.value = s || new String(s), Object.defineProperty(e, "style", {
              get: function() {
                return {
                  fillColor: t.textProperty.currentData.fc
                };
              }
            })), e;
          }
        }), r;
      };
    }();
    function _typeof(t) {
      "@babel/helpers - typeof";
      return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? _typeof = function(r) {
        return typeof r;
      } : _typeof = function(r) {
        return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
      }, _typeof(t);
    }
    var FootageInterface = /* @__PURE__ */ function() {
      var t = function(i) {
        var s = "", a = i.getFootageData();
        function n() {
          return s = "", a = i.getFootageData(), l;
        }
        function l(o) {
          if (a[o])
            return s = o, a = a[o], _typeof(a) === "object" ? l : a;
          var f = o.indexOf(s);
          if (f !== -1) {
            var d = parseInt(o.substr(f + s.length), 10);
            return a = a[d], _typeof(a) === "object" ? l : a;
          }
          return "";
        }
        return n;
      }, e = function(i) {
        function s(a) {
          return a === "Outline" ? s.outlineInterface() : null;
        }
        return s._name = "Outline", s.outlineInterface = t(i), s;
      };
      return function(r) {
        function i(s) {
          return s === "Data" ? i.dataInterface : null;
        }
        return i._name = "Data", i.dataInterface = e(r), i;
      };
    }(), interfaces = {
      layer: LayerExpressionInterface,
      effects: EffectsExpressionInterface,
      comp: CompExpressionInterface,
      shape: ShapeExpressionInterface,
      text: TextExpressionInterface,
      footage: FootageInterface
    };
    function getInterface(t) {
      return interfaces[t] || null;
    }
    var expressionHelpers = /* @__PURE__ */ function() {
      function t(n, l, o) {
        l.x && (o.k = !0, o.x = !0, o.initiateExpression = ExpressionManager.initiateExpression, o.effectsSequence.push(o.initiateExpression(n, l, o).bind(o)));
      }
      function e(n) {
        return n *= this.elem.globalData.frameRate, n -= this.offsetTime, n !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < n ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(n, this._cachingAtTime), this._cachingAtTime.lastFrame = n), this._cachingAtTime.value;
      }
      function r(n) {
        var l = -0.01, o = this.getValueAtTime(n), f = this.getValueAtTime(n + l), d = 0;
        if (o.length) {
          var C;
          for (C = 0; C < o.length; C += 1)
            d += Math.pow(f[C] - o[C], 2);
          d = Math.sqrt(d) * 100;
        } else
          d = 0;
        return d;
      }
      function i(n) {
        if (this.vel !== void 0)
          return this.vel;
        var l = -1e-3, o = this.getValueAtTime(n), f = this.getValueAtTime(n + l), d;
        if (o.length) {
          d = createTypedArray("float32", o.length);
          var C;
          for (C = 0; C < o.length; C += 1)
            d[C] = (f[C] - o[C]) / l;
        } else
          d = (f - o) / l;
        return d;
      }
      function s() {
        return this.pv;
      }
      function a(n) {
        this.propertyGroup = n;
      }
      return {
        searchExpressions: t,
        getSpeedAtTime: r,
        getVelocityAtTime: i,
        getValueAtTime: e,
        getStaticValueAtTime: s,
        setGroupProperty: a
      };
    }();
    function addPropertyDecorator() {
      function t(c, S, y) {
        if (!this.k || !this.keyframes)
          return this.pv;
        c = c ? c.toLowerCase() : "";
        var g = this.comp.renderedFrame, _ = this.keyframes, u = _[_.length - 1].t;
        if (g <= u)
          return this.pv;
        var m, p;
        y ? (S ? m = Math.abs(u - this.elem.comp.globalData.frameRate * S) : m = Math.max(0, u - this.elem.data.ip), p = u - m) : ((!S || S > _.length - 1) && (S = _.length - 1), p = _[_.length - 1 - S].t, m = u - p);
        var x, P, E;
        if (c === "pingpong") {
          var k = Math.floor((g - p) / m);
          if (k % 2 !== 0)
            return this.getValueAtTime((m - (g - p) % m + p) / this.comp.globalData.frameRate, 0);
        } else if (c === "offset") {
          var I = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), V = this.getValueAtTime(u / this.comp.globalData.frameRate, 0), H = this.getValueAtTime(((g - p) % m + p) / this.comp.globalData.frameRate, 0), O = Math.floor((g - p) / m);
          if (this.pv.length) {
            for (E = new Array(I.length), P = E.length, x = 0; x < P; x += 1)
              E[x] = (V[x] - I[x]) * O + H[x];
            return E;
          }
          return (V - I) * O + H;
        } else if (c === "continue") {
          var D = this.getValueAtTime(u / this.comp.globalData.frameRate, 0), z = this.getValueAtTime((u - 1e-3) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (E = new Array(D.length), P = E.length, x = 0; x < P; x += 1)
              E[x] = D[x] + (D[x] - z[x]) * ((g - u) / this.comp.globalData.frameRate) / 5e-4;
            return E;
          }
          return D + (D - z) * ((g - u) / 1e-3);
        }
        return this.getValueAtTime(((g - p) % m + p) / this.comp.globalData.frameRate, 0);
      }
      function e(c, S, y) {
        if (!this.k)
          return this.pv;
        c = c ? c.toLowerCase() : "";
        var g = this.comp.renderedFrame, _ = this.keyframes, u = _[0].t;
        if (g >= u)
          return this.pv;
        var m, p;
        y ? (S ? m = Math.abs(this.elem.comp.globalData.frameRate * S) : m = Math.max(0, this.elem.data.op - u), p = u + m) : ((!S || S > _.length - 1) && (S = _.length - 1), p = _[S].t, m = p - u);
        var x, P, E;
        if (c === "pingpong") {
          var k = Math.floor((u - g) / m);
          if (k % 2 === 0)
            return this.getValueAtTime(((u - g) % m + u) / this.comp.globalData.frameRate, 0);
        } else if (c === "offset") {
          var I = this.getValueAtTime(u / this.comp.globalData.frameRate, 0), V = this.getValueAtTime(p / this.comp.globalData.frameRate, 0), H = this.getValueAtTime((m - (u - g) % m + u) / this.comp.globalData.frameRate, 0), O = Math.floor((u - g) / m) + 1;
          if (this.pv.length) {
            for (E = new Array(I.length), P = E.length, x = 0; x < P; x += 1)
              E[x] = H[x] - (V[x] - I[x]) * O;
            return E;
          }
          return H - (V - I) * O;
        } else if (c === "continue") {
          var D = this.getValueAtTime(u / this.comp.globalData.frameRate, 0), z = this.getValueAtTime((u + 1e-3) / this.comp.globalData.frameRate, 0);
          if (this.pv.length) {
            for (E = new Array(D.length), P = E.length, x = 0; x < P; x += 1)
              E[x] = D[x] + (D[x] - z[x]) * (u - g) / 1e-3;
            return E;
          }
          return D + (D - z) * (u - g) / 1e-3;
        }
        return this.getValueAtTime((m - ((u - g) % m + u)) / this.comp.globalData.frameRate, 0);
      }
      function r(c, S) {
        if (!this.k)
          return this.pv;
        if (c = (c || 0.4) * 0.5, S = Math.floor(S || 5), S <= 1)
          return this.pv;
        var y = this.comp.renderedFrame / this.comp.globalData.frameRate, g = y - c, _ = y + c, u = S > 1 ? (_ - g) / (S - 1) : 1, m = 0, p = 0, x;
        this.pv.length ? x = createTypedArray("float32", this.pv.length) : x = 0;
        for (var P; m < S; ) {
          if (P = this.getValueAtTime(g + m * u), this.pv.length)
            for (p = 0; p < this.pv.length; p += 1)
              x[p] += P[p];
          else
            x += P;
          m += 1;
        }
        if (this.pv.length)
          for (p = 0; p < this.pv.length; p += 1)
            x[p] /= S;
        else
          x /= S;
        return x;
      }
      function i(c) {
        this._transformCachingAtTime || (this._transformCachingAtTime = {
          v: new Matrix()
        });
        var S = this._transformCachingAtTime.v;
        if (S.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var y = this.a.getValueAtTime(c);
          S.translate(-y[0] * this.a.mult, -y[1] * this.a.mult, y[2] * this.a.mult);
        }
        if (this.appliedTransformations < 2) {
          var g = this.s.getValueAtTime(c);
          S.scale(g[0] * this.s.mult, g[1] * this.s.mult, g[2] * this.s.mult);
        }
        if (this.sk && this.appliedTransformations < 3) {
          var _ = this.sk.getValueAtTime(c), u = this.sa.getValueAtTime(c);
          S.skewFromAxis(-_ * this.sk.mult, u * this.sa.mult);
        }
        if (this.r && this.appliedTransformations < 4) {
          var m = this.r.getValueAtTime(c);
          S.rotate(-m * this.r.mult);
        } else if (!this.r && this.appliedTransformations < 4) {
          var p = this.rz.getValueAtTime(c), x = this.ry.getValueAtTime(c), P = this.rx.getValueAtTime(c), E = this.or.getValueAtTime(c);
          S.rotateZ(-p * this.rz.mult).rotateY(x * this.ry.mult).rotateX(P * this.rx.mult).rotateZ(-E[2] * this.or.mult).rotateY(E[1] * this.or.mult).rotateX(E[0] * this.or.mult);
        }
        if (this.data.p && this.data.p.s) {
          var k = this.px.getValueAtTime(c), I = this.py.getValueAtTime(c);
          if (this.data.p.z) {
            var V = this.pz.getValueAtTime(c);
            S.translate(k * this.px.mult, I * this.py.mult, -V * this.pz.mult);
          } else
            S.translate(k * this.px.mult, I * this.py.mult, 0);
        } else {
          var H = this.p.getValueAtTime(c);
          S.translate(H[0] * this.p.mult, H[1] * this.p.mult, -H[2] * this.p.mult);
        }
        return S;
      }
      function s() {
        return this.v.clone(new Matrix());
      }
      var a = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(c, S, y) {
        var g = a(c, S, y);
        return g.dynamicProperties.length ? g.getValueAtTime = i.bind(g) : g.getValueAtTime = s.bind(g), g.setGroupProperty = expressionHelpers.setGroupProperty, g;
      };
      var n = PropertyFactory.getProp;
      PropertyFactory.getProp = function(c, S, y, g, _) {
        var u = n(c, S, y, g, _);
        u.kf ? u.getValueAtTime = expressionHelpers.getValueAtTime.bind(u) : u.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(u), u.setGroupProperty = expressionHelpers.setGroupProperty, u.loopOut = t, u.loopIn = e, u.smooth = r, u.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(u), u.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(u), u.numKeys = S.a === 1 ? S.k.length : 0, u.propertyIndex = S.ix;
        var m = 0;
        return y !== 0 && (m = createTypedArray("float32", S.a === 1 ? S.k[0].s.length : S.k.length)), u._cachingAtTime = {
          lastFrame: initialDefaultFrame,
          lastIndex: 0,
          value: m
        }, expressionHelpers.searchExpressions(c, S, u), u.k && _.addDynamicProperty(u), u;
      };
      function l(c) {
        return this._cachingAtTime || (this._cachingAtTime = {
          shapeValue: shapePool.clone(this.pv),
          lastIndex: 0,
          lastTime: initialDefaultFrame
        }), c *= this.elem.globalData.frameRate, c -= this.offsetTime, c !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < c ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = c, this.interpolateShape(c, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
      }
      var o = ShapePropertyFactory.getConstructorFunction(), f = ShapePropertyFactory.getKeyframedConstructorFunction();
      function d() {
      }
      d.prototype = {
        vertices: function(S, y) {
          this.k && this.getValue();
          var g = this.v;
          y !== void 0 && (g = this.getValueAtTime(y, 0));
          var _, u = g._length, m = g[S], p = g.v, x = createSizedArray(u);
          for (_ = 0; _ < u; _ += 1)
            S === "i" || S === "o" ? x[_] = [m[_][0] - p[_][0], m[_][1] - p[_][1]] : x[_] = [m[_][0], m[_][1]];
          return x;
        },
        points: function(S) {
          return this.vertices("v", S);
        },
        inTangents: function(S) {
          return this.vertices("i", S);
        },
        outTangents: function(S) {
          return this.vertices("o", S);
        },
        isClosed: function() {
          return this.v.c;
        },
        pointOnPath: function(S, y) {
          var g = this.v;
          y !== void 0 && (g = this.getValueAtTime(y, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(g));
          for (var _ = this._segmentsLength, u = _.lengths, m = _.totalLength * S, p = 0, x = u.length, P = 0, E; p < x; ) {
            if (P + u[p].addedLength > m) {
              var k = p, I = g.c && p === x - 1 ? 0 : p + 1, V = (m - P) / u[p].addedLength;
              E = bez.getPointInSegment(g.v[k], g.v[I], g.o[k], g.i[I], V, u[p]);
              break;
            } else
              P += u[p].addedLength;
            p += 1;
          }
          return E || (E = g.c ? [g.v[0][0], g.v[0][1]] : [g.v[g._length - 1][0], g.v[g._length - 1][1]]), E;
        },
        vectorOnPath: function(S, y, g) {
          S == 1 ? S = this.v.c : S == 0 && (S = 0.999);
          var _ = this.pointOnPath(S, y), u = this.pointOnPath(S + 1e-3, y), m = u[0] - _[0], p = u[1] - _[1], x = Math.sqrt(Math.pow(m, 2) + Math.pow(p, 2));
          if (x === 0)
            return [0, 0];
          var P = g === "tangent" ? [m / x, p / x] : [-p / x, m / x];
          return P;
        },
        tangentOnPath: function(S, y) {
          return this.vectorOnPath(S, y, "tangent");
        },
        normalOnPath: function(S, y) {
          return this.vectorOnPath(S, y, "normal");
        },
        setGroupProperty: expressionHelpers.setGroupProperty,
        getValueAtTime: expressionHelpers.getStaticValueAtTime
      }, extendPrototype([d], o), extendPrototype([d], f), f.prototype.getValueAtTime = l, f.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var C = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(c, S, y, g, _) {
        var u = C(c, S, y, g, _);
        return u.propertyIndex = S.ix, u.lock = !1, y === 3 ? expressionHelpers.searchExpressions(c, S.pt, u) : y === 4 && expressionHelpers.searchExpressions(c, S.ks, u), u.k && c.addDynamicProperty(u), u;
      };
    }
    function initialize$1() {
      addPropertyDecorator();
    }
    function addDecorator() {
      function t() {
        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
      }
      TextProperty.prototype.getExpressionValue = function(e, r) {
        var i = this.calculateExpression(r);
        if (e.t !== i) {
          var s = {};
          return this.copyData(s, e), s.t = i.toString(), s.__complete = !1, s;
        }
        return e;
      }, TextProperty.prototype.searchProperty = function() {
        var e = this.searchKeyframes(), r = this.searchExpressions();
        return this.kf = e || r, this.kf;
      }, TextProperty.prototype.searchExpressions = t;
    }
    function initialize() {
      addDecorator();
    }
    function SVGComposableEffect() {
    }
    SVGComposableEffect.prototype = {
      createMergeNode: function t(e, r) {
        var i = createNS("feMerge");
        i.setAttribute("result", e);
        var s, a;
        for (a = 0; a < r.length; a += 1)
          s = createNS("feMergeNode"), s.setAttribute("in", r[a]), i.appendChild(s), i.appendChild(s);
        return i;
      }
    };
    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
    function SVGTintFilter(t, e, r, i, s) {
      this.filterManager = e;
      var a = createNS("feColorMatrix");
      a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), t.appendChild(a), a = createNS("feColorMatrix"), a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), t.appendChild(a), this.matrixFilter = a;
      var n = this.createMergeNode(i, [s, i + "_tint_1", i + "_tint_2"]);
      t.appendChild(n);
    }
    extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v / 100;
        this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0");
      }
    };
    function SVGFillFilter(t, e, r, i) {
      this.filterManager = e;
      var s = createNS("feColorMatrix");
      s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), s.setAttribute("result", i), t.appendChild(s), this.matrixFilter = s;
    }
    SVGFillFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[2].p.v, r = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0");
      }
    };
    function SVGStrokeEffect(t, e, r) {
      this.initialized = !1, this.filterManager = e, this.elem = r, this.paths = [];
    }
    SVGStrokeEffect.prototype.initialize = function() {
      var t = this.elem.layerElement.children || this.elem.layerElement.childNodes, e, r, i, s;
      for (this.filterManager.effectElements[1].p.v === 1 ? (s = this.elem.maskManager.masksProperties.length, i = 0) : (i = this.filterManager.effectElements[0].p.v - 1, s = i + 1), r = createNS("g"), r.setAttribute("fill", "none"), r.setAttribute("stroke-linecap", "round"), r.setAttribute("stroke-dashoffset", 1), i; i < s; i += 1)
        e = createNS("path"), r.appendChild(e), this.paths.push({
          p: e,
          m: i
        });
      if (this.filterManager.effectElements[10].p.v === 3) {
        var a = createNS("mask"), n = createElementID();
        a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(r), this.elem.globalData.defs.appendChild(a);
        var l = createNS("g");
        for (l.setAttribute("mask", "url(" + getLocationHref() + "#" + n + ")"); t[0]; )
          l.appendChild(t[0]);
        this.elem.layerElement.appendChild(l), this.masker = a, r.setAttribute("stroke", "#fff");
      } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
        if (this.filterManager.effectElements[10].p.v === 2)
          for (t = this.elem.layerElement.children || this.elem.layerElement.childNodes; t.length; )
            this.elem.layerElement.removeChild(t[0]);
        this.elem.layerElement.appendChild(r), this.elem.layerElement.removeAttribute("mask"), r.setAttribute("stroke", "#fff");
      }
      this.initialized = !0, this.pathMasker = r;
    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
      this.initialized || this.initialize();
      var e, r = this.paths.length, i, s;
      for (e = 0; e < r; e += 1)
        if (this.paths[e].m !== -1 && (i = this.elem.maskManager.viewData[this.paths[e].m], s = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && s.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
          var a;
          if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
            var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, l = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) * 0.01, o = s.getTotalLength();
            a = "0 0 0 " + o * n + " ";
            var f = o * (l - n), d = 1 + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01, C = Math.floor(f / d), c;
            for (c = 0; c < C; c += 1)
              a += "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01 + " ";
            a += "0 " + o * 10 + " 0 0";
          } else
            a = "1 " + this.filterManager.effectElements[4].p.v * 2 * this.filterManager.effectElements[9].p.v * 0.01;
          s.setAttribute("stroke-dasharray", a);
        }
      if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", this.filterManager.effectElements[4].p.v * 2), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
        var S = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(S[0] * 255) + "," + bmFloor(S[1] * 255) + "," + bmFloor(S[2] * 255) + ")");
      }
    };
    function SVGTritoneFilter(t, e, r, i) {
      this.filterManager = e;
      var s = createNS("feColorMatrix");
      s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "linearRGB"), s.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(s);
      var a = createNS("feComponentTransfer");
      a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
      var n = createNS("feFuncR");
      n.setAttribute("type", "table"), a.appendChild(n), this.feFuncR = n;
      var l = createNS("feFuncG");
      l.setAttribute("type", "table"), a.appendChild(l), this.feFuncG = l;
      var o = createNS("feFuncB");
      o.setAttribute("type", "table"), a.appendChild(o), this.feFuncB = o, t.appendChild(a);
    }
    SVGTritoneFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v, r = this.filterManager.effectElements[1].p.v, i = this.filterManager.effectElements[2].p.v, s = i[0] + " " + r[0] + " " + e[0], a = i[1] + " " + r[1] + " " + e[1], n = i[2] + " " + r[2] + " " + e[2];
        this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n);
      }
    };
    function SVGProLevelsFilter(t, e, r, i) {
      this.filterManager = e;
      var s = this.filterManager.effectElements, a = createNS("feComponentTransfer");
      (s[10].p.k || s[10].p.v !== 0 || s[11].p.k || s[11].p.v !== 1 || s[12].p.k || s[12].p.v !== 1 || s[13].p.k || s[13].p.v !== 0 || s[14].p.k || s[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (s[17].p.k || s[17].p.v !== 0 || s[18].p.k || s[18].p.v !== 1 || s[19].p.k || s[19].p.v !== 1 || s[20].p.k || s[20].p.v !== 0 || s[21].p.k || s[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (s[24].p.k || s[24].p.v !== 0 || s[25].p.k || s[25].p.v !== 1 || s[26].p.k || s[26].p.v !== 1 || s[27].p.k || s[27].p.v !== 0 || s[28].p.k || s[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (s[31].p.k || s[31].p.v !== 0 || s[32].p.k || s[32].p.v !== 1 || s[33].p.k || s[33].p.v !== 1 || s[34].p.k || s[34].p.v !== 0 || s[35].p.k || s[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(a)), (s[3].p.k || s[3].p.v !== 0 || s[4].p.k || s[4].p.v !== 1 || s[5].p.k || s[5].p.v !== 1 || s[6].p.k || s[6].p.v !== 0 || s[7].p.k || s[7].p.v !== 1) && (a = createNS("feComponentTransfer"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), t.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a));
    }
    SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
      var r = createNS(t);
      return r.setAttribute("type", "table"), e.appendChild(r), r;
    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
      for (var a = 0, n = 256, l, o = Math.min(t, e), f = Math.max(t, e), d = Array.call(null, {
        length: n
      }), C, c = 0, S = s - i, y = e - t; a <= 256; )
        l = a / 256, l <= o ? C = y < 0 ? s : i : l >= f ? C = y < 0 ? i : s : C = i + S * Math.pow((l - t) / y, 1 / r), d[c] = C, c += 1, a += 256 / (n - 1);
      return d.join(" ");
    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e, r = this.filterManager.effectElements;
        this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e));
      }
    };
    function SVGDropShadowEffect(t, e, r, i, s) {
      var a = e.container.globalData.renderConfig.filterSize, n = e.data.fs || a;
      t.setAttribute("x", n.x || a.x), t.setAttribute("y", n.y || a.y), t.setAttribute("width", n.width || a.width), t.setAttribute("height", n.height || a.height), this.filterManager = e;
      var l = createNS("feGaussianBlur");
      l.setAttribute("in", "SourceAlpha"), l.setAttribute("result", i + "_drop_shadow_1"), l.setAttribute("stdDeviation", "0"), this.feGaussianBlur = l, t.appendChild(l);
      var o = createNS("feOffset");
      o.setAttribute("dx", "25"), o.setAttribute("dy", "0"), o.setAttribute("in", i + "_drop_shadow_1"), o.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = o, t.appendChild(o);
      var f = createNS("feFlood");
      f.setAttribute("flood-color", "#00ff00"), f.setAttribute("flood-opacity", "1"), f.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = f, t.appendChild(f);
      var d = createNS("feComposite");
      d.setAttribute("in", i + "_drop_shadow_3"), d.setAttribute("in2", i + "_drop_shadow_2"), d.setAttribute("operator", "in"), d.setAttribute("result", i + "_drop_shadow_4"), t.appendChild(d);
      var C = this.createMergeNode(i, [i + "_drop_shadow_4", s]);
      t.appendChild(C);
    }
    extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
          var e = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(e[0] * 255), Math.round(e[1] * 255), Math.round(e[2] * 255)));
        }
        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var r = this.filterManager.effectElements[3].p.v, i = (this.filterManager.effectElements[2].p.v - 90) * degToRads, s = r * Math.cos(i), a = r * Math.sin(i);
          this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a);
        }
      }
    };
    var _svgMatteSymbols = [];
    function SVGMatte3Effect(t, e, r) {
      this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement;
    }
    SVGMatte3Effect.prototype.findSymbol = function(t) {
      for (var e = 0, r = _svgMatteSymbols.length; e < r; ) {
        if (_svgMatteSymbols[e] === t)
          return _svgMatteSymbols[e];
        e += 1;
      }
      return null;
    }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
      var r = t.layerElement.parentNode;
      if (r) {
        for (var i = r.children, s = 0, a = i.length; s < a && i[s] !== t.layerElement; )
          s += 1;
        var n;
        s <= a - 2 && (n = i[s + 1]);
        var l = createNS("use");
        l.setAttribute("href", "#" + e), n ? r.insertBefore(l, n) : r.appendChild(l);
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
      if (!this.findSymbol(e)) {
        var r = createElementID(), i = createNS("mask");
        i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
        var s = t.globalData.defs;
        s.appendChild(i);
        var a = createNS("symbol");
        a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), s.appendChild(a);
        var n = createNS("use");
        n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show();
      }
      t.setMatte(e.layerId);
    }, SVGMatte3Effect.prototype.initialize = function() {
      for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i; )
        e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
      this.initialized = !0;
    }, SVGMatte3Effect.prototype.renderFrame = function() {
      this.initialized || this.initialize();
    };
    function SVGGaussianBlurEffect(t, e, r, i) {
      t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
      var s = createNS("feGaussianBlur");
      s.setAttribute("result", i), t.appendChild(s), this.feGaussianBlur = s;
    }
    SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = 0.3, r = this.filterManager.effectElements[0].p.v * e, i = this.filterManager.effectElements[1].p.v, s = i == 3 ? 0 : r, a = i == 2 ? 0 : r;
        this.feGaussianBlur.setAttribute("stdDeviation", s + " " + a);
        var n = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", n);
      }
    };
    function TransformEffect() {
    }
    TransformEffect.prototype.init = function(t) {
      this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix(), this.opacity = -1, this._mdf = !1, this._opMdf = !1;
    }, TransformEffect.prototype.renderFrame = function(t) {
      if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
        var e = this.effectsManager.effectElements, r = e[0].p.v, i = e[1].p.v, s = e[2].p.v === 1, a = e[3].p.v, n = s ? a : e[4].p.v, l = e[5].p.v, o = e[6].p.v, f = e[7].p.v;
        this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(n * 0.01, a * 0.01, 1), this.matrix.rotate(-f * degToRads), this.matrix.skewFromAxis(-l * degToRads, (o + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0);
      }
    };
    function SVGTransformEffect(t, e) {
      this.init(e);
    }
    extendPrototype([TransformEffect], SVGTransformEffect);
    function CVTransformEffect(t) {
      this.init(t);
    }
    return extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie;
  });
})(lottie$1, lottie$1.exports);
var lottieExports = lottie$1.exports;
const lottie = /* @__PURE__ */ getDefaultExportFromCjs(lottieExports);
function _iterableToArrayLimit(t, e) {
  var r = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (r != null) {
    var i, s, a, n, l = [], o = !0, f = !1;
    try {
      if (a = (r = r.call(t)).next, e !== 0)
        for (; !(o = (i = a.call(r)).done) && (l.push(i.value), l.length !== e); o = !0)
          ;
    } catch (d) {
      f = !0, s = d;
    } finally {
      try {
        if (!o && r.return != null && (n = r.return(), Object(n) !== n))
          return;
      } finally {
        if (f)
          throw s;
      }
    }
    return l;
  }
}
function ownKeys(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    e && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(t, s).enumerable;
    })), r.push.apply(r, i);
  }
  return r;
}
function _objectSpread2(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ownKeys(Object(r), !0).forEach(function(i) {
      _defineProperty(t, i, r[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach(function(i) {
      Object.defineProperty(t, i, Object.getOwnPropertyDescriptor(r, i));
    });
  }
  return t;
}
function _defineProperty(t, e, r) {
  return e = _toPropertyKey(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function _objectWithoutPropertiesLoose(t, e) {
  if (t == null)
    return {};
  var r = {}, i = Object.keys(t), s, a;
  for (a = 0; a < i.length; a++)
    s = i[a], !(e.indexOf(s) >= 0) && (r[s] = t[s]);
  return r;
}
function _objectWithoutProperties(t, e) {
  if (t == null)
    return {};
  var r = _objectWithoutPropertiesLoose(t, e), i, s;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (s = 0; s < a.length; s++)
      i = a[s], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(t, i) && (r[i] = t[i]);
  }
  return r;
}
function _slicedToArray(t, e) {
  return _arrayWithHoles(t) || _iterableToArrayLimit(t, e) || _unsupportedIterableToArray(t, e) || _nonIterableRest();
}
function _arrayWithHoles(t) {
  if (Array.isArray(t))
    return t;
}
function _unsupportedIterableToArray(t, e) {
  if (t) {
    if (typeof t == "string")
      return _arrayLikeToArray(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return _arrayLikeToArray(t, e);
  }
}
function _arrayLikeToArray(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, i = new Array(e); r < e; r++)
    i[r] = t[r];
  return i;
}
function _nonIterableRest() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _toPrimitive(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var i = r.call(t, e || "default");
    if (typeof i != "object")
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function _toPropertyKey(t) {
  var e = _toPrimitive(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var _excluded$1 = ["animationData", "loop", "autoplay", "initialSegment", "onComplete", "onLoopComplete", "onEnterFrame", "onSegmentStart", "onConfigReady", "onDataReady", "onDataFailed", "onLoadedImages", "onDOMLoaded", "onDestroy", "lottieRef", "renderer", "name", "assetsPath", "rendererSettings"], useLottie = function t(e, r) {
  var i = e.animationData, s = e.loop, a = e.autoplay, n = e.initialSegment, l = e.onComplete, o = e.onLoopComplete, f = e.onEnterFrame, d = e.onSegmentStart, C = e.onConfigReady, c = e.onDataReady, S = e.onDataFailed, y = e.onLoadedImages, g = e.onDOMLoaded, _ = e.onDestroy;
  e.lottieRef, e.renderer, e.name, e.assetsPath, e.rendererSettings;
  var u = _objectWithoutProperties(e, _excluded$1), m = useState(!1), p = _slicedToArray(m, 2), x = p[0], P = p[1], E = useRef(), k = useRef(null), I = function() {
    var B;
    (B = E.current) === null || B === void 0 || B.play();
  }, V = function() {
    var B;
    (B = E.current) === null || B === void 0 || B.stop();
  }, H = function() {
    var B;
    (B = E.current) === null || B === void 0 || B.pause();
  }, O = function(B) {
    var G;
    (G = E.current) === null || G === void 0 || G.setSpeed(B);
  }, D = function(B, G) {
    var N;
    (N = E.current) === null || N === void 0 || N.goToAndPlay(B, G);
  }, z = function(B, G) {
    var N;
    (N = E.current) === null || N === void 0 || N.goToAndStop(B, G);
  }, j = function(B) {
    var G;
    (G = E.current) === null || G === void 0 || G.setDirection(B);
  }, R = function(B, G) {
    var N;
    (N = E.current) === null || N === void 0 || N.playSegments(B, G);
  }, T = function(B) {
    var G;
    (G = E.current) === null || G === void 0 || G.setSubframe(B);
  }, M = function(B) {
    var G;
    return (G = E.current) === null || G === void 0 ? void 0 : G.getDuration(B);
  }, b = function() {
    var B;
    (B = E.current) === null || B === void 0 || B.destroy(), E.current = void 0;
  }, A = function() {
    var B = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, G;
    if (k.current) {
      (G = E.current) === null || G === void 0 || G.destroy();
      var N = _objectSpread2(_objectSpread2(_objectSpread2({}, e), B), {}, {
        container: k.current
      });
      return E.current = lottie.loadAnimation(N), P(!!E.current), function() {
        var q;
        (q = E.current) === null || q === void 0 || q.destroy(), E.current = void 0;
      };
    }
  };
  useEffect(function() {
    var F = A();
    return function() {
      return F == null ? void 0 : F();
    };
  }, [i, s]), useEffect(function() {
    E.current && (E.current.autoplay = !!a);
  }, [a]), useEffect(function() {
    if (E.current) {
      if (!n) {
        E.current.resetSegments(!0);
        return;
      }
      !Array.isArray(n) || !n.length || ((E.current.currentRawFrame < n[0] || E.current.currentRawFrame > n[1]) && (E.current.currentRawFrame = n[0]), E.current.setSegment(n[0], n[1]));
    }
  }, [n]), useEffect(function() {
    var F = [{
      name: "complete",
      handler: l
    }, {
      name: "loopComplete",
      handler: o
    }, {
      name: "enterFrame",
      handler: f
    }, {
      name: "segmentStart",
      handler: d
    }, {
      name: "config_ready",
      handler: C
    }, {
      name: "data_ready",
      handler: c
    }, {
      name: "data_failed",
      handler: S
    }, {
      name: "loaded_images",
      handler: y
    }, {
      name: "DOMLoaded",
      handler: g
    }, {
      name: "destroy",
      handler: _
    }], B = F.filter(function(N) {
      return N.handler != null;
    });
    if (B.length) {
      var G = B.map(
        /**
         * Handle the process of adding an event listener
         * @param {Listener} listener
         * @return {Function} Function that deregister the listener
         */
        function(N) {
          var q;
          return (q = E.current) === null || q === void 0 || q.addEventListener(N.name, N.handler), function() {
            var Y;
            (Y = E.current) === null || Y === void 0 || Y.removeEventListener(N.name, N.handler);
          };
        }
      );
      return function() {
        G.forEach(function(N) {
          return N();
        });
      };
    }
  }, [l, o, f, d, C, c, S, y, g, _]);
  var L = /* @__PURE__ */ React__default.createElement("div", _objectSpread2({
    style: r,
    ref: k
  }, u));
  return {
    View: L,
    play: I,
    stop: V,
    pause: H,
    setSpeed: O,
    goToAndStop: z,
    goToAndPlay: D,
    setDirection: j,
    playSegments: R,
    setSubframe: T,
    getDuration: M,
    destroy: b,
    animationContainerRef: k,
    animationLoaded: x,
    animationItem: E.current
  };
};
function getContainerVisibility(t) {
  var e = t.getBoundingClientRect(), r = e.top, i = e.height, s = window.innerHeight - r, a = window.innerHeight + i;
  return s / a;
}
function getContainerCursorPosition(t, e, r) {
  var i = t.getBoundingClientRect(), s = i.top, a = i.left, n = i.width, l = i.height, o = (e - a) / n, f = (r - s) / l;
  return {
    x: o,
    y: f
  };
}
var useInitInteractivity = function t(e) {
  var r = e.wrapperRef, i = e.animationItem, s = e.mode, a = e.actions;
  useEffect(function() {
    var n = r.current;
    if (!(!n || !i || !a.length)) {
      i.stop();
      var l = function() {
        var d = null, C = function() {
          var S = getContainerVisibility(n), y = a.find(function(_) {
            var u = _.visibility;
            return u && S >= u[0] && S <= u[1];
          });
          if (y) {
            if (y.type === "seek" && y.visibility && y.frames.length === 2) {
              var g = y.frames[0] + Math.ceil((S - y.visibility[0]) / (y.visibility[1] - y.visibility[0]) * y.frames[1]);
              //! goToAndStop must be relative to the start of the current segment
              i.goToAndStop(g - i.firstFrame - 1, !0);
            }
            y.type === "loop" && (d === null || d !== y.frames || i.isPaused) && (i.playSegments(y.frames, !0), d = y.frames), y.type === "play" && i.isPaused && (i.resetSegments(!0), i.play()), y.type === "stop" && i.goToAndStop(y.frames[0] - i.firstFrame - 1, !0);
          }
        };
        return document.addEventListener("scroll", C), function() {
          document.removeEventListener("scroll", C);
        };
      }, o = function() {
        var d = function(y, g) {
          var _ = y, u = g;
          if (_ !== -1 && u !== -1) {
            var m = getContainerCursorPosition(n, _, u);
            _ = m.x, u = m.y;
          }
          var p = a.find(function(E) {
            var k = E.position;
            return k && Array.isArray(k.x) && Array.isArray(k.y) ? _ >= k.x[0] && _ <= k.x[1] && u >= k.y[0] && u <= k.y[1] : k && !Number.isNaN(k.x) && !Number.isNaN(k.y) ? _ === k.x && u === k.y : !1;
          });
          if (p) {
            if (p.type === "seek" && p.position && Array.isArray(p.position.x) && Array.isArray(p.position.y) && p.frames.length === 2) {
              var x = (_ - p.position.x[0]) / (p.position.x[1] - p.position.x[0]), P = (u - p.position.y[0]) / (p.position.y[1] - p.position.y[0]);
              i.playSegments(p.frames, !0), i.goToAndStop(Math.ceil((x + P) / 2 * (p.frames[1] - p.frames[0])), !0);
            }
            p.type === "loop" && i.playSegments(p.frames, !0), p.type === "play" && (i.isPaused && i.resetSegments(!1), i.playSegments(p.frames)), p.type === "stop" && i.goToAndStop(p.frames[0], !0);
          }
        }, C = function(y) {
          d(y.clientX, y.clientY);
        }, c = function() {
          d(-1, -1);
        };
        return n.addEventListener("mousemove", C), n.addEventListener("mouseout", c), function() {
          n.removeEventListener("mousemove", C), n.removeEventListener("mouseout", c);
        };
      };
      switch (s) {
        case "scroll":
          return l();
        case "cursor":
          return o();
      }
    }
  }, [s, i]);
}, useLottieInteractivity = function t(e) {
  var r = e.actions, i = e.mode, s = e.lottieObj, a = s.animationItem, n = s.View, l = s.animationContainerRef;
  return useInitInteractivity({
    actions: r,
    animationItem: a,
    mode: i,
    wrapperRef: l
  }), n;
}, _excluded = ["style", "interactivity"], Lottie = function t(e) {
  var r, i, s, a = e.style, n = e.interactivity, l = _objectWithoutProperties(e, _excluded), o = useLottie(l, a), f = o.View, d = o.play, C = o.stop, c = o.pause, S = o.setSpeed, y = o.goToAndStop, g = o.goToAndPlay, _ = o.setDirection, u = o.playSegments, m = o.setSubframe, p = o.getDuration, x = o.destroy, P = o.animationContainerRef, E = o.animationLoaded, k = o.animationItem;
  return useEffect(function() {
    e.lottieRef && (e.lottieRef.current = {
      play: d,
      stop: C,
      pause: c,
      setSpeed: S,
      goToAndPlay: g,
      goToAndStop: y,
      setDirection: _,
      playSegments: u,
      setSubframe: m,
      getDuration: p,
      destroy: x,
      animationContainerRef: P,
      animationLoaded: E,
      animationItem: k
    });
  }, [(r = e.lottieRef) === null || r === void 0 ? void 0 : r.current]), useLottieInteractivity({
    lottieObj: {
      View: f,
      play: d,
      stop: C,
      pause: c,
      setSpeed: S,
      goToAndStop: y,
      goToAndPlay: g,
      setDirection: _,
      playSegments: u,
      setSubframe: m,
      getDuration: p,
      destroy: x,
      animationContainerRef: P,
      animationLoaded: E,
      animationItem: k
    },
    actions: (i = n == null ? void 0 : n.actions) !== null && i !== void 0 ? i : [],
    mode: (s = n == null ? void 0 : n.mode) !== null && s !== void 0 ? s : "scroll"
  });
};
const v = "5.5.7", meta = {
  g: "LottieFiles AE 0.1.20",
  a: "",
  k: "",
  d: "",
  tc: ""
}, fr = 60, ip = 0, op = 60, w = 1200, h = 1200, nm = "Comp 1", ddd = 0, assets = [], layers = [
  {
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: "Shape Layer 3",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          601,
          600,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          1,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -333,
                    0
                  ],
                  [
                    331.375,
                    0
                  ]
                ],
                c: !1
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [
                0,
                0,
                0,
                1
              ],
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: 15,
              ix: 5
            },
            lc: 2,
            lj: 2,
            bm: 0,
            nm: "Stroke 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Shape 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      },
      {
        ty: "tm",
        s: {
          a: 1,
          k: [
            {
              i: {
                x: [
                  0.25
                ],
                y: [
                  1
                ]
              },
              o: {
                x: [
                  0.35
                ],
                y: [
                  0
                ]
              },
              t: 20,
              s: [
                0
              ]
            },
            {
              t: 47,
              s: [
                100
              ]
            }
          ],
          ix: 1
        },
        e: {
          a: 1,
          k: [
            {
              i: {
                x: [
                  0.25
                ],
                y: [
                  1
                ]
              },
              o: {
                x: [
                  0.35
                ],
                y: [
                  0
                ]
              },
              t: 0,
              s: [
                0
              ]
            },
            {
              t: 27,
              s: [
                100
              ]
            }
          ],
          ix: 2
        },
        o: {
          a: 0,
          k: 0,
          ix: 3
        },
        m: 1,
        ix: 2,
        nm: "Trim Paths 1",
        mn: "ADBE Vector Filter - Trim",
        hd: !1
      }
    ],
    ip: 0,
    op: 600,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 2,
    ty: 4,
    nm: "Shape Layer 2",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          601,
          600,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          1,
          0,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -333,
                    0
                  ],
                  [
                    331.375,
                    0
                  ]
                ],
                c: !1
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: !1
          },
          {
            ty: "st",
            c: {
              a: 0,
              k: [
                0.891764681947,
                0.891764681947,
                0.891764681947,
                1
              ],
              ix: 3
            },
            o: {
              a: 0,
              k: 100,
              ix: 4
            },
            w: {
              a: 0,
              k: 15,
              ix: 5
            },
            lc: 2,
            lj: 2,
            bm: 0,
            nm: "Stroke 1",
            mn: "ADBE Vector Graphic - Stroke",
            hd: !1
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Shape 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: !1
      }
    ],
    ip: 0,
    op: 600,
    st: 0,
    bm: 0
  }
], markers = [], loaderAnimation = {
  v,
  meta,
  fr,
  ip,
  op,
  w,
  h,
  nm,
  ddd,
  assets,
  layers,
  markers
};
function Loader({ testId: t }) {
  return /* @__PURE__ */ jsx(
    Lottie,
    {
      "data-testid": t,
      animationData: loaderAnimation,
      loop: !0,
      autoPlay: !0,
      style: {
        width: "100%",
        height: "100%"
      }
    }
  );
}
const MemberBarVariants = {
  S: "S",
  L: "L"
};
function MemberBar({ label: t, labelIcon: e, ctaLabel: r, onCtaClick: i, variant: s, ctaIcon: a, testId: n }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-testid": `member-bar${n ?? ""}`,
      className: `${styles$4.container} ${s === "S" ? "w-96" : "w-full"}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$4.labelContainer, children: [
          e && /* @__PURE__ */ jsx("div", { className: styles$4.iconContainer, children: e }),
          /* @__PURE__ */ jsx(Text, { variant: "p-14-m", text: t })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Button, { variant: "smallStroke", label: r, onClick: i, hasIcon: !0, icon: a }) })
      ]
    }
  );
}
const styles$4 = {
  container: "flex h-20 rounded-16 justify-between drop-shadow-md  shadow-md items-center px-4 bg-system-white",
  labelContainer: "flex items-center",
  iconContainer: "mr-2.5"
}, footerVariants = {
  DEFAULT: "default",
  TRANSPARENT: "transparent"
}, footerVariantClasses = {
  [footerVariants.DEFAULT]: "bg-system-white border-t-1 border-grey-25",
  [footerVariants.TRANSPARENT]: "bg-transparent"
}, footerSeparator = {
  [footerVariants.DEFAULT]: "bg-grey-25",
  [footerVariants.TRANSPARENT]: "bg-system-white"
}, footerLinkVariants = {
  [footerVariants.DEFAULT]: "decoration-system-black",
  [footerVariants.TRANSPARENT]: "decoration-system-white"
}, textVariants = {
  [footerVariants.DEFAULT]: TextColors.SYSTEM_BLACK,
  [footerVariants.TRANSPARENT]: TextColors.SYSTEM_WHITE
}, Footer = forwardRef((t, e) => {
  const { variant: r = "default", footerLinkItems: i, footerDownloadLinks: s, ...a } = t, n = footerVariantClasses[r], l = footerSeparator[r], o = footerLinkVariants[r], f = textVariants[r];
  return /* @__PURE__ */ jsxs(
    "footer",
    {
      className: `${styles$3.mainContainer} ${n}`,
      "data-testid": "footer-main-container",
      ref: e,
      ...a,
      children: [
        i.length && i.map((d) => {
          var C;
          return /* @__PURE__ */ jsxs(
            "a",
            {
              href: d.href,
              target: "_blank",
              className: `${styles$3.anchorLink} ${o}`,
              "data-testid": d.key,
              rel: "noreferrer",
              children: [
                (C = d.icon) == null ? void 0 : C.call(d, r),
                /* @__PURE__ */ jsx(Text, { text: d.title, variant: "p-sm-10", color: f })
              ]
            },
            d.key
          );
        }),
        /* @__PURE__ */ jsx("div", { className: styles$3.footerDivider, "data-testid": "footer-slash-divider", children: /* @__PURE__ */ jsx("span", { className: `h-4 inline-block w-[1.5px] ${l}` }) }),
        s.length && s.map((d) => {
          var C;
          return /* @__PURE__ */ jsxs(
            "a",
            {
              href: d.href,
              target: "_blank",
              className: styles$3.anchorIcon,
              "data-testid": d.key,
              rel: "noreferrer",
              children: [
                (C = d.icon) == null ? void 0 : C.call(d, r),
                /* @__PURE__ */ jsx(Text, { text: d.title, variant: "p-sm-10", color: f })
              ]
            },
            d.key
          );
        })
      ]
    }
  );
}), styles$3 = {
  mainContainer: "flex justify-center flex-wrap items-center gap-x-5 h-14",
  anchorLink: "flex justify-center items-center gap-x-1 hover:underline underline-offset-2 decoration-1",
  footerDivider: "flex items-center",
  anchorIcon: "flex justify-center items-center gap-x-1"
}, viwellLogo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAB0CAYAAADzVIoEAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABZkSURBVHgB7d1RctS4FgbgQ9Kh5o3cFYxJQhVvMCsYswJgBTQrAFZAWAFhBYQVDKwAzwqAt6maIfiu4Gbepiak556TqDMdt+22bB1Zkv+vKpXQCYnblq0j6UgiAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgKobXX9wf39/zp+eUAJ2dnae/vbbbyUNwOfjG7lV8HG96npcBwcH+T///CPXI6ee+P9/ODk5eV59XeG9DXLjxo03f/zxx1HT9/lcPOf38ozC9uLr16/vaSCla1PysT2ovphl2e729vYvBFe4nP3K98xhl5+9c+fO/cVi8Zri8Y7LwTEFxtzfDykSLuoXX2Zdf5AfwhlfhJxgKSO35mdnZxl/frDpB/f29l7ytTikgfia3mr4VkZh2e3w/YwCtrW1tek9dJWRP3LMOcEVvmfKrj/L92hU54/f268UID6P9wnlUMUWQUhyaXW1/YBU/nyjHhIAAMAAnXsAOAorueIp+HNGgbe2GpzKB7+H07/++uuUBpJzYb7cNefERQuvZI3HxsFB5qDyl+t4cS7440vdD5jrLFG3q1ZrXxfHKmWv7YdM2fxsWlwZhWN5nmnTe7BQ0uV1cXVt5J74TO1/jxz/zUmoKbsZhaOseW3wc1GJHFdpvg6pHF7d37HqnAOwSlqps9nsPhfuOQWcF8A34HsZ5+YxmUJ7TMaM993nv/mk71AJ/99XPNZ92PR9Hv99y5/mZPc7C/70q5wLHmJoDTCqTJ7BnPxe4zdyrN+/f/9sc6yr5FrINTB5ARl5Ys71B/lse677GFjmjvn/vePyVnT9D7Hc98qOeZz8KfW0vGb85UsaqWz+/vvvnylilXL4M/k9j1KnvDs/Py+0728fegUAq6RVur29fUgBPRD4An2+efPm47ESMcw5+UiWBZMDldtNx2x+p00CmBTOpy4Sz/q+H1s8Tv6T64cTBzGHXB5ekrJNwZs2kyjVNeHs6dBkrxDve08GBQCrTGK1XDPNFu2pKZtHlCBf5XDsOkXL4ABgyVNh3kgu1MnJyU8UAD4nx9S9YLY+WCxb/yUHEw9cFlbTcvlESvi6HfF1e0EKtIMA6ULnB+zoZa7L++RjfeGyMuByKb/L+QwMfh+vbBLuJEl55f/KM+iWeW3XDGe54iwAEOa+kuBa67n52EUjIHRa5dAoucX/Uwot/ipnAYDwUJg3amtF+yZdVdyq/cgPoo0PoA6tf6l8O51XrXOgeZPxOXpg0x1tS/nYX4TQwjLT9qSXqKmcOK28Vv6mlM2MHHJdHlaGSx5yQPCI+nN+Di17b2w4P9aQ8T0udU9Ojmk/m8bkdBaAdN/yyXpM4zkOqYtGIkYOALq0aluPm3+H9CJ0DarUzgFHwYeklPTCY3olKTLHXpICk1Q5OilvK8mpVaeyzgTp/M03FDh5NsmwBz/IH3NZuM0vScVYUgC+f/9+TAr3FT83gr8uLnE5/ECOyf2UauUvnE8DlJMlLSIaAf/dLxQYU3iKtp9pezCbzP85daTxkF/SfNifnZ257KZdY7rvVMqlSeoKArck/2z41nvF4DiqpDLJzpRggD9uy/g4jZzJbe6rkhyLPdnPVkvw2xvfT8HVKS6prANgukPHGHcKtcC/a/lea4udu1dz6ti9KjeAdg8It1bk2mo8MHNSZsZCC3KMHxI/Uzh+rHtRMzDkMlFSpCRxU8Z3JXeIxlWSQwG8H++4EeH8uaQRmIVEbSEgvqmkiy25pIk++Fw0BkMdHsw2yWvqK3lp9QJ4rETfkWOS43H37t2MAsDHslvzWpFa9rJL0iNgEodH6zJv6bnphbv/J/fsletIjoUyvKdFLQAwXa5eE1BM9m9wzLkoa77V2vo3Mysy6shX1G96AZzyVYma6W/Ob2o+J3MKQF3Gu8xbJtiIy8ZzMyQwBjSWAuRwAa8gqS4FrNXl2mR1KlBo6lZbc9z6l6i/JA9MQFOQY74q0ch7MBrJwk01L5chbvASKrOWg/fhS9ctzdQrrhYIpCyo7wXgM6LmQn+PAsXH9t/KS05b/0JWnyNPNK6rr0pUKY8hb6iAvWmY3laQMo2u1zFh+DJquG4W1AMAkwXvqwsyp0BVk0k6TNGxXrjG50IVXWY39OClEt0wXW6InMa1tmWqZvJfqjRnjACExMtugBxRPyc/kVm2aTe9sXDr7Or9b1qPu0/rn0aY06wx75b8VaIawwBaK5FtJAvdUKXMIPmvPzNsUhBAwrwEAD4XC5nNZnMK02oA5HTsfywaC5j4qkTNehWukyZ3xxoGWCwWa+cNyX+D4fxB0rwEAEJx/vg1/NB7SAFaJvlsWlmqZ+t/FEqBnc9K1HkPho+NhxrklX8j+W8gM30XY8qQLG8BgMdegDzUYQDRoVUWRet/SbbHJMd8VaJayYC+y58JmLLKywXBICYXAL0AkCxvAYDw1QvAwwDPKUytrTJu/UsWd0Y9jLVilcllKMit3IxpqzIPeOdrJ/gufxwwre04ObV14LVoBLgAofAaAPjqBRgzGauJGQLYNPYf3HF3oZEMOHDHts40pjPyeLy3YSjJeqX1baLLqa0Dr8UM12EYAJLkNQAQnnoBdseek10lc/TbWv/meHOKkFYyoI+udI0HvKxq6Kv8mb0iqjD1zy2N2S4Ao/MeAHjsBQhqLH3THP3QjteG0ljpbkPl5pzSyoC+ejDWeo12dnYKgguSVCsfQ5aZVpgtAhAE7wGA8NQLMPrKbF2Z8e6cIqY0VuplSERjbwP2RLsHQ7r/q2v/Y+7/mrfycX5+nlNPSotGAYxulADAV3ZtXXJUiOrmcMcm9pUByf2x72qvScE9JGu9Rpj7/y9XiaQmnwJ5AJCcUQIAwRG5Rqurah7KNq1NGpK4ooRkwOs8rEmRV/6Nuf8rXO4OKuXDlBHkA0AyRgsAzAYiBSk7OzsLdUrghbpWXKw0kgHJQ1e6UNpKWm06Y8OCUQXBKmfnnnu4jmSnQLPDKUASRgsAhKedAp9kgS4MlFLrX2glA/pY3pnLospwkVYPBh/vw5rX0P1/3ehbNAOEbNQAQGncuGo31IWBUmr9LymtDKjalW6S6VQqao01KRqOt2xbYnqiMgKARqMGAMJHL4CvOeU2Umv9L8WYDKgciDlfk6JueqSvzbZiUTdDAgCuGz0AmGovQIqt/6UIkwFzUqSwxsPa7+PyjbHpFb7WkACI2egBgOFjSmAwvQCptv6XYkoG9LT7orMNguo2/sHc/1oY/wfYIIgAwExdUl8e2EcyWRehHIeWyJIB15L/OFgMdoOgurUtMPf/OhNseZk+ChCzUHoAaEqbBMWyQNEQMSQDmp6YvPJyuVgsHpPjgNTFBkENFdup2bceDO7+l3MU5MwfgJAEEwB4Wh44G3t54Ia925MjuR0Ka6g7TQZsyMMoZI0K18u/utggqKFie79pn4kJSja/BsClYAKAqWwSNIXW/4pgkwGb8jB2dnaWs1JC3CBorexg7v91nnI6AJIQTAAgJrJJUE4ToXQ9nSQDNkylu0qmU9oHvvexNw1XYO7/GrT+AToKKgBIvRfALAub0USY61mQW66SATdupKNQFnsfe8NwBdalX7G3t/ea0PoH6CyoAECYKWTaRukFWCwWU1yYRKMrfVBCXUMextpGOoElMubVF3i44ojgAlf+L/l6BbniJ0CoggsATAKWelbzSL0AkwsAlLrSBwVwDXkYRfUFsw1sQW5ZbxDE49qSO5Ctvoa5//8ylf8hAYCV4AIAw8eypvkIWwXfownSGNbpm0zZIfnvmkBWNXxY8zsmn/wn15KDo4+o/AH6CTIA8LQ8sGwV7LsXIKMJMsmArj3qk1DXMAZ/3NSa1ljV0GY9iqaAZapz/+WaS+8PV/y/bG9vf6MJJdUCuBZqD4CvrYLnnpcHzmiCzDz1gtzqtb9DXc9B21Q6rUTGrkMYDWvaH6c+91+uE5+jQ/Pxmiv8t9zV/4nPx//4ex8JK/0BDBZsAOCrF8DXJkGh7EMwFo2AznZ1vYY54l2m0mkMYXTtfVr7uYnM/Z/LOTIfco/OZTElAgBngg0ARGJbBU86ANBIBuyxul5d3sDGMqaVyLip3DVMG8XcfwBwIugAwDzoStIV3FbBqVJKBuw0nt6wkI4k/xXUgcaxbyp33MNR994KAgBwIOgAQPjaJGjqXfQ+jJkM2LCQznHXqXQaU1M7DGHk1ReaZisAANgKPgBQ2lu+Cr0AHiglA25sSZsAIa++bjOWrrEmQNsQRl2+wpTm/vN7fbD84H8+5s8v+PMbhYRMgMmaUeCk0uCH5BvthXtMV/IhgSrJ6+BznZNDm66d2UUvq/yfz1+/fi3IgqwJoHDscmxFzbee1PzsZOb+c1BXNgU7EtCZayrPhIwAoJfgewCEp02Cdk2rCxQpJdRtmlZXl0lvPbSk1Bu1tkHQ0HyF1EmjQJZt5o/bnqYLAyQpigDA1yZBVJ8lDo4pJQPW9hB1Xfe/C1+bG9kuVjRlHFAe8qfHBADWoggAhFICWdXYWwVPgtK1rJ1W13Xdfwvqmxs1HDN2/mvAwZwkaD4lALASTQBgEsjUx0DH2ip4SnwlA9qu+9+F1poAyw2CWnosJrn0b1emR8dHLyFAMqIJAAR3vx6TPvQCeKAxdltdE6BuGV0XmfRKQxiPzGfXPRaTcX5+fkj664YAJCOqAMDX8sDoBdDHwwAyrU47GXDtOrrIpNdYE2BlLYp59XtbW1to2XZgcjQwFADQUVQBgPCU9YteAGVaiZ3L4G1/f39t6h/1TP6r0lgTgMnUttfVF2W6ovl70IGvRgJACqILADz2AnTeshX60WhJk0kG5N9tteufLVkTgNyb1/wdtP4tYWogQDfRBQDC0w3ea7956E6pJS1j/6+XY+qrZrPZMTniaYVKzP3vQSlREyA5UQYAnjYJatqLHdzSaOHOa15zOo9eaU2Aqg+Y+9/bZFZNBOgrygBA+Oga3draQg+AsvPz84I8tNZcdv+v0C6DxwS9KA0vASQl2gDAVxcs6PK0vkNpeo2cUu5qxtz/AZRmmQAkJdoAwMfywDyOXBKo89BaU8sZUSyDBUFvJrDE7AmAFtEGAEJ7kyDTigBl2jM7NBPptIIXzP134gsBQKOoAwDlXoBj04oAD5Sm1QnVTXSUZjKUmPvvBM4hQIuoAwChtUnQkPXiwZ5WToePlrRC8IKy5wBfewQAAC2iDwCUksiw9apnGtfR1yp6roMXzP134+zsrCQAaBR9ACBcbxKE1v84XI+n+1pFz+WaAC42K4JLy+siH0joBVg3owRIEtn+/n7BX+Y0XJStf37AZRQ5x9fRybr/FiTYeEQDudisCP7FZeoBKZLVQn/44YeL9UIQuNmT8zebze7L1/y5xDns5+7duxn3RGbytc2U5yR6AISr5YHR+h+Xw/H0gjxytCaA76AFBtre3v7EQw3f/v77718IrG1tbT3joPejfCwrMLDHZfDiHC4Wi9c2/y+ZAMDRVDK11j8HFlhVsANX4+ljBHIOhhwKgmjs7e3JzpOZfM0VGWYMWeLWf8b3zHz5b/4a57AHLoeycV0mX9uWw2QCADG0F0Cz0uDoDAFABy6SAccaRx+aw6C0XDEoMJXX8+W/kWNgj3tPrgIogaRNe0PLYVIBgPQC8Mnom/Ud+8YryQQYQyvSscbRB64JoLJcMegwldfVPcdl9r8EnUnFRdc37TrFuiv2qkGUbTlMKgAQ/PDv1Q3LJ05lPYElD0l6yQQAA4dzRh1H75vD4GvGQizOz8+DLc/7+/tzquw4ydevJOhEEv+44vq4+hp6UOzVlUOyHD5NLgDgB4e0Hq1OgnQZa7e++G9kpEwyQSkRfSvSvgGgK31zGGazmfZ+CFEJdcjMtFzXEq1Cq8B8PG/64nHqa61W85qr1r/TchN4OXxZfX3SQwCi5/LA6gljPgoSj6Hdp0T0rUhv3rw5akXaZxOa2Of+S4uOJkAeuqbluvZ+Q0tgWywWQV4TSZxcHbNechhAOX3fIW4Jv9KDklW/Z1sOkwsAhM0mQT5a/8Y9UhZy1G+r5+I6QazhYJuMmsDcf+cPydDKsjx0uTKQqX5Z3feHJrC5HiLk8xdcxWUq/8O674WaQxHa+iqmHNZW/kLWUiALSQYANr0AHh++OSnj95JTWqx6ckLJordcE+DUDFtFS2OKK7dgg+nNMi3/T1y+Go9paAIb/+5b5FYWUs9MW+VvDO5B0Xi//Ez9kQIhF1Qq/7ZyaNsASjIAEB17AbwkjO3v7z8iP35OqTvWclZHUFn0FsNQ72PPflYa3lLvMevi4OAgb+puXVHSQBrncLnC3pjkecTPv7cbKn8nQwAa75ePK4hAdFkO2yp/6hFEJRsAdJxP7muxmIfkh4wN+Qo2fOmaDBjaCo5Flx9KZO6/xkMyl4cejUQqLm61vpbV1ai98nc1A0Cj8npGI5Isdek5ofVM9TUucig0uuulwo2lHPYJopINAAR3rR61fNtL6z/L1ua7anuZJdQL0HG759PQdtDrOJUxibn//OBRCXD59771PbNFHvb88Zorrm91yWp1+Dj/pAHMdC6Ne/aRWa3QG3n28Pl7zu9JKqy3tKHSWrIdu27whBSMVQ7l2tmUwz4zKZLYDKgJ9wKULZvLqLcYpfKvznf1IDPTbF5QAqQnp8MGQe9DzKKXqYxteRkptP5N5ZWTjuzs7OwTPwiP+T5653pr58xs5MN/I+drcY+v1aOerciShlGrpKXrna+RvL9XHEx/dj3cJBWjzD6SpE0TCN7vM5wx9P71UA6/cTk8knIoCZ8uz2NTOeSvrX5Pnx4Au78QIYmkTPfJKmn93yZFK5V/RiPg93x0cnKSRBDQcA2vcOv/dogBQHY5XecbNbTuQj3uru7cuXN/sVg0ZsYrKmm4XXLU6pbKlXtyDsmSKR+ypsCc/CrJjYzcOOXn8X+oJ5TDS33KYdI9AKJhi1m11n92OU3jmem2Ga0rXv6+ST58FfsOc+YaSsRdN/862Dn0pvdCWq159Xsxz/1flnF+6B7SODIKiG0OQHa5Be7cjNFn5F9GAembAGgqfimHcxpHRgHpk4uSfAAgJDJa6Yp1MvYvhU+6ukx3167pupFEnpzCkfHHW66EpJUhGfVf5GZbFhRJvHHdrapFsur52OtWvgq6G71S9q7EMPffVFSrG438KGV8Qyby5DRVYNILKBX9ys9dnT/+THBp09i1NGRWytwtM0wjlX9GcKVPIDWJAKDSC+Ck9V/tcgr8hpYgRcaVLmYILI+VPx/zp6cUAUkGNBtfrCpD791o6r2IZO7/bjXosh2XnIKmDHau/DOcv806VFzy7FJJ8EtJn5kUSc8CqJAWV/AVBtQzSTdF5eWCIlCzJsAxdj5LB7axHQY7KbrRpxxOJgAwFX8SSXFTVV1id2dnJ7S5/02K1X8kMvcfLmEb24FuYCdFJ/qUw0kMASxxEOCs25ULbRRd5224W72kiEh3+sHBwQP5Wrq7YkmiWz3u5b8pDrKk9gOCRm3drjLtjocBcP424JZrax7S1tbWkRmuhAY3AtuMCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAu/B9FDmuKpemLRwAAAABJRU5ErkJggg==", NavbarVariants = {
  DEFAULT: "default"
}, navVariantClasses = {
  [NavbarVariants.DEFAULT]: "bg-system-white"
}, Navbar = forwardRef((t, e) => {
  const { variant: r = "default", menuItems: i, rightActions: s, ...a } = t, n = navVariantClasses[r];
  return /* @__PURE__ */ jsxs("header", { className: `${n} ${navStyles.mainHeader}`, ref: e, ...a, children: [
    /* @__PURE__ */ jsxs("div", { className: navStyles.navContainer, children: [
      /* @__PURE__ */ jsx("img", { src: viwellLogo, className: "w-32 h-7", alt: "Viwell Logo" }),
      /* @__PURE__ */ jsx("nav", { className: navStyles.navMenu, children: i.length && i.map((l) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-1", children: [
        l.icon,
        /* @__PURE__ */ jsx(
          "a",
          {
            className: `${l.active ? navStyles.activeNavLink : l.disabled ? navStyles.disabledNavLink : navStyles.defaultNavLink}`,
            href: l.href,
            onClick: (o) => {
              l.disabled && o.preventDefault();
            },
            children: l.label
          },
          l.key
        )
      ] }, l.key)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: navStyles.rightContainer, children: (s == null ? void 0 : s.length) && s.map((l) => /* @__PURE__ */ jsx(
      "div",
      {
        className: l.disabled ? navStyles.disabledRightActionItem : navStyles.rightActionItem,
        children: l.actionItem
      },
      l.key
    )) })
  ] });
}), navStyles = {
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
}, ModalVariants = {
  XS: "xs",
  S: "s",
  M: "m",
  L: "l",
  XL: "xl"
}, variantClasses$1 = {
  [ModalVariants.XS]: "w-100 h-80 ",
  [ModalVariants.S]: "w-100 h-100 ",
  [ModalVariants.M]: "w-100 h-110 ",
  [ModalVariants.L]: "w-150 h-120 ",
  [ModalVariants.XL]: "w-180 h-150 "
}, commonStyle = "flex flex-col self-center relative rounded-30 bg-system-white align-middle justify-around content-center px-10";
function Modal({ testId: t, variant: e, isOpen: r, triggerModalElement: i, renderContent: s, hasCloseIcon: a }) {
  const [n, l] = useState(r), o = () => {
    l(!0);
  }, f = () => {
    l(!1);
  }, d = commonStyle + " " + variantClasses$1[e];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    i({ onOpen: o }),
    /* @__PURE__ */ jsx(Fragment, { children: n && /* @__PURE__ */ jsx("div", { className: styles$2.modalContainer, "data-testid": t, children: /* @__PURE__ */ jsxs("div", { className: d, children: [
      !!a && /* @__PURE__ */ jsx("button", { className: "absolute top-5 right-5", onClick: f, children: /* @__PURE__ */ jsx(XIcon, {}) }),
      s({ onClose: f })
    ] }) }) })
  ] });
}
const styles$2 = {
  modalContainer: "flex absolute top-0 bottom-0 right-0 left-0 bg-system-black bg-opacity-80 justify-center items-center z-50"
}, Breadcrumb = forwardRef((t, e) => {
  const { path: r, separator: i, testId: s, onItemClick: a } = t, n = r.split("/").filter((f) => f !== ""), l = (f) => (d) => {
    d.preventDefault(), a(`/${n.slice(0, f + 1).join("/")}`);
  }, o = (f) => f < n.length - 1;
  return /* @__PURE__ */ jsx("div", { ref: e, "data-testid": s, children: /* @__PURE__ */ jsx("ul", { className: breadcrumbStyles.mainContainer, children: n.map((f, d) => /* @__PURE__ */ jsxs("li", { "data-testid": f, className: breadcrumbStyles.breadItem, children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        "data-testid": `${f}-link`,
        href: `/${n.slice(0, d + 1).join("/")}`,
        onClick: l(d),
        className: breadcrumbStyles.breadTitle,
        children: f
      }
    ),
    o(d) && (React__default.isValidElement(i) ? i : /* @__PURE__ */ jsx(SmallArrowRightIcon, { "data-testid": "breadcrumb-default-separator" }))
  ] }, f)) }) });
}), breadcrumbStyles = {
  mainContainer: "flex items-center gap-x-[0.625rem] flex-wrap",
  breadItem: "flex items-center gap-x-[0.625rem]",
  breadTitle: "text-grey-300 text-sm font-normal leading-md"
}, SnackbarVariants = {
  NEGATIVE: "negative",
  POSITIVE: "positive",
  NEUTRAL: "neutral"
}, variantClasses = {
  [SnackbarVariants.NEUTRAL]: "bg-grey-25",
  [SnackbarVariants.POSITIVE]: "bg-system-light-green",
  [SnackbarVariants.NEGATIVE]: "bg-brik-25"
}, Icon = {
  [SnackbarVariants.POSITIVE]: /* @__PURE__ */ jsx(CheckIcon, { "data-testid": "snackbar-positive-icon" }),
  [SnackbarVariants.NEGATIVE]: /* @__PURE__ */ jsx(ExclamationIcon, { "data-testid": "snackbar-negative-icon" })
};
function Snackbar({ variant: t, message: e, testId: r, isVisble: i }) {
  const s = t === "neutral", [a, n] = useState(i);
  return useEffect(() => {
    i && n(i), setTimeout(() => {
      n(!1);
    }, 4e3);
  }, [i]), a ? /* @__PURE__ */ jsxs("div", { "data-testid": `${r ?? "snackbar"}`, className: `${styles$1.container} ${variantClasses[t]}`, children: [
    !s && /* @__PURE__ */ jsx("div", { className: styles$1.iconContainer, children: Icon[t] }),
    /* @__PURE__ */ jsx(Text, { variant: "p-14-reg", text: e })
  ] }) : null;
}
const styles$1 = {
  container: "flex w-fit rounded-2xl p-5 shadow-md",
  iconContainer: "mr-2.5"
};
function ProfileTable({
  ctaLabel: t,
  ctaIcon: e,
  testId: r,
  onCtaClick: i,
  profileAvatar: s,
  profileTitle: a,
  listData: n,
  ...l
}) {
  return /* @__PURE__ */ jsxs("div", { className: profileStyles.mainContainer, "data-testid": r, ...l, children: [
    /* @__PURE__ */ jsx("div", { className: profileStyles.buttonContainer, "data-testid": "profile-CTA", children: /* @__PURE__ */ jsx(Button, { variant: "smallStroke", label: t, hasIcon: !0, icon: e, onClick: i }) }),
    /* @__PURE__ */ jsx("div", { className: profileStyles.contentArea, children: /* @__PURE__ */ jsxs("div", { className: profileStyles.content, children: [
      /* @__PURE__ */ jsxs("div", { className: profileStyles.avatarFlex, children: [
        /* @__PURE__ */ jsx(Avatar, { size: "large", ...s }),
        /* @__PURE__ */ jsx("div", { className: profileStyles.userText, children: a })
      ] }),
      /* @__PURE__ */ jsx(List, { bordered: !0, size: "default", ...n })
    ] }) })
  ] });
}
const profileStyles = {
  mainContainer: "bg-system-white rounded-30 p-4",
  buttonContainer: "flex justify-end",
  contentArea: "px-12 pt-2 pb-12",
  content: "flex flex-col gap-y-10",
  avatarFlex: "flex flex-col justify-center items-center gap-y-2",
  userText: "text-system-black font-medium text-md leading-lg"
};
function UploadAvatar({ onUpload: t }) {
  const e = useRef(null), [r, i] = useState(""), s = (n) => {
    n.preventDefault(), e.current && e.current.click();
  }, a = (n) => {
    const l = n.target.files ? n.target.files[0] : null;
    l && i(URL.createObjectURL(l)), t(l);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles.container, children: [
    /* @__PURE__ */ jsx(Avatar, { size: "large", src: r }),
    /* @__PURE__ */ jsxs("div", { className: styles.buttonContainer, children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          ref: e,
          type: "file",
          accept: "image/*",
          className: styles.input,
          onChange: a
        }
      ),
      /* @__PURE__ */ jsx(Button, { variant: "smallStroke", label: "Add logo", hasIcon: !0, icon: /* @__PURE__ */ jsx(UploadIcon, {}), onClick: s })
    ] })
  ] });
}
const styles = {
  container: "flex flex-col  rounded-30 h-52 w-full border-1 border-dashed justify-center items-center",
  buttonContainer: "mt-3",
  input: "hidden"
}, pxToRem = (t, e = 16) => 1 / e * (t ?? 0) + "rem";
export {
  AppleIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  Avatar,
  AvatarSizeVariants,
  Breadcrumb,
  Button,
  ButtonVariants,
  CheckIcon,
  Dropdown,
  EditIcon,
  ExclamationIcon,
  FailCircle,
  Footer,
  GoogleStoreIcon,
  Input,
  List,
  Loader,
  MemberBar,
  MemberBarVariants,
  Modal,
  ModalVariants,
  Navbar,
  NavbarVariants,
  OrganizationIcon,
  PlusIcon,
  ProfileIcon,
  ProfileTable,
  Select,
  SettingIcon,
  SizeVariants,
  SmallArrowRightIcon,
  Snackbar,
  SnackbarVariants,
  SuccessCircle,
  Text,
  TextColors,
  TextVariants,
  UploadAvatar,
  UploadIcon,
  UsersIcon,
  XIcon,
  breadcrumbStyles,
  childNodeClasses,
  childTextClasses,
  footerVariants,
  generateHTMLTag,
  listStyles,
  navStyles,
  placementVariants,
  profileStyles,
  pxToRem,
  sizeVariantClasses,
  styles$3 as styles,
  variantClasses$2 as variantClasses
};
