import { HookExplanation } from '../../styles/styles';
import { Example1 } from './1-example';
import { Example2 } from './2-example';
import { Example3 } from './3-example';
import { Example4 } from './4-example';

export function PageUseSprings() {
    return (<>
        <HookExplanation>
            2. useSprings
        </HookExplanation>

        {/* <Example1 /> */}
        {/* <Example2 /> */}
        <Example3 />
        {/* <Example4 /> */}
    </>);
}
