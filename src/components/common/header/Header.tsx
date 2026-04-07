import logo from "../../../assets/images/logo.png";
import { Container } from "react-bootstrap";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { CartIcon } from "../../../assets/images/icons/SvgIcons";
import { ROUTES } from "../../../utils/routes";
const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="header_inner">
          <div className="logo">
            <img src={logo} alt="logo" loading="lazy" />
          </div>
          <ul>
            <li>
              <NavLink to={ROUTES.DASHBOARD}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ABOUT_US}>About us</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <CartIcon />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  )
}

export default Header