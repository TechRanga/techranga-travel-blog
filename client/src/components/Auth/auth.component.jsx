import React,{useState} from 'react'
import { Avatar, Container, Paper, Typography, Grid, Button } from '@material-ui/core';
import {LockOutlined} from '@material-ui/icons';
import {GoogleLogin} from 'react-google-login';
import Icon from './Icon/Icon.component';
import useStyles from './auth.styles.js';
import InputControl from './InputControl/input-control.component.jsx';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';


const Auth = () => {

    const classes = useStyles();
    const [isSignUp,setIsSignUp] = useState(false)
    const [showPassword,setShowPassword]=useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit=()=>{};
    const handleChange=()=>{};

    const handleShowPassword=()=>setShowPassword((prevValue)=>!prevValue);

    const switchMode=()=>{
        setIsSignUp((prevValue)=>!prevValue);
    }

    const googleSuccess=async (res)=>{
        const result = res?.profileObj;
        const token = res?.tokenId;
        try{
            dispatch({type:'AUTH',payload:{result,token}});
            history.push('/');
        }catch(error){
            console.log(error);
        }
    };

    const googleFailure=(error)=>{
        console.log("Google Sign Unsuccessful");
    }




    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={5}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography variant='h5'>{isSignUp?'Sign Up':'Sign in'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        {
                            isSignUp &&(
                                <>
                                    <InputControl name='firstName' label='First Name' handleChange={handleChange} autoFocus half />
                                    <InputControl name='lastName' label='Last Name' handleChange={handleChange} half />
                                </>
                            )
                        }
                        <InputControl name='email' label='Email' type='email' handleChange={handleChange} />
                        <InputControl name='password' label='Password' type={showPassword?'text':'password'} handleChange={handleChange} handleShowPassword={handleShowPassword} fullWidth/>
                        {
                            isSignUp && <InputControl name='cPassword' label='Confirm Password' type='password' handleChange={handleChange} fullWidth/>
                        }
                    </Grid>
                    <Grid item>
                        <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
                            {isSignUp?'Sign Up':'Sign In'}
                        </Button>
                    </Grid>
                    <Grid item>
                        <GoogleLogin 
                            clientId='601373165147-ld0ggmmqn0a66krlbtdcqrbrdctp0ssu.apps.googleusercontent.com'
                            render={(renderProps)=>(
                                <Button className={classes.googleButton} 
                                color='primary' 
                                fullWidth 
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon/>}
                                variant='contained'
                                >
                                    SIGN IN WITH GOOGLE
                                </Button>
                            )}
                            onSuccess={googleSuccess}
                            onFailure={googleFailure}
                            cookiePolicy='single_host_origin'
                        />
                    </Grid>
                    
                    <Grid container justifyContent='center'>
                        <Grid item>
                            <Button color='secondary' onClick={switchMode}>
                                {
                                    isSignUp?"Already have an Account? Sign in":
                                    "Don't have an account? Sign Up"
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
