import { Grid, Typography,Button } from '@material-ui/core';
import React from 'react';
import useStyles from './style'


export default function Index({title,img}) {
    const classes= useStyles()
  return (
  <Grid direction='row' container className={classes.root}>
<img className={classes.image} src={img} alt='' />
<Typography variant='h6' className={classes.title}>{title}</Typography>
<div className={classes.detail}>
<Button size='small' variant='outlined'>Seee More</Button>

</div>
  </Grid>
  );
}
