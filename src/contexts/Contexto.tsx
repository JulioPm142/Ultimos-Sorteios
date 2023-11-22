import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";
import loteria from "../services/Loteria";


const Contexto = createContext({} as LoteriaProps)

function Provider({ children }: any) {
    const [megasena, setMegasena] = useState({} as Props)
    const [lotofacil, setLotofacil] = useState({} as Props)
    const [quina, setQuina] = useState({} as Props)
    const [timemania, setTime] = useState({} as Props)

    useEffect(
        function () {
            loteria.get().then((data) => { 
                console.log("data", data);
                setMegasena(data.megasena); 
                setLotofacil(data.lotofacil);
                setQuina(data.quina) 
                setTime(data.timemania)
            })
        }
        , [])
    return (
        <Contexto.Provider value={{ megasena, lotofacil,quina,timemania }}>
            {children}
        </Contexto.Provider>
    );
}



export { Contexto, Provider };