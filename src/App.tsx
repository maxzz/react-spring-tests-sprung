import { styled } from '@stitches/react';
import UseSpring from './animations/useSpring/UseSpring';
import UseSprings from './animations/useSprings/UseSprings';
import UseTransition from './animations/useTransition/UseTransition';
import UseTrail from './animations/useTrail/UseTrail';
import UseChain from './animations/useChain/UseChain';

export const MainContainer = styled('section', {
    padding: '3rem',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    rowGap: '3rem',
});

function App() { // Uncomment to see examples
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

export default App;
