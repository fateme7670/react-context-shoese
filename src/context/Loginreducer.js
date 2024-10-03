import {SignIn,SignUp,Code,ChangePass,ForgetPass} from '../constant/Actiontype'


function reducer(state,action){
    switch (action.type) {
        case SignIn:
       return{
        signin:true,
        signup:false,
        forgetpass:false,
        code:false,
        changepass:false
       }
        case SignUp:
       return{
        signin:false,
        signup:true,
        forgetpass:false,
        code:false,
        changepass:false
       }
        case ForgetPass:
       return{
        signin:false,
        signup:false,
        forgetpass:true,
        code:false,
        changepass:false
       }
        case Code:
       return{
        signin:false,
        signup:false,
        forgetpass:false,
        code:true,
        changepass:false
       }
        case ChangePass:
       return{
        signin:false,
        signup:false,
        forgetpass:false,
        code:false,
        changepass:true
       }
    
        default:
        return{
            signin:false,
            signup:false,
             forgetpass:false,
             code:false,
             changepass:false
        }
    }
}
export default reducer