import { VoidFunc } from '../../../types';
import { default as React, ReactElement } from 'react';

export declare const ModalVariants: {
    readonly XS: "xs";
    readonly S: "s";
    readonly M: "m";
    readonly L: "l";
    readonly XL: "xl";
};
type VARIANTSKEYS = keyof typeof ModalVariants;
type MODALVARIANTS = (typeof ModalVariants)[VARIANTSKEYS];
export interface RenderContentParams {
    onClose: VoidFunc;
}
export interface TriggerModalElementParams {
    onOpen: VoidFunc;
}
export interface ModalProps {
    testId?: string;
    variant: MODALVARIANTS;
    isOpen: boolean;
    renderContent: (props: RenderContentParams) => ReactElement;
    triggerModalElement: (props: TriggerModalElementParams) => ReactElement;
    hasCloseIcon?: boolean;
}
export declare function Modal({ testId, variant, isOpen, triggerModalElement, renderContent, hasCloseIcon }: ModalProps): React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map