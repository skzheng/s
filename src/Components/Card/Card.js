import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div className="card">
        <div className="line" />
        <p className="card-text">{this.props.card}</p>
        <div className="line" />
      </div>
    )
  }
}

export default Card;