import React, { InputHTMLAttributes } from 'react';

// Adicionando todos inputs que um input ou qualquer outra tag html pode receber,
// adicionar no impor o { InputHTMLAttributes } e dar um extends na interface

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

// ou no lugar de props colocar { label }, assim n precisa fazer a const la embaixo
const  Input: React.FC<InputProps> = (props) => {
    
    // Utilizando o spread operator, podemos fazer desse jeito para adicionarmos 
    // mais atributos no nosso input sem precisar carregar 1 por 1
    const { label, name, ...rest } = props

    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input