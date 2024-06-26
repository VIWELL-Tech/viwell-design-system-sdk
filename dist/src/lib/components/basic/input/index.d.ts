import { default as React } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'> {
    label?: string;
    error?: boolean;
    errorMessage?: string;
    rightInsideIcon?: React.ReactNode;
    rightOutsideIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    isDefaultSelected?: boolean;
    IsSearchInput?: boolean;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=index.d.ts.map