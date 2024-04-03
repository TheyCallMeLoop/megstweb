import React from 'react'
import { Parallax } from 'react-parallax';

import hero  from '../../assets/images/listing.png'

export default function Imgeone() {
  return (
    <Parallax className='image' blur={2} bgImage={hero} strength={200} bgImageStyle={{minHeight:"600px"}}>
   </Parallax>

  )
}
