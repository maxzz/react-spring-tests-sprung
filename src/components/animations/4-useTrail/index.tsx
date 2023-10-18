import { NewHookExplanation, NewSection, Section } from '@/components/ui';
import { Example1 } from './1-example';
import { Example2 } from './2-example';

{/* <NewHookExplanation>
    As stated in the React-Spring documentation
    <br />
    <br />
    'useTrail has an identical API signature to useSprings the difference is
    the hook automatically orchestrates the springs to stagger one after the
    other.'
</NewHookExplanation> */}

export function PageUseTrail() {
    return (
        <Section label="4. useTrail">
            <Example1 />
            <Example2 />
        </Section>
    );
}
