import React, { ReactNode } from 'react';
export declare const ButtonVariants: {
    readonly PRIMARY: "primary";
};
type BUTTONVARIANTS = keyof typeof ButtonVariants;
export interface ButtonProps {
    variant: (typeof ButtonVariants)[BUTTONVARIANTS];
    label: string;
    disabled?: boolean;
    icon?: ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
export {};
