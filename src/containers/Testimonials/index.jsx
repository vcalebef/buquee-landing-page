import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import {
  TestimonialsSection,
  Title,
  CarouselWrapper,
  CarouselTrack,
  TestimonialCard,
  Avatar,
  Name,
  Stars,
  Comment
} from "./styles";

const testimonials = [
  {
    name: "Ana Souza",
    photo: "../../../public/assets/userimg1.jpg",
    stars: 5,
    comment: "O Buquee tornou meu casamento ainda mais especial! Todos os convidados amaram a ideia."
  },
  {
    name: "Carlos Lima",
    photo: "../../../public/assets/userimg2.png",
    stars: 4,
    comment: "Simples, intuitivo e funcional. Recomendo para todos os noivos que querem guardar boas lembranças!"
  },
  {
    name: "Juliana Pires",
    photo: "../../../public/assets/userimg3.jpg",
    stars: 5,
    comment: "Os QR Codes e a exibição das fotos em tempo real foram um sucesso na festa!"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TestimonialsSection>
      <Title>O que estão dizendo sobre o Buquee ?</Title>
      <CarouselWrapper>
        <CarouselTrack $currentIndex={currentIndex}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Avatar src={testimonial.photo} alt={testimonial.name} />
              <Name>{testimonial.name}</Name>
              <Stars>
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} size={18} fill="#FFD700" stroke="#FFD700" />
                ))}
              </Stars>
              <Comment>"{testimonial.comment}"</Comment>
            </TestimonialCard>
          ))}
        </CarouselTrack>
      </CarouselWrapper>
    </TestimonialsSection>
  );
};

export default Testimonials;
