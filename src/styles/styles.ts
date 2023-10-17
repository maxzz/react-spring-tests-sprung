import { styled } from '@stitches/react';
import { animated } from 'react-spring';

export const AnimationContainter = styled('div', {
    display: 'flex',
    columnGap: '5rem',
});

export const HookExplanation = styled('p', {
    fontSize: '.7rem',
    color: 'white',
    // width: '30rem',
    // margin: '0rem',
});

export const Explanation = styled(animated.article, {
    // maxWidth: '40rem',
    // lineHeight: '1.4rem',
});

export const BoxContainer = styled('div', {
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: '2rem',
});
