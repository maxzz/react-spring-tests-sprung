import { classNames } from '@/utils/classnames';
import { ButtonHTMLAttributes } from 'react';

export function StartButton({ children, className, ...rest }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames("px-4 py-3 text-sm bg-gray-600 border-gray-400 border rounded-md shadow shadow-gray-100/30 select-none active:scale-y-[.97]", className)} {...rest}>
            {children}
        </button>
    );
}
