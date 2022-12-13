import styled from "styled-components";

export const ProductCartCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 24px 0 24px 0;
  border-bottom: 1px solid ${(props) => props.theme["gray-light"]};

  img {
    width: 4rem;
    margin-right: 20px;
  }

  > span {
    flex: 1;
    text-align: right;
    color: ${(props) => props.theme["additional-content-text"]};
    line-height: 1.3;
    font-weight: bold;
    font-family: "Roboto";

    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const ProductCartCardInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-family: "Roboto";
    line-height: 1.3;
    color: ${(props) => props.theme["subtitle-color"]};
    font-size: 1rem;
    @media screen and (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

export const ProducAmountAndRemoveRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const ProductAmount = styled.div`
  background-color: ${(props) => props.theme["gray-light"]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 8.5px 8px;
  border-radius: 6px;
  width: 72px;
  height: 32px;
  margin-top: 8px;
`;

export const ButtonAmount = styled.button`
  border: none;
  background-color: ${(props) => props.theme["gray-light"]};
  color: ${(props) => props.theme.purple};
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  display: flex;
  width: 91px;
  padding: 6.5px 8px;
  margin-left: 8px;
  background-color: ${(props) => props.theme["gray-light"]};
  border-radius: 6px;
  border: 0px solid;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    scale: 1.05;
  }
  > span {
    text-transform: uppercase;
    font-family: "Roboto";
    font-size: 0.75rem;
    color: ${(props) => props.theme["additional-content-text"]};
    line-height: 1.6;
  }
  > img {
    width: 1rem;
    margin-right: 4px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
  }
`;
