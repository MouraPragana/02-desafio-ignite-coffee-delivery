import { CoffeeContext } from "../../context/coffeeContext";
import { useContext } from "react";
import { HeaderContainer, LocationCartContainer } from "./styles";
import { NavLink } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";
import mapIcon from "../../assets/svg/map_icon.svg";
import cartIcon from "../../assets/svg/cart.svg";

export function Header() {
  const { products } = useContext(CoffeeContext);
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <LocationCartContainer>
        <span>
          <img src={mapIcon} alt="" />
          Porto Alegre, RS
        </span>
        <NavLink to="/checkout">
          {products.length > 0 ? <strong>{products.length}</strong> : ""}
          <img src={cartIcon} alt="" />
        </NavLink>
      </LocationCartContainer>
    </HeaderContainer>
  );
}
