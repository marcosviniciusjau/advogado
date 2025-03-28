import { Text } from "@marcos-vinicius-design-system/react";
import { Address, Contact, Container, Site } from "./styles";
export function Footer() {
  const date = new Date().getFullYear();
  return (
    <Container>
      <Contact>
        <Text>contatos</Text>
      </Contact>
      <Site>
        <Text>caminhos</Text>
      </Site>
      <Address>
        <Text>endereco</Text>
      </Address>
    </Container>
  );
}
