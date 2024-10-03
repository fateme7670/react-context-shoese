import { makeStyles } from "@material-ui/core";


export default makeStyles((theme)=>({
root:{
background:'#fff',
 padding:'10px 20px',
 borderBottom:'1px dotted #ccc',
 display:'flex',
 flexDirection:'row',
 justifyContent:'space-between',
 textAlign:'center',
width:'100%',
zIndex:15,

},
productimage:{
width:50,

},
delete:{
    display:'flex',
    justifyContent:'space-between'
},
right:{
    width:100
},
left:{
    width:180
},
title:{
    textAlign:'end'
},


}))

