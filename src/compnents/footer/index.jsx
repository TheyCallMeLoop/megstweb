import React from 'react'
import { Col, Row } from 'react-bootstrap'
import logo from '../../assets/images/Logo.svg'

import {Facebook, Twitter, Linkedin , Instagram} from 'react-feather'






export default function footer() {
  return (

    
     <>
 <footer class="footer-sec">
  <div class="main">
    
    
    <div class="logo row">
      <div class="footer-header">
        <img width={100} src={logo} alt="" />
      </div>
      <div class="logo-des">
        <p className='text_white font_regular'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
        
        {/* <a href="#"  class="btn-know">Know More</a> */}
      </div>
    </div>
    
    
    
    <div class="office row">
      <div class="footer-header">
        <h3 className='text_white font_medium'>Office</h3>
      </div>
      <div class="office-des text_white font_regular">
        <p className='text_white font_regular'>here are <br /> many variations of passages <br /> of Lorem Ipsum available</p>
        
       <a href="#" className='text_white font_regular'>abcd.haker2003@gmail.com</a>
        
        <p class = "num">+91-9999999999</p>
      </div>
    </div>
    
    
    <div class="link row">
      <div class="footer-header">
        <h3 className='text_white font_medium'>Links</h3>
      </div>
      
      <div class="link-des">
        <a href="#" class="footer-links text_white font_regular">LISTINGS</a>
        <a href="#" class="footer-links text_white font_regular">FOUNDER</a>
        <a href="#" class="footer-links text_white font_regular">Trusted us</a>
        {/* <a href="#" class="footer-links text_white font_regular">Galary</a> */}
        {/* <a href="#" class="footer-links text_white font_regular">Contact</a> */}
      </div>
      
    </div>
    
    
    <div class="newsletter row">
      <div class="footer-header">
        <h3 className='font_medium text_white'>About us</h3>
      </div>
      <div class="newsletter-des">
        <div class="icons">
          <a href="#"><Facebook/></a>
          <a href="#"><Twitter/></a>
          <a href="#"><Linkedin/></a>
          <a href="#"><Instagram/></a>
          
        </div>
      </div>
    </div>
  </div>
</footer>
     </>

    // <div className='footer'>
    //    {/* <Row    className='main_container px-4' style={{padding: 45}}> 
    //     <Col  className='flex_center' style={{ flexDirection: 'column', paddingBottom: 20 }}>
    //       <h3 className='text_white font_medium'>Listing</h3>
    //       <p className='text_white font_regular mt-2' >Le Lorem Ipsum est un <br /> faux texte utilisé.</p>
    //     </Col>
    //     <Col  className='flex_center' style={{ flexDirection: 'column' ,  paddingBottom: 20}}>
    //       <h3 className='text_white font_medium '>About</h3>
    //       <p className='text_white font_regular mt-2' >Le Lorem Ipsum est un faux <br /> texte utilisé.</p>
    //     </Col>
    //     <Col  className='flex_center' style={{ flexDirection: 'column',  paddingBottom: 20 }}>
    //       <h3 className='text_white font_medium'>Contact </h3>
    //       <p className='text_white font_regular mt-2' >Le Lorem Ipsum est un faux  <br />texte utilisé.</p>
    //     </Col>
    //     <Col  className='flex_center' style={{ flexDirection: 'column',  paddingBottom: 20 }}>
    //       <h3 className='text_white font_medium'>Where are we</h3>
    //       <p className='text_white font_regular mt-2' >Le Lorem Ipsum est un faux <br /> texte utilisé.</p>
    //     </Col>
    //   </Row> */}

    // </div>
  )
}
