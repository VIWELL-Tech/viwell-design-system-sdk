import { PaginationProps } from '../../..';
import { default as React, HTMLAttributes, Key } from 'react';

export declare const tableLayouts: {
    readonly FIXED: "fixed";
    readonly AUTO: "auto";
};
type TableLayout = keyof typeof tableLayouts;
type TableLayoutType = (typeof tableLayouts)[TableLayout];
type DataIndex = string | number | ReadonlyArray<string | number>;
type AlignType = 'left' | 'center' | 'right';
type GetRowKey<T> = (record: T, index?: number) => Key;
export interface PaginationChange {
    page: number;
    pageSize: number;
}
export interface SortChange {
    key: string;
    order: 'asc' | 'desc';
}
export interface NoDataProps {
    title?: string;
    icon?: React.ReactNode;
}
export interface ChangeParams {
    pagination?: PaginationChange;
    sort?: SortChange;
}
export interface ColumnType<T> {
    key: string;
    title?: React.ReactNode;
    align?: AlignType;
    dataIndex?: DataIndex;
    sort?: boolean;
    ellipsis?: boolean;
    width?: string | number;
    render?: (record: T, index: number) => React.ReactNode;
}
export type ColumnsType<T = unknown> = Array<ColumnType<T>>;
export interface TableProps<T> extends Omit<HTMLAttributes<HTMLTableElement>, 'className' | 'onChange'> {
    columns?: ColumnsType<T>;
    dataSource?: readonly T[];
    rowKey?: string | GetRowKey<T>;
    isRowClickable?: boolean;
    tableLayout?: TableLayoutType;
    total?: number;
    pagination?: boolean | PaginationProps;
    testId?: string;
    noData?: NoDataProps;
    onChange?: (params: ChangeParams) => void;
    onRowClick?: (data: T, index?: number) => void;
}
export declare const layoutVariantClasses: {
    auto: string;
    fixed: string;
};
export declare function Table<T>({ columns, dataSource, rowKey, isRowClickable, total, pagination, tableLayout, testId, noData, onChange, onRowClick, }: TableProps<T>): React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map