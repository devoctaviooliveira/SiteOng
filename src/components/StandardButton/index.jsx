import { Container } from "./styles";

export function StandardButton( {className, title} ) {
  return(
    <Container className={className}>
      <p>{title}</p>
    </Container>
  )
}