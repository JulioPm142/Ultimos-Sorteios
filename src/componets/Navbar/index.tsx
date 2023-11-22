import React, { useState } from 'react';
import styled from "styled-components";
import { mega, quinaStyle,time } from "../../styles/theme";
import { Link } from 'react-router-dom';

function Navbar() {
  const [selecionado, setSelecionado] = useState('');

  return (
    <>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarItem>
            {selecionado === 'Mega-sena' ? (
              <Selecionado>Megasena</Selecionado>
            ) : (
              <StyledLink to="Mega" className='mega' onClick={() => { setSelecionado('Mega-sena') }}>Megasena</StyledLink>
            )}
          </NavbarItem>

          <NavbarItem>
            {selecionado === 'Time' ? (
              <Selecionado>Timemania</Selecionado>
            ) : (
              <StyledLink to="Time" className='time' onClick={() => { setSelecionado('Time') }}>Timemania</StyledLink>
            )}
          </NavbarItem>

          <NavbarItem>
            {selecionado === 'Quina' ? (
              <Selecionado>Quina</Selecionado>
            ) : (
              <StyledLink to="Quina" className='quina' onClick={() => { setSelecionado('Quina') }}>Quina</StyledLink>
            )}
          </NavbarItem>
        </NavbarWrapper>
      </NavbarContainer>
    </>
  );
}

const NavbarContainer = styled.div`
  width: 100%;
  height: 8%;
  background-color: #33333300;
`;

const NavbarWrapper = styled.div`
  display: flex;
  align-items: row;
  vertical-align: middle;
  padding-left: 3%;
  gap: 2%;
`;

const NavbarItem = styled.div`
  font-size: 30px;
`;

const Selecionado = styled.div`
  font-size: 30px;
  color: #aaa;
  pointer-events: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }

  &.mega {
    color: ${mega.loteria};  
  }

  &.time {
    color: ${time.loteria};
  }

  &.quina {
    color: ${quinaStyle.loteria};  
  }
`;

export default Navbar;
