import { Header } from "../../components/Header";
import { EventsCard } from "../../components/EventsCard";

import { Container, TextContent, MainContent, CardContent } from "./styles";

export function Donate() {
  return(
    <Container>
      <Header/>

      <MainContent>
        <TextContent>
          <h1>CONTRIBUA</h1>
          <p>Venha ser um associado mensal. Contribua a partir de R$30,00. Nos ajude a salvar vidas. Fale com a gente. Diga SIM a esse chamado.</p>
        </TextContent>

        <CardContent>
          <EventsCard 
            title="Faça Uma Doação"
            description="Faça uma única doação para apoiar nossos esforços contínuos no resgate e cuidado de animais de estimação necessitados."
          />

          <EventsCard 
            title="Entre Em Contato"
            description="Torne-se um doador mensal e forneça apoio consistente para nos ajudar a salvar mais vidas todos os meses"
          />

          <EventsCard 
            title="Papelada Completa"
            description="Apadrinhe Um animal de estimação sob nossos cuidados e contribua diretamente com suas necessidades até que ele encontre seu lar para sempre."
          />
        </CardContent>
      </MainContent>
    </Container>
  )
}