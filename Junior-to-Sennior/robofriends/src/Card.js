import React, { Component } from 'react';

class Card extends Component {

  render() {

    let {id, name, username, email} = this.props.robot

    return(
      <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-S'>
        <img alt='robot' src='https://robohash.org/test?200x200' />
        <div>
          <h2>{id}</h2>
          <p>{name}</p>
          <p>{username}</p>
          <p>{email}</p>
        </div>
      </div>
    )
  }
}

export default Card;
