import styled from "styled-components";

export const TestimonialsSection = styled.section`
  padding: 4rem 2rem;
  background-color: #F6F6F4;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #1c1c1c;
  font-weight: 600;
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
  max-width: 1000px;
  margin: 0 auto;
`;

export const CarouselTrack = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ $currentIndex }) => `-${$currentIndex * 100}%`});
`;

export const TestimonialCard = styled.div`
  min-width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
`;

export const Name = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const Stars = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const Comment = styled.p`
  font-style: italic;
  color: #555;
  max-width: 600px;
`;
