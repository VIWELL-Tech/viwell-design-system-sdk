import React, { ReactNode } from 'react';
export declare const ButtonVariants: {
    readonly PRIMARY: "primary";
};
type BUTTONVARIANTS = keyof typeof ButtonVariants;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: (typeof ButtonVariants)[BUTTONVARIANTS];
    label: string;
    disabled?: boolean;
    hasIcon?: boolean;
    icon?: ReactNode;
}
export declare const Button: React.FC<ButtonProps>;
export {};
