import { useSpring } from 'react-spring';
import { DemoAnimatableBox } from '@/components/ui/animated';

// State-less and event-less animation

export function Example1() {
    // Where are we starting from? Invisible, and off the screen 100% off the y axis i.e. from the bottom
    // Where do we want to end up? Visible, and the position we have determined for our element in our css
    const animation1 = useSpring({
        from: { opacity: 0, transform: 'translateY(100%)' },
        to: { opacity: 1, transform: 'translateY(0%)' }
    });

    return (
        <DemoAnimatableBox style={animation1} className="my-4 w-32">
            <p className="text-center leading-4">No state animation (only initial render)</p>
        </DemoAnimatableBox>
    );
}
