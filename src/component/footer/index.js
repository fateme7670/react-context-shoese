import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './style'
import Title from './title';

export default function Index() {
  const classes= useStyles()
  return (
    <div  className={classes.root}>
    <Container>
    <Grid container xs={12} lg={12} md={12}>
<Grid md={4} xs={12} lg={4}>
<Title title='About us' />
<Typography variant='body1' className={classes.txt}>
Online Shop
</Typography>
<Typography variant='body1' className={classes.txt}>
Online Shop
</Typography>
<Typography variant='body1' className={classes.txt}>
Online Shop
</Typography>
</Grid>
<Grid md={4} xs={12} lg={4}>
<Title title='Contact us' />
<Typography variant='body1' className={classes.txt}>
+0900...
</Typography>
<Typography variant='body1' className={classes.txt}>
+0900...
</Typography>
<Typography variant='body1' className={classes.txt}>
+0900...
</Typography>
</Grid>
<Grid md={4} xs={12} lg={4}>
<Title title='News' />
<Typography variant='body1' className={classes.txt}>
Men
</Typography>
<Typography variant='body1' className={classes.txt}>
Woman
</Typography>
<Typography variant='body1' className={classes.txt}>
Kids
</Typography>
</Grid>
    </Grid>
    </Container>
    </div>

  );
}
