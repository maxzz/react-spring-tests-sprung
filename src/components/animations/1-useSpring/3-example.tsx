import { useSpring } from 'react-spring';
import { DemoAnimatableBox } from '@/components/ui/animated';

// Animation on an event without state

const colorWhite = 'rgb(255, 255, 255)';
const colorBlack = 'rgb(0, 0, 0)';
const colorOrange = '#FF7518';

export function Example3() {
    // To animate without state and on a click/mouseenter/keydown event we need to extract the api object and name our spring
    // The api object has many methods on it but for now we will focus on the api.start method.

    const [animation3, api] = useSpring(() => ({
        from: { backgroundColor: colorWhite, color: colorBlack, },
        config: { duration: 1000 },
    }));

    const fireAnimation = () => {
        api.start({
            from: { backgroundColor: colorWhite, color: colorBlack, },
            to: { backgroundColor: colorOrange, color: colorWhite, },
        });
    };

    return (
        <div className="cursor-pointer" onClick={fireAnimation}>
            <DemoAnimatableBox style={animation3}>
                <p>Onclick event</p>
            </DemoAnimatableBox>
        </div>
    );
}
