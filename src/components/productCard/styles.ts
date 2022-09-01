import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 16rem;
  height: 19.375rem;
  padding: 0 1rem;
  background-color: ${(props) => props.theme['background-productCard']};
  border-radius: 6px 36px;
`

export const ImageCard = styled.img`
  max-width: 8.125rem;
  margin-top: -20px;
`

export const TagsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.25rem;
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
  max-width: 208px;
  align-items: center;
  width: fit-content;
`

export const ProductPrice = styled.span`
  display: flex;
  align-items: baseline;
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 31.2px;
  font-family: 'Baloo 2', cursive;
  margin-right: 1.5rem;
  color: ${(props) => props.theme['subtitle-color']};
  p {
    font-family: 'Roboto', sans-serif;
    margin-right: 0.2rem;
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
  gap: 0.5rem;
  padding: 8.5px 8px;
  border-radius: 6px;
`

export const ButtonAmount = styled.button`
  border: none;
  background-color: ${(props) => props.theme['gray-light']};
  color: ${(props) => props.theme.purple};
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`

export const ButtonCart = styled.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: 0;
  margin-left: 0.35rem;
`
