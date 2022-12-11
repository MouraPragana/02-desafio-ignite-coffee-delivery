import { PayamentCardStyled } from "./styles";

interface IPayamentCard {
  title: string;
  icon: string;
  active: string;
  onClick: () => void;
}

export function PayamentCard({ title, icon, active, onClick }: IPayamentCard) {
  return (
    <PayamentCardStyled active={active} name={title} onClick={onClick}>
      <img src={icon} alt="" />
      <span>{title}</span>
    </PayamentCardStyled>
  );
}
