import * as React from 'react';
export declare const MemberBarVariants: {
    readonly S: "S";
    readonly L: "L";
};
type VARIANTSKEYS = keyof typeof MemberBarVariants;
type MEMBERBARVARIANTS = (typeof MemberBarVariants)[VARIANTSKEYS];
export interface MemberBarProps {
    labelIcon?: React.JSX.Element;
    label: string;
    onCtaClick: () => void;
    hasCTA?: boolean;
    ctaLabel?: string;
    variant: MEMBERBARVARIANTS;
    ctaIcon?: React.ReactNode;
    testId?: string;
}
export declare function MemberBar({ label, labelIcon, ctaLabel, onCtaClick, variant, ctaIcon, testId, hasCTA, }: MemberBarProps): React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map