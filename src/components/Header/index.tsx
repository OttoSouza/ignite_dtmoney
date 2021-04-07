import logoImg from "../../assets/logo.svg";
import { Container, Content } from "../../styles/components/Header";

interface HeaderProps {
 handleToggleNewTransactionModal: () => void;
}

export function Header({handleToggleNewTransactionModal}:HeaderProps) {
 

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={handleToggleNewTransactionModal}>
          Nova transação
        </button>
       
      </Content>
    </Container>
  );
}
