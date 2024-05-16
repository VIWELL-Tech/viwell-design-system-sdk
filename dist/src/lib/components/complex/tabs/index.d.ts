import { default as React } from 'react';

export interface TabItemType {
    key: string;
    label: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
}
export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'children'> {
    items?: TabItemType[];
    onChange?: (activeKey: string) => void;
    activeKey?: string;
    testId?: string;
}
export declare const Tabs: React.ForwardRefExoticComponent<TabsProps & React.RefAttributes<HTMLDivElement>>;
export declare const tabStyles: {
    tabWrapper: string;
    tabItem: string;
    activeTab: string;
    tabContent: string;
    disabledItem: string;
};
//# sourceMappingURL=index.d.ts.map