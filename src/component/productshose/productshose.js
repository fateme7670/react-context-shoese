import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './style'

export default function Productshose({item}) {
    const classes= useStyles()
  return (
      
    <Grid direction='column' md={3} xs={12} sm={12} item container className={classes.Productshose}>
<Grid>
<img src={item.image} alt-={item.subtitle} className={classes.img}/>
	  <Typography variant='subtitle1'>{item.subtitle}</Typography>
	  <Typography variant='subtitle2'>{item.price}</Typography>
</Grid>

    </Grid>
  )
}
