import React, { useState } from 'react';
import { config, useTrail, useTransition } from '@react-spring/web';
import { DemoAnimatableBox } from '@/components/ui/animated';
import { NewContainerForAnimation, NewContainerBox, NewNotes, StartButton } from '@/components/ui';

// Staggered spring animations using useTrail

export function Example1() {
    const [isActive, setIsActive] = useState(false);

    //Our dataset
    const elements = [
        { id: 1, message: 'Im' },
        { id: 2, message: 'Sprung' },
        { id: 3, message: 'By' },
        { id: 4, message: 'T-Pain' }
    ];

    // You'll notice this is identical to how we use useSprings.
    // The only difference is that its automatically staggered for us
    // 1st argument is the number of items
    // 2nd second argument is your config object
    const trail1 = useTrail(elements.length, {
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateX(0%) rotate(0deg)' : 'translateX(200%) rotate(360deg)',
        backgroundColor: isActive ? '#FF7518' : 'white',
        color: 'white',
        delay: 500 //We can also add a delay of 500ms
    });

    return (<>
        <NewNotes>
            <div className="">
                <div className="font-bold">4.1. useTrail automatically staggers springs for us</div>
                <p>
                </p>
            </div>
        </NewNotes>

        <NewContainerBox>

            <NewContainerForAnimation>
                {trail1.map((transition, i) => (
                    <DemoAnimatableBox style={transition} key={i}>
                        <h1>{elements[i].message}</h1>
                    </DemoAnimatableBox>
                ))}
            </NewContainerForAnimation>

            <StartButton onClick={() => setIsActive((state) => !state)}>
                Change state
            </StartButton>

        </NewContainerBox>
    </>);
}
