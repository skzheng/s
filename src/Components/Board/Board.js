import React from 'react';
import './Board.css';
import Card from '../Card/Card';
import { randomWords } from '../../Helpers/helpers';

class Board extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      words : []
    }
  }

  componentDidMount(){
    this.setState({ words : randomWords(20)});
  }

  render(){
    return (
      <div className="board">
        {
          this.state.words.map((item,i) => {
            return <Card card={item} key={i}/>
          })
        }
      </div>
    )
  }

}

export default Board;