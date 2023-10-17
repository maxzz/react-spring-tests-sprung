import { classNames } from "@/utils/classnames";
import { animated, useResize, useSpring } from "@react-spring/web";
import { HTMLAttributes, useState } from "react";
import useMesure from "react-use-measure";

/**
 * @param open conditional to show content or hide
 * @returns Wrapper to smoothly hide and expand content
 */
export default function AnimatedDropdown({ open, children }: React.PropsWithChildren<{ open: boolean; }>) {
    const [ref, { height }] = useMesure();

    const styles = useSpring({
        height: open ? height ?? 0 : 0,
        config: {
            mass: 1.2,
            tension: 300,
            friction: 20,
            clamp: true,
            velocity: 0.01,
        },
    });

    return (
        <animated.div style={{ overflow: 'hidden', width: '100%', willChange: 'height', ...styles, }}>
            <div ref={ref}>
                {children}
            </div>
        </animated.div>
    );
}

export const animationConfig = {
    //config: { mass: 0.2, tension: 692, clamp: true },
    config: { duration: 200 },
};

export function UIIconUpDown({ open, className, ...rest }: { open: boolean; } & React.SVGAttributes<SVGSVGElement>) {
    const styles = useSpring({ open: open ? 1 : 0, ...animationConfig });
    return (
        <svg className={classNames("w-6 h-6 p-1 stroke-current stroke-[.6rem] fill-transparent", className)} viewBox="0 0 100 100" {...rest}>
            <animated.path d={styles.open.to({ range: [0, 1], output: ["M 15 34 L 45 65 L 78 34", "M 15 53 L 45 23 L 78 53"] })} />
        </svg>
    );
}

export function Section({ children }: HTMLAttributes<HTMLDivElement>) {
    const [open, toggle] = useState(false);
    return (
        <div className="">
            <button className="flex items-center" onClick={() => toggle((p) => !p)}>
                <div className="">Open</div>
                <UIIconUpDown open={open} className="mt-1 pt-2" />
            </button>
            <AnimatedDropdown open={open}>
                {children}
            </AnimatedDropdown>
        </div>
    );
}