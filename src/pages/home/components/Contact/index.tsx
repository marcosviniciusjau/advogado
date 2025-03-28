import previewImage from "@/assets/contato.png";
import { Text } from "@marcos-vinicius-design-system/react";
import {
  Container,
  Preview,
  Imagem,
  Hero,
} from "./styles";
import { HeadingTitle } from "../../styles";
import { SocialMedia } from "../SocialMedia";
 
export function Contact() {
  return (
    <Container>
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

