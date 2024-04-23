import React from 'react';
import { COLORS } from '../../../../lib/enums';
export declare const TextVariants: {
    readonly H1: "h1";
    readonly H2: "h2";
    readonly H3: "h3";
    readonly H4M: "h4m";
    readonly H4R: "h4r";
    readonly BODY_REG: "p-reg";
    readonly BODY_14_REG: "p-14-reg";
    readonly BODY_M: "p-m";
    readonly BODY_14_M: "p-14-m";
    readonly SMALL_12_REG: "p-sm-12-reg";
    readonly SMALL_12_M: "p-sm-12-m";
    readonly SMALL_10: "p-sm-10";
    readonly ALL_CAPS_12: "p-all-caps-12";
};
export declare const TextColors: {
    readonly SYSTEM_BLACK: "system-black";
    readonly SYSTEM_WHITE: "system-white";
    readonly SYSTEM_LIGHT_GREEN: "system-light-green";
    readonly SYSTEM_GREEN: "system-green";
    readonly SYSTEM_RED: "system-red";
};
type VARIANTSKEYS = keyof typeof TextVariants;
type TEXTVARIANTS = (typeof TextVariants)[VARIANTSKEYS];
type TEXTCOLORS = keyof typeof COLORS;
export interface TextProps {
    variant: TEXTVARIANTS;
    text: string;
    color?: TEXTCOLORS;
}
export declare const generateHTMLTag: (variant: TEXTVARIANTS) => TEXTVARIANTS | "h4" | "p";
export declare const Text: React.FC<TextProps>;
export {};
