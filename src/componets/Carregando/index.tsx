import { Link } from 'react-router-dom';
import './style.css';
import React, { useState } from 'react';
import Loadding from '../../assets/Loading.gif'

function Carregando() {

    return (
        <>
            <h1>Carregando</h1>
            <img src={Loadding} alt="Carregando" />
        </>

    );
}

export default Carregando;


