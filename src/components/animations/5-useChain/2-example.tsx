import { useTransition, useSpringRef, useChain } from '@react-spring/web';
import { AnimationContainter, BoxContainer, Explanation, ToggleButton } from '../../../styles/styles';
import { AnimatedBox, AnimatedCircle } from '@/components/ui/animated';
import { ExampleProps } from './common';

export function Example2({ trail, trailRef, elements, firstAnimationTriggered, setFirstAnimationTriggered, setSecondAnimationTriggered }: ExampleProps) {
    // Make a reference for our transition, we'll recieve a trailRef from our main function to chain together
    const transitionRef = useSpringRef();
    const transition = useTransition(firstAnimationTriggered, {
        ref: transitionRef,
        from: { opacity: 0, y: '100%' },
        enter: { opacity: 1, y: '0%' },
        leave: { opacity: 0, y: '-100%' }
    });

    // If we want a spring or trail to follow a transition, without a trigger, we can re-write our
    // our trail and spring config with 'to' and 'from'. Then we can supply our useChain a second argument
    // with a timestamp/delay for each spring as an array.

    // EX: useChain([transitionRef, trailRef], [0, 1])
    //     - Where the transition will immediately run when triggered, and the trail will run after a delay of 1 second
    useChain([transitionRef, trailRef]);

    return (
        <BoxContainer>
            <h1>Example 2: useChain (useTransition followed by useTrail)</h1>
            <Explanation>
                The first animation in our useChain hook is a useTrail to mount our box.
                That box will be able to trigger our second animation which is the same
                useTrail as in example 1.
            </Explanation>

            <AnimationContainter>
                {transition(
                    (spring, item) => item && (
                        <AnimatedBox
                            className="clickable chain"
                            style={spring}
                            onClick={() => setSecondAnimationTriggered((state) => !state)}
                        >
                            <h2>Trigger 2nd animation</h2>
                            {trail.map((animation, i) => (
                                <AnimatedCircle style={{ x: `${elements[i].offset}`, ...animation }} key={i}>
                                    <span style={{ fontSize: '3rem' }}>
                                        {elements[i].message}
                                    </span>
                                </AnimatedCircle>
                            ))}
                        </AnimatedBox>
                    )
                )}
            </AnimationContainter>

            <ToggleButton onClick={() => setFirstAnimationTriggered((state) => !state)}>
                Trigger 1st animation
            </ToggleButton>

        </BoxContainer>
    );
}
