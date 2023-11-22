
import React from "react";
import { type } from "os";
import styled from "styled-components";
import Resultado from "../Resultado"
import Acumulou from "../Acumulou"
import Data from "../Data"



const index = ({loteria}:{loteria:string}) => {
	return (
		<>
			<Direita>
				<Resultado loteria={loteria}/>
				<Acumulou loteria={loteria}/>
				<Data loteria={loteria}/>
			</Direita>
		</>
	);
}

export default index;


const Direita = styled.div`
	margin-left: 50px;

`;