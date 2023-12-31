import { useState } from 'react';
import { useSpring } from 'react-spring';
import { DemoAnimatableBox } from '@/components/ui/animated';

// Animation based on state

export function Example2() {
    // Here we are going to animate based on the current state of a variable
    const [isActive, setIsActive] = useState(false);

    // We do not need to define a start and end point, simply use a ternary for each property
    // If you want a property to remain unchanged based on state, then as you can see you can just leave it as a normal css property definition
    const animation2 = useSpring({
        transform: isActive ? 'rotate(720deg)' : 'rotate(0deg)',
        borderRadius: isActive ? '50% 50%' : '10% 10%',
        transformOrigin: 'center'
    });

    return (
        <div className="cursor-pointer" onClick={() => setIsActive((state) => !state)}>
            <DemoAnimatableBox style={animation2}  className="my-4 w-12 leading-4 text-center">
                {isActive ? 'Click Me!' : 'Square!'}
            </DemoAnimatableBox>
        </div>
    );
}
