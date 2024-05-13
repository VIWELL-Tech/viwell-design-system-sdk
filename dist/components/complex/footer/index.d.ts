import { default as React, HTMLAttributes, HtmlHTMLAttributes } from 'react';

export declare const footerVariants: {
    readonly DEFAULT: "default";
    readonly TRANSPARENT: "transparent";
};
type FooterVariantsType = keyof typeof footerVariants;
export interface FooterItemType extends HtmlHTMLAttributes<HTMLAnchorElement> {
    key: string;
    title: string;
    href: string;
    icon?: (variant: (typeof footerVariants)[FooterVariantsType]) => React.JSX.Element;
}
export interface FooterProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    variant?: (typeof footerVariants)[FooterVariantsType];
    footerLinkItems: FooterItemType[];
    footerDownloadLinks: FooterItemType[];
}
export declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLDivElement>>;
export declare const styles: {
    mainContainer: string;
    anchorLink: string;
    footerDivider: string;
    anchorIcon: string;
};
export {};
//# sourceMappingURL=index.d.ts.map