import { Modal, Typography } from '@material-ui/core';
import React,{useState,useContext} from 'react';
import useStyles from './style'
import{ Box,Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import {LoginContext} from '../../context/Logincontext';
import {SignIn,Code} from '../../constant/Actiontype'


export default function Signupmodal() {
  const {state,dispatch}=useContext(LoginContext)
const classes= useStyles()
const [showPassword, setShowPassword] =useState(true);
const signUp=()=>{
  localStorage.setItem('logincodetype','signup')
  dispatch({type:Code})
}
const handleClickShowPassword = () => setShowPassword((show) => !show);

 
  return (

     <Modal open={state.signup} onClose={()=>{dispatch({type:"closeAll"})}}>
<Box className={classes.root}>
<TextField   classes={{ root: classes.user }} inputProps={{className: classes.input }} fullWidth label="User Name" color="primary" focused size='small' />
<TextField   classes={{ root: classes.user }} inputProps={{className: classes.input }} fullWidth label="Email" color="primary" focused size='small' />
<FormControl  size='small' focused className={classes.pass} fullWidth variant="outlined">
          <InputLabel focused fullWidth htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
<FormControl  size='small' focused className={classes.pass} fullWidth variant="outlined">
          <InputLabel focused fullWidth htmlFor="outlined-adornment-password">Repeat Password</InputLabel>
          <OutlinedInput
 
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button onClick={signUp} size='meduim' className={classes.paybotton} fullWidth variant='contained' color='primary'>Sign up</Button>
        <Button onClick={()=>{dispatch({type:SignIn})}} variant='text'>
<Typography className={classes.label}  variant='subtitle2'>
    Sign In!
</Typography>
</Button>
</Box>
     </Modal>

  );
}
