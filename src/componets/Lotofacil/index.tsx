import trevo from '../../assets/trevo-lotofacil.png';
import useContexto from "../../hooks/useContexto";
import './index.css'
import Carregando from '../Carregando';
import React from 'react';



function Lotofacil() {
    const { lotofacil } = useContexto();

return (
    <>
        {
            lotofacil.dataApuracao ?
                (
                    <div id="loto-bloco-principal">
                        <div>

                            <div id="loto-bloco-loteria">
                                <img src={trevo} alt="" />
                                <span id="loto-nome-loteria">Loto-Facil</span>
                            </div>
                            <div id="loto-bloco-estimativa">
                                <div id="loto-texto-estimativa">
                                    Estimativa de premio do próximo sorteio em {lotofacil.dataProximoConcurso}
                                </div>
                                <div id="loto-valor-estimativa">
                                    {   
                                        lotofacil.valorEstimadoProximoConcurso.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })
                                    }
                                </div>

                            </div>
                        </div>


                        <div id="loto-bloco-direita">
                            <div id="loto-linha-bola">
                                {
                                    lotofacil.dezenas.map((dezena) => {
                                        if (lotofacil.dezenas != null) {
                                            return (
                                                <div className="loto-bola">
                                                    <div className="loto-bola-text">{dezena}</div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })
                                }

                            </div>
                            <div id="loto-texto-acumulou">
                                {lotofacil.quantidadeGanhadores === 0
                                    ? "ACUMULOU!"
                                    : `${lotofacil.quantidadeGanhadores} GANHADORES`}
                            </div>
                            <div id="loto-data-concurso">
                                Concurso {lotofacil.numeroDoConcurso} - {lotofacil.dataPorExtenso}
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

export default Lotofacil;
