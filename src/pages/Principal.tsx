import Navbar from "../componets/Navbar/index";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import React from "react";

import Carregando from "../componets/Carregando";
import Megasena from "../componets/Megasena/index";
import Lotofacil from "../componets/Lotofacil";
import Quinasena from "../componets/Quina";
import Principal1 from "../componets/"


export default function Principal() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Rotas />
                <Principal1/>
            </BrowserRouter>
        </>
    )
}

function Rotas() {
    return (
        <Routes>
            <Route path="*" element={<Carregando />} />
            <Route path="/Mega" element={<Megasena />} />
            <Route path="/Loto" element={<Lotofacil />} />
            <Route path="/Quina" element={<Quinasena />} />
        </Routes>
    );
}




