import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 16rem;
  height: 19.375rem;
  padding: 0 1.5rem;
  background-color: ${(props) => props.theme['background-productCard']};
  border-radius: 6px 36px;
`

export const ImageCard = styled.img`
  max-width: 8.125rem;
  margin-top: -20px;
`

export const ProductTag = styled.p`
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 4px 8px;
  border-radius: 100px;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 1.3;
  color: ${(props) => props.theme['yellow-dark']};
  text-transform: uppercase;
  margin-top: 1rem;
`

export const ProductTitle = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme['subtitle-color']};
  line-height: 1.3;
  font-weight: 700;
  font-family: 'Baloo 2', cursive;
  margin-top: 1rem;
`

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['gray-medium']};
  margin-top: 8px;
`

export const ProductPriceAndAmout = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.0625rem;
  justify-content: space-between;
  width: 208px;
  align-items: center;
  gap: 8px;
  button {
    display: flex;
    justify-content: center;
    cursor: pointer;
    border: 0;
  }
`

export const ProductPrice = styled.span`
  display: flex;
  align-items: baseline;
  gap: 0.3rem;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 31.2px;
  font-family: 'Baloo 2', cursive;
  color: ${(props) => props.theme['subtitle-color']};
  p {
    font-family: 'Roboto', sans-serif;
    display: flex;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 18.2px;
    color: ${(props) => props.theme['additional-content-text']};
  }
`

export const ProductAmount = styled.div`
  background-color: ${(props) => props.theme['gray-light']};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 5rem;
  gap: 0.5rem;
  margin-left: 1rem;
  padding: 8.5px 8px;
  border-radius: 6px;
  button {
    border: none;
    background-color: ${(props) => props.theme['gray-light']};
    color: ${(props) => props.theme.purple};
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
  }
`
