import * as React from 'react';
export declare const placementVariants: {
    readonly BOTTOM_LEFT: "bottomLeft";
    readonly BOTTOM_RIGHT: "bottomRight";
};
type PlacementVariantsType = keyof typeof placementVariants;
interface ItemType {
    key: string;
    label: string;
    icon?: React.ReactNode;
    disabled?: boolean;
}
export interface MenuInfo {
    key: string;
    item: ItemType;
}
export interface DropdownProps {
    children: React.ReactNode;
    menu: ItemType[];
    disabled?: boolean;
    placement?: (typeof placementVariants)[PlacementVariantsType];
    trigger?: 'click' | 'hover';
    onClick?: (info: MenuInfo) => void;
    isCloseToTop?: boolean;
    menuTopChildren?: React.ReactNode;
}
export declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps & React.RefAttributes<HTMLButtonElement>>;
export {};
//# sourceMappingURL=index.d.ts.map