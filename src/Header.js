import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
function Header() {
  return (
    <div>
       <Navbar bg="danger" variant="danger">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="mr-bolat-mascot-min.png "
              width="55"
              height="55"
              className="d-inline-block align-top"
            />{' '}
            <strong className='p-1 mt-5' style={{color:'white'}}>Food Court</strong>
          </Navbar.Brand>
        </Container>
      </Navbar> 
    </div>
  )
}

export default Header