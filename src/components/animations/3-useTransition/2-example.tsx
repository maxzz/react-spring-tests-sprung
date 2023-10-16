import React, { useState } from 'react';
import { config, TransitionFn, useTransition } from '@react-spring/web';
import { AnimatedBox, AnimationContainter, BoxContainer, HookExplanation, ToggleButton } from '../../../styles/styles';
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
    return (
        <BoxContainer>
            <h1>useTransition, mounting and unmounting of multiple elements</h1>

            <AnimationContainter>
                {transition(
                    (spring, item) => item &&
                        elements.map((element) => (
                            <AnimatedBox style={spring}>
                                <h1>{element.message}</h1>
                            </AnimatedBox>
                        ))
                )}
            </AnimationContainter>

            <ToggleButton onClick={() => setIsActive((state) => !state)}>
                Click to fire
            </ToggleButton>
            
        </BoxContainer>
    );
}
