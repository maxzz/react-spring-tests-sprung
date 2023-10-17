import { HTMLAttributes } from 'react';
import { animated } from '@react-spring/web';
import { classNames } from '@/utils/classnames';

// export const AnimatedBox = styled(animated.div, {
//     position: 'relative',

//     padding: '.5rem',
//     width: '7rem',
//     height: '7rem',
//     fontSize: '.7rem',

//     color: 'black',
//     backgroundColor: 'rgb(255,255,255)',
//     borderRadius: '5px',

//     '&.clickable': {
//         cursor: 'pointer'
//     },

//     '&.chain': {
//         width: '10rem',
//         textAlign: 'center'
//     },

//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// });

export function NewAnimatedBox({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <animated.div className={classNames("flex gap-4 bg-blue-500", className)} {...rest}>
            {children}
        </animated.div>
    );
}
