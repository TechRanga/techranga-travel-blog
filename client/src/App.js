import React,{useEffect,useState} from 'react';
import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core';
import logo from './resources/images/logo1.png';
import Posts from './components/Posts/posts.component';
import PostForm from './components/PostForm/post-form.component';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { getPosts } from './actions/posts.action';

const App =()=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId,setCurrentId] = useState(null);

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch]);

    return(
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} align='center' variant='h2'>Travel Blog</Typography>
                <img className={classes.image} src={logo} alt="logo" height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container className={classes.mainContainer} justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <PostForm currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
};


export default App;