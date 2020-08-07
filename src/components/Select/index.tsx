import React, { SelectHTMLAttributes } from 'react';

// Adicionando todos Selects que um Select ou qualquer outra tag html pode receber,
// adicionar no impor o { InputHTMLAttributes } e dar um extends na interface

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    name: string;
    options: Array<{ value: string, label: string }>
}

// ou no lugar de props colocar { label }, assim n precisa fazer a const la embaixo
const  Select: React.FC<SelectProps> = (props) => {
    // Mais opçoes -> React-Select (digitar no google)
    // Utilizando o spread operator, podemos fazer desse jeito para adicionarmos 
    // mais atributos no nosso Select sem precisar carregar 1 por 1
    const { label, name, options, ...rest } = props

    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                
                <option value="" disabled hidden>Seleciona uma opção</option>
                
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}    
            </select> 
        </div>
    );
}

export default Select