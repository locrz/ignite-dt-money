import { useMemo } from "react";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles";

interface SummaryItem {
  title: string;
  img: string;
  value: string;
  customClass?: string;
}

export function Summary() {
  const summaryItems: SummaryItem[] = useMemo(() => {
    return [
      { title: "Entradas", img: incomeImg, value: "1000,00" },
      { title: "Saídas", img: outcomeImg, value: "1000,00" },
      {
        title: "Total",
        img: totalImg,
        value: "1000,00",
        customClass: "highlight-background",
      },
    ];
  }, []);

  return (
    <Container>
      {summaryItems.map((item, index) => (
        <div className={item.customClass} key={index}>
          <header>
            <p>{item.title}</p>
            <img src={item.img} alt={item.title} />
          </header>
          <strong>R$1000,00</strong>
        </div>
      ))}
    </Container>
  );
}
