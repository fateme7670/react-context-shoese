import { Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style'

export default function Item({item}) {
	const classes= useStyles()
  return (
	<div>
	  <img src={item.image} alt-={item.title} className={classes.img}/>
	  <Typography variant='h5'>{item.title}</Typography>
	  <Typography variant='subtitle2'>{item.price}</Typography>

	</div>
  );
}
