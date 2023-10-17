import { styled } from '@stitches/react';
import { animated, CSS } from 'react-spring';

export const DemoAnimatableCircle = styled(animated.div, {
    alignSelf: 'center',

    position: 'absolute',
    width: '3rem',
    height: '3rem',

    border: '2px solid red',
    borderRadius: '50% 50%',
    backgroundColor: '#FF7518',
    color: 'white',

    pointerEvents: 'none',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});
