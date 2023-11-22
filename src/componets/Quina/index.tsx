
import useContexto from "../../hooks/useContexto";
import trevo from '../../assets/trevo-quina.png'
import { type } from "os";
import React from "react";
import './index.css'

function Quinasena() {
    const { quina } = useContexto();
    return (
        <>
            {
                quina.dataApuracao ?
                    (
                        <div id="quina-bloco-principal">
                            <div>

                                <div id="quina-bloco-loteria">
                                    <img src={trevo} alt="" />
                                    <span id="quina-nome-loteria">Quina-Sena</span>
                                </div>

                                <div id="quina-bloco-estimativa">
                                    <div id="quina-texto-estimativa">
                                        Estimativa de premio do próximo sorteio em {quina.dataProximoConcurso}
                                    </div>
                                    <div id="quina-valor-estimativa">
                                        {
                                            quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })
                                        }
                                    </div>

                                </div>
                            </div>
                            {/* {JSON.stringify(quina)} */}

                            <div id="quina-bloco-direita">
                                <div id="quina-linha-bola">
                                    {
                                        quina.dezenas.map((dezena) => {
                                            if (quina.dezenas != null) {
                                                return (
                                                    <div className="quina-bola">
                                                        <div className="quina-bola-text">{dezena}</div>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })
                                    }

                                </div>
                                <div id="quina-texto-acumulou">
                                    {quina.quantidadeGanhadores === 0
                                        ? "ACUMULOU!"
                                        : `${quina.quantidadeGanhadores} GANHADORES`}
                                </div>
                                <div id="quina-data-concurso">
                                    Concurso {quina.numeroDoConcurso} - {quina.dataPorExtenso}
                                </div>

                            </div>
                        </div>

                    ) : (
                        <div>
                            <h3>Carregando...</h3>
                        </div>
                    )
            }
        </>
    );
}

export default Quinasena;
