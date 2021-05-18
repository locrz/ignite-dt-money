import { useTransacions } from "../../hooks/useTransacions";
import { formatCurrency } from "../../utils/formatCurrency";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransacions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "withdraw") {
        acc.total -= transaction.amount;
        acc.withdraw += transaction.amount;
      } else {
        acc.total += transaction.amount;
        acc.deposit += transaction.amount;
      }

      return acc;
    },
    {
      withdraw: 0,
      deposit: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formatCurrency(summary.deposit)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>{formatCurrency(summary.withdraw)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatCurrency(summary.total)}</strong>
      </div>
    </Container>
  );
}
