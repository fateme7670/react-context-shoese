import { Modal, Typography } from '@material-ui/core';
import React,{useState,useEffect,useContext} from 'react';
import useStyles from './style'
import{ Box,Button} from '@mui/material';
 import ReactCodeInput from 'react-code-input';
 import {LoginContext} from '../../context/Logincontext';
 import {SignIn,ForgetPass,SignUp,ChangePass} from '../../constant/Actiontype'

export default function Codemodal() {
  const {state,dispatch}=useContext(LoginContext)

const [counter, setCounter] = useState(50)
const classes= useStyles()
 const codetype=localStorage.getItem('logincodetype')
const confirmCode=()=>{
  if(codetype==='signup'){
//
  }else{
    dispatch({type:ChangePass})
  }
}
useEffect(() => {
 setInterval(() => {
   setCounter((oldcounter)=>oldcounter===0?0:oldcounter-1)
 }, 1000);
}, []);
 const resendCode=()=>{
   setCounter(50)
 }
  return (

     <Modal open={state.code} onClose={()=>{dispatch({type:"closeAll"})}}>
<Box className={classes.root}>
  <Typography varient="body2">Complete Code:</Typography>
  <div className={classes.codediv}>
  <ReactCodeInput 
 inputStyle={{width:35,height:35,margin:10,textAlign:'center'}}
 fields={4} />
  </div>
  {counter!==0?(<Typography className={classes.resend} variant='subtitle2'>
 {counter} sec For Resend the Code
</Typography>):(<Button   fullWidth variant='text'>
<Typography onClick={resendCode} className={classes.resend} variant='subtitle'>
 Resend the Code
</Typography>
</Button>)} 

        <Button onClick={confirmCode} size='meduim' className={classes.paybotton} fullWidth variant='contained'>Confirm Code</Button>
<Button  onClick={()=>{dispatch({type:codetype==='signup'?SignUp:ForgetPass})}} variant='text'>
<Typography  className={classes.label}  variant='subtitle2'>
   Edit Email!!
</Typography>
</Button>
<br/> 
<Button onClick={()=>{dispatch({type:SignIn})}} variant='text'>
<Typography variant='subtitle2'>
  Sign In!
</Typography>
</Button>
</Box>
     </Modal>

  );
}
