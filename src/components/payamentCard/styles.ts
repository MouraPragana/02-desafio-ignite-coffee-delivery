import styled from "styled-components";

export const PayamentCardStyled = styled.div`
  background: #e6e5e5;
  border-radius: 6px;
  padding: 16px;
  gap: 12px;
  display: flex;
  flex-direction: row;
  height: 51px;

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
