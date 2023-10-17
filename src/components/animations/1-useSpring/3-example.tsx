import { useSpring } from 'react-spring';
import { AnimatedBox } from '@/components/ui/animated';

// Animation on an event without state

const colorWhite = 'rgb(255, 255, 255)';
const colorBlack = 'rgb(0, 0, 0)';
const colorOrange = '#FF7518';

export function Example3() {
    // To animate without state and on a click/mouseenter/keydown event we need to extract the api object and name our spring
    // The api object has many methods on it but for now we will focus on the api.start method.

    // We must first define the starting point for the api object
    const [animation3, api] = useSpring(() => ({
        from: { backgroundColor: colorWhite, color: colorBlack, }
    }));

    // Define like usual an event handler, and voila!
    const fireAnimation = () => {
        api.start({
            from: { backgroundColor: colorWhite, color: colorBlack, },
            to: { backgroundColor: colorOrange, color: colorWhite, },
        });
    };

    return (
        <AnimatedBox style={animation3} onClick={fireAnimation} className="clickable">
            <p>Onclick event</p>
        </AnimatedBox>
    );
}
