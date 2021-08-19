import React,{useEffect,useState} from 'react'
import {Container,Grow,Grid} from '@material-ui/core';
import Posts from '../Posts/posts.component';
import PostForm from '../PostForm/post-form.component';
import useStyles from './home-page.styles';
import { useDispatch } from 'react-redux';
import {getPosts} from '../../actions/posts.action';

const Home = () => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [currentId,setCurrentId] = useState(null);

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId, dispatch]);

    return (
        <div>
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
        </div>
    )
}

export default Home
