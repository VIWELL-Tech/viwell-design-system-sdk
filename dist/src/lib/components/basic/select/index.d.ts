import { default as React } from 'react';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'className'> {
    label: string;
    error?: boolean;
    errorMessage?: string;
    options: string[];
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLSelectElement>>;
//# sourceMappingURL=index.d.ts.map