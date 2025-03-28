import trabalhista from "@/assets/trabalhista.jpg";
import previdencia from "@/assets/previdencia.jpg";
import outros from "@/assets/outros.jpeg";
import familia from "@/assets/familia.jpg";

import { Text } from "@marcos-vinicius-design-system/react";
import {
  Container,
  Hero,
  Trabalhista,
  Previdencia,
  Familia,
  Outros,
} from "./styles";
import Image from "next/image";
import { HeadingTitle } from "../../styles";

export function Do() {
  return (
    <Container>
      <Hero>
        <HeadingTitle size="3xl">o que fazemos</HeadingTitle>
      </Hero>

      <Trabalhista>
        <Image
          src={trabalhista}
          height={200}
          quality={100}
          priority
          style={{ borderRadius: "4px" }}
          alt="Imagem no Freepik"
        />
        <Text size="xl">Trabalhista</Text>
        <Text size="sm">
          Defendemos os direitos dos trabalhadores e empregadores em questões como rescisões, horas extras e assédio no ambiente de trabalho.
        </Text>
      </Trabalhista>

      <Previdencia>
        <Image
          src={previdencia}
          height={200}
          quality={100}
          style={{ borderRadius: "4px" }}
          priority
          alt="Imagem de pvproductions no Freepik"
        />
        <Text size="xl">Previdenciário</Text>
        <Text size="sm">
          Auxiliamos no acesso a benefícios previdenciários, aposentadorias e revisões de benefícios do INSS para garantir seus direitos.
        </Text>
      </Previdencia>

      <Familia>
        <Image
          src={familia}
          height={200}
          quality={100}
          style={{ borderRadius: "4px" }}
          priority
          alt="Imagem do Freepik"
        />
        <Text size="xl">Família</Text>
        <Text size="sm">
          Atuamos em casos de divórcios, pensão alimentícia, guarda de filhos e inventários, sempre prezando pela segurança e bem-estar da família.
        </Text>
      </Familia>

      <Outros>
        <Image
          src={outros}
          height={200}
          quality={100}
          style={{ borderRadius: "4px" }}
          priority
          alt="Imagem do Freepik"
        />
        <Text size="xl">Outros</Text>
        <Text size="sm">
          Oferecemos suporte em diversas áreas do direito, incluindo cível, criminal, consumidor e empresarial, de acordo com sua necessidade.
        </Text>
      </Outros>
    </Container>
  );
}

