import React from 'react'
import founder from '../../assets/images/founder.png'
import { Parallax } from 'react-parallax';

export default function Imgaetow() {
    return (

        <Parallax className='image' blur={2} bgImage={founder} strength={200} bgImageStyle={{minHeight:"600px"}}>
        {/* <div className='founder_section' > */}
            <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', height: '60vh', width: "90%", marginLeft: '5%' }}>
                <h1 className=' text_white font_semibold fs_60'>MEET THE FOUNDER </h1>
            </div >
        {/* </div> */}
        </Parallax>

    )
}
