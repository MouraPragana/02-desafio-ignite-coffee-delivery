import styled from 'styled-components'

export const LayoutContainer = styled.div`
  background-color: ${(props) => props.theme['white-background']};
  padding: 0 10rem;
`

export const LayoutContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`
