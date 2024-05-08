import { default as React } from 'react';

export declare const SnackbarVariants: {
    readonly NEGATIVE: "negative";
    readonly POSITIVE: "positive";
    readonly NEUTRAL: "neutral";
};
type VARIANTSKEYS = keyof typeof SnackbarVariants;
type SNACKBARVARIANTS = (typeof SnackbarVariants)[VARIANTSKEYS];
export interface SnackbarProps {
    variant: SNACKBARVARIANTS;
    message: string;
    testId?: string;
}
export declare function Snackbar({ variant, message, testId }: SnackbarProps): React.JSX.Element | null;
export {};
//# sourceMappingURL=index.d.ts.map