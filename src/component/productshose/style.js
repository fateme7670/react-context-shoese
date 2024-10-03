import { makeStyles } from "@material-ui/core";

export default makeStyles((theme)=>({
    root:{
        width:'100%'
    },
  titleDiv:{
      position:'relative',
      "&:before":{
          content:"''",
          width:3,
          background:'#a9a9a9',
          height:25,
          position:'absolute',
          top:'10%'
         
      }
  },
  title:{
      paddingLeft:10
  },
  img:{
      width:100,
      height:100,
      '&:hover':{
          transform:'scale(130%)'
      }
  },
  Productshose:{
  border:'1px solid #ccc',
    flexWrap:'wrap',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:5,
    padding:'10px 0',
    borderRadius:5,
    background:'#F4F4F4',
    boxShadow:'1px 2px 5px #ccc',
    textAlign:'center',
  
 
  },
  Men:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
[theme.breakpoints.down('xs')]:{
    overflowY:'scroll'
}
},
menroot:{
    width:'100%'
},
women:{
marginTop:20
},
box:{
    height:'auto'
}
  
}))