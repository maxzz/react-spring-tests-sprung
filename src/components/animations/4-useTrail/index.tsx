import { NewHookExplanation } from '@/components/ui';
import { Example1 } from './1-example';
import { Example2 } from './2-example';

export function PageUseTrail() {
    return (<>
        <NewHookExplanation>
            4. useTrail
        </NewHookExplanation>

        <NewHookExplanation>
            As stated in the React-Spring documentation
            <br />
            <br />
            'useTrail has an identical API signature to useSprings the difference is
            the hook automatically orchestrates the springs to stagger one after the
            other.'
        </NewHookExplanation>

        <Example1 />
        {/* <Example2 /> */}
    </>);
}
