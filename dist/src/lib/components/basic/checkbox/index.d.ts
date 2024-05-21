import { default as React } from 'react';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'> {
    title?: string;
    error?: boolean;
    errorMessage?: string;
    testId?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=index.d.ts.map