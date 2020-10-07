import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Row, Col } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Delivery from "./components/Orders";
import Orders from "./components/Delivery";
import {
  Card,
  CardBody,
  CardText,
  CardDeck,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import Menus from "./components/Menus";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import { green } from "@material-ui/core/colors";
import Table from "./components/Table";
import userbase from "./components/userbase";
function App() {
  return (
    <div>
      <Router>
        <div className="wrapper">
          <Row>
            <Col md={2} style={{ backgroundColor: "green" }}>
              <Menus />
            </Col>

            <Col md={10}>
             {/* {<DashBoard />}*/}

              <Route path="/DashBoard" component={DashBoard} exact />
              <Route path="/Orders" component={Orders} exact />
              <Route path="/Delivery" component={Delivery} exact />
              <Route path="/userbase" component={userbase} exact />
              
            </Col>
          </Row>
        </div>
      </Router>
    </div>
  );
}

export default App;
