import React, { useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

import { Input, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const Header = () =>{

const[userDetails, setUserDetails] = useState({
    id: 0,
    cart: 0,
});

  return (
    <Navbar bg="light" expand="lg" className="pb-5 pt-3">
      <Container>
        <Navbar.Brand href="#home">Ennea Apparel Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
                <Input.Search
                    placeholder="Search Products..."
                    type="text"
                    style={{marginTop: "5px"}}
                ></Input.Search>
            <Nav.Link href="#link" className="nav-link">
                <div className="d-flex justify-content-center align-items-center">
                    {
                        userDetails.cart > 0 ? 
                        <div className="d-flex justify-content-center align-items-center">
                          <Badge count={userDetails.cart} size="small" color="#0B9444">
                              <ShoppingCartOutlined style={{ fontSize: 20, color:"green" }}/>
                          </Badge>
                        <span className="ms-3">{userDetails.cart}</span>
                        </div>
                        :
                        <ShoppingCartOutlined style={{ fontSize: 20, color:"green" }}/>
                    }
                    
                </div>
            </Nav.Link>
            <Nav.Link href="#link">
                <span>Account</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;