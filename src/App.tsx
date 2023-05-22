import { ContainerModal } from "./lib";
import { modal } from "./lib/modal";
import { FirstModal } from "./FirstModal";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  async function openModal() {
    const _result = await modal(FirstModal, {
      data: new Date(),
      title: "First Modal Tittle",
      size: "md",
      position: "left"
    });

    if (_result) {
      console.log(_result);
      setResult(_result as string);
    }
  }

  return (
    <div className="h-screen bg-gray-100">
      <div className="p-5">
        <button onClick={openModal}>Open Modal</button>
        <p>{result}</p>
      </div>
      <ContainerModal />
    </div>
  );
}

export default App;
