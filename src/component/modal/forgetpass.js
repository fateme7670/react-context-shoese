import { Modal, Typography } from '@material-ui/core';
import React,{useContext} from 'react';
import useStyles from './style'
import{ Box,Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import {LoginContext} from '../../context/Logincontext';
import {SignUp,SignIn,Code} from '../../constant/Actiontype'

export default function Forgetpass() {
    const {state,dispatch}=useContext(LoginContext)
const classes= useStyles()
 
const forgetPass=()=>{
  localStorage.setItem('logincodetype','forgetpass')

  dispatch({type:Code})
}

  return (

     <Modal open={state.forgetpass} onClose={()=>{dispatch({type:"closeAll"})}}>
<Box className={classes.root}>
 <TextField   classes={{ root: classes.user }} inputProps={{className: classes.input }} fullWidth label="Email" color="primary" focused size='small' />
 
        <Button onClick={forgetPass} size='meduim' className={classes.paybotton} fullWidth variant='contained' color='primary'>Forget Password</Button>
<Button onClick={()=>{dispatch({type:SignIn})}} variant='text'>
<Typography className={classes.label}  variant='subtitle2'>
   Back To Sign In Form!
</Typography>
</Button>
<br/> 
<Button onClick={()=>{dispatch({type:SignUp})}} variant='text'>
<Typography variant='subtitle2'>
  Sign Up!
</Typography>
</Button>
</Box>
     </Modal>

  );
}
