import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: []
  }
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
