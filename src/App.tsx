import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root");

function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function toggleTransactionModalVisible() {
    setIsTransactionModalOpen((visible) => !visible);
  }
  return (
    <>
      <Header onButtonClick={toggleTransactionModalVisible} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isTransactionModalOpen}
        onRequestClose={toggleTransactionModalVisible}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
