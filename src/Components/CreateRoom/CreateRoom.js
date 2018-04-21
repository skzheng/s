import React from 'react';
import fire from '../../Firebase/firebase';


class CreateRoom extends React.Component {
  constructor(){
    super()
    this.state = {

    }
  }

  handleCreateRoom(){
    fire.database().ref('rooms')
  }

  render(){
    return (
      <div className="create-room">
        <input onChange={} placeholder="Name"></input>



      </div>
    )
  }
}

export default CreateRoom;