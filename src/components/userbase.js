import React, { useState } from 'react';
import Course from "./Orders";
import { Table } from 'reactstrap';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { Button } from 'reactstrap';
const userbase=()=>{
    

    return (
        
      <Table bordered className="my-5">
      <thead >
        <tr style={{backgroundColor:'#2d94d6',width: '85%', padding:'12rem'}}>
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
        <tr style={{width: '85%', padding:'12rem'}}>
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
      )
    };




export default userbase;