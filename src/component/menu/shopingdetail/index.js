import React from 'react'
import useStyles  from './style'
import productimage from '../../../assest/image/S1.png'
import { Typography } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Shoppingdetail() {
  const classes=useStyles()
  return (
    <div item container md={12} xs={12} className={classes.root}>
  

<div className={classes.left}>
<Typography variant='h6' className={classes.title}>Adidass</Typography>
<div className={classes.delete}>
<DeleteForeverIcon  />
<Typography variant='subtitle2'>3,000$</Typography>

</div>
</div>
<div className={classes.right}>
<img src={productimage} className={classes.productimage} alt="" />
</div>
    </div>
  );
}
