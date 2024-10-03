import { makeStyles } from "@material-ui/core";


export default makeStyles((theme)=>({
    root:{
        background:'#F4F4F4',
        display:'flex',
        padding:'9px 25px',
        alignItems:'center',
        borderRadius:10,
        boxShadow:'1px 2px 3px #ccc',
        marginBottom:10,
        position:'relative',
        width:'100%'
    },
    image:{
        width:85
    },
    title:{
        paddingLeft:30
    },
    detail:{
        position:'absolute',
        right:0,
        bottom:0,
     
        padding:'10px 15px',
       
    }
}))