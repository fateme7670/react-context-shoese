import React,{useContext} from 'react';
import Changepassmodal from './changepass';
import Codemodal from './codemodal';
import Forgetpass from './forgetpass';
import Signinmodal from './signinmodal';
import Signupmodal from './signupmodal';
import {LoginContext} from '../../context/Logincontext';

export default function Index() {
  const {state}=useContext(LoginContext)

  return (
    <>
    {state.signin? <Signinmodal />:null}
    {state.forgetpass? <Forgetpass />:null}
   
    {state.code? <Codemodal />:null}
    {state.signup? <Signupmodal />:null}
    {state.changepass? <Changepassmodal />:null}
      
   
    </>
  );
}
