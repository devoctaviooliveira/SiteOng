import { Container } from "./styles";
import { FaPaw } from "react-icons/fa";


export function EventsCard( {title, description} ) {
  return(
    <Container>
      <FaPaw className="icon"/>
      <h1>{title}</h1>
      <p>{description}</p>
    </Container>
  )
}