import { HeaderContainer, LocationCartContainer } from './styles'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import mapIcon from '../../assets/map_icon.svg'
import cartIcon from '../../assets/cart.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <LocationCartContainer>
        <span>
          <img src={mapIcon} alt="" />
          Porto Alegre, RS
        </span>
        <NavLink to="/checkout">
          <img src={cartIcon} alt="" />
        </NavLink>
      </LocationCartContainer>
    </HeaderContainer>
  )
}
