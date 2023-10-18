import { NewSection, Section } from '@/components/ui';
import { Example1 } from './1-example';
import { Example2 } from './2-example';
import { Example3 } from './3-example';
import { Example4 } from './4-example';

{/* <NewHookExplanation>
    There are a few ways to animate multiple elements. We can use useSpring
    or use the dedicated useSprings hook
</NewHookExplanation>; */}

export function PageUseSprings() {
    return (
        <Section label="2. useSprings" sectionKey='springs'>
            <Example1 />
            <Example2 />
            <Example3 />
            <Example4 />
        </Section>
    );
}
