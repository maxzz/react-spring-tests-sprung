import { useSpring } from 'react-spring';
import { AnimatedBox } from '../../../styles/styles';

// State-less and event-less animation

export function Example1() {
    // Where are we starting from? Invisible, and off the screen 100% off the y axis i.e. from the bottom
    // Where do we want to end up? Visible, and the position we have determined for our element in our css
    const animation1 = useSpring({
        from: { opacity: 0, transform: 'translateY(100%)' },
        to: { opacity: 1, transform: 'translateY(0%)' }
    });

    return (
        <AnimatedBox style={animation1}>
            <p>State-less & no event</p>
        </AnimatedBox>
    );
}
