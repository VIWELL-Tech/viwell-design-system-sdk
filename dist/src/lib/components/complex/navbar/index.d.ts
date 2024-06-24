import { default as React, HTMLAttributes } from 'react';

export declare const NavbarVariants: {
    readonly DEFAULT: "default";
};
type NavbarVariantsType = keyof typeof NavbarVariants;
interface MenuItemType extends HTMLAttributes<HTMLAnchorElement> {
    key: string;
    label: string;
    href: string;
    icon?: React.ReactNode;
    active?: boolean;
    disabled?: boolean;
}
export interface NavbarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    menuItems: MenuItemType[];
    variant?: (typeof NavbarVariants)[NavbarVariantsType];
    rightActions?: Array<{
        key: string;
        actionItem: React.ReactNode;
        disabled?: boolean;
    }>;
    onLogoClick?: () => void;
}
export declare const Navbar: React.ForwardRefExoticComponent<NavbarProps & React.RefAttributes<HTMLDivElement>>;
export declare const navStyles: {
    mainHeader: string;
    navContainer: string;
    rightContainer: string;
    navMenu: string;
    defaultNavLink: string;
    activeNavLink: string;
    disabledNavLink: string;
    rightActionItem: string;
    disabledRightActionItem: string;
    logo: string;
    menuItem: string;
};
export {};
//# sourceMappingURL=index.d.ts.map