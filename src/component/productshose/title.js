import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style'

export default function Title({title}) {
    const classes= useStyles()

  return (
    <div  className={classes.titleDiv}>
      <Typography  className={classes.title} variant='h6'>{title}</Typography>
    </div>
  );
}
