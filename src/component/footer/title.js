import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style'

export default function Title({title}) {
    const classes= useStyles()
  return (
    <div className={classes.titleroot}>
      <Typography className={classes.title} variant='h5'>
             {title}
      </Typography>
    </div>
  );
}
