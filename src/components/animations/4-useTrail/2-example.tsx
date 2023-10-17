import React, { useState } from 'react';
import { config, useTrail, useTransition } from '@react-spring/web';
import { AnimationContainter, BoxContainer, HookExplanation, ToggleButton } from '../../../styles/styles';
import { AnimatedBox } from '@/components/ui/animated';

// Staggered spring animations using useTrail

export function Example2() {
    const [isActive, setIsActive] = useState(false);

    // Here is a second example to show how we can use the useTrail hook for slighty incorrect quotes by dead philosophers
    const message = [
        { id: 1, side1: 'On', side2: 'a' },
        { id: 2, side1: 'the', side2: 'man' },
        { id: 3, side1: 'highest', side2: 'sits' },
        { id: 4, side1: 'of', side2: 'on' },
        { id: 5, side1: 'thrones', side2: 'his' },
        { id: 6, side1: '...', side2: 'ass' }
    ];

    const trail2 = useTrail(message.length, {
        transformOrigin: 'center',
        transform: isActive ? 'rotateX(1080deg)' : 'rotateX(0deg)',
        config: config.molasses
    });

    return (
        <BoxContainer>
            <h1>useTrail automatically staggers animations for us</h1>

            <AnimationContainter>
                {trail2.map((transition, i) => (
                    <AnimatedBox style={transition}>
                        <h1>{!isActive ? message[i].side1 : message[i].side2}</h1>
                    </AnimatedBox>
                ))}
            </AnimationContainter>

            <ToggleButton onClick={() => setIsActive((state) => !state)}>
                Click to fire
            </ToggleButton>

        </BoxContainer>
    );
}
