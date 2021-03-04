import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import fleetwoods from "./fleetwoods.json";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonGroup from "react-bootstrap/Button";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class App extends Component {
  state = {
    fleetwoods: fleetwoods,
    result: {},
    search: "",
  };

  guitarPlayers = () => {
    const guitar = this.state.fleetwoods.filter(
      (fleetwoods) => fleetwoods.occupation === "Guitar Player"
    );
    this.setState({ fleetwoods: guitar });
  };

  all = () => {
    this.setState({ fleetwoods: fleetwoods });
  };

  currentEmployee = () => {
    const current = this.state.fleetwoods.filter(
      (fleetwoods) => fleetwoods.current === true
    );
    this.setState({ fleetwoods: current });
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <Title>Fleetwood Mac Employee List</Title>
          <ButtonGroup className="center" size="lg" className="mb-2">
            <Button onClick={this.all}>All</Button>
            <Button onClick={this.guitarPlayers}>Guitar Players</Button>
            <Button onClick={this.currentEmployee}>Current Employees</Button>
          </ButtonGroup>
        </Container>
        {this.state.fleetwoods.map((fleetwoods) => (
          <EmployeeCard
            removeFleetwood={this.removeFleetwood}
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
      </Wrapper>
    );
  }
}

export default App;
