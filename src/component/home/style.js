import { makeStyles } from "@material-ui/core";


export default makeStyles((theme)=>({
    topGrid:{
        margin:'auto',
        marginTop:20
    },
    slider:{
        height:350
    },
    category:{
        height:350,
        paddingLeft:20,
        width:'100%',
        [theme.breakpoints.down('xs')]:{
            paddingLeft:0,
        }
    }
}))