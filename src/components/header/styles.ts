import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: red;
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
    color: ${(props) => props.theme['purple-dark']};
    background-color: ${(props) => props.theme['purple-light']};
    padding: 10px 8px;
    border-radius: 6px;
    gap: 4px;

    img {
      height: 22px;
    }
  }

  a {
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme['yellow-light']};

    padding: 8px;
    border-radius: 6px;

    img {
      height: 22px;
    }
  }
`
