import styled from "styled-components";

export const AddressAndPaymentColum = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  width: 100%;
`;

export const Header = styled.span`
  color: #403937;
  font-family: "Baloo 2";
  font-size: 1.125rem;
  line-height: 1.3;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding: 2.5rem;
  background-color: #f3f2f2;
  border-radius: 6px;

  @media screen and (max-width: 768px) {
    min-height: 30rem;
  }

  img {
    width: 22px;
    height: 22px;
    margin-right: 8px;
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;

  img {
    margin-right: 8px;
  }

  span {
    color: #403937;
    font-family: "Roboto";
    line-height: 1.3;
    font-size: 1rem;
    display: flex;
    width: 100%;
  }

  p {
    font-size: 0.875rem;
    font-family: "Roboto";
    line-height: 1.3;
    color: #574f4d;
    width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 13.5rem;
  justify-content: space-between;
  margin-top: 2rem;

  @media screen and (max-width: 768px) {
    gap: 0.4rem;
    justify-content: center;
  }
`;

interface InputProps {
  width: string;
}

export const InputStyled = styled.input<InputProps>`
  width: ${(props) => props.width};
  height: 42px;
  padding: 12px;
  border: 1px solid #e6e5e5;
  border-radius: 4px;
  background: #eeeded;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FooterPayament = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding: 2.5rem;
  background-color: #f3f2f2;
  border-radius: 6px;
  max-width: 640px;
  width: 100%;
  height: 207px;

  @media screen and (max-width: 768px) {
    height: calc(207px + 15px + 6rem);
  }
`;
