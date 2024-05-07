import { VoidFunc } from '../../../types';
import { default as React, ReactElement } from 'react';

export declare const ModalVariants: {
    readonly S: "S";
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
}
export declare function Modal({ testId, variant, isOpen, triggerModalElement, renderContent }: ModalProps): React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map