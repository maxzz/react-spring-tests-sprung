import { classNames } from '@/utils/classnames';
import { ButtonHTMLAttributes } from 'react';

export function StartButton({ children, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames("px-4 py-3 bg-orange-400 border-gray-400 border rounded-md shadow", className)} {...rest}>
            {children}
        </button>
    );
}
