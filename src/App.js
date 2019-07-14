import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: []
  }
}
componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users));
}

  render() {
    return (
      <div className="App">
        <h2>Hello World!</h2>
      </div>
    );
  }
}

export default App;
