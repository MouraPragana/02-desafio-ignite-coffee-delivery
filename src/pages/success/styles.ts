import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 71rem;
  min-height: calc(100vh - 6.5rem);
  height: 100%;
  margin: 0 auto;
  padding: 1rem;

  align-items: top;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 526px;

  > h1 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: #c47f17;
  }

  > p {
    font-size: 20px;
    line-height: 1.3;
    color: #403937;
    margin-top: 4px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 102px;

  > img {
    margin-top: 40px;
    @media screen and (max-width: 768px) {
      margin: 0;
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    gap: 3rem;
    flex-wrap: wrap-reverse;
  }
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;

  gap: 32px;
  margin-top: 40px;
  border: 1px solid;
  padding: 40px;
  border: 1px solid;

  /* https://gist.github.com/stereokai/36dc0095b9d24ce93b045e2ddc60d7a0 */
  border: double 1px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(#fafafa, #fafafa),
    radial-gradient(circle at top left, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;

  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;

  > img {
    width: 2rem;
    margin-right: 12px;
  }

  font-family: "Roboto";
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;
  color: #574f4d;

  span {
    font-weight: bold;
  }
`;
