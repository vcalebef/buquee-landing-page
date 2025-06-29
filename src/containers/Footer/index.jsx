import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterLink,
  SocialIcons,
  SocialIcon,
  Copy
} from "./styles";
import { Instagram, Mail, Phone, ShieldCheck, FileText } from "lucide-react";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>

        <FooterColumn>
          <FooterTitle>Redes Sociais</FooterTitle>
          <SocialIcons>
            <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} />
              Instagram
            </SocialIcon>
            <SocialIcon href="https://wa.me/seunumero" target="_blank" rel="noopener noreferrer">
              <Phone size={20} />
              WhatsApp
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Contato</FooterTitle>
          <FooterLink href="mailto:contato@buquee.com.br">
            <Mail size={18} />
            contato@buquee.com.br
          </FooterLink>
          <FooterLink href="tel:+550000000000">
            <Phone size={18} />
            +55 (00) 00000-0000
          </FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Legal</FooterTitle>
          <FooterLink href="/privacidade">
            <ShieldCheck size={18} />
            Política de Privacidade
          </FooterLink>
          <FooterLink href="/termos">
            <FileText size={18} />
            Termos de Uso
          </FooterLink>
        </FooterColumn>

      </FooterContent>

      <Copy>© {new Date().getFullYear()} Buquee. Todos os direitos reservados.</Copy>
    </FooterContainer>
  );
};

export default Footer;
