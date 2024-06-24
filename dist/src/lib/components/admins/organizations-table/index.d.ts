import { default as React } from 'react';
import { ChangeParams, ItemType, SortProps } from '../../basic';

export interface OrganizationProps {
    id: string;
    name: string;
    logo: string;
    country: string;
    accessCode: string;
    plan: string;
    planName?: string;
    planEndDate: string;
    numberOfPayingSeats: number;
    pricePerMember: number;
    createdAt: string;
    status: string;
    activeUserCount?: number;
}
export interface OrganizationsDto {
    data: OrganizationProps[];
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
}
export interface OrganizationTableProps {
    dto: OrganizationsDto;
    onDropDownItemClick: (props: {
        id: string;
        item: ItemType;
    }) => void;
    onRowClick: (itemId: string) => void;
    onPaginationClick: ({ pagination, sort }: ChangeParams) => void;
    sortOptions: SortProps;
}
export declare function OrganizationTable({ dto, onDropDownItemClick, onRowClick, onPaginationClick, sortOptions, }: OrganizationTableProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map