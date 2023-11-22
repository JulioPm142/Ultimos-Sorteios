import Navbar from "../componets/Navbar/index";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import React from "react";

import Carregando from "../componets/Carregando";
import Principal1 from "../componets/"


export default function Principal() {
    
    
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Rotas />
            </BrowserRouter>
        </>
    )
}

function Rotas() {
    return (
        <Routes>
            <Route path="*" element={<Carregando />} />
            <Route path="/Mega" element={<Principal1 loteria={"Mega-Sena"} />} />
            <Route path="/Quina" element={<Principal1 loteria={"Quina"} />} />
            <Route path="/Time" element={<Principal1 loteria={"Timemania"} />} />
        </Routes>
    );
}




