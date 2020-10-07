import { colors } from "@material-ui/core";
import React from "react";
import {Card,CardBody,CardText,CardDeck,CardTitle,CardSubtitle,CardImg,CardLink} from "reactstrap";
import {Button , Container,Row,Col, } from 'reactstrap';
import { Table } from 'reactstrap';
import { GiClick } from "react-icons/gi";
import { RiStackLine} from "react-icons/ri";
import { AiOutlineInsertRowRight } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa"
const DashBoard =(props)=> {
    var cardStyle = {
        display: 'block',
        
        transitionDuration: '0.3s',
     
    }
     return(
        <Container>
        <CardDeck className="my-5">
            <div style={{float:'left'}}>
            
            <Card style={cardStyle} className='md-2'>
        <CardBody style={{display: 'flex', backgroundColor:'#2d94d6', width: '200px', padding: '2rem',borderRadius:"5px"}} >
          <CardTitle><CardLink className='text-light '>Total Order</CardLink></CardTitle> <GiClick  style={{width:'2rem',height: '2rem', fill: '#fff'}} />
          <CardSubtitle> 
          </CardSubtitle>
          <CardText></CardText>
         
        </CardBody>
      </Card>
       
        
      
      </div>
      <div>
          <Card style={cardStyle}>
        
        <CardBody  style={{display: 'flex', backgroundColor:'#fbb13c', width: '200px', padding: '2rem',borderRadius:"5px"}} >
          <CardTitle><CardLink className='text-light '>Awaiting Order</CardLink></CardTitle><RiStackLine style={{width:'1rem',height: '1rem', fill: '#fff'}} />
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          
        </CardBody>
      </Card>
      </div>
      <div>
          <Card style={cardStyle}>
        
        <CardBody style={{display: 'flex', backgroundColor:'#ff6663', width: '180px', padding: '2rem',borderRadius:"5px"}} >
          <CardTitle><CardLink className='text-light '>pending </CardLink></CardTitle><AiOutlineInsertRowRight style={{fill: '#fff'}} />
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          
        </CardBody>
      </Card></div>
      <div>
          <Card style={cardStyle}>
        
        <CardBody  style={{display: 'flex', backgroundColor:'#83bb40', width: '180px', padding: '2rem',borderRadius:"5px"}} >
          <CardTitle><CardLink className='text-light '>Users</CardLink></CardTitle><FaUserFriends style={{width:'2rem',height: '2rem', fill: '#fff'}} />
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          
        </CardBody>
      </Card></div>
      
    </CardDeck>
    </Container>
     ); 
     /*<Table>
     <thead>
       <tr className="bg-primary">
         <th>S.no.</th>
         <th>Order ID</th>
         <th>Expected Delivery</th>
         <th>Name</th>
         <th>Contact</th>
         <th>Order Date</th>
         <th>Delivery BY</th>
         <th>Address</th>
         <th>Amount</th>
         <th>Order</th>    
       </tr>
     </thead>
     
   </Table>*/
     
 };
 export default DashBoard;
 