import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    root:{
        width:'100%',
        height:60,
        padding:theme.spacing(2),
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        background:"#F4F4F4"
    },
    activemenu:{
        color:theme.palette.text.secondary
    },
    inactivemenu:{
        color:theme.palette.primary
    },
    profileitem:{
        display:'flex'
    }
}))