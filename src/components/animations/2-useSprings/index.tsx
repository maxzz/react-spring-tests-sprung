import { NewHookExplanation, NewSection } from '@/components/ui';
import { Example1 } from './1-example';
import { Example2 } from './2-example';
import { Example3 } from './3-example';
import { Example4 } from './4-example';
import { CommonExplanation } from './common';

export function PageUseSprings() {
    return (<>
        <NewSection>
            2. useSprings
        </NewSection>

        {/* <CommonExplanation /> */}
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
    </>);
}
