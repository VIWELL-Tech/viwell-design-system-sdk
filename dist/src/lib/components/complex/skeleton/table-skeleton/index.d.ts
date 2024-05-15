import { default as React, HTMLAttributes } from 'react';

export interface TableSkeletonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'classNameName'> {
    rows?: number;
    columns?: number;
}
export declare function TableSkeleton({ rows, columns, ...props }: TableSkeletonProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map