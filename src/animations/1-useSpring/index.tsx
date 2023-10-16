import { HookExplanation, BoxContainer, AnimationContainter } from '../../styles/styles';
import { Example1 } from './1-example';
import { Example2 } from './2-example';
import { Example3 } from './3-example';

export function PageUseSpring() {
    return (<>
        <HookExplanation>
            1. useSpring
        </HookExplanation>
        <BoxContainer>
            <div className="">
                <h1>How we can trigger a useSpring animation</h1>
                <div className="hook-explanation">
                    We use useSpring when we want to animate an element from state/position
                    A to state/position B
                </div>
                <span>
                    Animates on page load | Animates based on boolean value | Animates via
                    an event
                </span>
            </div>
            <AnimationContainter>
                <Example1 />
                <Example2 />
                <Example3 />
            </AnimationContainter>
        </BoxContainer>
    </>);
}
