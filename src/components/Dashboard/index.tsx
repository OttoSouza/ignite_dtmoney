import { Container } from "../../styles/components/DashBoard";
import { Summary } from "../Summary/index";
import { TransactionTable } from "../TransactionsTable/index";
export function DashBoard() {
  return (
    <>
      <Container>
        <Summary />
        <TransactionTable />
      </Container>
    </>
  );
}
