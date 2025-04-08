import { Heading, Text } from "@marcos-vinicius-design-system/react";
import Image from "next/image";
import {
  Container,
  HeadingTitle,
  Hero,
  Accordion,
  AccordionItem,
  AccordionWrapper,
  Panel,
  Preview,
  Contacts,
  Imagem,
  Gmail,
  Questions,
  Whatsapp,
} from "./styles";

import previewImage from "../../assets/preview.jpg";

import { UserForm } from "./components/UserForm.ts";
import { NextSeo } from "next-seo";
import { Header } from "./components/Header";
import { Do } from "./components/Do";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { useEffect } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <NextSeo title="Advogado" description="Advogado. Agende seu horário" />
      <Header />
      <Container>
        <Preview>
          <Imagem
            src={previewImage}
            quality={100}
            priority
            alt="image of storyset of freepik"
          />
        </Preview>
        <Hero>
          <HeadingTitle size="4xl">
            Defendemos seus direitos com excelência
          </HeadingTitle>
          <Text size="lg">
            Entre em contato e tenha o suporte jurídico de especialistas
            comprometidos com a sua causa.
          </Text>
        </Hero>
      </Container>
      <Do />
      <About />
      <Contact />
      <UserForm />
      <Footer />
    </>
  );
}
