import { useState } from 'react';
import { useSpring, useSprings } from '@react-spring/web';
import { AnimatedBox, AnimationContainter, BoxContainer, Explanation, ToggleButton } from '../../styles/styles';
import { CommonExplanation, elements } from './common';

//----------------------------------------------useSprings all elements have the same spring----------------------------------------------\\
export function Example2() {
    const [isActive, setIsActive] = useState(false);

    //This method is a little tricky to get your head around. First we have to create a single spring config using useSpring.
    const configAnimation = useSpring({
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0%)' : 'translateY(100%)'
    });

    /*
      The useSprings hook takes three arguments:
      1. The length of the dataset
      export 2. The dataset mapped with a callback function that returns the config
      3. An array of dependencies, we will omit this here
    */
    const springs2 = useSprings(
        elements.length,
        elements.map(() => configAnimation)
    );

    return (<>
        <CommonExplanation />
        <BoxContainer>
            <h1>useSprings state method</h1>
            <Explanation>
                We'll map and render animated boxes given the length of our dataset (the
                first argument of our useSprings hooks). Toggle the state to run the
                animation.
            </Explanation>
            <AnimationContainter>
                {springs2.map((spring, i) => (
                    <AnimatedBox style={spring}>
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
