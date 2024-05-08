import { default as React, HTMLAttributes } from 'react';

export interface BreadcrumbProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    path: string;
    onItemClick: (path: string) => void;
    separator?: React.ReactNode;
    testId?: string;
}
export declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLDivElement>>;
export declare const breadcrumbStyles: {
    mainContainer: string;
    breadItem: string;
    breadTitle: string;
};
//# sourceMappingURL=index.d.ts.map