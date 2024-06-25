import { default as React } from 'react';
import { AvatarProps } from '../../basic/avatar';

export interface UploadAvatarProps {
    onUpload: (file: File | null) => void;
    defaultImage?: string;
    imgPlaceholder?: string;
    labelPlaceholder?: string;
    avatarSize?: AvatarProps['size'];
    helperText?: String;
}
export declare function UploadAvatar({ onUpload, defaultImage, imgPlaceholder, labelPlaceholder, avatarSize, helperText, }: UploadAvatarProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map