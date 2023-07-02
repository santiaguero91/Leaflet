import { About, Contact, MainDiv } from "./FooterStyle";

export default function Footer() {
  return (
    <MainDiv>
      <About>
        <h2>ACERCA DE GERMINAR</h2>
        <p>
          Somos una OSC sin fines de lucro, con el principal objetivo de
          concientizar sobre la importancia del cuidado del ambiente y
          preservación de la biodiversidad. Proponemos soluciones a través de
          acciones junto a instituciones educativas, empresas, gobiernos,
          trabajando junto con la comunidad y en alianza con otras
          organizaciones para lograr vivir en un ambiente más saludable.
        </p>
      </About>
      <Contact>
      <h2>CONTACTANOS</h2>
      <p> germinar-ong</p>
      <p>@germinarong</p>
      <p>info@germinar.org.ar</p>
      <p>Canal Institucional</p>
      <p>011 3358-2200</p>
      </Contact>
    </MainDiv>
  );
}

