import { ListProps } from '../../..';
import { default as React, HTMLAttributes } from 'react';
import { AvatarProps } from '../../basic/avatar';

export interface ProfileTableProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    profileTitle: string;
    listData: ListProps<T>;
    onCtaClick: () => void;
    ctaLabel: string;
    profileAvatar?: AvatarProps;
    ctaIcon?: React.ReactNode;
    testId?: string;
}
export declare function ProfileTable<T>({ ctaLabel, ctaIcon, testId, onCtaClick, profileAvatar, profileTitle, listData, ...restProps }: ProfileTableProps<T>): React.JSX.Element;
export declare const profileStyles: {
    mainContainer: string;
    buttonContainer: string;
    contentArea: string;
    content: string;
    avatarFlex: string;
    userText: string;
};
//# sourceMappingURL=index.d.ts.map