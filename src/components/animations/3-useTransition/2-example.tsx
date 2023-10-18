import { DemoAnimatableBox } from '@/components/ui/animated';
import { NewContainerForAnimation, NewContainerBox, NewNotes, StartButton } from '@/components/ui';
import { ExampleProps } from './common';

// Multiple elements mounting and unmounting

export function Example2({ transition, setIsActive }: ExampleProps) {
    // We will use the same configuration, except this time we want to mount and unmount several elements
    // In out transition callback function we just have to map over each item, return an animated element with the spring applied
    const elements = [
        { id: 1, message: 'Im' },
        { id: 2, message: 'Sprung' },
        { id: 3, message: 'By' },
        { id: 4, message: 'T-Pain' }
    ];
    return (<>
        <NewNotes>
            <div className="">
                <div className="font-bold">2. useTransition, mounting and unmounting of multiple elements</div>
                <p>
                </p>
            </div>
        </NewNotes>
        <NewContainerBox>

            <NewContainerForAnimation>
                {transition(
                    (spring, item) => item &&
                        elements.map((element, i) => (
                            <DemoAnimatableBox style={spring} key={i}>
                                <h1>{element.message}</h1>
                            </DemoAnimatableBox>
                        ))
                )}
            </NewContainerForAnimation>

            <StartButton onClick={() => setIsActive((state) => !state)}>
                Click to fire
            </StartButton>
            
        </NewContainerBox>
    </>);
}
