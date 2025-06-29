import styled from "styled-components";

export const NavbarContainer = styled.header`
  width: 100%;
  height: 70px;
  background-color: #F6F6F4;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  border-radius: 20px;
`;

export const NavLeft = styled.div`
  position: absolute;
  left: 2rem;
  font-size: 1.4rem;
  font-weight: 600;
  color: rgb(44, 44, 44);

  // continua visível em telas pequenas
`;

export const NavCenter = styled.nav`
  display: flex;
  gap: 2rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  font-size: 1rem;
  color: rgb(44, 44, 44);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: black;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
