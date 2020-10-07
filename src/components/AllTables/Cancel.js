import React from 'react';
import { Table } from 'reactstrap';

const Cancel = (props) => {
  return (
    <Table>
      <thead>
        <tr>
        <tr>
          <th>S.No</th>
          <th>Order Id</th>
          <th>Order Date</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Canceled By</th>
          <th>Remark</th>
          <th>Action</th>
        </tr>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>OD20200007</td>
          <td>31/07/2020</td>
          <td>@Home</td>
          <td>9986581812</td>
          <td>Visakhapatnam, Andhra Pradesh</td>
          <td>Narayan </td>
          <td>Cancelled by Narayan M</td>
          <td><Button>View</Button></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Cancel;