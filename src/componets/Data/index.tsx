import React from "react";
import styled from "styled-components";
import useContexto from "../../hooks/useContexto";
import { mega, quinaStyle, time } from "../../styles/theme";

interface Props {
  theme: any; // ajuste conforme necessário
  numero: any;
  dataExtenso: any;
}

function Data(props: Props) {
  return (
    <>
      <DataT theme={props.theme}>
        Concurso {props.numero} - {props.dataExtenso}
      </DataT>
    </>
  );
}

const Index = ({loteria}:{loteria:string}) => {

  let theme = null;
    
  const { megasena } = useContexto();
  const { timemania } = useContexto();
  const { quina } = useContexto();
  var Loteria = megasena

  if (loteria=='Mega-Sena'){
      theme = mega;
      Loteria = megasena;
    }
  
    if (loteria=='Timemania'){
      theme = time;
      Loteria = timemania;
    }
  
    if (loteria=='Quina'){
      theme = quinaStyle;
      Loteria = quina;
    }

  return (
    <>
      <Data numero={Loteria.numeroDoConcurso} dataExtenso={Loteria.dataPorExtenso} theme={theme} />
    </>
  );
};

const DataT = styled.div`
  padding-left: 10px;
  margin-top: 15px;
  font-size: 0.9rem;
  color: ${(props) => props.theme.data}; // Corrigido para acessar a propriedade correta do tema
`;

export default Index;
