import { classNames } from '@/utils/classnames';
import { HTMLAttributes } from 'react';

// export const NewContainerAnimation = styled('div', {
//     display: 'flex',
//     columnGap: '5rem',
// });

export function NewContainerAnimation({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("flex gap-4 bg-blue-500", className)} {...rest}>
            {children}
        </div>
    );
}
