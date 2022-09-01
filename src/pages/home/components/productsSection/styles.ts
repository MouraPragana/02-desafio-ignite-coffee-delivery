import styled from 'styled-components'

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 71rem;
  padding: 0 1rem;
  margin: 2rem auto;
`

export const Title = styled.h2`
  font-family: 'Baloo 2', cursive;
  margin-bottom: 3.375rem;
  font-weight: 800;
  font-size: 2rem;
  line-height: 1.3;
  color: ${(props) => props.theme['subtitle-color']};
`

export const CoffeeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3.75rem 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
  }
`
