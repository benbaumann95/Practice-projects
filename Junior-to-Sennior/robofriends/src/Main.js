import React, { Component } from 'react';
import Card from './Card.js'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return(
      <div>
      {this.props.robots.map((robot) => {
        return <Card
          key={robot.id}
          robot={robot}
        />
      })}
      </div>
    )

  }
}

export default Main;
