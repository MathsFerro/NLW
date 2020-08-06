import React, { TextareaHTMLAttributes } from 'react';

// Adicionando todos textareas que um input ou qualquer outra tag html pode receber,
// adicionar no impor o { InputHTMLAttributes } e dar um extends na interface

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    name: string;
}

// ou no lugar de props colocar { label }, assim n precisa fazer a const la embaixo
const  textarea: React.FC<TextareaProps> = (props) => {
    
    // Utilizando o spread operator, podemos fazer desse jeito para adicionarmos 
    // mais atributos no nosso textarea sem precisar carregar 1 por 1
    const { label, name, ...rest } = props

    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default textarea