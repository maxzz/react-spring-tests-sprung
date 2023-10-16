import { PageUseSpring } from './components/animations/1-useSpring';
import { PageUseSprings } from './components/animations/2-useSprings';
import { PageUseTransition } from './components/animations/3-useTransition';
import { PageUseTrail } from './components/animations/4-useTrail';
import { PageUseChain } from './components/animations/5-useChain';

export function App() { // Uncomment to see examples
    return (
        <div className="mx-auto px-12 max-w-sm md:max-w-5xl bg-gray-500">
            <PageUseSpring />
            <PageUseSprings />
            <PageUseTransition />
            <PageUseTrail />
            <PageUseChain />
        </div>
    );
}
