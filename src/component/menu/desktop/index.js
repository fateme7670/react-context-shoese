import { Button,Grid } from '@material-ui/core';
import React from 'react';
import useStyles from './style'
import logo from '../../../assest/image/image 2.png'
import { Link,useLocation } from 'react-router-dom';
import ShoppingIcon from '../shopping'
import Profile from '../profile'

export default function Index() {
const location=useLocation()
const path=location.pathname
  const classes= useStyles()
  return (



<Grid container item   xs={12} className={classes.root}>
<Grid item md={1} xs={1}>
  <img src={logo}  alt="online shoes"/>
</Grid>
<Grid item md={9} xs={9}>
<Button className={path === "/" ? classes.activemenu: classes.inactivemenu} 
component={Link} 
to='/'>Home</Button>
<Button className={path === "/products" ? classes.activemenu: classes.inactivemenu} 
component={Link} 
to='/products'>Products</Button>
<Button className={path === "/men" ? classes.activemenu: classes.inactivemenu} 
component={Link} 
to='/men'>Men</Button>

<Button className={path === "/Woman" ? classes.activemenu: classes.inactivemenu} 
component={Link} 
to='/Woman'>Woman</Button>
<Button className={path === "/contactus" ? classes.activemenu: classes.inactivemenu} 
component={Link} 
to='/contactus'>conntact us</Button>
</Grid>
<Grid className={classes.profileitem} item md={1} xs={1}>
<ShoppingIcon />
<Profile />
</Grid>
</Grid>

  );
}
