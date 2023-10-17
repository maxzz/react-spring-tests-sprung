import { ExampleProps } from './common';
import { AnimatedBox } from '@/components/ui/animated';
import { NewContainerAnimation, NewContainerBox, StartButton } from '@/components/ui';

// Single element mounting and unmounting

export function Example1({ transition, setIsActive }: ExampleProps) {
    return (
        <NewContainerBox>
            <h1>useTransition, mounting and unmounting a single element</h1>

            <NewContainerAnimation>
                {transition(
                    (spring, item) => item && (
                        <AnimatedBox style={spring}>
                            <h1>Hey ho!</h1>
                        </AnimatedBox>
                    )
                )}
            </NewContainerAnimation>

            <StartButton onClick={() => setIsActive((state) => !state)}>
                Click to change state
            </StartButton>
            
        </NewContainerBox>
    );
}
