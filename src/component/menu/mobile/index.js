import React,{useState} from 'react'
import useStyles from './style'
import { Grid } from '@material-ui/core'
import logo from '../../../assest/image/image 2.png'
import ShoppingIcon from '../shopping'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded'
import Menuitem from './Menuitem'

export default function Index() {

  const classes= useStyles()
  const [open, setOpen] = useState(false);
  const toggelopen=()=>{
    setOpen(!open)
  }
  return (
    <Grid item container xs={12} className={classes.root}>
  
    <Grid item xs={6} className={classes.left} onClick={toggelopen}>
<WidgetsRoundedIcon />
    </Grid>
    <Grid item xs={6} className={classes.right}>
    <img src={logo} className={classes.logo}  alt="online shoes"/>
    <ShoppingIcon />
    </Grid>
    <SwipeableDrawer onOpen={toggelopen} open={open} onClose={toggelopen}>
     <Menuitem />
     </SwipeableDrawer>
    </Grid>
  );
}
