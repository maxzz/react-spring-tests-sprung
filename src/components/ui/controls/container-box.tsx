import { classNames } from '@/utils/classnames';
import { HTMLAttributes } from 'react';

// export const NewContainerBox = styled('div', {
//     color: 'white',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     rowGap: '2rem',
// });

export function NewContainerBox({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("py-4 flex flex-col items-center gap-4 bg-gray-900", className)} {...rest}>
            {children}
        </div>
    );
}
