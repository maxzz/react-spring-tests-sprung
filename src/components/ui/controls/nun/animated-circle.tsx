import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';
import { AnimatedComponent, AnimatedProps, animated } from '@react-spring/web';
import { classNames } from '@/utils/classnames';

// export const AnimatedCircle = styled(animated.div, {
//     alignSelf: 'center',

//     position: 'absolute',
//     width: '5rem',
//     height: '5rem',

//     border: '2px solid red',
//     borderRadius: '50% 50%',
//     backgroundColor: '#FF7518',
//     color: 'white',

//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// });

// const a: Omit<HTMLAttributes<HTMLDivElement>, "style"> 
//    ^?

// export function NewAnimatedCircle({ children, className, ...rest }: AnimatedComponent<"div"> & Omit<HTMLAttributes<HTMLDivElement>, "style">) {
// export function NewAnimatedCircle({ children, className, ...rest }: AnimatedProps<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
// export function NewAnimatedCircle({ children, className, ...rest }: AnimatedComponent<"div"> & HTMLDivElement) {
// export function NewAnimatedCircle({ children, className, ...rest }: AnimatedComponent<"div"> & { className?: string; children: ReactNode; }) {
// export function NewAnimatedCircle({ children, className, ...rest }: AnimatedComponent<HTMLAttributes<HTMLDivElement>>) {
// export function NewAnimatedCircle({ children, className, ...rest }: AnimatedComponent<FunctionComponent<HTMLDivElement>>) {
// export function NewAnimatedCircle({ children, className, ...rest }: AnimatedComponent<FunctionComponent<HTMLAttributes<HTMLDivElement>>>) {
// export function NewAnimatedCircle({ children, className, ...rest }: AnimatedProps<HTMLAttributes<HTMLDivElement>>) {
export function NewAnimatedCircle({ children, className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <animated.div className={classNames("self-center absolute w-5 h-5 border-red-600 rounded-full bg-pink-500 flex items-center justify-center", className)} {...rest}>
            {children}
        </animated.div>
    );
}
