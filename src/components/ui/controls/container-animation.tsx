import { classNames } from '@/utils/classnames';
import { HTMLAttributes } from 'react';

// export const NewContainerAnimation = styled('div', {
//     display: 'flex',
//     columnGap: '5rem',
// });

export function NewContainerForAnimation({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("bg-gray-500 border-gray-300 border-2 border-dashed rounded flex gap-4", className)} {...rest}>
            {children}
        </div>
    );
}
