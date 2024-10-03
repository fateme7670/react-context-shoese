import React from 'react';
import useStyles from './style'
import Men from './Men';
import Woman from './Woman';
import Lazyload  from 'react-lazyload';
import { Grid } from '@material-ui/core';

export default function Index() {
    const classes= useStyles()

  return (
    <div className={classes.root}>
      <Lazyload height={365}>


    <Grid className={classes.box}>
    <Men />
    </Grid>
    </Lazyload>
    <Lazyload height={365}>
      
   
    <Grid  className={classes.box}>
    <Woman />

    </Grid>
    </Lazyload>
    </div>
  );
}
