import { Container } from "./styles";
import { FaPaw } from "react-icons/fa";
import { StandardButton } from "../StandardButton";


export function EventsCard( {title, description} ) {
  return(
    <Container>
      <FaPaw className="icon"/>
      <h1>{title}</h1>
      <p>{description}</p>
      <StandardButton title="Doe Agora"/>
    </Container>
  )
}