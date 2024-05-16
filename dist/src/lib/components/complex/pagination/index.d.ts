import { default as React } from 'react';

export interface PaginationProps {
    current?: number;
    defaultCurrent?: number;
    total?: number;
    pageSize?: number;
    defaultPageSize?: number;
    showTotal?: boolean;
    onChange?: (page: number, pageSize: number) => void;
}
export declare function Pagination(props: PaginationProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map