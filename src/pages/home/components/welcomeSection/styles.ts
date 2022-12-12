import styled from "styled-components";
import bakcgroundHome from "../../../../assets/svg/backgroundHome.svg";

export const WelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 34rem;
  background: url(${bakcgroundHome});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  max-width: 71rem;
  padding: 0 1rem;
  margin: 94px auto;
  img {
    display: flex;
    width: 100%;
    max-width: 29.75rem;
    max-height: 22.5rem;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.3;
  max-width: 36.75rem;
  font-family: "Baloo 2", cursive;
  color: ${(props) => props.theme["title-color"]};
`;

export const SubTitle = styled.span`
  display: flex;
  font-size: 1.25rem;
  line-height: 1.3;
  max-width: 36.75rem;
  align-self: stretch;
  margin-top: 1rem;
  color: ${(props) => props.theme["subtitle-color"]};
  font-stretch: 100;
`;

export const AdditionalTextContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 3.25rem;
  max-width: 35.4375rem;
  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 45%;
    margin-top: 1rem;
    color: ${(props) => props.theme["additional-content-text"]};
    line-height: 1.3;
    img {
      width: 2rem;
    }
  }
`;

export const SpanPagamento = styled.span`
  text-transform: capitalize;
`;
