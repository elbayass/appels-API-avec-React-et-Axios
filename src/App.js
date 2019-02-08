import React from 'react';
import axios from 'axios';
import './App.css';
import './index.css'

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })

  }

  render() {

    return (
      <div className="container_user">
        { this.state.persons.map(person => 
          <div className="container_cart">
            <img src={person.avatar_url} alt="profile" className="profile" />
              <div className='info_cart'>
                <h3>{person.login}</h3>
                <h6> followers : {person.followers_url}</h6>
                <h6> public repos : {person.repos_url}</h6>
              </div >
          </div>
        )}
      </div>
    )
  }
}


