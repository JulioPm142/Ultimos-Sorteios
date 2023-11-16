
import React from "react";
import { type } from "os";
import styled from "styled-components";
import Resultado from "../Resultado"
import Acumulou from "../Acumulou"
import Data from "../Data"



const index = () => {
	return (
		<>
			<Direita>
				<Resultado/>
				<Acumulou/>
				<Data/>
			</Direita>
		</>
	);
}

export default index;


const Direita = styled.div`
	margin-left: 50px;

`;