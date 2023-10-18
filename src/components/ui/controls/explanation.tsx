import { classNames } from '@/utils/classnames';
import { animated } from '@react-spring/web';
import { HTMLAttributes } from 'react';

// export const NewExplanation = styled(animated.article, {
//     // maxWidth: '40rem',
//     // lineHeight: '1.4rem',
// });

// export const HookExplanation = styled('p', {
//     fontSize: '.7rem',
//     color: 'white',
//     // width: '30rem',
//     // margin: '0rem',
// });

export function NewExplanation({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <animated.div className={classNames("bg-red-500", className)} {...rest}>
            {children}
        </animated.div>
    );
}

export function NewHookExplanation({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("bg-red-300", className)} {...rest}>
            {children}
        </div>
    );
}

export function NewNotes({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={classNames("px-4 py-3 text-sm text-gray-950 bg-gray-400", className)} {...rest}>
            {children}
        </div>
    );
}
