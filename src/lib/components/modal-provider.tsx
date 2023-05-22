import { createContext, useEffect, useState } from "react";
import { ModalItemProps } from "../types";
import { EventManager } from "..";
import clsx from "clsx";
import "../styles.css";

export const ModalContext = createContext(
  {} as Omit<ModalItemProps, "element">
);

type Props = { children: any } & Omit<ModalItemProps, "element">;
export function ModalProvider({ children, options, id }: Props) {
  const [show, setShow] = useState(false);

  function close() {
    EventManager.emit(`close-modal`, id, null);
  }

  useEffect(() => {
    setShow(true);

    EventManager.on(`close-modal:${id}`, function () {
      setShow(false);
    });

    return () => {
      EventManager.off(`show-modal:${id}`);
      EventManager.off(`hide-modal:${id}`);
    };
  }, [id]);

  function removeModal(): void {
    EventManager.emit("remove-modal", id);
  }

  return (
    <ModalContext.Provider value={{ options, id }}>
      <div className="modal-container">
        <div
          onClick={() => close()}
          className={clsx("modal-backdrop", {
            show: show,
          })}
        ></div>
        <div
          onTransitionEnd={() => (!show ? removeModal() : null)}
          className={clsx("modal-content", options.size || 'md', options.position || 'center' ,{ show: show })}
        >
          <div className="modal-header">
            <h1 className="modal-title">{options.title}</h1>
            <button onClick={() => close()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </svg>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </ModalContext.Provider>
  );
}
