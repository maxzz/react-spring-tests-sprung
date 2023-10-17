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

    pointerEvents: 'none',

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

    pointerEvents: 'none',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});
