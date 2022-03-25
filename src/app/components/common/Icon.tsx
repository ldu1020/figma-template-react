import * as React from 'react';

interface IconProps {
    name: IconName;
    color?: IconColor;
    style?: React.CSSProperties;
    spin?: boolean;
}

const Icon: React.FC<WithCssClassName<IconProps>> = ({
    name,
    color = 'black',
    spin,
    layout = [],
    spacing = [],
    style,
    children,
}) => {
    return (
        <div
            style={style}
            className={`icon icon--${name} icon--${color} ${layout.join(' ')} ${spacing.join(' ')} ${
                spin ? 'icon--spin' : ''
            }`}
        >
            {children}
        </div>
    );
};

export default Icon;
