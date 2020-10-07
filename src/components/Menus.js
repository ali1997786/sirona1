/*import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const Menus = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Tutorial</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <FormControl type="text" placeholder="Search" className="" />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)*/
import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import {Row,Col} from 'react-bootstrap'
import './style.css'
import { MdDashboard ,MdTrain} from "react-icons/md";
import { RiStackLine} from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa"
import { GiConsoleController } from "react-icons/gi";
import { BiLogOutCircle } from "react-icons/bi";

const Menus = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  var cardStyle = {

    padding: '0px'
  }
    return (
<Container fluid>
  <Row>
    <Col md={1}>
     
      <div className="bg-success"> 
                 
                 <Navbar color="faded" light  style={{padding:"0px"}} >
                   <NavbarBrand href="/" className="mr-auto"  style={{padding:"0px",fontSize:"8"}}>DashBoard</NavbarBrand>
                   <NavbarToggler onClick={toggleNavbar} className="mr-2 text-left" style={{padding:"0px"}}/>
                   <Collapse isOpen={!collapsed} navbar>
                     <Nav navbar className="text-left">
                       <NavItem >
                        
                       <MdDashboard style={{display:'inline'}}/> <NavLink href="/DashBoard" action style={{display:'inline'}}>DashBoard</NavLink>                       </NavItem>
                       <NavItem>
                       <RiStackLine /><NavLink href="/Orders" action>Orders</NavLink>
                       </NavItem>
                       <NavItem>
                         <MdTrain/><NavLink  href="/Delivery" action >Delivery staff</NavLink>
                       </NavItem>
                       <NavItem>
                       <FaUserFriends/><NavLink href="/userbase" action >Userbase</NavLink>
                       </NavItem>
                       <NavItem>
                       <GiConsoleController /><NavLink  >Control Panel</NavLink>
                       </NavItem>
                       <NavItem>
                        <BiLogOutCircle /> <NavLink >Logout</NavLink>
                       </NavItem>
                     </Nav>
                     </Collapse>
                   </Navbar>
                   </div>
                 
              
              
     
   </Col>
   </Row>
 </Container>
















    
   /*   <div style={cardStyle}>
   <div className="container-fluid">
     <div className="row"  style={{padding:"0px"}}>
       
               <div className="bg-success">
                 
      <Navbar color="faded" light  style={{padding:"0px"}} >
        <NavbarBrand href="/" className="mr-auto"  style={{padding:"0px"}}>DashBoard</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-5 text-left" style={{padding:"0px"}}/>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="text-left">
            <NavItem>
              <NavLink href="/DashBoard" action>DashBoard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Orders" action>Orders</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/Delivery" action >Delivery staff</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Userbase</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Control Panel</NavLink>
            </NavItem>
            <NavItem>
              <NavLink >Logout</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    </div>
 </div>
  </div> */
  )
}

export default Menus;