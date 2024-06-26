import * as React from 'react';
export declare const AvatarSizeVariants: {
    readonly Large: "large";
    readonly SMALL: "small";
    readonly XS: "xs";
};
type AvatarSizeVariantsKeys = keyof typeof AvatarSizeVariants;
export interface AvatarProps extends Omit<React.HtmlHTMLAttributes<HTMLSpanElement>, 'className'> {
    size?: (typeof AvatarSizeVariants)[AvatarSizeVariantsKeys];
    src?: string;
    alt?: string;
    children?: React.ReactNode;
    abbreviateUpper?: boolean;
}
export declare const variantClasses: {
    large: string;
    small: string;
    xs: string;
};
export declare const childTextClasses: {
    large: string;
    small: string;
    xs: string;
};
export declare const childNodeClasses: {
    large: string;
    small: string;
    xs: string;
};
export declare const Avatar: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLSpanElement>>;
export default Avatar;
//# sourceMappingURL=index.d.ts.map