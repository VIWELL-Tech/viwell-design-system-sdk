import { default as React } from 'react';

export declare const ModalVariants: {
    readonly S: "S";
};
type VARIANTSKEYS = keyof typeof ModalVariants;
type MODALVARIANTS = (typeof ModalVariants)[VARIANTSKEYS];
export interface ModalProps {
    children: React.JSX.Element;
    variant: MODALVARIANTS;
    isOpen: boolean;
}
export declare function Modal({ children, variant, isOpen }: ModalProps): React.JSX.Element | null;
export {};
//# sourceMappingURL=index.d.ts.map