import { styled } from '@stitches/react';
import { animated, CSS } from 'react-spring';

export const AnimatedBox = styled(animated.div, {
    position: 'relative',

    padding: '.5rem',
    width: '7rem',
    height: '7rem',
    fontSize: '.7rem',

    color: 'black',
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: '5px',

    '&.clickable': {
        cursor: 'pointer'
    },

    '&.chain': {
        width: '10rem',
        textAlign: 'center'
    },

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const AnimationContainter = styled('div', {
    display: 'flex',
    columnGap: '5rem',
});

export const ToggleButton = styled('button', {
    padding: '1.2rem .5rem',
    left: 'calc(50vw - 4.5rem)',
    width: '9rem',
    height: '2rem',

    border: '.5px solid grey',
    borderRadius: '3px',
    color: 'white',
    backgroundColor: '#FF7518',
    cursor: 'pointer',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

export const AnimatedCircle = styled(animated.div, {
    alignSelf: 'center',

    position: 'absolute',
    width: '5rem',
    height: '5rem',

    border: '2px solid red',
    borderRadius: '50% 50%',
    backgroundColor: '#FF7518',
    color: 'white',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
