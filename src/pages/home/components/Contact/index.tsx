import previewImage from "@/assets/contato.png";
import { Container, Preview, Imagem, Hero } from "./styles";
import { HeadingTitle } from "../../styles";
import { SocialMedia } from "../SocialMedia";

export function Contact() {
  return (
    <Container id="contact-session">
      <Preview>
        <Imagem src={previewImage} quality={100} priority alt="" />
      </Preview>
      <Hero>
        <HeadingTitle size="2xl"> Contato: </HeadingTitle>
        <SocialMedia />
      </Hero>
    </Container>
  );
}
