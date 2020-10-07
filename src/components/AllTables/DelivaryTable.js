import React from 'react';
import { Table } from 'reactstrap';
import Delivery from '../Orders';

const DelivaryTable = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>S.No</th>
          <th> </th>
          <th>Order ID</th>
          <th>Name</th>
          <th>Order Date</th>
          <th>Delivary Date</th>
          <th>contact</th>
          <th>Delivered By</th>
          <th>Amount </th>
          <th>Payment Mode</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>OD20200001</td>
          <td>Srinija</td>
          <td> 11/07/2020</td>
          <td>16/07/2020</td>
          <td>8309377922</td>
          <td>Ram</td>
          <td>30</td>
          <td>Cash on Delivery</td>
          <td><Button>View</Button></td>
        </tr>
      </tbody>
    </Table>
  );
}

export default DeliveryTable;