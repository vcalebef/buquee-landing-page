import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: #EEF77D;
  background: radial-gradient(circle,rgba(238, 247, 125, 1) 0%, rgba(237, 58, 228, 1) 100%);
  color: white;
  padding: 3rem 2rem 1.5rem;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterColumn = styled.div`
  flex: 1;
  min-width: 220px;
`;

export const FooterTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: black;
`;

export const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: black;
  text-decoration: none;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;

  &:hover {
    color: white;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: black;
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    color: white;
  }
`;

export const Copy = styled.p`
  text-align: center;
  font-size: 0.85rem;
  color: black;
  margin-top: 2rem;
`;
