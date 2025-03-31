import { Text } from "@marcos-vinicius-design-system/react";
import { Address, Contact, Container, Site } from "./styles";
import { SocialMediaFooter } from "../SocialMediaFooter";
import Logo from "@/assets/logo.png";
import Image from "next/image";
export function Footer() {
  const date = new Date().getFullYear();
  return (
    <Container>
      <Contact>
        <Text>Contato</Text>
        <SocialMediaFooter />
      </Contact>
      <Site>
        <Image
          src={Logo}
          alt="Logo"
          width={100}
          height={100}
          style={{
            marginRight: 40,
          }}
        />
        <Text>home</Text>
        <Text>sobre</Text>
        <Text>contato</Text>
        <a href="/privacy" style={{textDecoration: 'none'}}>
        <Text>politica de privacidade</Text>
        </a>
      </Site>
      <Address>
        <Text>Rua do Centro, 1235</Text>
      </Address>
    </Container>
  );
}
