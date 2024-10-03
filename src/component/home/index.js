import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Slider from '../slider'
import useStyles from './style'
import Brand from '../category'
import s1 from '../../assest/image/s24.png'
import s2 from '../../assest/image/s25.png'
import s3 from '../../assest/image/s26.png'
import Product from '../productshose'
import Lazyload  from 'react-lazyload';

export default function Index() {
  const classes= useStyles()
  return (
    <Container maxWidth="lg">
<Lazyload height={400}>
<Grid className={classes.topGrid}  container direction='row'>

<Grid className={classes.slider} item lg={7} md={7} xs={12}>
<Slider />
</Grid>

<Grid  className={classes.category} item lg={5} md={5} xs={12}>
<Brand title='shose 1' img={s1} />
<Brand title='shose 2' img={s2} />
<Brand title='shose 3' img={s3} />

</Grid>
</Grid>
</Lazyload>
<Grid className={classes.topGrid}  container direction='row'>
<Grid container item>
<Product />
</Grid>
</Grid>


    </Container>
  );
}
