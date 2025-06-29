import styled from "styled-components";

export const FeaturesSection = styled.section`
  padding: 4rem 2rem;
  background-color: #F6F6F4;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #1c1c1c;
  font-weight: 600;
`;

export const FeaturesGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  max-width: 1000px;
  margin: 0 auto;
`;

export const FeatureCard = styled.div`
  background: #EEF77D;
  background: linear-gradient(0deg,rgba(238, 247, 125, 1) 0%, rgba(237, 58, 228, 1) 100%);
  backdrop-filter: blur(10px);
  padding: 2rem 1rem;
  border-radius: 16px;
  box-shadow: 0 9px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 1rem;
  color: #EEF77D; /* roxo elegante */
`;

export const FeatureText = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.5;
`;
