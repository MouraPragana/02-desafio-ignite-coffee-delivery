import styled from "styled-components";

export const CheckoutPage = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 71rem;
  margin: 2.5rem auto 0 auto;
  padding: 0 1rem;
  min-height: calc(100vh - 104px - 2.5rem);

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 25px;
    padding: 1rem;
  }
`;
