import React, { useState, FormEvent } from 'react';


// Redirecionar o usuario depois que uma ação acontece
import { useHistory } from 'react-router-dom'


import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm(){
    const history = useHistory()

    // O React não fica observando a variável depois de criada
    // Já no state ele fica observando
    // Para usarmos o state, importamos lá em cima no React, { useState }...
    // criamos uma variável recebendo ele, porém precisamos desestruturar pois ele retorna um array...
    // primeira posição é os itens, a segunda posição é uma função que vai substituir o valor da primeira posição
    // então sempre quando formos usar o state, precisamos usar a segunda função, recebendo um spread da primeira "," + item novo 
    // Imutabilidade -> variáveis não modificaveis

    // useState
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])    
    }
    // fim useState


    // useState
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');
    
    function handleCreateClass(e: FormEvent) {

        // Previne evento padrão de formulario (Ex: Reload da página)
        e.preventDefault();
        
        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!')
            
            // Redirecionando o usuário para a Landing
            history.push('/')
        }).catch(() => {
            alert('Erro no cadastro!')
        })
    }


    // setScheduleItemValue(0, 'week_day', '2')
    // setScheduleItemValue(0, 'from', '7:00')

    function setScheduleItemValue(indexItem: number, field: string, value: string) {
        // field vai verificar qual campo está sendo modificado e retornar, no caso se foi o "week_day" ou "from" ou "to"
        const updatedScheduleItems = scheduleItems.map((scheduleItem, i) => {
            if(i === indexItem) {
                return { ...scheduleItem, [field]: value }
            }
            
            return scheduleItem
        }) 

        setScheduleItems(updatedScheduleItems)
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                            <Input 
                                name="name" 
                                label="Nome completo"
                                onChange={(e) => { setName(e.target.value) }}
                            />
                            <Input 
                                name="avatar"  
                                label="Avatar"
                                onChange={(e) => { setAvatar(e.target.value) }}
                            />
                            <Input 
                                name="whatsapp" 
                                label="Whatsapp"
                                onChange={(e) => { setWhatsapp(e.target.value) }}
                            />
                            <Textarea 
                                name="bio" 
                                label="Biografia"
                                onChange={(e) => { setBio(e.target.value) }}
                            />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                            <Select 
                                name="subject" 
                                label="Matéria"
                                value={subject}
                                onChange={(e) => { setSubject(e.target.value) }}
                                options={[
                                    { value: 'Artes', label: 'Artes'},
                                    { value: 'Biologia', label: 'Biologia'},
                                    { value: 'Ciências', label: 'Ciências'},
                                    { value: 'Química', label: 'Química'},
                                    { value: 'Matématica', label: 'Matemática'},
                                    { value: 'Português', label: 'Português'},
                                    { value: 'Geografia', label: 'Geografia'},
                                    { value: 'Física', label: 'Física'},
                                    { value: 'Educação Física', label: 'Educação Física'}
                                ]}/>
                            <Input 
                                name="cost" 
                                label="Custo da sua hora por aula"
                                value={cost}
                                onChange={(e) => { setCost(e.target.value) }}
                                />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return(
                                <div key={index} className="schedule-item">
                                    <Select 
                                        name="week_day" 
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        // onChange -> Ouvir alguma alteração
                                        // primeiro campo, o index que é a posição, segundo é o nome do campo, e por ultimo o valor do campo
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo'},
                                            { value: '1', label: 'Segunda-feira'},
                                            { value: '2', label: 'Terça-feira'},
                                            { value: '3', label: 'Quarta-feira'},
                                            { value: '4', label: 'Quinta-feira'},
                                            { value: '5', label: 'Sexta-feira'},
                                            { value: '6', label: 'Sábado'}
                                        ]}/>
                                    <Input 
                                        name="from" 
                                        label="Das" 
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                        />
                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                        />
                                </div>
                            );
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm