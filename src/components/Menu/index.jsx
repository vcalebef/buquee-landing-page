import { NavbarContainer, NavLeft, NavLink, NavCenter } from "./styles";

const Menu = () => {
  return (
    <NavbarContainer>
        <NavLeft>
          <img src="../../assets/buqueeLogo.png" alt="Logo" />
          <a href="#hero" style={{ textDecoration: 'none', color: 'inherit' }}>
            buquee
          </a>
        </NavLeft>
            <NavCenter>
                <NavLink href="#beneficios">Benefícios</NavLink>
                <NavLink href="#como-funciona">Como funciona</NavLink>
                <NavLink href="#planos">Planos</NavLink>
                <NavLink href="#contato">Contato</NavLink>
            </NavCenter>
    </NavbarContainer>
  );
};

export default Menu;
