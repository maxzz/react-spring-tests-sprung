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

export function Section({ children }: HTMLAttributes<HTMLDivElement>) {
    const [open, toggle] = useState(false);
    return (
        <div className="">
            <button onClick={() => toggle((p) => !p)}>
                Open
            </button>
            <AnimatedDropdown open={open}>
                {children}
            </AnimatedDropdown>
        </div>
    );
}