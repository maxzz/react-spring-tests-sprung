import { styled } from '@stitches/react';
import { animated, CSS } from 'react-spring';

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
