import { default as React } from 'react';

export interface UploadAvatarProps {
    onUpload: (file: File | null) => void;
    defaultImage?: string;
    imgPlaceholder?: string;
    labelPlaceholder?: string;
}
export declare function UploadAvatar({ onUpload, defaultImage, imgPlaceholder, labelPlaceholder }: UploadAvatarProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map