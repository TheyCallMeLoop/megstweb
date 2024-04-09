import React, { useEffect, useState } from 'react'
import { Nav, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import BaseButton from '../basebutton';
import logo from '../../assets/images/Logo.svg'
import { useSearchParams } from 'react-router-dom';

const  Header =() => {
  let [search, setSearch] = useSearchParams();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handladSerchParams =(paramValue) =>{
    const data = { selected: paramValue}
    setSearch(data)
  }

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    // Show navbar if scrolling to the top
    setVisible(currentScrollPos <= 0 || currentScrollPos < prevScrollPos);

    // Set the previous scroll position
    setPrevScrollPos(currentScrollPos);
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  
  return (
    <Navbar expand="lg" fixed="top"  className={visible ? "header_main" : "header_main navbar-hidden"}>
    <Container fluid>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Brand href="#">
      <Button className='base_btn font_regular text_white m-0' >Log out</Button>
      </Navbar.Brand>
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{  marginLeft: 'auto' , gap: 60}}
          navbarScroll
        >
          <Nav.Link  className='text_dark font_semibold' onClick={()=> handladSerchParams('listing')}>LISTINGS</Nav.Link>
          <Nav.Link  className='text_dark font_semibold' onClick={()=> handladSerchParams('founder')}>FOUNDER</Nav.Link>
          <Nav.Link className='text_dark font_semibold' onClick={()=> handladSerchParams('trust')}  >Trusted us</Nav.Link>
        </Nav>
        <Navbar.Brand href="#">
      <img src={logo} width={60} alt="" />
      </Navbar.Brand>
      </Navbar.Collapse>
      


    </Container>
  </Navbar>
  )
}

export default Header;
