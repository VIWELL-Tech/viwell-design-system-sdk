import { ButtonHTMLAttributes } from 'react';
export declare const AT_BUTTON_VARIANT: {
    readonly PRIMARY: "primary";
    readonly SECONDARY: "secondary";
    readonly TERTIARY: "tertiary";
};
export type ButtonVariant = keyof typeof AT_BUTTON_VARIANT;
export declare const variantClasses: Record<ButtonVariant, string>;
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    variant?: ButtonVariant;
    isDisabled?: boolean;
}
export declare const Button: ({ label, variant, isDisabled, onClick }: ButtonProps) => import("react").JSX.Element;
