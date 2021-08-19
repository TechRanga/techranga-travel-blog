import React from 'react';
import {Container} from '@material-ui/core';
import NavBar from './components/NavBar/nav-bar.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/home-page.component';
import Auth from './components/Auth/auth.component';
const App =()=>{

    return(
        <BrowserRouter>
            <Container maxWidth='lg'>
                <NavBar /> 
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route pauth='/auth' exact component={Auth}/>
                </Switch> 
            </Container>
        </BrowserRouter>
        
    )
};


export default App;