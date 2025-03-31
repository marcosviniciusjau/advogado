import previewImage from "@/assets/sobre.png";
import { Text } from "@marcos-vinicius-design-system/react";
import { Container, Hero, Preview, Imagem } from "./styles";
import { HeadingTitle } from "../../styles";

export function About() {
  return (
    <Container>
      <Preview>
        <Imagem
          src={previewImage}
          quality={100}
          priority
          alt="Nossa equipe jurídica em ação"
        />
      </Preview>
      <Hero>
        <HeadingTitle size="2xl">Sobre</HeadingTitle>
        <Text size="md">
          Nosso escritório de advocacia é referência em soluções jurídicas
          estratégicas, oferecendo suporte personalizado para pessoas físicas e
          jurídicas. Com uma equipe altamente qualificada, atuamos com
          transparência, ética e compromisso para garantir os melhores
          resultados aos nossos clientes.
        </Text>
        <Text size="md">
          Acreditamos que cada caso é único e, por isso, buscamos compreender a
          fundo as necessidades de nossos clientes. Nossa abordagem é focada na
          análise detalhada de cada situação, proporcionando um atendimento
          humanizado e eficiente para a resolução de conflitos e defesa de
          direitos.
        </Text>
        <Text size="md">
          Com anos de experiência no setor, combinamos conhecimento técnico com
          uma atuação ágil e eficaz. Estamos sempre atualizados com as mudanças
          na legislação para oferecer orientações seguras e assertivas. Seja na
          esfera trabalhista, previdenciária, familiar ou empresarial, estamos
          prontos para representar seus interesses com excelência.
        </Text>
      </Hero>
    </Container>
  );
}
