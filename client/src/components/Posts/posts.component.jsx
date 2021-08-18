import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/post.component';
import useStyles from './posts.styles';


const Posts=({currentId,setCurrentId})=>{

    const classes = useStyles();
    const posts = useSelector((state)=>state.postReducer);
    return(
        !posts.length?<CircularProgress/>:(
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {
                    posts.map(
                        post=>(
                            <Grid key={post._id} item xs={12} sm={6}>
                                <Post post={post} setCurrentId={setCurrentId}/>
                            </Grid>
                        )
                    )
                }
            </Grid>
        )
    )
};

export default Posts;