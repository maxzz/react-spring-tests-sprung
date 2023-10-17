import { AnimationContainter, BoxContainer, ToggleButton } from '../../../styles/styles';
import { ExampleProps } from './common';
import { AnimatedBox } from '@/components/ui/animated';

// Single element mounting and unmounting

export function Example1({ transition, setIsActive }: ExampleProps) {
    return (
        <BoxContainer>
            <h1>useTransition, mounting and unmounting a single element</h1>

            <AnimationContainter>
                {transition(
                    (spring, item) => item && (
                        <AnimatedBox style={spring}>
                            <h1>Hey ho!</h1>
                        </AnimatedBox>
                    )
                )}
            </AnimationContainter>

            <ToggleButton onClick={() => setIsActive((state) => !state)}>
                Click to change state
            </ToggleButton>
            
        </BoxContainer>
    );
}
