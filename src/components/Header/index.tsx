import logoImg from "../../assets/logo.svg";

import { Container, Content } from "./styles";

interface HeaderProps {
  onButtonClick(): void;
}

export function Header({ onButtonClick }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={onButtonClick}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
