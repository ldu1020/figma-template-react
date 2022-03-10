import {ActionBase} from './types';

export type ClientAction =
    | ActionBase<'SEND_ICON_INFO'>
    | ActionBase<'create-rectangles', {count: number}>
    | ActionBase<'cancel'>;

export function clientActions({type, payload = null}: ClientAction) {
    parent.postMessage(
        {
            pluginMessage: {
                type,
                payload,
            },
        },
        '*'
    );
}
