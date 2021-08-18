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
    const [currentID,setCurrentID] = useState(null);

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);

    return(
        <Container maxWidth='lg'>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} align='center' variant='h2'>Travel Blog</Typography>
                <img className={classes.image} src={logo} alt="logo" height='60'/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentID={setCurrentID}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <PostForm currentID={currentID} setCurrentID={setCurrentID}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
};


export default App;