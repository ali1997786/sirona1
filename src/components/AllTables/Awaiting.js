import React from 'react';
import { Table } from 'reactstrap';

const Awaiting = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Date</th>
          <th>Order ID</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>14/07/2020</td>
          <td>OD20200002</td>
          <td>Lavanya </td>
          <td>7997001989</td>
          <td> Visakhapatnam, Andhra Pradesh 530004</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>14/07/2020</td>
          <td>OD20200002</td>
          <td>Lavanya </td>
          <td>7997001989</td>
          <td> Visakhapatnam, Andhra Pradesh 530004</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>14/07/2020</td>
          <td>OD20200002</td>
          <td>Lavanya </td>
          <td>7997001989</td>
          <td> Visakhapatnam, Andhra Pradesh 530004</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Awaiting;