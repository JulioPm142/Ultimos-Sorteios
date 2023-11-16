import { Link } from 'react-router-dom';
import './style.css';
import React, { useState } from 'react';


function Navbar() {
    const [selecionado, setSelecionado] = useState('')

    return (
        <>
            <div className='NavbarContainer'>
                <div className='Navbar'>
                    <div className='NavbarItem'>
                        {selecionado == 'Mega-sena' ? (
                            <Link to="Mega" className='selecionado'>Megasena</Link>
                        ) : <Link to="Mega" className='mega' onClick={() => { setSelecionado('Mega-sena') }}>Megasena</Link>}
                    </div>

                    <div className='NavbarItem'>
                        {selecionado == 'Loto' ? (
                            <Link to="Loto" className='selecionado'>Lotofácil</Link>
                        ) : <Link to="Loto" className='loto' onClick={() => { setSelecionado('Loto') }}>Lotofácil</Link>}
                    </div>
                    <div className='NavbarItem'>
                        {selecionado == 'Quina' ? (
                            <Link to="Quina" className='selecionado'>Quina</Link>
                        ) : <Link to="Quina" className='quina' onClick={() => { setSelecionado('Quina') }}>Quina</Link>}
                    </div>
                </div>
            </div>
        </>

    );
}

export default Navbar;


