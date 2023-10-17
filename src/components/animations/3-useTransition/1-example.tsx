import { ExampleProps } from './common';
import { AnimatedBox } from '@/components/ui/animated';
import { NewContainerForAnimation, NewContainerBox, NewNotes, StartButton } from '@/components/ui';

// Single element mounting and unmounting

export function Example1({ transition, setIsActive }: ExampleProps) {
    return (<>
        <NewNotes>
            <div className="">
                <div className="font-bold">1. useTransition, mounting and unmounting a single element</div>
                <p>
                </p>
            </div>
        </NewNotes>

        <NewContainerBox>

            <NewContainerForAnimation>
                {transition(
                    (spring, item) => item && (
                        <AnimatedBox style={spring}>
                            <h1>Hey ho!</h1>
                        </AnimatedBox>
                    )
                )}
            </NewContainerForAnimation>

            <StartButton onClick={() => setIsActive((state) => !state)}>
                Click to change state
            </StartButton>
            
        </NewContainerBox>
        </>);
}
