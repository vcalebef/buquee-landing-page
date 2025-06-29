import { CheckCircle, XCircle } from "lucide-react";
import {
  PricingContainer,
  Title,
  PlansWrapper,
  PlanCard,
  PlanName,
  FeatureItem,
  IconWrapper,
  Price,
  Button
} from "./styles";

const plans = [
  {
    name: "Plano Básico",
    features: [
      { label: "5GB de armazenamento", available: true },
      { label: "7 dias de uso", available: true },
      { label: "Backup por 15 dias", available: false },
      { label: "Templates para QR Code", available: false },
    ],
    price: "R$29,90"
  },
  {
    name: "Plano Premium",
    features: [
      { label: "100GB de armazenamento", available: true },
      { label: "30 dias de uso", available: true },
      { label: "Backup por 90 dias", available: true },
      { label: "Templates para QR Code", available: true },
    ],
    price: "R$89,90"
  }
];

const Pricing = () => {
  return (
    <PricingContainer>
      <Title>Escolha seu plano</Title>

      <PlansWrapper>
        {plans.map((plan, idx) => (
          <PlanCard key={idx}>
            <PlanName>{plan.name}</PlanName>

            {plan.features.map((feature, i) => (
              <FeatureItem key={i}>
                <IconWrapper available={feature.available}>
                  {feature.available ? <CheckCircle size={20} /> : <XCircle size={20} />}
                </IconWrapper>
                {feature.label}
              </FeatureItem>
            ))}

            <Price>{plan.price}</Price>
            <Button>Experimente agora</Button>
          </PlanCard>
        ))}
      </PlansWrapper>
    </PricingContainer>
  );
};

export default Pricing;
