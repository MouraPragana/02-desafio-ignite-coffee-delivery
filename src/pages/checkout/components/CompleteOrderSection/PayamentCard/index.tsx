import { PayamentCardStyled } from "./styles";

interface IPayamentCard {
  icon?: string;
}

export function PayamentCard({ icon }: IPayamentCard) {
  return (
    <PayamentCardStyled>
      <img src={icon} alt="" />
      <span>cartão de crédito</span>
    </PayamentCardStyled>
  );
}
