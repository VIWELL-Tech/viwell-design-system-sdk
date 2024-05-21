import { default as React } from 'react';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'type'> {
    title?: string;
    error?: boolean;
    errorMessage?: string;
    testId?: string;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=index.d.ts.map