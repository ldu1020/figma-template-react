import * as React from 'react';

interface BoxType {
    style?: React.CSSProperties;
}

const Box: React.FC<WithCssClassName<BoxType>> = ({
    //
    layout = ['.flex'],
    spacing = ['.p-medium'],
    style,
    children,
}) => {
    return (
        <div style={style} className={`${layout.join(' ')} ${spacing.join(' ')}`}>
            {children}
        </div>
    );
};

export default Box;
