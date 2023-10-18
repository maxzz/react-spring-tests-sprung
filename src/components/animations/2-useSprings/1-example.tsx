import { useState } from 'react';
import { useSpring } from '@react-spring/web';
import { DemoAnimatableBox } from '@/components/ui/animated';
import { elements } from './common';
import { NewContainerForAnimation, NewContainerBox, NewNotes, StartButton } from '@/components/ui';

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
        borderRadius: isActive ? '50% 50%' : '20% 20%',
        backgroundColor: isActive ? colorOrange : colorWhite,
        color: isActive ? colorWhite : colorBlack,
        transformOrigin: 'center'
    });

    return (<>
        <NewNotes>
            <div className="">
                <div className="font-bold">2.1. useSpring state method</div>
                {/* <p>
                    Given the data set we'll map and render out boxs with our spring
                    attached. Trigger the spring when the state changes
                </p> */}
            </div>
        </NewNotes>

        <NewContainerBox>
            <NewContainerForAnimation>
                {elements.map((element, i) => (
                    <DemoAnimatableBox style={springs1} key={i}>
                        <h1>item {element}</h1>
                    </DemoAnimatableBox>
                ))}
            </NewContainerForAnimation>

            <StartButton onClick={() => setIsActive((state) => !state)}>
                Change state
            </StartButton>

        </NewContainerBox>
    </>);
}
