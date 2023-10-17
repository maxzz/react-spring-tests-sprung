import { useState } from 'react';
import { useSpring } from '@react-spring/web';
import { AnimatedBox } from '@/components/ui/animated';
import { CommonExplanation, elements } from './common';
import { NewContainerAnimation, NewContainerBox, StartButton } from '@/components/ui';

// useSpring all elements have the same spring

const colorWhite = 'rgb(255, 255, 255)';
const colorBlack = 'rgb(0, 0, 0)';
const colorOrange = '#FF7518';

export function Example1() {
    const [isActive, setIsActive] = useState(false);

    // We'll map over our dataset and render 4 boxes with the springs config attached
    // Then we'll trigger the animation via a button to toggle the state
    const springs1 = useSpring({
        transform: isActive ? 'rotate(720deg)' : 'rotate(0deg)',
        borderRadius: isActive ? '50% 50%' : '0% 0%',
        backgroundColor: isActive ? colorOrange : colorWhite,
        color: isActive ? colorWhite : colorBlack,
        transformOrigin: 'center'
    });

    return (<>
        <CommonExplanation />
        <NewContainerBox>
            <div className="">
                <h1>useSpring state method</h1>
                <div className="hook-explanation">
                    Given the data set we'll map and render out boxs with our spring
                    attached. Trigger the spring when the state changes
                </div>
            </div>

            <NewContainerAnimation>
                {elements.map((element, i) => (
                    <AnimatedBox style={springs1} key={i}>
                        <h1>item {element}</h1>
                    </AnimatedBox>
                ))}
            </NewContainerAnimation>

            <StartButton onClick={() => setIsActive((state) => !state)}>
                Click to change state
            </StartButton>

        </NewContainerBox>
    </>);
}
