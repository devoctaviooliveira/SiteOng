import { Header } from "../../components/Header";
import { EventsCard } from "../../components/EventsCard";

import { Container, TextContent, MainContent } from "./styles";

export function Eventos() {
  return(
    <Container>
      <Header/>

      <MainContent>
        <TextContent>
          <h1>EVENTOS DA ONG</h1>
          <p>Venha ser um associado mensal. Contribua a partir de R$30,00. Nos ajude a salvar vidas. Fale com a gente. Diga SIM a esse chamado.</p>
        </TextContent>

        <EventsCard 
          title="Encontre Seu Par"
          description="Explore nossas redes sociais e encontre o animal de estimação perfeito que rouba seu coração."
        />

        <EventsCard 
          title="Entre Em Contato"
          description="Entre em contato com o IMG para conhecer o animal de estimação e ver se é compatível."
        />

        <EventsCard 
          title="Papelada Completa"
          description="Preencha o formulário para finalizar a adoção. e traga seu novo amigo para casa."
        />

        <EventsCard 
          title="Seja Associado"
          description="se não puder adotar, seja um associado contribuinte do iMG."
        />
      </MainContent>
    </Container>
  )
}