import * as React from 'react';
import {clientActions} from '../../utils/actions/client-actions';
import {FigmaAction} from '../../utils/actions/figma-action';
import '../styles/ui.css';

declare function require(path: string): any;

const App = ({}) => {
    const textbox = React.useRef<HTMLInputElement>(undefined);

    const countRef = React.useCallback((element: HTMLInputElement) => {
        if (element) element.value = '5';
        textbox.current = element;
    }, []);

    const onCreate = () => {
        const count = parseInt(textbox.current.value, 10);
        clientActions({type: 'create-rectangles', payload: {count}});
    };

    const onCancel = () => {
        clientActions({type: 'cancel'});
    };

    React.useEffect(() => {
        // This is how we read messages sent from the plugin controller
        window.onmessage = (event) => {
            const action: FigmaAction = event.data.pluginMessage;
            console.log('asdfasdf', action);
        };
    });

    return (
        <div>
            <img src={require('../assets/logo.svg')} />
            <h2>Rectangle Creator</h2>
            <p>
                Count: <input ref={countRef} />
            </p>
            <button id="create" onClick={onCreate}>
                Create
            </button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
};

export default App;
