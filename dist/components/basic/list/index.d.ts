import { default as React, HTMLAttributes } from 'react';

export declare const SizeVariants: {
    readonly SMALL: "small";
    readonly LARGE: "large";
    readonly DEFAULT: "default";
};
type SIZEVARIANTS = keyof typeof SizeVariants;
type SizeVariantsType = (typeof SizeVariants)[SIZEVARIANTS];
export interface ListDataType {
    id: string | number;
    title: string;
    value: string;
}
export interface ListProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    dataSource: ListDataType[];
    size?: SizeVariantsType;
    bordered?: boolean;
    testId?: string;
}
export declare const sizeVariantClasses: {
    default: string;
    small: string;
    large: string;
};
export declare function List({ dataSource, bordered, testId, size, ...rest }: ListProps): React.JSX.Element;
export declare const listStyles: {
    borderedList: string;
    listItem: string;
    listTile: string;
    listValue: string;
};
export {};
//# sourceMappingURL=index.d.ts.map