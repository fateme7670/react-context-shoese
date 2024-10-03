import React,{useState,useRef} from 'react'
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Button, Grid, Typography } from '@mui/material'
import Shoppingdetail from '../shopingdetail';
import useStyles from './style'
import { Fade } from '@material-ui/core';
import useOnClickOutside from '../../Hook/useOutsideClick';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export default function Index() {
  const [open, setOpen] = useState(false);
  const classes= useStyles()
  const cart=useRef()
  useOnClickOutside(cart,()=>setOpen(false))
  return (
    <Grid  className={classes.root} ref={cart}>

   
 <div onClick={()=>setOpen(!open)}>
 <IconButton aria-label="cart">
      <StyledBadge badgeContent={1} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
 </div>
 <Fade in={open}>
 <div className={classes.Shoppingdetail}>
  <Shoppingdetail />
  <Shoppingdetail />
  <Shoppingdetail />
 <div className={classes.total}>
<Typography variant='body2'>Total Price :</Typography>
<Typography variant='subtitle2'>50,000$</Typography>
 </div>
 <div className={classes.pay}>
   <Button size='meduim' className={classes.paybotton} fullWidth variant='contained' color='secondary'>Pay</Button>
 </div>
</div>
 </Fade>

    </Grid>
  );
}
