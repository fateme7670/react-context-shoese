import { Button, Typography } from '@material-ui/core';
import { Grid } from '@mui/material';
import React from 'react';
import useStyles from './style'

export default function Item({item}) {
    const classes= useStyles()
  return (
    <Grid direction='row' container className={classes.root}>


 <Grid item lg={6} md={6} xs={5} >
 <img className={classes.sliderimg} src={item.image} alt={item.title}/>

 </Grid>

<Grid item lg={6} md={6} xs={7} className={classes.rightslider}>
<Typography variant='h3'>{item.title}</Typography>
<Typography variant='h6'>{item.subtitle}</Typography>
<Typography variant='subtitle1'>{item.price}</Typography>
</Grid>
<div className={classes.discountDiv}>
<Typography variant='subtitle2'>{item.discount} % discount</Typography>

</div>
<div className={classes.detail}>
<Button size='medium' variant='contained'>Seee More</Button>

</div>

    </Grid>
  );
}
