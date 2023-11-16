import React from "react";
import styled from "styled-components";
import { mega, quina, timemania } from "../../styles/theme";
import trevoL from "../../assets/trevo-lotofacil.png";
import trevoM from "../../assets/trevo-megasena.png";
import trevoQ from "../../assets/trevo-quina.png";

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

const Index = () => {

  const theme = mega;


  const trevo = theme === mega ? trevoM : theme === quina ? trevoQ : trevoL;

  return (
    <>
      <Container>
        <LoteriaNome nome="Mega Sena" theme={theme} trevo={trevo} />
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
