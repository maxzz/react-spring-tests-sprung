import { PageUseSpring } from './animations/1-useSpring';
import { PageUseSprings } from './animations/2-useSprings';
import { PageUseTransition } from './animations/3-useTransition';
import { PageUseTrail } from './animations/4-useTrail';
import { PageUseChain } from './animations/5-useChain';
import { styled } from '@stitches/react';

export const MainContainer = styled('section', {
    margin: '3rem auto',
    maxWidth: '40vw',
    minHeight: '100%',
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    rowGap: '3rem',
});

export function App() { // Uncomment to see examples
    return (
        <div className="bg-slate-600">
            <MainContainer>
                <PageUseSpring />
                <PageUseSprings />
                <PageUseTransition />
                <PageUseTrail />
                <PageUseChain />
            </MainContainer>
        </div>
    );
}
