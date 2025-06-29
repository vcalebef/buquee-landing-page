import { HeroContainer, SmallTag, Title, Subtitle, HeroContent, MediaGrid, MediaItem} from "./styles";
import Button from "../../components/Button"; 

const mediaItems = [
  { type: "image", src: "../../../public/assets/image1.jpg" },
  { type: "image", src: "../../../public/assets/image2.jpg" },
  { type: "video", src: "../../../public/assets/video1.mp4" },
  { type: "image", src: "../../../public/assets/image3.jpg" },
  { type: "image", src: "../../../public/assets/image4.jpg" },
  { type: "image", src: "../../../public/assets/image5.jpg" },
  { type: "video", src: "../../../public/assets/video2.mp4" },
  { type: "image", src: "../../../public/assets/image1.jpg" },
  { type: "image", src: "../../../public/assets/image2.jpg" },
  { type: "image", src: "../../../public/assets/image3.jpg" },
  { type: "video", src: "../../../public/assets/video2.mp4" },
  { type: "image", src: "../../../public/assets/image4.jpg" },
  { type: "image", src: "../../../public/assets/image5.jpg" },
  { type: "video", src: "../../../public/assets/video1.mp4" },
  { type: "image", src: "../../../public/assets/image1.jpg" },
  { type: "image", src: "../../../public/assets/image2.jpg" },
  { type: "video", src: "../../../public/assets/video1.mp4" },
  { type: "image", src: "../../../public/assets/image3.jpg" },
  { type: "image", src: "../../../public/assets/image4.jpg" },
  { type: "image", src: "../../../public/assets/image5.jpg" },
  { type: "video", src: "../../../public/assets/video2.mp4" },
  { type: "image", src: "../../../public/assets/image1.jpg" },
  { type: "image", src: "../../../public/assets/image2.jpg" },
  { type: "image", src: "../../../public/assets/image3.jpg" },
  { type: "video", src: "../../../public/assets/video2.mp4" },
  { type: "image", src: "../../../public/assets/image4.jpg" },
  { type: "image", src: "../../../public/assets/image5.jpg" },
  { type: "video", src: "../../../public/assets/video1.mp4" },
  
  // Adicione mais conforme necessário
];

const Hero = () => {
  return (

    <HeroContainer>
      <MediaGrid>
        {mediaItems.map((item, index) => (
          <MediaItem key={index}>
            {item.type === "image" ? (
              <img src={item.src} alt="" />
            ) : (
              <video src={item.src} autoPlay muted loop playsInline />
            )}
          </MediaItem>
        ))}
      </MediaGrid>

      <HeroContent>
        <SmallTag>O app ideal para seu casamento</SmallTag>
        <Title>Guarde memórias incríveis do seu grande dia!</Title>
        <Subtitle>
          O Buquee conecta todos os momentos da sua festa. Fácil de usar, divertido e cheio de significado!
        </Subtitle>
        <Button />
      </HeroContent>

    </HeroContainer>

  );
};

export default Hero;

