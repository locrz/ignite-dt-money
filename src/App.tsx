import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransacions";

Modal.setAppElement("#root");

function App() {
  const [isTransactionModalOpen, setIsTransactionModalOpen] = useState(false);

  function toggleTransactionModalVisible() {
    setIsTransactionModalOpen((visible) => !visible);
  }
  return (
    <TransactionsProvider>
      <Header onButtonClick={toggleTransactionModalVisible} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isTransactionModalOpen}
        onRequestClose={toggleTransactionModalVisible}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
