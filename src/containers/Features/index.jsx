import { FeaturesSection, SectionTitle, FeaturesGrid, FeatureCard, IconWrapper, FeatureText } from './styles';
import { Camera, UploadCloud, MonitorPlay, ShieldCheck, TimerIcon, LigatureIcon, Download } from 'lucide-react';

const features = [
  {
    icon: <Camera size={32} />,
    text: "Fotos e videos disponibilizadas na galeria do aplicativo"
  },
  {
    icon: <UploadCloud size={32} />,
    text: "Upload fácil via QR Code"
  },
  {
    icon: <ShieldCheck size={32} />,
    text: "Armazenamento em nuvem seguro"
  },
  {
    icon: <MonitorPlay size={32} />,
    text: "Possibilidade de exibição em TVs, monitores e projetores"
  },
  {
    icon: <TimerIcon size={32} />,
    text: "Acompanhamento em tempo real conforme as fotos e videos são enviados"
  },
  {
    icon: <Download size={32} />,
    text: "Download simples e intuitivo das midias"
  }
];

const Features = () => {
  return (
    <FeaturesSection>
      <SectionTitle>Por que escolher o Buquee?</SectionTitle>
      <FeaturesGrid>
        {features.map((item, index) => (
          <FeatureCard key={index}>
            <IconWrapper>{item.icon}</IconWrapper>
            <FeatureText>{item.text}</FeatureText>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesSection>
  );
};

export default Features;
