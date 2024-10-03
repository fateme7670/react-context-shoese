import React from 'react';
import { Link,useLocation } from 'react-router-dom'
import useStyles from './style'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { Typography } from '@mui/material';
import logo from '../../../assest/image/image 2.png'
import { Grid,Button } from '@material-ui/core';

export default function Menuitem() {
    const location=useLocation()
    const path=location.pathname
    const classes= useStyles()
  return (
    <Grid item container className={classes.menuitemroot}>
  <Grid className={classes.top}>
  <List>
    
    <ListItem component={Link} disablePadding to='/'   className={path === "/" ? classes.activemenu: classes.inactivemenu}>
      <ListItemButton>
        <ListItemText>
            <Typography variant='body2'>Home</Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
    <Divider />
    <ListItem component={Link} disablePadding to='/products'   className={path === "/products" ? classes.activemenu: classes.inactivemenu}>
      <ListItemButton>
        <ListItemText>
            <Typography variant='body2'>Products</Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
    <Divider />
    <ListItem component={Link} disablePadding to='/men'   className={path === "/men" ? classes.activemenu: classes.inactivemenu}>
      <ListItemButton>
        <ListItemText>
            <Typography variant='body2'>Men</Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
    <Divider />
    <ListItem component={Link} disablePadding to='/woman'   className={path === "/woman" ? classes.activemenu: classes.inactivemenu}>
      <ListItemButton>
        <ListItemText>
            <Typography variant='body2'>Woman</Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
    <Divider />
    <ListItem component={Link} disablePadding to='/conntactus'   className={path === "/conntactus" ? classes.activemenu: classes.inactivemenu}>
      <ListItemButton>
        <ListItemText>
            <Typography variant='body2'>conntact us</Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
    <Divider />
</List>
  </Grid>
 <Grid className={classes.down}>
 <Button size='meduim' className={classes.paybotton} fullWidth variant='contained' color='primary'>Sign up</Button>

 <img src={logo} className={classes.logobottom}  alt="online shoes"/>
 </Grid>
    </Grid>
  );
}
