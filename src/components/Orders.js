import React, { useState } from 'react';
import Course from "./Orders";
import { Table } from 'reactstrap';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Delivery=()=>{
    

    return (
      <Table bordered className="my-5">
      <thead >
        <tr style={{backgroundColor:'#2d94d6'}}>
          <th>S.No</th>
          <th>Name</th>
          <th>gender</th>
          <th>Phone No</th>
          <th>Email</th>
          <th>status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Ram</td>
          <td>Male</td>
          <td>8374212283</td>
          <td>ram@gmail.com</td>
          <td>   </td>
          <td>Action</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>Akhil</td>
          <td>Male</td>
          <td>8374212283</td>
          <td>Akhil@gmail.com</td>
          <td>   </td>
          <td>Action</td>
        </tr>
      </tbody>
    </Table>

      
        /*<Container>
          <Row>

        <Col md={2}></Col> 

        <Col md={10}>
      <Nav pills>
        <NavItem>
          <NavLink href="#awaiting" aria-expanded="false">Link</NavLink>
        </NavItem>
        
        <NavItem>
          <NavLink href="#awaiting" aria-expanded="false">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#awaiting" aria-expanded="false">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#awaiting" aria-expanded="false"> Link</NavLink>
        </NavItem>
      </Nav>
      </Col>
      </Row>
        </Container>*/
   
             /* <Table className="text-center bg- primary">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Phone No</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
               
              </Table>*/

          
         
    )
        };

    
   

export default Delivery;