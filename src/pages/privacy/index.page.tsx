import { NextSeo } from "next-seo";
import { Header } from "../home/components/Header";
import { Container, HeadingTitle, Paragraphs } from "./styles";
import { Heading } from "@marcos-vinicius-design-system/react";

export default function Privacy() {
  return (
    <>
      <NextSeo title="Advogado" description="Advogado. Agende seu horário" />
      <Header />
      <Container>
        <HeadingTitle size="2xl">Política de Privacidade</HeadingTitle>

        <Paragraphs>
          Nossa Política de Privacidade esclarece como coletamos, usamos e
          excluímos seus dados pessoais.
        </Paragraphs>

        <Heading>Coleta dos Dados</Heading>
        <Paragraphs>
          Usamos cookies (pequenos arquivos armazenados no seu dispositivo com
          um número aleatório e único) para identificá-lo e proporcionar uma
          experiência personalizada em nossa plataforma. Dessa forma, você
          poderá acessar suas assessorias agendadas e acompanhar seus casos
          através do seu e-mail.
        </Paragraphs>

        <Heading>Uso dos Dados</Heading>
        <Paragraphs>
          Ao concordar em agendar uma assessoria, um evento será adicionado ao
          seu calendário pessoal do Google. Você também concorda em receber
          e-mails informativos sobre suas assessorias.
        </Paragraphs>

        <Heading>Exclusão dos Dados</Heading>
        <Paragraphs>
          Seus dados ficam armazenados pelo período determinado por lei e, após
          isso, serão excluídos. Você também pode solicitar a exclusão por meio
          do nosso e-mail.
        </Paragraphs>
      </Container>
    </>
  );
}
