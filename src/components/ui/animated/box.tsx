import { styled } from '@stitches/react';
import { animated, CSS } from 'react-spring';

export const DemoAnimatableBox = styled(animated.div, {
    position: 'relative',

    padding: '.5rem',
    width: '3rem',
    height: '3rem',
    fontSize: '.7rem',

    borderRadius: '5px',
    
    color: 'black',
    backgroundColor: 'rgb(255,255,255)',

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
