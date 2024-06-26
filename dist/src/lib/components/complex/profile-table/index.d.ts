import { AvatarProps, ListProps } from '../../..';
import { default as React, HTMLAttributes } from 'react';

export interface ProfileTableProps extends Omit<HTMLAttributes<HTMLDivElement>, 'className'> {
    listData: ListProps;
    onCtaClick: () => void;
    ctaLabel: string;
    profileAvatar?: AvatarProps;
    ctaIcon?: React.ReactNode;
    testId?: string;
    profileTitle?: string;
}
export declare function ProfileTable({ ctaLabel, ctaIcon, testId, onCtaClick, profileAvatar, profileTitle, listData, ...restProps }: ProfileTableProps): React.JSX.Element;
export declare const profileStyles: {
    mainContainer: string;
    buttonContainer: string;
    contentArea: string;
    content: string;
    avatarFlex: string;
    userText: string;
};
//# sourceMappingURL=index.d.ts.map