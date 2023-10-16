import { styled } from '@stitches/react';
import UseSpring from './animations/1-useSpring';
import UseSprings from './animations/2-useSprings';
import UseTransition from './animations/3-useTransition';
import UseTrail from './animations/4-useTrail';
import UseChain from './animations/5-useChain';

export const MainContainer = styled('section', {
    margin: '3rem',
    minHeight: '100%',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    rowGap: '3rem',
});

export function App() { // Uncomment to see examples
    return (
        <MainContainer>
            <UseSpring />
            <UseSprings />
            <UseTransition />
            <UseTrail />
            <UseChain />
        </MainContainer>
    );
}
