import React from 'react'
import { Parallax } from 'react-parallax';

import hero  from '../../assets/lanscapImages/1.png'

export default function Imgeone() {
  return (
    <Parallax className='image' blur={0} bgImage={hero} strength={100} bgImageStyle={{minHeight:"600px"}}>
   </Parallax>

  )
}
