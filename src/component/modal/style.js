import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    root:{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        background: '#F4F4F4 !important',
        boxShadow: 24,
        padding: 15,
        borderRadius:10,
        "&:focus":{
            outline:"none"
        }
    },
    user:{
        margin:'15px 0 !important'  ,

    },
    pass:{
        padding:'15px 0 !important'   
    },
   
    label:{
        margin:'10px 0 0 0 !important'  
    },
    codediv:{
        display:'flex',
        justifyContent:'center',
        alignItem:'center',
        flexDirection:'row',
        margin:'10px 0 0 0'
    },
    resend:{
textAlign:'center',
marginBottom:10
    }
}))