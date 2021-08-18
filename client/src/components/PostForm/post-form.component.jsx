import React,{useState,useEffect} from 'react';
import { TextField,Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './post-form.styles';
import {useDispatch, useSelector} from 'react-redux';
import { createPost, updatePost } from '../../actions/posts.action';

const PostForm=({currentId, setCurrentId})=>{
    const classes = useStyles();
    const [postData,setPostData] = useState({creator:'',title:'',message:'',tags:'',selectedFile:''});
    const post = useSelector((state)=> currentId? state.postReducer.find((p)=>p._id===currentId):null);
    const dispatch = useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,postData));
        }else{
            dispatch(createPost(postData));
        }
        
        clearForm();
    };

    const clearForm=()=>{
        setCurrentId(null);
        setPostData({creator:'',title:'',message:'',tags:'',selectedFile:''});
    }

    useEffect(()=>{
        if(post) setPostData(post);
    },[post])

    return(
       <Paper className={classes.paper}>
           <form autoComplete="off" noValidate className={ `${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId?'Editing':'Creating'} a Post</Typography>
                <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})}/>
                <TextField name='title' variant='outlined' label='Title' fullWidth value={postData.title} onChange={(e)=>setPostData({...postData,title:e.target.value})}/>
                <TextField name='message' variant='outlined' label='Message' fullWidth value={postData.message} onChange={(e)=>setPostData({...postData,message:e.target.value})}/>
                <TextField name='tags' variant='outlined' label='Tags' fullWidth value={postData.tags} onChange={(e)=>setPostData({...postData,tags:e.target.value.split(",")})}/>
                <div className={classes.fileInput}>
                    <FileBase type='file' multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})} />
                </div>
                <Button className={classes.submitButton} variant='contained' color="primary" size='large' type='submit' fullWidth>Submit Post</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clearForm} fullWidth>Clear</Button>
           </form>
       </Paper>
    )
};

export default PostForm;