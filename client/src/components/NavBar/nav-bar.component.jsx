import React,{useState,useEffect} from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import {Link, useHistory, useLocation} from 'react-router-dom';
import useStyles from './nav-bar.styles';
import logo from '../../resources/images/logo1.png';
import { useDispatch } from 'react-redux';

const NavBar=()=>{

    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    useEffect(()=>{
        //const token = user?.token;
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location]);

    const logout=()=>{
        dispatch({type:'LOGOUT'});
        setUser(null);
        history.push('/');
    }

    return(
        <AppBar className={classes.appBar} position='static' color='inherit'>
            <div className='brand-container'>
                <img className={classes.image} src={logo} alt="logo" height='60'/>
                <Typography className={classes.heading} variant='h4' component={Link} to='/'>Post It!</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {
                    user?
                    (
                        <div className={classes.profile}>
                            <Avatar className={classes.avatar} alt={user.result.name} src={user.result.image}>{user.result.name.charAt(0)}</Avatar>
                            <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                            <Button variant='contained' className='logout' color='secondary' onClick={logout}>Logout</Button>
                        </div>
                    ):(
                        <div>
                            <Button component={Link} to='/auth' variant='contained' className={classes.login} color='primary'>Login</Button>
                        </div>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;