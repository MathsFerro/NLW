import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img 
                    src="https://avatars1.githubusercontent.com/u/36296757?s=460&u=c5e34be66b433ac753b2d3bd5b3c2531de1dd03c&v=4" 
                    alt="Matheus Ferro"/>
                <div>
                    <strong>Matheus Ferro</strong>
                    <span>Programador</span>
                </div>
            </header>
            <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>

        </article>
    )
}

export default TeacherItem;