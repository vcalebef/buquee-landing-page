import styled, { keyframes } from "styled-components";

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px) translateX(0px);
  }
  50% {
    transform: translateY(-10px) translateX(5px);
  }
  100% {
    transform: translateY(0px) translateX(0px);
  }
`;

export const HeroContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
  min-height: 90vh;
  background-color: #F6F6F4;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  overflow: hidden;
  text-align: center;
  border-radius: 20px;
`;

export const MediaGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: auto;
  bottom: 0;
  column-count: 6;
  padding: 0 1rem;
  column-gap: 0.5rem;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: linear-gradient(to bottom, transparent, #f6f6f4);
    z-index: 2;
    pointer-events: none;
  }

  @media (min-width: 100px) and (max-width: 399px) {
    column-count: 3;
  }

  @media (min-width: 400px) and (max-width: 699px) {
    column-count: 4;
  }

  @media (min-width: 700px) and (max-width: 999px) {
    column-count: 5;
  }

  @media (min-width: 1000px) and (max-width: 1599px) {
    max-width: 1500px;
  }

  @media (min-width: 1600px) and (max-width: 1799px) {
    max-width: 1500px;
  }

  @media (min-width: 1800px) and (max-width: 2559px) {
    max-width: 1900px;
  }

  @media (min-width: 2560px) and (max-width: 3239px) {
    max-width: 2200px;
  }
`;

export const MediaItem = styled.div`
  margin-bottom: 0.5rem;
  border-radius: 10px;
  overflow: hidden;
  break-inside: avoid;
  animation: ${floatAnimation} 3s ease-in-out infinite;

  img,
  video {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    display: block;
    opacity: 0.3;
    filter: blur(1px);
  }

  video {
    max-height: 40vh;
    max-width: 100%;
  }
`;


export const HeroContent = styled.div`
  z-index: 3;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  
  background-color: #F6F6F4;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* compatibilidade com Safari */

  padding: 2rem;
  border-radius: 20px;
`;

export const SmallTag = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #444;
  background: white;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 600;
  color: #1c1c1c;
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 1.5vw, 1.4rem);
  color: #333;
  max-width: 720px;
  line-height: 1.6;
  text-align: center;
`;
