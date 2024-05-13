import { default as React, HTMLAttributes } from 'react';

export declare const SizeVariants: {
    readonly SMALL: "small";
    readonly LARGE: "large";
    readonly DEFAULT: "default";
};
type SIZEVARIANTS = keyof typeof SizeVariants;
type SizeVariantsType = (typeof SizeVariants)[SIZEVARIANTS];
export interface ListProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    dataSource: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    size?: SizeVariantsType;
    rowKey?: ((item: T) => React.Key) | keyof T;
    bordered?: boolean;
    testId?: string;
}
export declare const sizeVariantClasses: {
    default: string;
    small: string;
    large: string;
};
export declare function List<T>({ dataSource, renderItem, rowKey, bordered, testId, size, ...rest }: ListProps<T>): React.JSX.Element;
export declare const listStyles: {
    borderedList: string;
    listItem: string;
};
export {};
//# sourceMappingURL=index.d.ts.map