import { useSprings } from '@react-spring/web';
import { DemoAnimatableBox } from '@/components/ui/animated';
import { NewContainerForAnimation, NewContainerBox, NewNotes, StartButton } from '@/components/ui';
import { elements } from './common';

// Event animation

export function Example4() {
    // Like before in the useSpring introduction we'll first start by array destructuring out our spring and the api object.
    // Our arguments for this method:
    // 1. The length of the dataset
    // 2. Anonymous function with our starting point
    const [springs3, api] = useSprings(elements.length, () => ({ from: { opacity: 0, transform: 'translateY(100%)', } }), []);

    // Declare your handler function for an event
    const fireAnimation = () => {
        api.start({
            from: { opacity: 0, transform: 'translateY(100%)', },
            to: { opacity: 1, transform: 'translateY(0%)', }
        });
    };

    return (<>
        <NewNotes>
            <div className="font-bold">2.4. useSprings on event method</div>
            {/* <p>
                We'll map and render animated boxes given the length of our dataset (the
                first argument of our useSprings hooks). Click to fire the handler
                function. Notice everytime we click if after it will jump to the
                beginning of the animation and immediateley run
            </p> */}
        </NewNotes>

        <NewContainerBox>

            <NewContainerForAnimation>
                {springs3.map((spring, i) => (
                    <DemoAnimatableBox style={spring} key={i}>
                        <h1>item {i}</h1>
                    </DemoAnimatableBox>
                ))}
            </NewContainerForAnimation>

            <StartButton onClick={fireAnimation}>
                Start animation
            </StartButton>

        </NewContainerBox>
    </>);
}
