import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    root:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
      border:'1px solid #eee',
       height:300,
       padding:20,
       position:'relative',
       borderRadius:10
    },
    sliderimg:{
       width:'80%',
       height:'85%'
    },
    rightslider:{
        paddingLeft:50
    },
    discountDiv:{
        position:'absolute',
        left:0,
        top:0,
        background:'red',
        padding:'7px 25px',
        borderBottomRightRadius:50,
        borderTopLeftRadius:10,
        color:'#fff'
    },
    detail:{
        position:'absolute',
        right:0,
        bottom:0,
     
        padding:'10px 15px',
       
    }
}))