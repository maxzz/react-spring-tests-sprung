import { useSpring, useSpringRef, useChain } from '@react-spring/web';
import { AnimatedBox, AnimatedCircle } from '@/components/ui/animated';
import { NewAnimatedCircle, NewContainerForAnimation, NewContainerBox, NewExplanation, NewNotes, StartButton } from '@/components/ui';
import { ExampleProps } from './common';

export function Example1({ trail, trailRef, elements, firstAnimationTriggered, setFirstAnimationTriggered, setSecondAnimationTriggered }: ExampleProps) {

    const springRef = useSpringRef();
    const spring = useSpring({
        ref: springRef, // Make a reference for our spring, we'll recieve a trailRef from our main function to chain together
        opacity: firstAnimationTriggered ? 1 : 0
    });

    // Our useChain hook takes an array of references of our defined animations
    useChain([springRef, trailRef]); //For our first example
    return (<>
        <NewNotes>
            <div className="">
                <div className="font-bold">1: useChain (useSpring followed by useTrail)</div>
                <p>
                    The first animation in our useChain hook is a useSpring to fade in our
                    box. That box will be able to trigger our second animation. Notice how
                    we can still trigger the second animation while our useSpring has not
                    fired yet, remember useSpring does not unmount our element from the dom
                    it is always there
                </p>
            </div>
        </NewNotes>

        <NewContainerBox>

            <NewContainerForAnimation>
                <div className="cursor-pointer" onClick={() => setSecondAnimationTriggered((state) => !state)}>
                    <AnimatedBox className="clickable chain" style={spring}>
                        {/*
                        -- DO NOT UNCOMMENT --
                        Now that our first animation is complete lets trigger our circles.
                        We've declared that our trail will map 4 circles (the length of our dataset).
                        Each time it will render an animated circle, but we want them to be spread evenly,
                        so we'll add a second transformation to shift each circle by the defined offset value we
                        gave it above along with the base transition.
                        -- DO NOT UNCOMMENT --
                        */}
                        <h2>
                            Trigger 2nd animation
                        </h2>

                        {trail.map((animation, i) => (
                            <AnimatedCircle
                                style={{
                                    x: `${elements[i].offset}`,
                                    ...animation
                                }}
                                key={i}
                            >
                                <span style={{ fontSize: '3rem' }}>{elements[i].message}</span>
                            </AnimatedCircle>
                        ))}
                    </AnimatedBox>
                </div>

            </NewContainerForAnimation>

            <StartButton onClick={() => setFirstAnimationTriggered((state) => !state)}>
                Trigger 1st animation
            </StartButton>

        </NewContainerBox>
    </>);
}
