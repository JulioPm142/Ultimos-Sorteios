
import useContexto from "../../hooks/useContexto";
import './index.css';
import trevo from '../../assets/trevo-megasena.png'
import { type } from "os";
import styled from 'styled-components';
import { mega } from '../../styles/theme'
import Carregando from "../Carregando";
import React from "react";

function Megasena() {
    const { megasena } = useContexto();
    return (
        <>
            {
                megasena.dataApuracao ?
                    (
                        <div id="mega-bloco-principal">
                            <div id="esquerda inexistente">

                                <div id="mega-bloco-loteria">
                                    <img src={trevo} alt="" />
                                    <span id="mega-nome-loteria">Mega-Sena</span>
                                </div>

                                <div id="mega-bloco-estimativa">
                                    <div id="mega-texto-estimativa">
                                        Estimativa de premio do próximo sorteio em {megasena.dataProximoConcurso}
                                    </div>

                                    <div id="mega-valor-estimativa">
                                        {
                                            megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            
                            <div id="mega-bloco-direita">
                                <div id="mega-linha-bola">
                                    {
                                        megasena.dezenas.map((dezena) => {
                                            if (megasena.dezenas != null) {
                                                return (
                                                    <div className="mega-bola">
                                                        <div className="mega-bola-text">{dezena}</div>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })
                                    }

                                </div>
                                <div id="mega-texto-acumulou">
                                    {megasena.quantidadeGanhadores === 0
                                        ? "ACUMULOU!"
                                        : `${megasena.quantidadeGanhadores} GANHADORES`}
                                </div>
                                <div id="mega-data-concurso">
                                    Concurso {megasena.numeroDoConcurso} - {megasena.dataPorExtenso}
                                </div>

                            </div>
                        </div>

                    ) : (
                        <div>
                            <h3>Carregando...</h3>
                            <Carregando/>
                        </div>
                    )
            }
        </>
    );
}

export default Megasena;
