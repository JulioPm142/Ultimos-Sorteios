
import React from "react";
import { type } from "os";
import styled from "styled-components";
import NomeLote from '../NomeLoteria';
import Estimativa from '../Estimativa';


const index = ({loteria}:{loteria:string}) => {
	return (
		<>
			<Esquerda>
				<NomeLote loteria={loteria}/>
				<Estimativa loteria={loteria}/>
			</Esquerda>
		</>
	);
}

export default index;


const Esquerda = styled.div`
`;