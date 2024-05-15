import { default as React, HTMLAttributes } from 'react';

export declare const MemberBarSkeletonVariants: {
    readonly S: "S";
    readonly L: "L";
};
type VariantKeys = keyof typeof MemberBarSkeletonVariants;
type MemberBarVariantsType = (typeof MemberBarSkeletonVariants)[VariantKeys];
export interface MemberBarSkeletonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    variant?: MemberBarVariantsType;
}
export declare function MemberBarSkeleton({ variant, ...props }: MemberBarSkeletonProps): React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map