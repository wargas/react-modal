import "./App.css";
import { ContainerModal, modal, useModal } from "@wargas/react-modal";
import "@wargas/react-modal/dist/index.css";

function App() {
  async function openModal() {
    
    modal(ModalTest, { title: "Modal Teste", position: 'right', size: 'sm' });
  }
  return (
    <>
      <h1>Ola mundo</h1>
      <button onClick={() => openModal()}>Open Modal</button>
      <ContainerModal />
    </>
  );
}

function ModalTest() {
  const {
    close
  } = useModal();

  return (
    <div className="p-5">
      <h1>First Modal</h1>
      <div className="flex gap-4 p-4">
        <button onClick={() => close({})}>Fechar</button>
        <button onClick={() => modal(ModalTest, {title: 'submodal'})}>Abrir outro</button>
      </div>
    </div>
  );
}

export default App;
