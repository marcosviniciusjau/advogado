import LogoWhatsapp from "@/assets/logo_whatsapp.svg";

import LogoFacebook from "@/assets/logo_facebook.svg";
import LogoGmail from "@/assets/logo_gmail.svg";

import LogoInstagram from "@/assets/logo_instagram.svg";

import { Text } from "@marcos-vinicius-design-system/react";

import { Container, SocialMediaDiv, Imagem, Texto } from "./styles";

import {
  InstagramLogo,
  FacebookLogo,
  WhatsappLogo,
  Envelope,
} from "phosphor-react";
export function SocialMedia() {
  return (
    <Container>
      <SocialMediaDiv>
        <Imagem>
          <Envelope size={52} />
        </Imagem>

        <Texto>
          <a
            href="mailto:mvaraujowebsites@gmail.com"
            style={{ textDecoration: "none" }}
            target="_parent"
          >
            <Text size="xl">Advogado</Text>
          </a>
        </Texto>
      </SocialMediaDiv>
      <SocialMediaDiv>
        <Imagem>
          <WhatsappLogo size={52} />
        </Imagem>
        <Texto>
          <a
            href="https://api.whatsapp.com/send?phone=5514982078002&text=Como+posso+te+ajudar%3F"
            style={{ textDecoration: "none" }}
            target="_parent"
          >
            <Text size="xl">14 98207-8002</Text>
          </a>
        </Texto>
      </SocialMediaDiv>
      <SocialMediaDiv>
        <Imagem>
          <InstagramLogo size={52} />
        </Imagem>

        <Texto>
          <a
            href="https://instagram.com"
            style={{ textDecoration: "none" }}
            target="_parent"
          >
            <Text size="xl">@advogado</Text>
          </a>
        </Texto>
      </SocialMediaDiv>
      <SocialMediaDiv>
        <Imagem>
          <FacebookLogo size={52} />
        </Imagem>

        <Texto>
          <a
            href="https://facebook.com"
            style={{ textDecoration: "none" }}
            target="_parent"
          >
            <Text size="xl">Advogado</Text>
          </a>
        </Texto>
      </SocialMediaDiv>
    </Container>
  );
}
