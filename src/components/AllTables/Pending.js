import React from 'react';
import { Table } from 'reactstrap';
import { MdDashboard ,MdTrain} from "react-icons/md";
const Pending = (props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>S.No</th>
          <th>Delivary Date</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Adrees</th>
          <th>Assigned</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>20/07/2020</td>
          <td>OD20200004</td>
          <td>Srinija</td>
          <td>7981015355</td>
          <td>Madhavadhara, Visakhapatnam, Andhra Pradesh </td>
          <td>Ram</td>
          <td><MdBorderColor /></td>
          
        </tr>
        <tr>
        <th scope="row">1</th>
          <td>20/07/2020</td>
          <td>OD20200004</td>
          <td>Srinija</td>
          <td>7981015355</td>
          <td>Madhavadhara, Visakhapatnam, Andhra Pradesh </td>
          <td>Ram</td>
          <td><MdBorderColor /></td>
        </tr>
      
      </tbody>
    </Table>
  );
}

export default Pending;