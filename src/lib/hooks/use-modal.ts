import { useContext } from "react";
import { ModalContext } from "../components/modal-provider";
import { EventManager } from "..";
import { ModalPositions, ModalSizes } from "../types";

export function useModal() {
    const ctx = useContext(ModalContext);

    function close(data: any) {
        EventManager.emit(`close-modal`, ctx.id, data)
    }

    function setTitle(title: string) {
        EventManager.emit(`set-title`, ctx.id, title)
    }

    function setSize(size: ModalSizes) {
        EventManager.emit(`set-size`, ctx.id, size)
    }

    function setPosition(position: ModalPositions) {
        EventManager.emit('set-position', ctx.id, position)
    }

    return {close, setTitle, setSize, setPosition, options: ctx.options}
}