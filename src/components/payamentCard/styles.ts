import styled from "styled-components";

interface IPayamentCardStyled {
  active: string;
  name: string;
}

export const PayamentCardStyled = styled.div<IPayamentCardStyled>`
  background: ${(props) => props.theme["gray-light"]};
  border-radius: 6px;
  padding: 16px;
  gap: 12px;
  display: flex;
  flex-direction: row;
  height: 51px;

  background: ${(props) =>
    props.active === props.name
      ? props.theme["purple-light"]
      : props.theme["gray-light"]};

  border: ${(props) =>
    props.active === props.name ? `1px solid ${props.theme.purple}` : "none"};

  flex: 1;

  @media screen and (max-width: 768px) {
    flex: 0;
  }

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 1.05;
    background: #cfcece;
  }

  span {
    text-transform: uppercase;
    line-height: 1.6;
    font-family: "Roboto";
    font-size: 0.75rem;
  }
`;
