import styled from 'styled-components';

export const Container = styled.section`
  padding: 4rem 2rem;
  background-color: #F6F6F4;
  text-align: center;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const StepCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const IconWrapper = styled.div`
  background-color: #f1f1f1;
  border-radius: 50%;
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #222;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 0.95rem;
  color: #555;
`;

export const QRCodeExample = styled.div`
  margin-top: 4rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const QRImage = styled.img`
  max-width: 200px;
  width: 100%;
  border-radius: 12px;

`;

export const QRLabel = styled.p`
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
`;
