import { default as React } from 'react';

interface TableHeadProps {
    label?: string;
    icon?: React.JSX.Element;
    onClick?: () => void;
    isAlignEnd?: boolean;
    children?: React.JSX.Element;
    extraStyle?: string;
}
interface TableRowsProps {
    items: TableHeadProps[];
}
export interface TableProps {
    tableHeadItems: TableHeadProps[];
    tableRowsData: TableRowsProps[];
    testId?: string;
}
export declare function Table({ tableHeadItems, tableRowsData, testId }: TableProps): React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map