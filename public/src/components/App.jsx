import React from 'react';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: []
    };
    this.getRecipe = this.getRecipe.bind(this)
  };
  getRecipe() {
    Axios.get('http://127.0.0.1:3100/recipe')
    .then((res) => {
      console.log('this is the response', res.data);
    })

  }
  render() {
    return (
      <div>
        <h1>Instructions</h1>
        <h2>good boy</h2>
        <button onClick={this.getRecipe}>click me</button>
      </div>
    )
  }
}
export default App;
