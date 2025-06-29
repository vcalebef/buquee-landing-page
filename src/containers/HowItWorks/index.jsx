import { Container, StepsGrid, StepCard, IconWrapper, Title, Description, QRCodeExample, QRImage, QRLabel } from './styles';
import { CalendarPlus, QrCode, Image } from 'lucide-react';

const HowItWorks = () => {
  return (
    <Container>
      <h2>Como funciona</h2>

      <StepsGrid>
        <StepCard>
          <IconWrapper><CalendarPlus size={40} /></IconWrapper>
          <Title>Crie o evento</Title>
          <Description>
            Cadastre seu evento em poucos passos, escolha um plano e personalize como preferir.
          </Description>
        </StepCard>

        <StepCard>
          <IconWrapper><QrCode size={40} /></IconWrapper>
          <Title>Compartilhe o QR Code</Title>
          <Description>
            Envie por WhatsApp, Instagram ou imprima com nossos templates prontos para exibir no seu evento.
          </Description>
        </StepCard>

        <StepCard>
          <IconWrapper><Image size={40} /></IconWrapper>
          <Title>Exiba as fotos</Title>
          <Description>
            Acompanhe fotos e vídeos enviados em tempo real e exiba tudo durante a festa.
          </Description>
        </StepCard>
      </StepsGrid>

      <QRCodeExample>
        <QRImage src="../../../public/assets/buquee.png" alt="Exemplo de QR Code" />
        <QRLabel>Exemplo de QR Code</QRLabel>
      </QRCodeExample>
    </Container>
  );
};

export default HowItWorks;
