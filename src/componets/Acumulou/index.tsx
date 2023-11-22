import React from "react";
import styled from "styled-components";
import useContexto from "../../hooks/useContexto";
import { mega, quinaStyle, time } from "../../styles/theme";

interface Props {
  theme: any;
}

function Acumulou({ theme }: Props) {
  const { megasena, timemania, quina } = useContexto();
  let Loteria = megasena;

  if (theme === mega) {
    Loteria = megasena;
  }

  if (theme === time) {
    Loteria = timemania;
  }

  if (theme === quinaStyle) {
    Loteria = quina;
  }

  return (
    <>
      <TextoAcumulou theme={theme}>
        {Loteria.quantidadeGanhadores === 0
          ? "ACUMULOU!"
          : `${Loteria.quantidadeGanhadores} Ganhadores`}
      </TextoAcumulou>
    </>
  );
}

const Index = ({ loteria }: { loteria: string }) => {
  const { megasena, timemania, quina } = useContexto();
  let theme = null;
  let Loteria = megasena;

  if (loteria === 'Mega-Sena') {
    theme = mega;
    Loteria = megasena;
  }

  if (loteria === 'Timemania') {
    theme = time;
    Loteria = timemania;
  }

  if (loteria === 'Quina') {
    theme = quinaStyle;
    Loteria = quina;
  }

  return (
    <>
      <Acumulou theme={theme} />
    </>
  );
}

const TextoAcumulou = styled.div`
  padding-left: 10px;
  margin-top: 15px;
  font-size: 1.8rem;
  font-weight: 600;
  color: ${(props) => props.theme?.acumulou};
`;

export default Index;
