import { default as React, HTMLAttributes } from 'react';

export interface BreadcrumbSkeletonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'classNameName'> {
    testId?: string;
    items?: number;
}
export declare function BreadcrumbSkeleton({ testId, items, ...props }: BreadcrumbSkeletonProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map