import React from 'react';

// BrowserRouter -> um tipo de roteamento
// Route -> Vai significar cada uma das rotas dentro da aplicação
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

// path -> endereço da url
// component -> Mostra o componente
// exact -> força a rota ser exatamente o que está sendo passado no path
// propriedade -> passar informações para outra tela
function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>

        </BrowserRouter>
    )
}

export default Routes;