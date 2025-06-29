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
  background-color:rgba(244, 149, 192, 0.64);
  backdrop-filter: blur(10px);
  padding: 2rem 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const IconWrapper = styled.div`
  margin-bottom: 1rem;
  color: #7c3aed; /* roxo elegante */
`;

export const FeatureText = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.5;
`;
