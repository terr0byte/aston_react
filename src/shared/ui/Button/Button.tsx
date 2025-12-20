import React from 'react';
import { useTheme } from '../../lib/theme/useTheme';

type ButtonProps = {
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
    const {theme} = useTheme()
    return (
        <button
            {...props}
            style={{
                padding: '8px 16px',
                cursor: 'pointer'
            }}
            data-component='button'
            data-theme={theme}
        >
            {children}
        </button>
    );
};

export default Button;