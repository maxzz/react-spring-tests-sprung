import { useTransition, useSpringRef, useChain } from '@react-spring/web';
import { AnimatedBox, AnimatedCircle } from '@/components/ui/animated';
import { NewContainerForAnimation, NewContainerBox, NewExplanation, NewNotes, StartButton } from '@/components/ui';
import { ExampleProps } from './common';

export function Example2({ trail, trailRef, elements, firstAnimationTriggered, setFirstAnimationTriggered, setSecondAnimationTriggered }: ExampleProps) {

    const transitionRef = useSpringRef();
    const transition = useTransition(firstAnimationTriggered, {
        ref: transitionRef, // Make a reference for our transition, we'll recieve a trailRef from our main function to chain together
        from: { opacity: 0, y: '100%' },
        enter: { opacity: 1, y: '0%' },
        leave: { opacity: 0, y: '-100%' }
    });

    // If we want a spring or trail to follow a transition, without a trigger, we can re-write our
    // trail and spring config with 'to' and 'from'. Then we can supply our useChain a second argument
    // with a timestamp/delay for each spring as an array.
    // Example: 
    //      useChain([transitionRef, trailRef], [0, 1]);
    //      Where the transition will immediately run when triggered, and the trail will run after a delay of 1 second.
    useChain([transitionRef, trailRef]);

    return (<>
        <NewNotes>
            <div className="">
                <div className="font-bold">2. useChain with useTransition followed by useTrail</div>
                {/* <p>
                    The first animation in our useChain hook is a useTrail to mount our box.
                    That box will be able to trigger our second animation which is the same
                    useTrail as in example 1.
                </p> */}
            </div>
        </NewNotes>

        <NewContainerBox>
            <div className="w-full h-[7rem] bg-white flex justify-center">
                <NewContainerForAnimation>
                    {transition(
                        (spring, item) => item && (
                            <div className="cursor-pointer" onClick={() => setSecondAnimationTriggered((state) => !state)}>
                                <AnimatedBox className="clickable chain" style={spring}>
                                    <h2>
                                        Trigger 2nd animation
                                    </h2>

                                    {trail.map((animation, i) => (
                                        <AnimatedCircle style={{ x: `${elements[i].offset}`, ...animation }} key={i}>
                                            <span style={{ fontSize: '1rem' }}>
                                                {elements[i].message}
                                            </span>
                                        </AnimatedCircle>
                                    ))}
                                </AnimatedBox>
                            </div>
                        )
                    )}
                </NewContainerForAnimation>
            </div>

            <StartButton onClick={() => setFirstAnimationTriggered((state) => !state)}>
                Trigger 1st animation
            </StartButton>

        </NewContainerBox>
    </>);
}
