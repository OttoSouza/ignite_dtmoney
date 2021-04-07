import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header/index";
import { DashBoard } from "./components/Dashboard/index";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal/index";
import { TransactionProvider } from './hooks/useTransactions';


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleToggleNewTransactionModal() {
    setIsNewTransactionModalOpen(!isNewTransactionModalOpen);
  }

  return (
    <TransactionProvider>
      <Header
        handleToggleNewTransactionModal={handleToggleNewTransactionModal}
      />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleToggleNewTransactionModal}
      />
      <DashBoard />
    </TransactionProvider>
  );
}
