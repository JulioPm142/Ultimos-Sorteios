
import React from "react";
import { type } from "os";
import styled from "styled-components";
import NomeLote from '../NomeLoteria';
import Estimativa from '../Estimativa';


const index = () => {
	return (
		<>
			<Esquerda>
				<NomeLote />
				<Estimativa/>
			</Esquerda>
		</>
	);
}

export default index;


const Esquerda = styled.div`
`;