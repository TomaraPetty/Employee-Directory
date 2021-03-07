import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import fleetwoods from "./fleetwoods.json";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonGroup from "react-bootstrap/Button";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';


class App extends Component {
  state = {
    fleetwoods: fleetwoods,
    result: {},
    search: "",
  };

  guitarPlayers = () => {
    const guitar = fleetwoods.filter(
      (fleetwoods) => fleetwoods.occupation === "Guitar Player"
    );
    this.setState({ fleetwoods: guitar });
  };

  all = () => {
    this.setState({ fleetwoods: fleetwoods });
  };

  currentEmployee = () => {
    const current = fleetwoods.filter(
      (fleetwoods) => fleetwoods.current === true
    );
    this.setState({ fleetwoods: current });
  };

  alphabet = () => {
    const alph = fleetwoods.sort(
      this.compare
    );
    console.log(alph);
    this.setState({ fleetwoods: alph });
  };

  compare = ( a, b ) => {
    const aNameParts = a.name.split(' ');
    const bNameParts = b.name.split(' ')
    if ( aNameParts[1] < bNameParts[1] ){
      return -1;
    }
    if ( aNameParts[1] > bNameParts[1]  ){
      return 1;
    }
    return 0;
  };

  render() {
    return (
      <Wrapper>
        <Container className="justify-content-md-center">
          <Row className="justify-content-md-center">
          <Title>Fleetwood Mac Employee List</Title>
          <ButtonGroup variant="dark" aria-label="Basic example">
            <Button variant="dark" onClick={this.all}>All</Button>
            <Button variant="dark" onClick={this.guitarPlayers}>Guitar Players</Button>
            <Button variant="dark" onClick={this.currentEmployee}>Current Employees</Button>
            <Button variant="dark" onClick={this.alphabet}>Alphabetical</Button>
          </ButtonGroup>
          </Row>
        </Container>
        <Row>
        {this.state.fleetwoods.map((fleetwoods) => (
          <EmployeeCard
            id={fleetwoods.id}
            key={fleetwoods.id}
            name={fleetwoods.name}
            image={fleetwoods.image}
            occupation={fleetwoods.occupation}
            location={fleetwoods.location}
            age={fleetwoods.age}
            current={fleetwoods.current}
          />
        ))}
        </Row>
      </Wrapper>
    );
  }
}

export default App;
