import { useTransactions } from "../../hooks/useTransactions";
import { Container, Button } from "../../styles/components/TransactionTable";
import { FiTrash2 } from "react-icons/fi";
export function TransactionTable() {
  const { transactions, deleteTransaction } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th>options</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-Br", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {" "}
                {new Intl.DateTimeFormat("pt-Br").format(
                  new Date(transaction.createdAt)
                )}
              </td>
              <td>
                <Button onClick={() => deleteTransaction(transaction.id)}>
                  <FiTrash2 />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
