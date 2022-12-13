import styled from "styled-components";

export const SelectCoffeProductColum = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Header = styled.span`
  color: ${(props) => props.theme["subtitle-color"]};
  font-family: "Baloo 2";
  font-size: 1.125rem;
  line-height: 1.3;
`;

export const Content = styled.div`
  margin-top: 15px;
  background-color: ${(props) => props.theme["background-productCard"]};
  border-radius: 6px 44px;
  padding: 16px 40px 40px 40px;

  @media screen and (max-width: 768px) {
    padding: 16px 15px 40px 15px;
  }
`;

export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
  gap: 12px;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const DescribeCartInfo = styled.span`
  line-height: 1.3;
  font-family: "Roboto";
  font-size: 0.875rem;
  color: ${(props) => props.theme["additional-content-text"]};
`;

export const PriceCartInfo = styled(DescribeCartInfo)`
  font-size: 1rem;
`;

export const TotalCartInfo = styled(DescribeCartInfo)`
  font-size: 1.25rem;
  color: ${(props) => props.theme["subtitle-color"]};
  font-weight: bold;
`;

export const FormSubmitButton = styled.button`
  text-transform: uppercase;
  width: 100%;
  margin-top: 36px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;
  padding: 12px 8px;

  font-weight: bold;
  font-size: 14px;
  line-height: 1.6;

  transition: all 0.2s ease-in-out;

  cursor: pointer;

  &:hover {
    scale: 1.02;
    background: #c59a27;
  }
`;

export const ProdutoEmEntrega = styled(FormSubmitButton)`
  background: grey;
  text-align: center;
  color: ${(props) => props.theme.white};
  cursor: auto;

  &:hover {
    background: grey;
    scale: 1;
  }
`;

export const TextoAviso = styled.span`
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme["subtitle-color"]};
  font-family: "Baloo 2";
  font-size: 1.125rem;
  line-height: 1.3;
  text-align: center;

  margin-top: 15px;
  background-color: ${(props) => props.theme["background-productCard"]};
  border-radius: 8px;
  padding: 18px 25px;
`;
