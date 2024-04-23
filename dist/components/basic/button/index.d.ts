import React, { ReactNode } from 'react';
export declare const ButtonVariants: {
    readonly PRIMARY: "primary";
};
type BUTTONVARIANTS = keyof typeof ButtonVariants;
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
    variant: (typeof ButtonVariants)[BUTTONVARIANTS];
    label: string;
    disabled?: boolean;
    hasIcon?: boolean;
    icon?: ReactNode;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export {};
