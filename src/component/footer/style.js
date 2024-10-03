import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    root:{
        width:'100%',
    
        padding:theme.spacing(2),
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        background:"#F4F4F4",
        marginTop:30
    },
    titleroot:{
        position:'relative'
    },
    title:{
        position:'relative',
       marginBottom:10,
 
        '&:before':{
            content:'""',
            position:'absolute',
            width:'20%',
            height:3,
            background:'#ccc',
            top:30
        },
        '&:after':{
            content:'""',
            position:'absolute',
            width:'10%',
            height:3,
            background:'#000',
            top:30,
            left:50
        },
        txt:{
           paddingTop:10
        }
    }
}))