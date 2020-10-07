import React, { useState } from 'react';


const Table = (props) => {
    return(

<Table striped bordered hover>
      <thead>
        <tr>
          <th>S.No</th>
          <th>OrderID</th>
          <th>Expected DElivery</th>
          <th>Name</th>
          <th>contact</th>
          <th>Order date</th>
          <th>Delivered By</th>
          <th>Address</th>
          <th>Amount</th>
          <th>Order</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>OD20200004</td>
          <td>20/07/2020</td>
          <td>Srinija	</td>
          <td>7981015355</td>
          <td>16/07/2020</td>
          <td>Ram</td>
          <td>Visakhapatnam</td>
          <td><button>View</button></td>

        </tr>
        
      </tbody>
    </Table>


    )
};
export default Table;