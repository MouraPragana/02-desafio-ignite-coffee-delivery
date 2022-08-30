import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 6.5rem;
  align-items: center;
  img {
    height: 2.5rem;
  }
`

export const LocationCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  span {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['purple-light']};
    padding: 10px 8px;
    border-radius: 6px;
    gap: 4px;
    img {
      height: 22px;
      background-color: transparent;
    }
  }
  a {
    display: flex;
    align-items: center;
    position: relative;
    background-color: ${(props) => props.theme['yellow-light']};
    padding: 8px;
    border-radius: 6px;
    strong {
      display: flex;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 0.75rem;
      min-width: 20px;
      min-height: 16px;
      padding: 0.2rem;
      border-radius: 50%;
      margin-top: -8px;
      margin-right: -8.35px;

      color: ${(props) => props.theme.white};
      background-color: ${(props) => props.theme['yellow-dark']};
    }
    img {
      height: 22px;
      background-color: transparent;
    }
  }
`
