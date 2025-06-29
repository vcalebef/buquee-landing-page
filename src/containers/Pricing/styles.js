import styled from "styled-components";

export const PricingContainer = styled.section`
  background-color: #F6F6F4;
  padding: 4rem 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 3rem;
  color: #1c1c1c;
  font-weight: 600;
`;

export const PlansWrapper = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  justify-content: center;
`;

export const PlanCard = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const PlanName = styled.h3`
  font-size: 1.5rem;
  color: #222;
  margin-bottom: 1.5rem;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 0.5rem 0;
  color: #444;
  font-size: 0.95rem;
`;

export const IconWrapper = styled.span`
  color: ${({ available }) => (available ? "#4CAF50" : "#FF5252")};
  display: flex;
  align-items: center;
`;

export const Price = styled.div`
  margin-top: 2rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: #1c1c1c;
`;

export const Button = styled.button`
  margin-top: 1rem;
  background-color: #1c1c1c;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

