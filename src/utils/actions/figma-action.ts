import {ActionBase} from './types';

export type FigmaAction =
    | ActionBase<'SEND_MESSAGE', {message: string}>
    | ActionBase<'SEND_ICONS', {icons: any[]}>
    | ActionBase<'SEND_ANY', {any?: any}>;

export function figmaActions({type, payload = null}: FigmaAction) {
    figma.ui.postMessage(
        {
            type,
            payload,
        },
        {origin: '*'}
    );
}
