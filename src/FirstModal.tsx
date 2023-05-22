import { useState } from "react";
import { useModal } from "./lib/hooks/use-modal";
import { modal } from "./lib/modal";
import { ModalPositions, ModalSizes } from "./lib/types";

export function FirstModal() {
  const [name, setName] = useState("");
  const {
    close,
    setTitle,
    setSize,
    setPosition,
    options: { data, title },
  } = useModal();

  return (
    <div className="p-5">
      <h1>{title}</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <p>{JSON.stringify(data)}</p>

      <div className="flex gap-4">
        <button onClick={() => close(name)}>Autoclose</button>
        <button onClick={() => setTitle(name)}>Set Title</button>
        <select onChange={(ev) => setSize(ev.target.value as ModalSizes)}>
            <option value="sm">sm</option>
            <option value="md">md</option>
            <option value="lg">lg</option>
            <option value="xl">xl</option>
            <option value="2xl">2xl</option>
            <option value="full">full</option>
            <option value="right">right</option>
            <option value="left">left</option>
        </select>
        <select onChange={(ev) => setPosition(ev.target.value as ModalPositions)}>
            <option value="center">center</option>
            <option value="left">left</option>
            <option value="right">right</option>
        </select>
        <button
          onClick={() => modal(FirstModal, { title: "Sub modal", size: "sm" })}
        >
          Abrir outro
        </button>
      </div>
    </div>
  );
}
