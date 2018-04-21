import React from 'react';

class Card extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return (
      <div className="card">
        <h1 className="card-text">{this.props.card.text}</h1>
      </div>
    )
  }
}

export default Card;