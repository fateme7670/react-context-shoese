import { makeStyles } from "@material-ui/core";
import theme from "../../../theme/theme";

export default makeStyles(()=>({
root:{
    position:'relative',
    height:'100%',

zIndex:15
},
Shoppingdetail:{
    position:'absolute',
    right:0,
    width: 280

},
total:{
display:'flex',
justifyContent:'space-between',
 padding:'10px 20px',
 borderBottom:'1px dotted #ccc',
 background:'#fff'
},
pay:{
    padding:'10px 20px',
    width:'100%',
    background:'#fff',
},
paybotton:{
    color:theme.palette.primary.contrastText
}
}))

