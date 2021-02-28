import './App.css';
import { Component } from 'react';

import SignUp from './components/SignUp';

class App extends Component {

  state = {
    user: {}
  }

  signUp = user => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user:{
          username: user.username,
          password: user.password,
          first_name: user.firstName,
          last_name: user.lastName
        }
      })
    })
    .then(response => response.json())
    .then(user => this.setState({ user: user }) )
  }

  render() {
    return (
      <div className="App">
        {this.state.user.username ? <h2>Welcome {this.state.user.first_name}</h2> : 
          <SignUp signUp={this.signUp} />
        }
      </div>
    );
  } 
}

export default App;
