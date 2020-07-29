import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from 'styled-components';

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';

function pageError() {
  return(
    <Content>
        <img src="https://fontmeme.com/permalink/200729/cd4070e711e18e89fd3aa40b540ca5a5.png" alt="error"/>
    </Content>
  );
  
}

const Content = styled.div`
  display: flex;
  margin: 0 auto;
  color: var(--white);
  padding-top: 10%;
`;


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/cadastro/video' component={CadastroVideo}/>
      <Route path='/cadastro/categoria' component={CadastroCategoria}/>
      <Route component={pageError}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


