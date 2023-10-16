import { useState } from 'react';
import { useSpring, useSprings } from '@react-spring/web';
import { AnimatedBox, AnimationContainter, BoxContainer, Explanation, ToggleButton } from '../../styles/styles';
import { CommonExplanation, elements } from './common';

//----------------------------------------------useSprings elements have base animation, but with variation between each----------------------------------------------\\
export function Example3() {
    const [isActive, setIsActive] = useState(false);
    //
    const baseAnimation = useSpring({
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0%)' : 'translateY(100%)'
    });

    const extra = [
        { backgroundColor: isActive ? 'blue' : 'white' },
        { backgroundColor: isActive ? 'green' : 'white' },
        { backgroundColor: isActive ? 'purple' : 'white' },
        { backgroundColor: isActive ? 'maroon' : 'white' },
    ];

    // The useSprings hook takes three arguments:
    // 1. The length of the dataset
    // 2. The dataset mapped with a callback function that returns the config
    // 3. An array of dependencies, we will omit this here 
    const spring4 = useSprings(
        elements.length,
        elements.map(() => baseAnimation)
    );

    return (<>
        <CommonExplanation />
        <BoxContainer>
            <h1>useSprings state method</h1>
            <Explanation>
                We'll map and render animated boxes given the length of our dataset (the
                first argument of our useSprings hooks), except this time we have a base
                animation and we'll apply extra configs to each box when we map over
                each item. Toggle the state to run the animation.
            </Explanation>
            <AnimationContainter>
                {spring4.map((spring, i) => (
                    <AnimatedBox style={{ ...spring, ...extra[i] }} key={i}>
                        <h1>item {i}</h1>
                    </AnimatedBox>
                ))}
            </AnimationContainter>

            <ToggleButton onClick={() => setIsActive((state) => !state)}>
                Click to change state
            </ToggleButton>
        </BoxContainer>
    </>);
}
