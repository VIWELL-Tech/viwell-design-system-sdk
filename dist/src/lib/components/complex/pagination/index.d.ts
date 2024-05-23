import { default as React } from 'react';

export interface PaginationProps {
    current?: number;
    defaultCurrent?: number;
    total?: number;
    pageSize?: number;
    defaultPageSize?: number;
    isShowTotal?: boolean;
    maxVisiblePages?: number;
    isShowQuickJumper?: boolean;
    onChange?: (page: number, pageSize: number) => void;
    testId?: string;
}
export declare function Pagination(props: PaginationProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map