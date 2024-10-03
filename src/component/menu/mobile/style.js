import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    root:{
        width:'100%',
        height:60,
        padding:theme.spacing(2),
        display:'flex',
        flexDirection:'row',

        justifyContent:'center',
        background:"#F4F4F4"
    },
    activemenu:{
        color:'rgba(0, 0, 0, 0.6)',
    },
    inactivemenu:{
        color:'#a29b9b'
    },
   left:{
    textAlign:'left',

    cursor:'pointer'

   },
   right:{
justifyContent:'end',
    display:'flex',
    textAlign:'right',
    paddingRight:15,
    height:'100%',
    
   },
   logo:{
    
       marginTop:3
   },
   menuitemroot:{
       height:'100%',
       background:'#F4F4F4 !important',
       width:200,
  textAlign:'center',
  display:'flex',
  flexDirection:'column'
   },
   top:{
       height:'85vh'
   },
   down:{
       height:'15vh',
       padding:5
   },
   paybotton:{
    color:theme.palette.primary.contrastText
},
logobottom:{
    paddingTop:10
}
}))