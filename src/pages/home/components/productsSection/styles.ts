import styled from 'styled-components'

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  padding: 0 1rem;
  margin: 2rem auto;
`

export const Title = styled.h2`
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 2rem;
  line-height: 1.3;
  color: ${(props) => props.theme['subtitle-color']};
`

export const CoffeeContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3.375rem;
`
