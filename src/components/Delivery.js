import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Table } from 'reactstrap';
/*import Awaiting from '.components/AllTables/Awaiting';*/
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MdBorderColor  } from "react-icons/md";
const Orders =()=>{
  var NavStyle = {
   
}
    return (
      
    <div>
      
      <Nav pills className="my-5" >
        <NavItem style={NavStyle}>
       
          <NavLink href='#'active>Awaiting</NavLink>
         { /*<Route path="./components/AllTables/Awaiting" component={Awaiting} exact /></Router>*/}
          
        </NavItem>
        <NavItem style={NavStyle}>
          <NavLink href="./AllTables/Pending" active>Pending</NavLink>
        </NavItem>
        <NavItem style={NavStyle}>
          <NavLink href="./AllTables/DelivaryTable"active >Delivered</NavLink>
        </NavItem>
        <NavItem style={NavStyle}>
          <NavLink href="./AllTables/Cancel" active>Canceled Order</NavLink>
        </NavItem>
      </Nav>
      <Table bordered className="my-5">
      <thead style={{ backgroundColor:'#2d94d6'}}>
        <tr>
          <th>S.no</th>
          <th>Date</th>
          <th>OrdersID</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>14/07/2020	</td>
          <td>OD20200002</td>
          <td>Lavanya V</td>
          <td>7997001989</td>
          <td>Visakhapatnam, Andhra Pradesh</td>
          <td><MdBorderColor /></td>
        </tr>
        <tr></tr>
        </tbody>
    </Table>
    </div>
  );
}

export default Orders;