import { NewContainerAnimation, NewContainerBox, NewHookExplanation, NewNotes, NewSection } from '@/components/ui';
import { Example1 } from './1-example';
import { Example2 } from './2-example';
import { Example3 } from './3-example';
import { Section } from '@/components/ui';

export function PageUseSpring() {
    return (<>
        <NewSection>
            1. useSpring
        </NewSection>

        <NewNotes>
            <p>How we can trigger a useSpring animation?</p>
            <p className="hook-explanation">
                We use useSpring when we want to animate an element from state/position
                A to state/position B.
            </p>
            <p>
                Animates on page load | Animates based on boolean value | Animates via
                an event.
            </p>
        </NewNotes>

        <Section>
            <NewContainerBox>

                <NewContainerAnimation>
                    <Example1 />
                    <Example2 />
                    <Example3 />
                </NewContainerAnimation>

            </NewContainerBox>
        </Section>
    </>);
}
