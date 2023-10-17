import { NewHookExplanation } from '@/components/ui';
import { Example1 } from './1-example';
import { Example2 } from './2-example';
import { Example3 } from './3-example';
import { Example4 } from './4-example';

export function PageUseSprings() {
    return (<>
        <NewHookExplanation>
            2. useSprings
        </NewHookExplanation>

        {/* <Example1 /> */}
        {/* <Example2 /> */}
        <Example3 />
        {/* <Example4 /> */}
    </>);
}
