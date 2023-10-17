import { styled } from '@stitches/react';
import { animated, CSS } from 'react-spring';

export const AnimatedBox = styled(animated.div, {
    position: 'relative',

    padding: '.5rem',
    width: '3rem',
    height: '3rem',
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

    pointerEvents: 'none',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});
