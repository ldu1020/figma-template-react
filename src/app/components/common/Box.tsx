import * as React from 'react';

interface BoxType {
    style?: React.CSSProperties;
}

const Box: React.FC<WithCssClassName<BoxType>> = ({
    //
    layout = [],
    spacing = [],
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
