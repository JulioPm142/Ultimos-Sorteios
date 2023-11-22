import React from "react";
import styled from "styled-components";
import { mega, quinaStyle, time } from "../../styles/theme";
import trevoL from "../../assets/trevo-lotofacil.png";
import trevoM from "../../assets/trevo-megasena.png";
import trevoQ from "../../assets/trevo-quina.png";
import trevoT from "../../assets/trevo-timemania.png";

interface Props {
  theme: any;
  nome: string;
  trevo: string;
}

function LoteriaNome(props: Props) {
  return (
    <>
      <img src={props.trevo} alt="" />
      <NomeLote theme={props.theme}>{props.nome}</NomeLote>
    </>
  );
}

const Index = ({loteria}:{loteria:string}) => {

  let theme = null;

  if (loteria=='Mega-Sena'){
    theme = mega;
  }

  if (loteria=='Timemania'){
    theme = time;
  }

  if (loteria=='Quina'){
    theme = quinaStyle;
  }

  const trevo = theme === mega ? trevoM : theme === quinaStyle ? trevoQ :theme === time ? trevoT :  trevoL;

  return (
    <>
      <Container>
        <LoteriaNome nome={loteria} theme={theme} trevo={trevo} />
      </Container>
    </>
  );
};

const Container = styled.div`
  display:flex
`;

const NomeLote = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  margin-left: 10px;
  color: ${(props) => props.theme.loteria};
`;

export default Index;
