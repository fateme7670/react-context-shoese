import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './item';
import s1 from '../../assest/image/s22.png'
import s2 from '../../assest/image/s5.png'
import s3 from '../../assest/image/s3.png'
import s4 from '../../assest/image/s12.png'
 import useStyles from './style'

export default function Index() {
    const classes= useStyles()  
    const data=[
        {id:0,title:'shoes 1',image:s1,price:'20,000$',subtitle:'first',discount:15},
        {id:1,title:'shoes 2',image:s2,price:'20,000$',subtitle:'secound',discount:16},
        {id:2,title:'shoes 3',image:s3,price:'20,000$',subtitle:'third',discount:17},
        {id:3,title:'shoes 4',image:s4,price:'20,000$',subtitle:'fourth',discount:18},
    ]
  return (
    <Carousel animation='slide'  fullHeightHover>
      {data.map((item)=>(
<Item item={item} />
      ))}
    </Carousel>
  );
}
