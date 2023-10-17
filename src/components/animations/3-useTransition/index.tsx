import { useState } from 'react';
import { config, useTransition } from '@react-spring/web';
import { NewHookExplanation, NewSection } from '@/components/ui';
import { Example1 } from './1-example';
import { Example2 } from './2-example';

export function PageUseTransition() {
    const [isActive, setIsActive] = useState(false);

    // The config object for useTransition is different than our useSpring.
    //
    // from:  What is the starting state and position of our element?
    //        Starts invisible, comes in offscreen from the right and will rotate 360deg, bg starts out white, text starts out white
    // enter: What is the mounted state and position of our element?
    //        Is fully visible, mounted in its designated position rotation will have finished, bg is orange, text remains white
    // leave: What is the unmounting animation of our element?
    //        Turns invisble, goes offscreen to the left rotates -360deg, bg turns white, text stays white
    //
    const transition = useTransition(isActive, {
        from: {
            opacity: 0,
            transform: 'translateX(200%) rotate(360deg)',
            backgroundColor: 'white',
            color: 'white'
        },
        enter: {
            opacity: 1,
            transform: 'translateX(0%) rotate(0deg)',
            backgroundColor: '#FF7518',
            color: 'white'
        },
        leave: {
            opacity: 0,
            transform: 'translateX(-200%) rotate(-360deg)',
            backgroundColor: 'white',
            color: 'white'
        },
        config: config.molasses //React-Spring provides us some pre-defined mass/tension/friction configs for us in the config object
    });

    return (<>
        <NewSection>
            3. useTransition
        </NewSection>
        <NewHookExplanation>
            We the useTransition hook for mounting and unmounting an
            element/elements to the dom. As opposed to the useSpring where the
            elements are already on the dom tree and remain there after their spring
        </NewHookExplanation>

        <Example1 transition={transition} setIsActive={setIsActive} />
        {/* <Example2 transition={transition} setIsActive={setIsActive} /> */}
    </>);
}
