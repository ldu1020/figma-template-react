import * as React from 'react';

interface TextProps {
    size?: 'sm' | 'lg' | 'xl';
    weight?: 'md' | 'bold';
    style?: React.CSSProperties;
}

const VARIANTS = {
    size: {
        sm: 'small',
        lg: 'large',
        xl: 'xlarge',
    },
    weight: {
        md: 'medium',
        bold: 'bold',
    },
};

const TextBox: React.FC<WithCssClassName<TextProps>> = ({
    size = 'sm',
    weight = 'md',
    layout = [],
    spacing = [],
    style,
    children,
}) => {
    return (
        <div
            style={style}
            className={`type type--${VARIANTS.size[size]} type--${VARIANTS.weight[weight]} ${layout.join(
                ' '
            )} ${spacing.join(' ')}`}
        >
            {children}
        </div>
    );
};

export default TextBox;
