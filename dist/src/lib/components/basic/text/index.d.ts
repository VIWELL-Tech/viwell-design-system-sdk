import { default as React } from 'react';

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
    readonly HANDWRITTEN_14: "p-handwritten-14";
};
export declare const TextColors: {
    readonly SYSTEM_BLACK: "system-black";
    readonly SYSTEM_WHITE: "system-white";
    readonly SYSTEM_LIGHT_GREEN: "system-light-green";
    readonly SYSTEM_GREEN: "system-green";
    readonly SYSTEM_RED: "system-red";
    readonly GREY_100: "grey-100";
};
type VARIANTSKEYS = keyof typeof TextVariants;
type TEXTVARIANTS = (typeof TextVariants)[VARIANTSKEYS];
type TEXTCOLORS = keyof typeof TextColors;
export interface TextProps {
    variant: TEXTVARIANTS;
    text: string;
    color?: (typeof TextColors)[TEXTCOLORS];
}
export declare const generateHTMLTag: (variant: TEXTVARIANTS) => TEXTVARIANTS | "h4" | "p";
export declare function Text({ variant, color, text, ...props }: TextProps): React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map