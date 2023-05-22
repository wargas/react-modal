import { EventManager } from ".";
import { ModalOptions } from "./types";
import uniqueId from 'lodash/uniqueId'

function modal(element: () => JSX.Element, options?: ModalOptions) {
    return new Promise(accept => {
        const id = uniqueId('modal_')
        EventManager.emit('add-modal', element, options || {}, id)
        
        EventManager.on(`close-modal:${id}`, accept)
    })
}



export { modal}