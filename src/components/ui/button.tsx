import { styled } from '@stitches/react';
import { ButtonHTMLAttributes } from 'react';

const ToggleButton = styled('button', {
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

export function StartButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <ToggleButton {...props} />
    );
}
