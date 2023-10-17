import { useState } from 'react';
import { useTrail, useSpringRef } from '@react-spring/web';
import { NewHookExplanation, NewSection } from '@/components/ui';
import { Example1 } from './1-example';
import { Example2 } from './2-example';

// Chaining animations based on state

export function PageUseChain() {
    // First we need to declare a trigger for each animation
    const [firstAnimationTriggered, setFirstAnimationTriggered] = useState(false);
    const [secondAnimationTriggered, setSecondAnimationTriggered] = useState(false);

    // Our second animation will be a useTrail to animate 4 circles
    // These circles are positioned absolute, so they are stacked on top of each other
    // We need to offset each of them, so we'll declare some offset values for them to inject later
    const elements = [
        { id: 1, message: '🐷', offset: '-50%' },
        { id: 2, message: '🐶', offset: '-175%' },
        { id: 3, message: '🐸', offset: '-300%' },
        { id: 4, message: '🐮', offset: '-425%' }
    ];

    // Our second animation will animate based on the secondAnimationTriggered variable
    // We'll use this trail for both example 1 and 2,
    const trailRef = useSpringRef();
    const trail = useTrail(elements.length, {
        ref: trailRef,
        opacity: secondAnimationTriggered ? 1 : 0,
        transform: secondAnimationTriggered ? 'translateX(-150%)' : 'translateX(150%)',
    });

    return (<>
        <NewSection>
            5. useChain
        </NewSection>
        <NewHookExplanation>
            To use useChain we just need to configure 2 spring animations and attach
            a ref to each, and pass those refs to useChain in an array
        </NewHookExplanation>

        {/*
            <Example1
                elements={elements}
                trail={trail}
                trailRef={trailRef}
                firstAnimationTriggered={firstAnimationTriggered}
                setFirstAnimationTriggered={setFirstAnimationTriggered}
                setSecondAnimationTriggered={setSecondAnimationTriggered}
            />
        */}

        <Example2
            elements={elements}
            trail={trail}
            trailRef={trailRef}
            firstAnimationTriggered={firstAnimationTriggered}
            setFirstAnimationTriggered={setFirstAnimationTriggered}
            setSecondAnimationTriggered={setSecondAnimationTriggered}
        />
    </>);
}
