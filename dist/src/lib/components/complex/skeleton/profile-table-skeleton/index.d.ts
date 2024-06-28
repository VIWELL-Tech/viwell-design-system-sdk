import { default as React, HTMLAttributes } from 'react';

export interface ProfileTableSkeletonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    rows?: number;
    isActionCTA?: boolean;
}
export declare function ProfileTableSkeleton({ rows, isActionCTA, ...restProps }: ProfileTableSkeletonProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map