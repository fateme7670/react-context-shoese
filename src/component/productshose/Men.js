import React from 'react';
import useStyles from './style'
import Title  from './title';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Item from './item.js';
import s1 from '../../assest/image/s22.png'
import s2 from '../../assest/image/s5.png'
import s3 from '../../assest/image/s3.png'
import s4 from '../../assest/image/s12.png'
import Productshose from './productshose';
import { Grid } from '@material-ui/core';



const data=[
  {id:0,title:'shoes 1',image:s1,price:'20,000$',subtitle:'first',discount:15},
  {id:1,title:'shoes 2',image:s2,price:'20,000$',subtitle:'secound',discount:16},
  {id:2,title:'shoes 3',image:s3,price:'20,000$',subtitle:'third',discount:17},
  {id:3,title:'shoes 4',image:s4,price:'20,000$',subtitle:'fourth',discount:18},
]

export default function Men() {

const classes=useStyles()
  return (
    <div className={classes.menroot}>
    <Title title='Men' />
   <Grid direction='row'  className={classes.Men} >
   {data.map((item)=>(
    <Productshose item={item} />
    ))}
   </Grid>

    {/* <AliceCarousel mouseTracking autoWidth autoHeight controlsStrategy='responsive' disableButtonsControls keyboardNavigation='ArrowLeft' ArrowLeft='fill'>
    {data.map((item)=>(
<Item item={item} />
      ))}
      </AliceCarousel> */}
    </div>
  );
}
