import { Container, StepsGrid, StepCard, IconWrapper, Title, Description, QRCodeExample, QRImage, QRLabel, ImageExp } from './styles';
import { CalendarPlus, QrCode, Image, Download, DownloadCloud } from 'lucide-react';

const HowItWorks = () => {
  return (
    <Container>
      <h2>Como funciona</h2>

      <StepsGrid>
        <StepCard>
          <IconWrapper><CalendarPlus size={40} /></IconWrapper>
          <Title>Crie o evento</Title>
          <Description>
            Escolha um plano, cadastre seu casamento e personalize como preferir, em poucos passos. 
          </Description>
          <ImageExp src="../../../public/assets/newEvent.png" alt="Noivos criando novo evento"/>
        </StepCard>

        <StepCard>
          <IconWrapper><QrCode size={40} /></IconWrapper>
          <Title>Compartilhe o QR Code</Title>
          <Description>
            Envie o link de upload para seus convidados ou imprima com nossos templates prontos para exibir no seu casamento.
          </Description>
          <ImageExp src="../../../public/assets/QrCodeImage.png" alt="QrCode"/>
        </StepCard>

        <StepCard>
          <IconWrapper><Image size={40} /></IconWrapper>
          <Title>Exiba as fotos</Title>
          <Description>
            Acompanhe fotos e vídeos enviados em tempo real e exiba tudo durante a festa.
          </Description>
          <ImageExp src="../../../public/assets/imageExibe.png" alt="Noivos e convidados vizualizando as fotos e videos"/>
        </StepCard>

        <StepCard>
          <IconWrapper><DownloadCloud size={40} /></IconWrapper>
          <Title>Realize o download</Title>
          <Description>
            Tenha acesso a suas fotos de acordo com o plano escolhido, e realize o download a qualquer momento.
          </Description>
          <ImageExp src="../../../public/assets/imageFinal.png" alt="Noivos e convidados vizualizando as fotos e videos"/>
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
