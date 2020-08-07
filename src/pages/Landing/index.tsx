import React, { useState, useEffect } from 'react';

// Import para o href dos botões, para evitar reloading da página quando muda de pagina
import { Link } from 'react-router-dom'; 
// Substitui o href="/study" para Link to="/study"

import api from '../../services/api';


import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

// Quando o arquivo é dentro da pasta node_modules, não precisa do ./ no import

function Landing() {

    const [totalConnections, setTotalConnections] = useState(0)

    // useEffect -> É uma função, o primeiro parametro é uma função, que vai conter o api.get etc.. 
    // o segundo parametro é um array de dependências que basicamente, vai falar quando será disparado o primeiro paramêtro (função) e
    // sempre que ela mudar, vai executar a primeira função
    useEffect(() => {
        api.get('connections')
            .then(res => {
                const { total } = res.data

                setTotalConnections(total)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos" 
                    className="hero-image"
                    />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar Aula"/>
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas 
                    <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;