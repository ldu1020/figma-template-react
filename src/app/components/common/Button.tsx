import * as React from 'react';

interface ButtonProps {
    variant?: ButtonVariants;
    style?: React.CSSProperties;
}

const Button: React.FC<WithCssClassName<ButtonProps>> = ({
    variant = 'primary',
    layout = [],
    spacing = [],
    style,
    children,
}) => {
    return (
        <button style={style} className={`button button--${variant} ${layout?.join(' ')} ${spacing?.join(' ')}`}>
            {children}
        </button>
    );
};

export default Button;
