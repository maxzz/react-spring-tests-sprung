import { NewContainerBox } from '@/components/ui';
import { Example1 } from './1-example';
import { Example2 } from './2-example';
import { Example3 } from './3-example';
import { Section } from '@/components/ui';

{/* <NewNotes>
    <p>How we can trigger a useSpring animation?</p>
    <p className="hook-explanation">
        We use useSpring when we want to animate an element from state/position
        A to state/position B.
    </p>
    <p>
        Animates on page load | Animates based on boolean value | Animates via
        an event.
    </p>
</NewNotes> */}

export function PageUseSpring() {
    return (
        <Section label="1. useSpring" sectionKey='spring'>
            <NewContainerBox>
                <Example1 />
                <Example2 />
                <Example3 />
            </NewContainerBox>
        </Section>
    );
}
