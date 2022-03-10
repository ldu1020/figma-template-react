import {ClientAction} from '../app/utils/clientActions';
import {figmaActions} from '../app/utils/figmaAction';

figma.showUI(__html__);

figmaActions({type: 'SEND_MESSAGE', payload: {message: 'hellow'}});

figma.ui.onmessage = (msg: ClientAction) => {
    if (msg.type === 'create-rectangles') {
        const nodes = [];

        for (let i = 0; i < msg.payload.count; i++) {
            const rect = figma.createRectangle();
            rect.x = i * 150;
            rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
            figma.currentPage.appendChild(rect);
            nodes.push(rect);
        }

        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
    }
    figma.closePlugin();
};
